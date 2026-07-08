"use client";

import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Reveal } from "@/components/reveal";

const ghostWordVariants: Variants = {
  hidden: { y: "115%", opacity: 0 },
  show: { y: "0%", opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const slides = [
  {
    headline: ["Ideas", "Into", "Real", "Products"],
    name: "Engineering Team",
    role: "Web & App Development",
  },
  {
    headline: ["Dreams", "Into", "Digital", "Experiences"],
    name: "Design Team",
    role: "UI/UX & Branding",
  },
  {
    headline: ["Code", "That", "Drives", "Growth"],
    name: "Cloud & DevOps",
    role: "Infrastructure & Deployment",
  },
];

function GhostWord({ text, ink }: { text: string; ink?: boolean }) {
  return (
    <span
      className={`block overflow-hidden text-[8.2vw] font-medium uppercase leading-[1.02] tracking-tight ${
        ink ? "text-neutral-900" : "text-ghost"
      }`}
    >
      <motion.span className="block" variants={ghostWordVariants}>
        {text}
      </motion.span>
    </span>
  );
}

function Dots({ count, active, onSelect }: { count: number; active: number; onSelect: (i: number) => void }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          aria-current={i === active}
          onClick={() => onSelect(i)}
          className="p-1.5"
        >
          <span
            className={`block h-1.5 rounded-full transition-all ${
              i === active ? "w-5 bg-neutral-900" : "w-1.5 bg-ghost"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

export function AboutSection() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section id="about" className="relative isolate overflow-hidden bg-white px-6 py-16 sm:px-10 sm:py-20">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <Reveal y={0} scale={0.9} className="flex h-28 w-28 flex-none flex-col items-center justify-center gap-1 rounded-full bg-surface text-center sm:h-32 sm:w-32">
          <strong className="text-2xl font-medium">100%</strong>
          <p className="max-w-[7em] text-[0.6rem] text-ink-soft">Dedicated to your success</p>
        </Reveal>
        <Reveal delay={0.12} className="flex max-w-md gap-4 rounded-3xl bg-surface p-5 sm:gap-5 sm:p-6">
          <div className="h-fit flex-none rounded-xl bg-white px-4 py-2 text-xl font-medium">#01</div>
          <div>
            <h3 className="text-lg font-medium">Who We Are at Nirvix</h3>
            <p className="mt-2 text-xs leading-relaxed text-ink-soft">
              Nirvix Technology is a team of passionate builders who started with a dream, a
              dream shaped through winning 11+ hackathons, working on challenging team projects,
              and constantly pushing creative boundaries.
            </p>
          </div>
        </Reveal>
      </div>

      <motion.div
        key={index}
        className="relative z-0 mx-auto mt-12 max-w-[88rem] select-none pointer-events-none"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
      >
        <div className="flex justify-between">
          <GhostWord text={slide.headline[0]} />
          <GhostWord text={slide.headline[1]} />
        </div>
        <div className="flex justify-between">
          <GhostWord text={slide.headline[2]} ink />
          <GhostWord text={slide.headline[3]} />
        </div>
      </motion.div>

      <div className="relative z-10 mt-8 flex flex-col items-center justify-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            <strong className="block text-lg font-medium text-neutral-900">{slide.name}</strong>
            <span className="text-sm text-ink-soft">{slide.role}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-20 mt-12 flex items-center justify-between">
        <button
          type="button"
          aria-label="Previous"
          onClick={prev}
          className="grid h-12 w-12 place-items-center rounded-full border border-hairline text-neutral-900 transition-colors hover:border-neutral-900 sm:h-14 sm:w-14"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 -scale-x-100">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
        <Dots count={slides.length} active={index} onSelect={setIndex} />
        <button
          type="button"
          aria-label="Next"
          onClick={next}
          className="grid h-12 w-12 place-items-center rounded-full bg-neutral-900 text-white transition-colors hover:bg-brand-deep sm:h-14 sm:w-14"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
