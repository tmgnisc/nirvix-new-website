"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Home, Search } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactModal } from "@/components/contact-modal";
import { WhatsappButton } from "@/components/whatsapp-button";
import { Reveal, StackedLines } from "@/components/reveal";
import { useSmoothScroll } from "@/components/smooth-scroll";
import { blogPosts } from "@/lib/blog-data";

const destinations = [
  {
    href: "/services",
    title: "Services",
    description: "Web, mobile, custom software, AI, SEO, and cloud.",
  },
  {
    href: "/projects",
    title: "Projects",
    description: "21 live client websites you can open and judge for yourself.",
  },
  {
    href: "/seo-company-in-lalitpur",
    title: "SEO in Lalitpur",
    description: "Technical SEO, local SEO, and answer engine optimisation.",
  },
  {
    href: "/team",
    title: "Team",
    description: "The engineers and designers behind the work.",
  },
  {
    href: "/weavo",
    title: "Weavo",
    description: "Travel agency software — quotations and itineraries in minutes.",
  },
  {
    href: "/bulk-sms-service",
    title: "Bulk SMS",
    description: "Enterprise SMS, OTP, and transactional messaging for Nepal.",
  },
];

const recentPosts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

export function NotFoundContent() {
  const [contactOpen, setContactOpen] = useState(false);
  const { lock } = useSmoothScroll();

  function openContact() {
    setContactOpen(true);
    lock(true);
  }
  function closeContact() {
    setContactOpen(false);
    lock(false);
  }

  return (
    <>
      <main id="top" className="w-full overflow-x-clip">
        <div className="relative overflow-hidden bg-sky-wash pt-28 pb-12 sm:pt-36 sm:pb-16">
          <SiteHeader onOpenContact={openContact} />

          <motion.div
            aria-hidden
            className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-brand-light/20 blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-8">
            <Reveal>
              <div className="mx-auto inline-flex items-center gap-2 rounded-lg border border-hairline px-4 py-1 text-sm text-ink-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Error 404
              </div>
            </Reveal>

            <StackedLines
              as="h1"
              lines={["This Page Has", "Moved or Retired"]}
              className="mx-auto mt-6 max-w-3xl text-4xl font-medium tracking-tight text-neutral-900 sm:text-6xl lg:leading-[1.05]"
              stagger={0.1}
            />

            <Reveal delay={0.15}>
              <p className="mx-auto mt-6 max-w-xl text-sm text-ink-soft sm:text-base">
                We rebuilt nirvixtech.com, and a few old links did not survive the move. Nothing
                is lost — everything below is where it lives now.
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-deep"
                >
                  <Home className="h-4 w-4" />
                  Back to Home
                </Link>
                <button
                  type="button"
                  onClick={openContact}
                  className="inline-flex items-center gap-2 rounded-full border border-hairline px-7 py-3.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-surface"
                >
                  Tell Us What You Needed
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </Reveal>
          </div>
        </div>

        <section className="mx-auto max-w-7xl px-8 py-10 sm:py-16">
          <h2 className="text-center text-2xl font-medium tracking-tight text-neutral-900 sm:text-3xl">
            Where you were probably heading
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col gap-2 bg-white p-6 transition-colors hover:bg-surface sm:p-8"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-medium text-neutral-900">{item.title}</h3>
                  <ArrowRight className="h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-0.5" />
                </div>
                <p className="text-sm text-ink-soft">{item.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-8 pb-10 sm:pb-16">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-2xl font-medium tracking-tight text-neutral-900 sm:text-3xl">
              Latest from the blog
            </h2>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:text-brand-deep"
            >
              <Search className="h-4 w-4" />
              Browse all articles
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-hairline bg-white p-6 transition-colors hover:bg-surface"
              >
                <span className="text-xs text-ink-soft">{post.category}</span>
                <h3 className="mt-2 text-base font-medium text-neutral-900">{post.title}</h3>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-brand">
                  Read
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <SiteFooter onOpenContact={openContact} />
      </main>

      <AnimatePresence>
        {contactOpen && <ContactModal onClose={closeContact} />}
      </AnimatePresence>
      <WhatsappButton />
    </>
  );
}
