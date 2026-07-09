"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "11+", label: "Hackathons Won" },
  { value: "50+", label: "Projects Delivered" },
  { value: "20+", label: "Happy Clients" },
  { value: "100%", label: "Satisfaction Rate" },
];

export function HighlightsSection() {
  return (
    <section className="relative z-20 mx-auto max-w-7xl py-10 sm:py-20">
      <div className="px-8 text-center">
        <div className="mx-auto inline-flex items-center rounded-lg border border-hairline px-4 py-1 text-sm text-ink-soft">
          Why Businesses Choose Us
        </div>
        <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          Results that speak for themselves
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-ink-soft sm:text-base">
          Nirvix Technology has proudly won hackathons, delivered dozens of projects, and earned
          the trust of clients around the world.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: "spring", stiffness: 190, damping: 26, delay: i * 0.06 }}
            className="flex flex-col items-center justify-center gap-1 bg-white px-6 py-10 text-center"
          >
            <span className="text-3xl font-semibold tracking-tight text-brand sm:text-4xl">
              {stat.value}
            </span>
            <span className="text-sm text-ink-soft">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
