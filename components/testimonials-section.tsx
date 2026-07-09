"use client";

import { motion } from "framer-motion";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { testimonials as testimonialsData } from "@/lib/testimonials-data";

function initialsAvatar(initials: string, bg: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" rx="40" fill="${bg}"/><text x="50%" y="50%" dy=".35em" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" fill="#fff">${initials}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const testimonials = testimonialsData.map((t) => ({
  ...t,
  image: initialsAvatar(t.avatarInitials, t.avatarColor),
}));

const firstColumn = testimonials.slice(0, 2);
const secondColumn = testimonials.slice(2, 4);
const thirdColumn = testimonials.slice(4, 6);

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative my-10 bg-background sm:my-20">
      <div className="container mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-[540px] flex-col items-center justify-center"
        >
          <div className="flex justify-center">
            <div className="rounded-lg border border-hairline px-4 py-1 text-sm text-ink-soft">
              Testimonials
            </div>
          </div>

          <h2 className="mt-5 text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mt-5 text-center text-ink-soft">
            Real feedback from the businesses we&apos;ve helped build, launch, and grow.
          </p>
        </motion.div>

        <div className="mt-6 flex max-h-[420px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] sm:mt-10 sm:max-h-[740px]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
