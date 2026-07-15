"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  BrainCircuit,
  Cloud,
  Code,
  Search,
  Lightbulb,
  TrendingUp,
  Users,
  MessageSquare,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { SITE_URL } from "@/lib/site";

const categoryIcons: Record<string, LucideIcon> = {
  "Web Development": Monitor,
  "Mobile Apps": Smartphone,
  "AI Solutions": BrainCircuit,
  "Cloud Solutions": Cloud,
  "Custom Software": Code,
  SEO: Search,
  "IT Consulting": Lightbulb,
  "Industry Trends": TrendingUp,
  "Tech Talent": Users,
  "Bulk SMS": MessageSquare,
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function BlogGridSection() {
  return (
    <section id="blog-grid" className="relative mx-auto max-w-7xl px-8 py-10 sm:py-20">
      <h2 className="sr-only">Latest Articles</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, i) => {
          const Icon = categoryIcons[post.category] ?? Code;
          return (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 190, damping: 26, delay: (i % 3) * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-hairline bg-white transition-colors hover:bg-surface"
            >
              <Link
                href={`${SITE_URL}/blog/${post.slug}`}
                className="flex h-full flex-col p-6 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-surface text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-hairline px-3 py-1 text-xs text-ink-soft">
                    {post.category}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-medium text-neutral-900 md:text-xl">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-ink-soft">{post.excerpt}</p>

                <div className="mt-6 flex items-center justify-between border-t border-hairline pt-4 text-xs text-ink-soft">
                  <span>
                    {formatDate(post.date)} &middot; {post.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1 font-medium text-brand">
                    Read
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
