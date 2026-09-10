/**
 * Captures the laptop + phone screenshots used on /projects.
 *
 *   node scripts/capture-project-shots.mjs           # only missing shots
 *   FORCE=1 node scripts/capture-project-shots.mjs   # recapture everything
 *
 * Drives a headless Chrome over the DevTools Protocol (rather than
 * `chrome --screenshot`) so we can hide cookie-consent overlays before the shot —
 * they otherwise cover the hero on most client sites. Writes optimised WebP
 * straight into public/projects/.
 */
import { readFile, mkdir, access, stat } from "node:fs/promises";
import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";
import path from "node:path";
import os from "node:os";
import sharp from "sharp";

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, "public", "projects");
const PORT = Number(process.env.CDP_PORT ?? 9222);
const FORCE = Boolean(process.env.FORCE);
const SETTLE_MS = Number(process.env.SETTLE_MS ?? 6000);

const VIEWPORTS = {
  desktop: { width: 1440, height: 900, mobile: false, scale: 2, outWidth: 1200 },
  mobile: { width: 390, height: 844, mobile: true, scale: 3, outWidth: 480 },
};

const DESKTOP_UA =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36";
const MOBILE_UA =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1";

/**
 * Runs in the page before anything else. Kills the consent overlays that would
 * otherwise sit on top of every hero, and freezes animations so sliders don't get
 * caught mid-transition.
 */
const PAGE_PREP = `
(() => {
  const css = \`
    /* Known consent platforms */
    .cky-consent-container,.cky-overlay,.cky-modal,
    #cookie-law-info-bar,#cookie-law-info-again,.cli-modal,.cli-barmodal,
    #moove_gdpr_cookie_info_bar,.moove-gdpr-dark-scheme,
    .cmplz-cookiebanner,.cmplz-blocked-content-notice,
    #onetrust-consent-sdk,#onetrust-banner-sdk,.onetrust-pc-dark-filter,
    #CybotCookiebotDialog,#CybotCookiebotDialogBodyUnderlay,
    #cookiescript_injected,#cookieConsent,#cookie-notice,#cookie-banner,
    .cookie-consent,.cookie-notice,.cookie-banner,.cookies-popup,
    .gdpr-banner,.consent-banner,.termly-styles-root,
    /* Generic newsletter / promo interrupters */
    .pum-overlay,.sgpb-popup-overlay,.mfp-bg,.mfp-wrap {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      pointer-events: none !important;
    }
    html, body { overflow: auto !important; }
    /* Stop carousels/counters mid-flight */
    *, *::before, *::after {
      animation-duration: 0s !important;
      animation-delay: 0s !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
    }
  \`;
  const apply = () => {
    if (!document.head) return;
    if (document.getElementById('__shot_prep')) return;
    const style = document.createElement('style');
    style.id = '__shot_prep';
    style.textContent = css;
    document.head.appendChild(style);
  };
  apply();
  document.addEventListener('DOMContentLoaded', apply);
})();
`;

/**
 * Walks the page top to bottom so lazy-loaded heroes and background images actually
 * fetch, then returns to the top. Without this, several client sites screenshot as a
 * bare header over white space.
 */
const PAGE_SCROLL = `
(async () => {
  const step = window.innerHeight * 0.8;
  const max = Math.min(document.body.scrollHeight, window.innerHeight * 6);
  for (let y = 0; y < max; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 220));
  }
  window.scrollTo(0, 0);
  // Force anything still marked lazy to load now.
  for (const img of Array.from(document.images)) {
    img.loading = "eager";
    if (img.dataset.src && !img.src) img.src = img.dataset.src;
  }
  await new Promise((r) => setTimeout(r, 400));
  return document.images.length;
})();
`;

/**
 * Second pass, after load: anything still pinned over the viewport that reads like a
 * consent/subscribe interrupter gets removed. Selector lists never cover every theme.
 */
const PAGE_CLEANUP = `
(() => {
  const WORDS = /(cookie|consent|gdpr|privacy policy|accept all|we use cookies|subscribe|newsletter)/i;
  const vh = window.innerHeight, vw = window.innerWidth;
  for (const el of Array.from(document.body.querySelectorAll('*'))) {
    const cs = getComputedStyle(el);
    if (cs.position !== 'fixed' && cs.position !== 'sticky') continue;
    const r = el.getBoundingClientRect();
    if (r.width < vw * 0.25 && r.height < vh * 0.25) continue;   // small widgets are fine
    if (r.width === 0 || r.height === 0) continue;
    const text = (el.innerText || '').slice(0, 600);
    if (!WORDS.test(text)) continue;
    if (el.querySelector('nav') && r.height < vh * 0.2) continue; // don't nuke the header
    el.remove();
  }
  window.scrollTo(0, 0);
  return document.title || '';
})();
`;

let msgId = 0;

function cdp(ws, method, params = {}, sessionId) {
  const id = ++msgId;
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`${method} timed out`)), 45000);
    const onMessage = (event) => {
      let data;
      try {
        data = JSON.parse(event.data);
      } catch {
        return;
      }
      if (data.id !== id) return;
      clearTimeout(timer);
      ws.removeEventListener("message", onMessage);
      if (data.error) reject(new Error(`${method}: ${data.error.message}`));
      else resolve(data.result);
    };
    ws.addEventListener("message", onMessage);
    ws.send(JSON.stringify({ id, method, params, sessionId }));
  });
}

function openSocket(url) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(url);
    ws.addEventListener("open", () => resolve(ws), { once: true });
    ws.addEventListener("error", () => reject(new Error(`socket failed: ${url}`)), { once: true });
  });
}

async function launchChrome() {
  const userDataDir = path.join(os.tmpdir(), `nirvix-shots-${Date.now()}`);
  const child = spawn(
    process.env.CHROME_BIN ?? "google-chrome-stable",
    [
      "--headless=new",
      `--remote-debugging-port=${PORT}`,
      `--user-data-dir=${userDataDir}`,
      "--disable-gpu",
      "--no-sandbox",
      "--hide-scrollbars",
      "--mute-audio",
      "--no-first-run",
      "--disable-extensions",
      "--disable-background-timer-throttling",
      "--window-size=1440,900",
      "about:blank",
    ],
    { stdio: "ignore" }
  );

  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      if (res.ok) return child;
    } catch {
      /* not up yet */
    }
    await delay(500);
  }
  child.kill();
  throw new Error("Chrome did not expose a debugging port");
}

async function capture(browserWs, url, kind) {
  const vp = VIEWPORTS[kind];
  const { targetId } = await cdp(browserWs, "Target.createTarget", { url: "about:blank" });
  const { sessionId } = await cdp(browserWs, "Target.attachToTarget", { targetId, flatten: true });

  try {
    await cdp(browserWs, "Page.enable", {}, sessionId);
    await cdp(browserWs, "Network.enable", {}, sessionId);
    await cdp(
      browserWs,
      "Network.setUserAgentOverride",
      { userAgent: kind === "mobile" ? MOBILE_UA : DESKTOP_UA },
      sessionId
    );
    await cdp(
      browserWs,
      "Emulation.setDeviceMetricsOverride",
      {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: vp.scale,
        mobile: vp.mobile,
        screenWidth: vp.width,
        screenHeight: vp.height,
      },
      sessionId
    );
    await cdp(
      browserWs,
      "Page.addScriptToEvaluateOnNewDocument",
      { source: PAGE_PREP },
      sessionId
    );

    const loaded = new Promise((resolve) => {
      const onMessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.sessionId === sessionId && data.method === "Page.loadEventFired") {
          browserWs.removeEventListener("message", onMessage);
          resolve();
        }
      };
      browserWs.addEventListener("message", onMessage);
      setTimeout(() => {
        browserWs.removeEventListener("message", onMessage);
        resolve();
      }, 30000);
    });

    await cdp(browserWs, "Page.navigate", { url }, sessionId);
    await loaded;
    // Let webfonts and hero sliders settle, then force lazy content to load.
    await delay(SETTLE_MS);
    await cdp(
      browserWs,
      "Runtime.evaluate",
      { expression: PAGE_SCROLL, awaitPromise: true, returnByValue: true },
      sessionId
    ).catch(() => {});
    await cdp(
      browserWs,
      "Runtime.evaluate",
      { expression: PAGE_CLEANUP, returnByValue: true },
      sessionId
    );
    // Settle again after the scroll so anything mid-fade finishes.
    await delay(2000);

    const { data } = await cdp(
      browserWs,
      "Page.captureScreenshot",
      { format: "png", captureBeyondViewport: false, optimizeForSpeed: false },
      sessionId
    );
    return Buffer.from(data, "base64");
  } finally {
    await cdp(browserWs, "Target.closeTarget", { targetId }).catch(() => {});
  }
}

async function exists(file) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

// --- main -------------------------------------------------------------------

const src = await readFile(path.join(ROOT, "lib", "projects-data.ts"), "utf8");
const slugs = [...src.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]);
const urls = [...src.matchAll(/url: "([^"]+)"/g)].map((m) => m[1]);
const targets = slugs.map((slug, i) => ({ slug, url: urls[i] }));

const only = process.argv.slice(2);
const queue = only.length ? targets.filter((t) => only.includes(t.slug)) : targets;

await mkdir(OUT_DIR, { recursive: true });

const chrome = await launchChrome();
const { webSocketDebuggerUrl } = await (await fetch(`http://127.0.0.1:${PORT}/json/version`)).json();
const browserWs = await openSocket(webSocketDebuggerUrl);

const failures = [];
for (const { slug, url } of queue) {
  for (const kind of ["desktop", "mobile"]) {
    const out = path.join(OUT_DIR, `${slug}-${kind}.webp`);
    if (!FORCE && (await exists(out))) {
      console.log(`skip  ${slug}-${kind}`);
      continue;
    }
    try {
      const png = await capture(browserWs, url, kind);
      await sharp(png)
        .resize({ width: VIEWPORTS[kind].outWidth, withoutEnlargement: true })
        .webp({ quality: 78 })
        .toFile(out);
      const { size } = await stat(out);
      console.log(`ok    ${slug}-${kind} (${Math.round(size / 1024)}KB)`);
    } catch (error) {
      console.log(`FAIL  ${slug}-${kind}: ${error.message}`);
      failures.push(`${slug}-${kind}`);
    }
  }
}

browserWs.close();
chrome.kill();

if (failures.length) {
  console.log(`\n${failures.length} failed: ${failures.join(", ")}`);
}
console.log("CAPTURE_RUN_COMPLETE");
