"use client";

import TeamShowcase from "@/components/ui/team-showcase";
import { teamMembers } from "@/lib/team-data";

export function TeamSection() {
  return (
    <section id="team" className="relative mx-auto max-w-7xl px-8 py-10 sm:py-20">
      <div className="text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-lg border border-hairline px-4 py-1 text-sm text-ink-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          Meet the Team
        </div>
        <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          Engineers, Designers, and Problem Solvers
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-ink-soft sm:text-base">
          Hover a name to meet the face behind it.
        </p>
      </div>

      <div className="mt-10 flex justify-center">
        <TeamShowcase members={teamMembers} />
      </div>
    </section>
  );
}
