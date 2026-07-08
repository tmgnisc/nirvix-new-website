"use client";

import { motion } from "framer-motion";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

function initialsAvatar(initials: string, bg: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" rx="40" fill="${bg}"/><text x="50%" y="50%" dy=".35em" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" fill="#fff">${initials}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const testimonials = [
  {
    text: "Nirvix Technology helped us create a seamless, user-friendly booking platform for our clients. The custom features, including real-time availability and personalized travel packages, have significantly improved our customer experience.",
    image: initialsAvatar("MP", "#0168b5"),
    name: "Mira Pandey",
    role: "CEO, Leaf Tours and Travels",
  },
  {
    text: "Working with Nirvix was an absolute dream. They took my vision and turned it into a beautifully designed personal blog that perfectly represents my voice. The site is sleek, fast, and easy to manage!",
    image: initialsAvatar("RK", "#0f2f63"),
    name: "Roshan KC",
    role: "Zen Career Hub",
  },
  {
    text: "Working with Nirvix Technology has been an amazing experience. They delivered a clean, fast, and professional website that truly reflects our cleaning business in New Zealand. The team communicated clearly, met every deadline, and went beyond what we expected. Highly recommended!",
    image: initialsAvatar("PR", "#5790e6"),
    name: "Prabin",
    role: "LuxeShine Cleaning, New Zealand",
  },
  {
    text: "Nirvix Technology built our news portal exactly the way we envisioned it. The platform is fast, secure, and easy to manage. Their team understood every requirement and delivered a clean, modern, and reliable system. Truly impressed with their dedication and professionalism.",
    image: initialsAvatar("KJ", "#0b6e97"),
    name: "Keshabraj Joshi",
    role: "SeropheroOnline",
  },
];

const firstColumn = testimonials.slice(0, 2);
const secondColumn = testimonials.slice(2, 3);
const thirdColumn = testimonials.slice(3, 4);

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative my-20 bg-background">
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

        <div className="mt-10 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
