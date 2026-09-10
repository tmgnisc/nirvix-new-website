"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";
import { projects, projectCategories } from "@/lib/projects-data";

const ALL = "All";
const filters = [ALL, ...projectCategories];

export function ProjectsGridSection() {
  const [active, setActive] = useState(ALL);

  const visible = useMemo(
    () => (active === ALL ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="projects-grid" className="relative mx-auto max-w-7xl px-8 py-10 sm:py-20">
      <h2 className="sr-only">All websites built by Nirvix Technology</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              active === filter
                ? "border-neutral-900 bg-neutral-900 text-white"
                : "border-hairline text-ink-soft hover:bg-surface"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          <motion.div
            key={project.slug}
            layout
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ type: "spring", stiffness: 190, damping: 26, delay: (i % 3) * 0.06 }}
          >
            <ProjectCard project={project} eager={i < 3} />
          </motion.div>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-ink-soft">
        Showing {visible.length} of {projects.length} projects. See the{" "}
        <Link href="/services" className="font-medium text-brand hover:text-brand-deep">
          services behind this work
        </Link>{" "}
        or read how we approach{" "}
        <Link
          href="/blog/how-to-choose-the-right-it-company-in-nepal"
          className="font-medium text-brand hover:text-brand-deep"
        >
          choosing an IT company in Nepal
        </Link>
        .
      </p>
    </section>
  );
}
