"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Wrench,
  MapPin,
  FileText,
  Sparkles,
  Link2,
  ShoppingCart,
  CircleCheckBig,
  type LucideIcon,
} from "lucide-react";
import { seoOfferings, seoProcess, type SeoOffering } from "@/lib/seo-service-data";

const iconMap: Record<SeoOffering["icon"], LucideIcon> = {
  Wrench,
  MapPin,
  FileText,
  Sparkles,
  Link2,
  ShoppingCart,
};

export function SeoServicesSection() {
  return (
    <>
      <section id="seo-services" className="relative mx-auto max-w-7xl px-8 py-10 sm:py-20">
        <div className="text-center">
          <div className="mx-auto inline-flex items-center rounded-lg border border-hairline px-4 py-1 text-sm text-ink-soft">
            What We Cover
          </div>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Our SEO Services in Lalitpur
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-ink-soft sm:text-base">
            Most SEO agencies in Nepal sell content alone. Rankings usually stall on the technical
            layer underneath it, so we work across all of it.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {seoOfferings.map((offering, i) => {
            const Icon = iconMap[offering.icon];
            return (
              <motion.article
                key={offering.slug}
                id={offering.slug}
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
                  <h3 className="text-lg font-medium text-neutral-900 md:text-xl">
                    {offering.name}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft">{offering.description}</p>
                </div>
                <ul className="mt-1 flex flex-col gap-2">
                  {offering.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-ink-soft">
                      <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="local-seo" className="relative mx-auto max-w-7xl px-8 py-10 sm:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
              Local SEO for Businesses in Lalitpur and Kathmandu
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ink-soft sm:text-base">
              Local search in Nepal is still thin. When someone searches for a service near
              Satdobato, Pulchowk, or Jhamsikhel, the businesses that show up are usually the ones
              with a complete Google Business Profile, consistent contact details across the web,
              and a page that actually mentions the area they serve. Very few do all three.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
              That is a genuine opening. The bar to rank locally here is lower than in Delhi or
              Singapore, and the businesses that treat local SEO as a real channel rather than an
              afterthought tend to hold those positions for years.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
              We are based in Satdobato, Lalitpur, so the market we optimise for is the one we
              work in. See{" "}
              <Link href="/projects" className="font-medium text-brand hover:text-brand-deep">
                the websites we have built for Nepali businesses
              </Link>{" "}
              or read our guide to{" "}
              <Link
                href="/blog/answer-engine-optimization-aeo-nepal-2026"
                className="font-medium text-brand hover:text-brand-deep"
              >
                getting cited by AI search in 2026
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
              How We Run an SEO Engagement
            </h2>
            <ol className="mt-6 flex flex-col gap-5">
              {seoProcess.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-surface text-sm font-medium text-brand">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-medium text-neutral-900">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
