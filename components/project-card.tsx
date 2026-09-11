import { ArrowUpRight } from "lucide-react";
import { DeviceMockup } from "@/components/device-mockup";
import type { Project } from "@/lib/projects-data";

/**
 * One live client site: laptop + phone mockup, name, category, and a short summary.
 * The whole card is the link out to the live site.
 *
 * `titleAs` lets a page that only previews a few projects (the homepage) keep the names
 * out of its heading outline; /projects, where the projects are the content, keeps h3.
 */
export function ProjectCard({
  project,
  eager,
  titleAs: Title = "h3",
}: {
  project: Project;
  eager?: boolean;
  titleAs?: "h3" | "p";
}) {
  const displayUrl = project.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit the ${project.name} website (opens in a new tab)`}
      className="group flex flex-col rounded-2xl border border-hairline bg-white p-5 transition-colors hover:bg-surface sm:p-6"
    >
      <div className="transition-transform duration-300 ease-out group-hover:-translate-y-1">
        <DeviceMockup
          desktopSrc={`/projects/${project.slug}-desktop.webp`}
          mobileSrc={`/projects/${project.slug}-mobile.webp`}
          name={project.name}
          eager={eager}
        />
      </div>

      <div className="mt-6 flex items-start justify-between gap-3">
        <div>
          <Title className="text-base font-medium text-neutral-900 sm:text-lg">{project.name}</Title>
          <p className="mt-1 text-xs text-ink-soft">
            {project.category} · {project.location}
          </p>
        </div>
        <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-hairline text-neutral-900 transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-white">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{project.description}</p>

      <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-brand">
        {displayUrl}
      </span>
    </a>
  );
}
