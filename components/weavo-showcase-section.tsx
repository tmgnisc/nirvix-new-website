"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Palette, Library } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { weavoStats } from "@/lib/weavo-data";

const bullets = [
  { icon: FileText, text: "Quotations, itineraries and hotel vouchers as client-ready PDFs" },
  { icon: Palette, text: "Issued on your own letterhead — your logo, colours and PAN/VAT" },
  { icon: Library, text: "Customers, hotels and packages reused across every trip" },
];

export function WeavoShowcaseSection() {
  return (
    <section id="weavo" className="relative mx-auto max-w-7xl px-8 py-10 sm:py-20">
      <div className="rounded-3xl border border-hairline bg-surface p-8 sm:p-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-lg border border-hairline bg-white px-4 py-1 text-sm text-ink-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Our Product
            </div>
            <h2 className="mt-5 text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
              Weavo — Travel Agency Software Built in Nepal
            </h2>
            <p className="mt-4 max-w-lg text-sm text-ink-soft sm:text-base">
              Weavo is our own SaaS product, built and deployed by Nirvix Technology. It turns a
              trip into a branded quotation, itinerary or hotel voucher in minutes — priced, on your
              own letterhead — and keeps every customer, hotel and package in one workspace instead
              of scattered Word files.
            </p>

            <ul className="mt-6 flex flex-col gap-3">
              {bullets.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm text-neutral-900">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white text-brand">
                    <Icon className="h-4 w-4" />
                  </span>
                  {text}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/weavo"
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-deep"
              >
                Explore Weavo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 190, damping: 26, delay: 0.1 }}
            className="m-0 overflow-hidden rounded-2xl border border-hairline bg-white shadow-sm"
          >
            <Image
              src="/products/weavo-dashboard.webp"
              width={1920}
              height={1200}
              alt="The Weavo dashboard by Nirvix Technology, showing document counts, pipeline and accepted value, recent documents and a setup checklist"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full"
            />
            <figcaption className="border-t border-hairline px-5 py-3 text-xs text-ink-soft sm:text-sm">
              The Weavo dashboard — pipeline, accepted value and recent documents at a glance.
            </figcaption>
          </motion.figure>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-4">
          {weavoStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center gap-1 bg-white px-6 py-8 text-center"
            >
              <span className="text-2xl font-semibold tracking-tight text-brand sm:text-3xl">
                {stat.value}
              </span>
              <span className="text-xs text-ink-soft sm:text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
