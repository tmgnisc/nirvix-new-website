"use client";

import OrbitingCirclesGlobe from "@/components/ui/orbiting-circles-02";

export function HeroOrbitContent() {
  return (
    <div className="relative flex w-full flex-col overflow-hidden bg-gradient-to-br from-background via-background/95 to-muted/10">
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-pulse" />

      <div className="nirvix-hero-heading absolute top-20 left-1/2 z-20 w-full -translate-x-1/2 px-6 text-center sm:top-22 lg:top-24">
        <h1 className="mx-auto max-w-5xl text-4xl font-black tracking-tighter text-brand select-none sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="block">Software Development</span>
          <span className="block">Company in Nepal</span>
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-ink-soft sm:mt-4 sm:max-w-xl sm:text-base">
          Nirvix Technology is a software development company in Nepal, based in Lalitpur, Kathmandu
          — building custom websites, mobile apps, and AI-powered software for businesses across
          Nepal and worldwide.
        </p>
      </div>

      <div className="relative z-10 mt-24 flex min-h-[420px] items-end justify-center sm:mt-28 sm:min-h-[560px] lg:mt-32 lg:min-h-[720px]">
        <OrbitingCirclesGlobe />
      </div>
    </div>
  );
}
