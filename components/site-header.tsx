"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "@/app/logo-navbar.png";

const navLinks = [
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
];

export function SiteHeader({
  onOpenContact,
}: {
  onOpenContact?: () => void;
}) {
  const [open, setOpen] = useState(false);

  function handleContactClick() {
    setOpen(false);
    onOpenContact?.();
  }

  return (
    <div className="absolute z-40 top-4 flex w-full items-center justify-between gap-4 px-4 text-neutral-900 sm:top-6 sm:px-8">
      <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
        <Image
          src={logoImg}
          alt="Nirvix Technology"
          priority
          className="h-7 w-auto object-contain sm:h-8"
        />
      </Link>

      <nav className="pointer-events-none absolute inset-0 hidden items-center justify-center lg:flex">
        <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-hairline bg-white/70 p-1.5 text-sm shadow-sm backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-1.5 opacity-70 transition-all hover:bg-surface hover:opacity-100"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      <div className="hidden items-center gap-3 lg:flex">
        <Button className="rounded-full" onClick={onOpenContact}>
          Get a Quote
        </Button>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-hairline bg-white/70 backdrop-blur-md lg:hidden"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-14 right-4 left-4 z-50 flex flex-col gap-1 rounded-2xl border border-hairline bg-white/95 p-3 text-sm shadow-lg backdrop-blur-md sm:top-16 lg:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-2.5 opacity-80 transition-colors hover:bg-surface hover:opacity-100"
              >
                {link.label}
              </Link>
            ))}
            <Button className="mt-1 rounded-full" onClick={handleContactClick}>
              Get a Quote
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
