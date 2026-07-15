"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactModal } from "@/components/contact-modal";
import { WhatsappButton } from "@/components/whatsapp-button";
import { Reveal, StackedLines } from "@/components/reveal";
import { useSmoothScroll } from "@/components/smooth-scroll";
import { blogPosts, type BlogPost } from "@/lib/blog-data";
import { SITE_URL } from "@/lib/site";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function BlogPostContent({ post }: { post: BlogPost }) {
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

  const morePosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <main id="top" className="w-full overflow-x-clip">
        <div className="relative overflow-hidden bg-white pt-28 pb-12 sm:pt-36 sm:pb-16">
          <SiteHeader onOpenContact={openContact} />

          <div className="relative z-10 mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <Link
                href={`${SITE_URL}/blog`}
                className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-brand"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-ink-soft">
                <span className="rounded-full border border-hairline px-3 py-1 text-xs">
                  {post.category}
                </span>
                <span>{formatDate(post.date)}</span>
                <span>&middot;</span>
                <span>{post.readTime}</span>
              </div>
            </Reveal>

            <StackedLines
              as="h1"
              lines={[post.title]}
              className="mt-5 max-w-3xl text-3xl font-medium tracking-tight text-neutral-900 sm:text-5xl lg:leading-[1.1]"
              stagger={0.1}
            />

            <Reveal delay={0.18}>
              <p className="mt-5 text-sm text-ink-soft sm:text-base">By {post.author}</p>
            </Reveal>
          </div>
        </div>

        <article className="mx-auto max-w-3xl px-8 pb-10 sm:pb-20">
          <div className="flex flex-col gap-6 border-t border-hairline pt-10">
            {post.content.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.05} y={16}>
                <p
                  className="text-base leading-relaxed text-ink-soft sm:text-lg [&_a]:font-medium"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-hairline bg-surface p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <h2 className="text-lg font-medium text-neutral-900">
                  Have a project in mind?
                </h2>
                <p className="mt-1 text-sm text-ink-soft">
                  Talk to Nirvix Technology and get a free, no-obligation quote.
                </p>
              </div>
              <button
                type="button"
                onClick={openContact}
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-deep"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        </article>

        {morePosts.length > 0 && (
          <section className="mx-auto max-w-7xl px-8 py-10 sm:py-20">
            <h2 className="text-2xl font-medium tracking-tight text-neutral-900 sm:text-3xl">
              More from the blog
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {morePosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`${SITE_URL}/blog/${p.slug}`}
                  className="group flex flex-col rounded-2xl border border-hairline bg-white p-6 transition-colors hover:bg-surface"
                >
                  <span className="text-xs text-ink-soft">{p.category}</span>
                  <h3 className="mt-2 text-base font-medium text-neutral-900">{p.title}</h3>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-brand">
                    Read
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <SiteFooter onOpenContact={openContact} />
      </main>

      <AnimatePresence>
        {contactOpen && <ContactModal onClose={closeContact} />}
      </AnimatePresence>
      <WhatsappButton />
    </>
  );
}
