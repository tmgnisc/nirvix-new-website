"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck, KeyRound } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { grosmsStats } from "@/lib/grosms-data";

const bullets = [
  { icon: Zap, text: "Sub-second delivery across 200+ countries" },
  { icon: KeyRound, text: "OTP send-and-verify in a single API call" },
  { icon: ShieldCheck, text: "99.9% uptime SLA with automatic carrier failover" },
];

export function GrosmsShowcaseSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-8 py-10 sm:py-20">
      <div className="grid grid-cols-1 items-center gap-10 rounded-3xl border border-hairline bg-surface p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-lg border border-hairline bg-white px-4 py-1 text-sm text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Our Partner Product
          </div>
          <h2 className="mt-5 text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Bulk SMS for Your Business, Powered by GroSMS
          </h2>
          <p className="mt-4 max-w-lg text-sm text-ink-soft sm:text-base">
            Nirvix Technology partners with GroSMS to bring enterprise-grade bulk SMS, transactional
            alerts, and OTP delivery to businesses across Nepal — reaching 10,000+ businesses and
            sending 2B+ messages every month, globally.
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
              href="/bulk-sms-service"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-deep"
            >
              Explore Bulk SMS Service
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 190, damping: 26, delay: 0.1 }}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline"
        >
          {grosmsStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center gap-1 bg-white px-6 py-10 text-center"
            >
              <span className="text-2xl font-semibold tracking-tight text-brand sm:text-3xl">
                {stat.value}
              </span>
              <span className="text-xs text-ink-soft sm:text-sm">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
