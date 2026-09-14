"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Monitor,
  ShoppingCart,
  CalendarCheck,
  LayoutDashboard,
  RefreshCw,
  ShieldCheck,
  CircleCheckBig,
  type LucideIcon,
} from "lucide-react";
import {
  webDevOfferings,
  webDevProcess,
  type WebDevOffering,
} from "@/lib/web-development-service-data";

const iconMap: Record<WebDevOffering["icon"], LucideIcon> = {
  Monitor,
  ShoppingCart,
  CalendarCheck,
  LayoutDashboard,
  RefreshCw,
  ShieldCheck,
};

export function WebDevServicesSection() {
  return (
    <>
      <section
        id="web-development-services"
        className="relative mx-auto max-w-7xl px-8 py-10 sm:py-20"
      >
        <div className="text-center">
          <div className="mx-auto inline-flex items-center rounded-lg border border-hairline px-4 py-1 text-sm text-ink-soft">
            What We Build
          </div>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Our Website Development Services in Lalitpur
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-ink-soft sm:text-base">
            From a five-page company website to a custom booking platform — designed, built, and
            supported by the same team in Satdobato.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {webDevOfferings.map((offering, i) => {
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

      <section id="why-lalitpur" className="relative mx-auto max-w-7xl px-8 py-10 sm:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
              Websites Built for Businesses in Lalitpur and Nepal
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ink-soft sm:text-base">
              Most of your customers will open your website on a mid-range Android phone, on
              mobile data, somewhere between Pulchowk and Pokhara. A site that looks good on a
              large office monitor but takes eight seconds to load on that phone is losing
              enquiries every day. We design and test for that phone first.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
              Local context matters too. We integrate eSewa, Khalti, Fonepay, and connectIPS
              every week, know how SMS confirmations behave across Nepal Telecom and Ncell, and
              run our own{" "}
              <Link
                href="/bulk-sms-service"
                className="font-medium text-brand hover:text-brand-deep"
              >
                bulk SMS and OTP service
              </Link>{" "}
              alongside development. And because a website nobody finds is not much use, we are
              also an{" "}
              <Link
                href="/seo-company-in-lalitpur"
                className="font-medium text-brand hover:text-brand-deep"
              >
                SEO company in Lalitpur
              </Link>
              , so every build ships search-ready.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
              Every site in{" "}
              <Link href="/projects" className="font-medium text-brand hover:text-brand-deep">
                our portfolio of live client websites
              </Link>{" "}
              is linked so you can open it on your own phone and judge it yourself. If you are
              still comparing agencies, our guide to{" "}
              <Link
                href="/blog/it-companies-in-lalitpur"
                className="font-medium text-brand hover:text-brand-deep"
              >
                choosing between IT companies in Lalitpur
              </Link>{" "}
              lists the questions to ask everyone, including us.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
              How We Build Your Website
            </h2>
            <ol className="mt-6 flex flex-col gap-5">
              {webDevProcess.map((step, i) => (
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
