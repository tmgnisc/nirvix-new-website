"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { StackedLines } from "@/components/reveal";

export function ContactModal({ onClose }: { onClose: () => void }) {
  const nameRef = useRef<HTMLInputElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const t = setTimeout(() => nameRef.current?.focus(), 120);
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  const firstName = name.trim() ? name.trim().split(" ")[0] : "there";

  return (
    <div className="fixed inset-0 z-[90] flex items-end justify-center p-3 sm:items-center sm:p-6">
      <motion.div
        className="absolute inset-0 bg-brand-deep/40 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Get a quote"
        className="relative max-h-[92svh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-6 text-neutral-900 shadow-2xl sm:p-8"
        initial={{ opacity: 0, y: 28, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 28, scale: 0.96 }}
        transition={{ type: "spring", stiffness: 240, damping: 26 }}
      >
        <div className="flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Get a quote
            </div>
            <StackedLines
              lines={["Get Your", "Free Quote"]}
              className="mt-3 text-4xl font-medium sm:text-5xl"
              stagger={0.09}
            />
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="grid h-10 w-10 flex-none place-items-center rounded-full bg-neutral-100 transition-colors hover:bg-neutral-200"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" className="h-[1.125rem] w-[1.125rem]">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {!submitted ? (
          <form className="mt-7 flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="field-name" className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
                Full name
              </label>
              <input
                ref={nameRef}
                id="field-name"
                name="name"
                type="text"
                placeholder="Alex Rivera"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition focus:border-brand-light focus:ring-2 focus:ring-brand-light/25"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="field-email" className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
                Email
              </label>
              <input
                id="field-email"
                name="email"
                type="email"
                placeholder="you@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition focus:border-brand-light focus:ring-2 focus:ring-brand-light/25"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="field-message" className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
                Tell us about your project
              </label>
              <textarea
                id="field-message"
                name="message"
                rows={3}
                placeholder="I'm looking to build a web platform for…"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition focus:border-brand-light focus:ring-2 focus:ring-brand-light/25"
              />
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button
              type="submit"
              disabled={submitting}
              className="self-start rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-deep disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Request a quote"}
            </button>
          </form>
        ) : (
          <div className="mt-8 rounded-2xl bg-neutral-100 p-6 text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium">Message received</h3>
            <p className="mt-2 text-sm text-neutral-500">
              Thanks, {firstName} — our team will be in touch about your project shortly.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-5 rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-deep"
            >
              Done
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
