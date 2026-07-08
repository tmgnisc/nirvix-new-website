"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useSmoothScroll } from "@/components/smooth-scroll";
import { AnimatedText } from "@/components/ui/animated-underline-text-one";

const MIN_VISIBLE_MS = 1400;
const MAX_VISIBLE_MS = 2600;
const EXIT_MS = 850;

export function Loader({ onReady }: { onReady?: () => void }) {
  const { lock } = useSmoothScroll();
  const [exiting, setExiting] = useState(false);
  const [gone, setGone] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    lock(true);
    const minVisible = reduceMotion ? 200 : MIN_VISIBLE_MS;
    const maxVisible = reduceMotion ? 200 : MAX_VISIBLE_MS;
    const exitMs = reduceMotion ? 0 : EXIT_MS;

    let done = false;
    const startTime = Date.now();

    function finish() {
      if (done) return;
      done = true;
      onReady?.();
      lock(false);
      setExiting(true);
      setTimeout(() => setGone(true), exitMs + 20);
    }

    function onLoadOrTimeout() {
      const elapsed = Date.now() - startTime;
      setTimeout(finish, Math.max(0, minVisible - elapsed));
    }

    if (document.readyState === "complete") {
      onLoadOrTimeout();
    } else {
      window.addEventListener("load", onLoadOrTimeout);
      setTimeout(finish, maxVisible);
    }

    return () => window.removeEventListener("load", onLoadOrTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (gone) return null;

  return (
    <motion.div
      id="site-loader"
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-8 bg-brand-deep text-white"
      animate={{ y: exiting ? "-105%" : "0%" }}
      transition={{ duration: reduceMotion ? 0 : EXIT_MS / 1000, ease: [0.65, 0, 0.35, 1] }}
    >
      <AnimatedText
        text="Namaste World!"
        textClassName="text-5xl font-bold mb-2 text-white"
        underlinePath="M 0,10 Q 75,0 150,10 Q 225,20 300,10"
        underlineHoverPath="M 0,10 Q 75,20 150,10 Q 225,0 300,10"
        underlineDuration={1.5}
        underlineClassName="text-white"
      />
      <div className="h-px w-40 overflow-hidden rounded-full bg-white/20">
        <motion.div
          className="h-full w-full origin-left bg-white"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            delay: reduceMotion ? 0 : 0.12,
            duration: reduceMotion ? 0 : (MIN_VISIBLE_MS - 120) / 1000,
            ease: [0.65, 0, 0.35, 1],
          }}
        />
      </div>
    </motion.div>
  );
}
