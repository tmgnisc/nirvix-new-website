"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Route,
  BedDouble,
  Library,
  Palette,
  Coins,
  type LucideIcon,
} from "lucide-react";
import { weavoFeatures, type WeavoFeature } from "@/lib/weavo-data";

const iconMap: Record<WeavoFeature["icon"], LucideIcon> = {
  FileText,
  Route,
  BedDouble,
  Library,
  Palette,
  Coins,
};

export function WeavoFeaturesSection() {
  return (
    <section id="weavo-features" className="relative mx-auto max-w-7xl px-8 py-10 sm:py-20">
      <div className="text-center">
        <div className="mx-auto inline-flex items-center rounded-lg border border-hairline px-4 py-1 text-sm text-ink-soft">
          What Weavo Does
        </div>
        <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          Every Travel Document, On Your Letterhead
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-ink-soft sm:text-base">
          Weavo replaces manual Word files, scattered PDF exports and retyped hotel rates with one
          organised workspace your whole team shares.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
        {weavoFeatures.map((feature, i) => {
          const Icon = iconMap[feature.icon];
          return (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 190, damping: 26, delay: (i % 3) * 0.08 }}
              className="group flex flex-col gap-4 bg-white p-6 transition-colors hover:bg-surface sm:p-8"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-surface text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-neutral-900 md:text-xl">{feature.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{feature.description}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
