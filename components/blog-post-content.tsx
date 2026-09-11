"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactModal } from "@/components/contact-modal";
import { WhatsappButton } from "@/components/whatsapp-button";
import { Reveal, StackedLines } from "@/components/reveal";
import { useSmoothScroll } from "@/components/smooth-scroll";
import { getPostAuthor, getRelatedPosts, type BlogPost } from "@/lib/blog-data";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

const blockLinkStyles = "[&_a]:font-medium";
const bodyText = "text-base leading-relaxed text-ink-soft sm:text-lg";

/** Splits `| a | b |` into trimmed cells, dropping the outer pipes. */
function tableCells(line: string) {
  return line
    .replace(/^\s*\|/, "")
    .replace(/\|\s*$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

/**
 * Renders one body block. Lists and tables are worth the extra syntax: answer engines
 * lift steps and comparisons from real list/table markup far more readily than from
 * the same facts written as prose. Syntax is documented on `BlogPost.content`.
 */
function ContentBlock({ block }: { block: string }) {
  if (block.startsWith("## ")) {
    return (
      <h2
        className={`mt-4 text-xl font-medium tracking-tight text-neutral-900 sm:text-2xl ${blockLinkStyles}`}
        dangerouslySetInnerHTML={{ __html: block.slice(3) }}
      />
    );
  }

  const lines = block.split("\n");

  if (lines.every((line) => line.startsWith("- "))) {
    return (
      <ul className={`list-disc space-y-2 pl-6 marker:text-brand ${bodyText} ${blockLinkStyles}`}>
        {lines.map((line, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: line.slice(2) }} />
        ))}
      </ul>
    );
  }

  if (lines.every((line) => /^\d+\. /.test(line))) {
    return (
      <ol className={`list-decimal space-y-2 pl-6 marker:text-brand ${bodyText} ${blockLinkStyles}`}>
        {lines.map((line, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: line.replace(/^\d+\. /, "") }} />
        ))}
      </ol>
    );
  }

  if (block.startsWith("|")) {
    const [header, ...rows] = lines
      .filter((line) => !/^\s*\|\s*:?-{3,}/.test(line))
      .map(tableCells);
    return (
      <div className="overflow-x-auto rounded-2xl border border-hairline bg-white">
        <table className={`w-full min-w-[32rem] text-left text-sm sm:text-base ${blockLinkStyles}`}>
          <thead className="bg-surface text-neutral-900">
            <tr>
              {header.map((cell, i) => (
                <th
                  key={i}
                  scope="col"
                  className="px-4 py-3 font-medium"
                  dangerouslySetInnerHTML={{ __html: cell }}
                />
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-hairline text-ink-soft">
            {rows.map((row, r) => (
              <tr key={r}>
                {row.map((cell, c) =>
                  c === 0 ? (
                    <th
                      key={c}
                      scope="row"
                      className="px-4 py-3 font-medium text-neutral-900"
                      dangerouslySetInnerHTML={{ __html: cell }}
                    />
                  ) : (
                    <td key={c} className="px-4 py-3" dangerouslySetInnerHTML={{ __html: cell }} />
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return <p className={`${bodyText} ${blockLinkStyles}`} dangerouslySetInnerHTML={{ __html: block }} />;
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

  const morePosts = getRelatedPosts(post.slug, 3);
  const author = getPostAuthor(post);

  return (
    <>
      <main id="top" className="w-full overflow-x-clip">
        <div className="relative overflow-hidden bg-sky-wash pt-28 pb-12 sm:pt-36 sm:pb-16">
          <SiteHeader onOpenContact={openContact} />

          <div className="relative z-10 mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <Link
                href="/blog"
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
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                {post.updated && post.updated !== post.date && (
                  <>
                    <span>&middot;</span>
                    <span>
                      Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                    </span>
                  </>
                )}
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
              <p className="mt-5 text-sm text-ink-soft sm:text-base">
                By{" "}
                <Link href="/team" className="font-medium text-neutral-900 transition-colors hover:text-brand">
                  {author.name}
                </Link>
                , {author.jobTitle} at Nirvix Technology
              </p>
            </Reveal>
          </div>
        </div>

        <article className="mx-auto max-w-3xl px-8 pb-10 sm:pb-20">
          <div className="flex flex-col gap-6 border-t border-hairline pt-10">
            {post.takeaways && (
              <Reveal y={16}>
                <aside
                  aria-labelledby="key-takeaways"
                  className="rounded-2xl border border-hairline bg-surface p-6 sm:p-8"
                >
                  <h2 id="key-takeaways" className="text-lg font-medium text-neutral-900">
                    Key takeaways
                  </h2>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-ink-soft marker:text-brand">
                    {post.takeaways.map((takeaway) => (
                      <li key={takeaway}>{takeaway}</li>
                    ))}
                  </ul>
                </aside>
              </Reveal>
            )}

            {post.content.map((block, i) => (
              <Reveal key={i} delay={i * 0.05} y={16}>
                <ContentBlock block={block} />
              </Reveal>
            ))}
          </div>

          {post.faqs && (
            <section aria-labelledby="post-faq" className="mt-12 border-t border-hairline pt-10">
              <h2
                id="post-faq"
                className="text-xl font-medium tracking-tight text-neutral-900 sm:text-2xl"
              >
                Frequently asked questions
              </h2>
              <div className="mt-6 flex flex-col gap-6">
                {post.faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="text-base font-medium text-neutral-900 sm:text-lg">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-ink-soft">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {post.sources && (
            <section aria-labelledby="post-sources" className="mt-12 border-t border-hairline pt-10">
              <h2 id="post-sources" className="text-lg font-medium text-neutral-900">
                Sources
              </h2>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-ink-soft">
                {post.sources.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand underline underline-offset-2 hover:text-brand-deep"
                    >
                      {source.title}
                    </a>{" "}
                    — {source.publisher}
                  </li>
                ))}
              </ol>
            </section>
          )}

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
                  href={`/blog/${p.slug}`}
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
