"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { grosmsPlans } from "@/lib/grosms-data";

export function GrosmsPricingSection({
  onOpenContact,
}: {
  onOpenContact?: () => void;
}) {
  return (
    <section id="grosms-pricing" className="relative mx-auto max-w-5xl px-8 py-10 sm:py-20">
      <div className="text-center">
        <div className="mx-auto inline-flex items-center rounded-lg border border-hairline px-4 py-1 text-sm text-ink-soft">
          Pricing
        </div>
        <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          Simple, Volume-Based Pricing
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-ink-soft sm:text-base">
          Plans are priced under NPR 1 per SMS depending on volume, with a free trial of 1,000 SMS
          credits and no card required. Talk to Nirvix Technology for a custom quote.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {grosmsPlans.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 0.08} y={20}>
            <div
              className={`flex h-full flex-col gap-4 rounded-2xl border p-6 ${
                plan.highlight ? "border-brand bg-surface" : "border-hairline bg-white"
              }`}
            >
              {plan.highlight && (
                <span className="w-fit rounded-full bg-brand px-3 py-1 text-xs font-medium text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-medium text-neutral-900">{plan.name}</h3>
              <p className="flex items-start gap-2 text-sm text-ink-soft">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                {plan.volume}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-deep"
          >
            Get a Custom Quote
          </button>
        </div>
      </Reveal>
    </section>
  );
}
