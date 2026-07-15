"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Code,
  BrainCircuit,
  Search,
  Cloud,
  Lightbulb,
  Palette,
  CircleCheckBig,
  type LucideIcon,
} from "lucide-react";
import { services, type ServiceItem } from "@/lib/services-data";

const iconMap: Record<ServiceItem["icon"], LucideIcon> = {
  Monitor,
  Smartphone,
  Code,
  BrainCircuit,
  Search,
  Cloud,
  Lightbulb,
  Palette,
};

export function ServicesGridSection() {
  return (
    <section id="services-grid" className="relative mx-auto max-w-7xl px-8 py-10 sm:py-20">
      <div className="text-center">
        <div className="mx-auto inline-flex items-center rounded-lg border border-hairline px-4 py-1 text-sm text-ink-soft">
          What We Offer
        </div>
        <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          Full-Stack Digital Services
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-ink-soft sm:text-base">
          From your first line of code to long-term growth, Nirvix Technology covers every layer
          of your digital product.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon];
          return (
            <motion.article
              key={service.slug}
              id={service.slug}
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
                <h3 className="text-lg font-medium text-neutral-900 md:text-xl">{service.name}</h3>
                <p className="mt-2 text-sm text-ink-soft">{service.shortDescription}</p>
              </div>
              <ul className="mt-1 flex flex-col gap-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-ink-soft">
                    <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
