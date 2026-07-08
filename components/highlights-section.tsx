"use client";

import { motion } from "framer-motion";
import { Badge as AnimatedBadge } from "@/components/ui/new-badge";

export function HighlightsSection() {
  return (
    <section className="mt-3 rounded-[2rem] bg-brand-deep px-6 py-20 text-white sm:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: "spring", stiffness: 190, damping: 26 }}
        >
          <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-light" />
            Why businesses choose us
          </div>
          <p className="mt-6 text-2xl font-medium leading-relaxed sm:text-3xl">
            Nirvix Technology has proudly won{" "}
            <AnimatedBadge color="teal" waveColor="rgba(20,184,166,0.35)" size="lg">
              11+ Hackathons
            </AnimatedBadge>
            , delivered{" "}
            <AnimatedBadge color="blue" waveColor="rgba(59,130,246,0.35)" size="lg">
              50+ Projects
            </AnimatedBadge>
            , and earned the trust of{" "}
            <AnimatedBadge color="orange" waveColor="rgba(249,115,22,0.35)" size="lg">
              20+ Happy Clients
            </AnimatedBadge>{" "}
            — all while maintaining a{" "}
            <AnimatedBadge variant="dot" color="green" size="lg">
              100% Satisfaction Rate
            </AnimatedBadge>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
