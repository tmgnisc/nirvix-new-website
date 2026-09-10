"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSectionWithBentoGrid } from "@/components/ui/feature-section-with-bento-grid";
import FeatureSection from "@/components/ui/feature-section";
import { HighlightsSection } from "@/components/highlights-section";
import { WeavoShowcaseSection } from "@/components/weavo-showcase-section";
import { GrosmsShowcaseSection } from "@/components/grosms-showcase-section";
import { ProjectsSection } from "@/components/projects-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FaqSection } from "@/components/faq-section";
import StackFeatureSection from "@/components/ui/stack-feature-section";
import { SiteFooter } from "@/components/site-footer";
import { ContactModal } from "@/components/contact-modal";
import { WhatsappButton } from "@/components/whatsapp-button";
import { useSmoothScroll } from "@/components/smooth-scroll";
import { faqItems } from "@/lib/faq-data";

// FAQPage markup belongs only on the page that renders these questions. It used to sit
// in the root layout, which put it on /projects, /team, /blog and every article too —
// pages that never show them — and produced a second, conflicting FAQPage on the four
// pages that have FAQs of their own.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const { lock } = useSmoothScroll();

  function openContact() {
    setContactOpen(true);
    lock(true);
  }
  function closeContact() {
    setContactOpen(false);
    lock(false);
  }

  return (
    <>
      <script
        id="nirvix-jsonld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main id="top" className="w-full overflow-x-clip">
        <HeroSection onOpenContact={openContact} />
        <section id="about">
          <FeaturesSectionWithBentoGrid />
        </section>
        <FeatureSection />
        <HighlightsSection />
        <WeavoShowcaseSection />
        <GrosmsShowcaseSection />
        <ProjectsSection />
        <TestimonialsSection />
        <FaqSection />
        <StackFeatureSection onOpenContact={openContact} />
        <SiteFooter onOpenContact={openContact} />
      </main>

      <AnimatePresence>
        {contactOpen && <ContactModal onClose={closeContact} />}
      </AnimatePresence>
      <WhatsappButton />
    </>
  );
}
