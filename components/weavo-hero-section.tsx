"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Reveal, StackedLines } from "@/components/reveal";
import { weavoStats, WEAVO_APP_URL } from "@/lib/weavo-data";

export function WeavoHeroSection({
  onOpenContact,
}: {
  onOpenContact?: () => void;
}) {
  return (
    <div className="relative overflow-hidden bg-sky-wash pt-28 pb-16 sm:pt-36 sm:pb-24">
      <SiteHeader onOpenContact={onOpenContact} />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-brand-light/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center sm:px-8">
        <Reveal>
          <div className="mx-auto inline-flex items-center gap-2 rounded-lg border border-hairline px-4 py-1 text-sm text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            A Nirvix Technology Product
          </div>
        </Reveal>

        <StackedLines
          as="h1"
          lines={["Weavo — Travel Agency", "Software in Nepal"]}
          className="mx-auto mt-6 max-w-4xl text-4xl font-medium tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl lg:leading-[1.05]"
          stagger={0.1}
        />

        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-2xl text-sm text-ink-soft sm:text-base lg:text-lg">
            Weavo is quotation and itinerary software for travel agencies and tour operators, built
            and deployed by Nirvix Technology in Lalitpur, Nepal. Build the trip once — Weavo prices
            it, brands it, and sends it as a PDF your client can act on.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={WEAVO_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-deep"
            >
              Try Weavo Free
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 rounded-full border border-hairline px-7 py-3.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-surface"
            >
              Book a Walkthrough
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-6 border-t border-hairline pt-8 sm:grid-cols-4">
            {weavoStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-semibold tracking-tight text-brand sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-ink-soft sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
