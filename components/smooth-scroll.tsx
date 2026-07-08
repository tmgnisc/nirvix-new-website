"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";

interface SmoothScrollContextValue {
  lenis: Lenis | null;
  lock: (locked: boolean) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  lenis: null,
  lock: () => {},
});

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true });
    lenisRef.current = lenis;
    setReady(true);

    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }
    let frame = requestAnimationFrame(raf);

    window.scrollTo(0, 0);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  function lock(locked: boolean) {
    if (!lenisRef.current) return;
    if (locked) {
      lenisRef.current.stop();
      document.documentElement.classList.add("scroll-locked");
    } else {
      lenisRef.current.start();
      document.documentElement.classList.remove("scroll-locked");
    }
  }

  return (
    <SmoothScrollContext.Provider value={{ lenis: ready ? lenisRef.current : null, lock }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
