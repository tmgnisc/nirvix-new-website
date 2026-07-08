"use client";

import { motion, type Variants } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  scale?: number;
  once?: boolean;
  amount?: number;
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  scale,
  once = true,
  amount = 0.25,
}: RevealProps) {
  const initial: Record<string, number> = { opacity: 0 };
  const animate: Record<string, number> = { opacity: 1 };
  if (y) {
    initial.y = y;
    animate.y = 0;
  }
  if (scale) {
    initial.scale = scale;
    animate.scale = 1;
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once, amount }}
      transition={{ type: "spring", stiffness: 190, damping: 26, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Clip-mask line-by-line reveal, gated on scroll-into-view (once). */
export function StackedLines({
  lines,
  className,
  lineClassName,
  stagger = 0.12,
  baseDelay = 0,
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
  stagger?: number;
  baseDelay?: number;
}) {
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: baseDelay } },
  };
  const line: Variants = {
    hidden: { y: "115%", opacity: 0 },
    show: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={container}
    >
      {lines.map((text, i) => (
        <span key={i} className="block overflow-hidden pb-[0.14em]">
          <motion.span className={`block ${lineClassName ?? ""}`} variants={line}>
            {text}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}

/** Clip-mask word-by-word reveal, gated on scroll-into-view (once). */
export function StackedWords({
  text,
  className,
  wordClassName,
  stagger = 0.09,
  baseDelay = 0,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  stagger?: number;
  baseDelay?: number;
}) {
  const words = text.split(" ");
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: baseDelay } },
  };
  const word: Variants = {
    hidden: { y: "115%", opacity: 0 },
    show: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={container}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-top">
          <motion.span className={`inline-block ${wordClassName ?? ""}`} variants={word}>
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
