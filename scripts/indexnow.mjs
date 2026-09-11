/**
 * Tells Bing (and the other IndexNow engines: Yandex, Seznam, Naver) that pages
 * changed, so they recrawl now instead of serving a stale copy for days. ChatGPT
 * search leans heavily on Bing's index, so this matters for AI answers too.
 *
 *   npm run indexnow                                  # every URL in the live sitemap
 *   npm run indexnow -- /blog/some-post /services     # just these paths
 *
 * Run it AFTER a deploy is live: the engines verify ownership by fetching the key
 * file from the site, and they recrawl what is live at that moment.
 */
const SITE_URL = "https://www.nirvixtech.com";
// Must match public/<KEY>.txt, which must contain exactly this key.
const KEY = "7e903ab4f0c4d15cfb10b42e8bc499fa";
const ENDPOINT = "https://api.indexnow.org/indexnow";

async function sitemapUrls() {
  const res = await fetch(`${SITE_URL}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap.xml returned ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function main() {
  const keyRes = await fetch(`${SITE_URL}/${KEY}.txt`);
  if (!keyRes.ok || (await keyRes.text()).trim() !== KEY) {
    throw new Error(
      `Key file ${SITE_URL}/${KEY}.txt is not live yet — deploy first, then rerun.`
    );
  }

  const paths = process.argv.slice(2);
  const urlList = paths.length
    ? paths.map((p) => new URL(p, SITE_URL).toString())
    : await sitemapUrls();

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(SITE_URL).host,
      key: KEY,
      keyLocation: `${SITE_URL}/${KEY}.txt`,
      urlList,
    }),
  });

  // 200 = accepted, 202 = accepted but key validation still pending.
  if (res.status !== 200 && res.status !== 202) {
    throw new Error(`IndexNow returned ${res.status}: ${await res.text()}`);
  }
  console.log(`IndexNow accepted ${urlList.length} URL(s) (HTTP ${res.status}).`);
  for (const url of urlList) console.log(`  ${url}`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
