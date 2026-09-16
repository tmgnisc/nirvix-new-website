"use client";

import { CircleCheckBig } from "lucide-react";
import { Reveal } from "@/components/reveal";
import type { PricingPlan } from "@/lib/pricing-data";

export function PricingSection({
  id = "pricing",
  eyebrow = "Pricing",
  title = "Plans and Pricing",
  subtitle,
  plans,
  note = "All prices are in Nepalese Rupees and exclude VAT. Domain and hosting are included free for the first year on every plan.",
  onOpenContact,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  plans: PricingPlan[];
  note?: string;
  onOpenContact?: () => void;
}) {
  return (
    <section id={id} className="relative mx-auto max-w-7xl px-8 py-10 sm:py-20">
      <div className="text-center">
        <div className="mx-auto inline-flex items-center rounded-lg border border-hairline px-4 py-1 text-sm text-ink-soft">
          {eyebrow}
        </div>
        <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-sm text-ink-soft sm:text-base">{subtitle}</p>
        )}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {plans.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 0.08} y={24} className="h-full">
            <div
              className={`flex h-full flex-col rounded-2xl border p-6 sm:p-8 ${
                plan.highlight
                  ? "border-brand bg-surface shadow-[0_1px_24px_rgba(1,104,181,0.12)]"
                  : "border-hairline bg-white"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-medium text-neutral-900 md:text-xl">{plan.name}</h3>
                {plan.highlight && (
                  <span className="rounded-full bg-brand px-3 py-1 text-xs font-medium text-white">
                    Most Popular
                  </span>
                )}
              </div>

              <div className="mt-5">
                <span className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
                  {plan.price}
                </span>
                {plan.priceNote && (
                  <span className="mt-1 block text-sm text-ink-soft">{plan.priceNote}</span>
                )}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{plan.description}</p>

              <ul className="mt-6 flex flex-col gap-2.5 border-t border-hairline pt-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-ink-soft">
                    <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={onOpenContact}
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition-colors ${
                  plan.highlight
                    ? "bg-brand text-white hover:bg-brand-deep"
                    : "bg-neutral-900 text-white hover:bg-brand-deep"
                }`}
              >
                {plan.cta ?? "Get Started"}
              </button>
            </div>
          </Reveal>
        ))}
      </div>

      {note && (
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-ink-soft">{note}</p>
      )}
    </section>
  );
}
