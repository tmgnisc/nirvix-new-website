"use client";

import { motion } from "framer-motion";
import OrbitingCirclesGlobe from "@/components/ui/orbiting-circles-02";

export function HeroOrbitContent() {
  return (
    <div className="relative flex w-full flex-col overflow-hidden bg-gradient-to-br from-background via-background/95 to-muted/10">
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-pulse" />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-24 left-1/2 z-20 -translate-x-1/2 px-6 text-center text-5xl font-black tracking-tighter text-brand select-none sm:top-28 md:text-7xl lg:top-32 lg:text-8xl"
      >
        IT Company in Nepal
      </motion.h1>

      <div className="relative z-10 mt-24 flex min-h-[420px] items-end justify-center sm:mt-28 sm:min-h-[560px] lg:mt-32 lg:min-h-[720px]">
        <OrbitingCirclesGlobe />
      </div>
    </div>
  );
}
