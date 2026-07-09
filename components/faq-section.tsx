import { ChevronDown } from "lucide-react";
import { faqItems } from "@/lib/faq-data";

export function FaqSection() {
  return (
    <section id="faq" className="mx-auto max-w-4xl px-8 py-10 sm:py-20">
      <div className="text-center">
        <div className="mx-auto inline-flex items-center rounded-lg border border-hairline px-4 py-1 text-sm text-ink-soft">
          FAQ
        </div>
        <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-ink-soft sm:text-base">
          Answers to the questions we hear most from clients considering Nirvix Technology.
        </p>
      </div>

      <div className="mt-10 divide-y divide-hairline border-t border-hairline">
        {faqItems.map((item) => (
          <details key={item.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
              <h3 className="text-base font-medium text-neutral-900 sm:text-lg">
                {item.question}
              </h3>
              <ChevronDown className="h-5 w-5 shrink-0 text-ink-soft transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
