"use client";

import { ShoppingCart, Landmark, HeartPulse, Building2, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { grosmsUseCases, type GrosmsUseCase } from "@/lib/grosms-data";

const iconMap: Record<GrosmsUseCase["icon"], LucideIcon> = {
  ShoppingCart,
  Landmark,
  HeartPulse,
  Building2,
};

export function GrosmsUseCasesSection() {
  return (
    <section id="grosms-use-cases" className="relative mx-auto max-w-7xl px-8 py-10 sm:py-20">
      <div className="text-center">
        <div className="mx-auto inline-flex items-center rounded-lg border border-hairline px-4 py-1 text-sm text-ink-soft">
          Use Cases
        </div>
        <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          Built for Every Industry
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-ink-soft sm:text-base">
          Wherever a message needs to reach a customer reliably, GroSMS fits in.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {grosmsUseCases.map((useCase, i) => {
          const Icon = iconMap[useCase.icon];
          return (
            <Reveal key={useCase.title} delay={i * 0.08} y={20}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-hairline bg-white p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-surface text-brand">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-neutral-900">{useCase.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{useCase.description}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
