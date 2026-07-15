"use client";

import { motion } from "framer-motion";
import { MessageCircle, PenTool, Code, Rocket, Wrench, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";

const steps: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Discover",
    description: "We learn your business, goals, and users to define the right scope.",
    icon: MessageCircle,
  },
  {
    title: "Design",
    description: "Wireframes and UI design turn requirements into a clear visual plan.",
    icon: PenTool,
  },
  {
    title: "Develop",
    description: "Our engineers build with clean, scalable, well-tested code.",
    icon: Code,
  },
  {
    title: "Deploy",
    description: "We ship to production with CI/CD, monitoring, and zero-downtime releases.",
    icon: Rocket,
  },
  {
    title: "Support",
    description: "Ongoing maintenance, updates, and optimization after launch.",
    icon: Wrench,
  },
];

export function ServicesProcessSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-8 py-10 sm:py-20">
      <div className="text-center">
        <div className="mx-auto inline-flex items-center rounded-lg border border-hairline px-4 py-1 text-sm text-ink-soft">
          How We Work
        </div>
        <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          A Process Built for Results
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-ink-soft sm:text-base">
          A transparent, five-step process that takes your project from idea to a live product.
        </p>
      </div>

      <div className="relative mt-14">
        <div
          aria-hidden
          className="absolute top-6 right-0 left-0 hidden h-px bg-hairline lg:block"
        />
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08} y={20}>
              <div className="relative flex flex-col items-start gap-4 lg:items-center lg:text-center">
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-hairline bg-white text-brand shadow-sm"
                >
                  <step.icon className="h-5 w-5" />
                </motion.div>
                <div>
                  <div className="text-xs font-medium tracking-[0.18em] text-ink-soft uppercase">
                    Step {i + 1}
                  </div>
                  <h3 className="mt-1 text-lg font-medium text-neutral-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
