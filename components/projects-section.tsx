"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects-data";

const featured = projects.slice(0, 6);

export function ProjectsSection() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-8 py-10 sm:py-20">
      <div className="text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-lg border border-hairline px-4 py-1 text-sm text-ink-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          Our Projects
        </div>
        <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          Websites We&apos;ve Built
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-ink-soft sm:text-base">
          Live client work across Nepal, Australia, and New Zealand — travel, real estate, news,
          education, and non-profits. Tap any project to visit the site.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 190, damping: 26, delay: (i % 3) * 0.08 }}
          >
            <ProjectCard project={project} eager={i < 3} titleAs="p" />
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-deep"
        >
          View All Projects
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
