"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { weavoScreens } from "@/lib/weavo-data";

export function WeavoScreensSection() {
  return (
    <section id="weavo-screens" className="relative mx-auto max-w-7xl px-8 py-10 sm:py-20">
      <div className="text-center">
        <div className="mx-auto inline-flex items-center rounded-lg border border-hairline px-4 py-1 text-sm text-ink-soft">
          Inside Weavo
        </div>
        <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          A Look at the Weavo Dashboard
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-ink-soft sm:text-base">
          The workspace your team signs into every morning — the pipeline, the document list, and
          the builder that produces the PDF.
        </p>
      </div>

      <div className="mt-12 flex flex-col gap-12 sm:gap-20">
        {weavoScreens.map((screen, i) => (
          <motion.div
            key={screen.caption}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 190, damping: 26 }}
            className="grid grid-cols-1 items-center gap-8 lg:grid-cols-5 lg:gap-14"
          >
            <div className={i % 2 === 1 ? "lg:order-2 lg:col-span-2" : "lg:col-span-2"}>
              <div className="inline-flex items-center rounded-lg border border-hairline px-3 py-1 text-xs text-ink-soft">
                {screen.caption}
              </div>
              <h3 className="mt-4 text-xl font-medium tracking-tight text-neutral-900 sm:text-2xl lg:text-3xl">
                {screen.title}
              </h3>
              <p className="mt-3 text-sm text-ink-soft sm:text-base">{screen.description}</p>
              <ul className="mt-5 flex flex-col gap-2.5">
                {screen.notes.map((note) => (
                  <li key={note} className="flex items-start gap-2.5 text-sm text-neutral-900">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>

            <figure
              className={
                i % 2 === 1
                  ? "m-0 overflow-hidden rounded-2xl border border-hairline bg-white shadow-sm lg:order-1 lg:col-span-3"
                  : "m-0 overflow-hidden rounded-2xl border border-hairline bg-white shadow-sm lg:col-span-3"
              }
            >
              <Image
                src={screen.src}
                width={screen.width}
                height={screen.height}
                alt={screen.alt}
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="h-auto w-full"
              />
            </figure>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
