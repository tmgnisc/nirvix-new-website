"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

const links = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  { label: "Our Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "Contact Us", href: "#contact" },
];

const socials = [
  { label: "Facebook", href: "#facebook" },
  { label: "LinkedIn", href: "#linkedin" },
  { label: "TikTok", href: "#tiktok" },
  { label: "Instagram", href: "#instagram" },
];

export function MenuOverlay({
  onClose,
  onOpenContact,
  onNavigate,
}: {
  onClose: () => void;
  onOpenContact: () => void;
  onNavigate: (href: string) => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[70] flex flex-col">
      <motion.div
        className="absolute inset-0 bg-brand-deep"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      />
      <motion.div
        className="relative flex h-full flex-col p-2 sm:p-3"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -24 }}
        transition={{ type: "spring", stiffness: 220, damping: 28 }}
      >
        <div className="flex h-full flex-col p-6 text-white sm:p-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                className="h-8 w-8"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M4.8 5.6A9 9 0 0 0 4.8 18.4" />
                <path d="M19.2 5.6a9 9 0 0 1 0 12.8" />
              </svg>
              <span className="font-medium uppercase tracking-[0.2em]">Nirvix</span>
            </div>
            <button
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="grid h-10 w-10 place-items-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" className="h-[1.125rem] w-[1.125rem]">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-2">
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(link.href);
                }}
                className="block text-5xl font-medium tracking-tight transition-colors hover:text-brand-light sm:text-7xl"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 26, delay: 0.12 + i * 0.07 }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          <div className="flex flex-col gap-6 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="inline-flex items-center gap-2 self-start rounded-full bg-white px-7 py-3.5 text-sm font-medium uppercase tracking-wide text-brand-deep transition-colors hover:bg-brand-light hover:text-white"
            >
              Get a Quote
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
            <nav className="flex gap-5 text-sm text-white/70">
              {socials.map((s) => (
                <a key={s.href} href={s.href} className="transition-colors hover:text-white">
                  {s.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
