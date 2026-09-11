"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Reveal, StackedLines } from "@/components/reveal";

export function TeamHeroSection({ onOpenContact }: { onOpenContact?: () => void }) {
  return (
    <div className="relative overflow-hidden bg-sky-wash pt-28 pb-10 sm:pt-36 sm:pb-16">
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
            Our Team
          </div>
        </Reveal>

        <StackedLines
          as="h1"
          lines={["The People Behind", "Nirvix Technology"]}
          className="mx-auto mt-6 max-w-4xl text-4xl font-medium tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl lg:leading-[1.05]"
          stagger={0.1}
        />

        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-2xl text-sm text-ink-soft sm:text-base lg:text-lg">
            A small, senior team of engineers, designers, and project managers in Lalitpur,
            Nepal — the same people who scope your project are the ones who build and support it.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-deep"
            >
              Work With Us
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-hairline px-7 py-3.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-surface"
            >
              See Our Work
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
