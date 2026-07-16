"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSectionWithBentoGrid } from "@/components/ui/feature-section-with-bento-grid";
import FeatureSection from "@/components/ui/feature-section";
import { HighlightsSection } from "@/components/highlights-section";
import { GrosmsShowcaseSection } from "@/components/grosms-showcase-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FaqSection } from "@/components/faq-section";
import StackFeatureSection from "@/components/ui/stack-feature-section";
import { SiteFooter } from "@/components/site-footer";
import { ContactModal } from "@/components/contact-modal";
import { WhatsappButton } from "@/components/whatsapp-button";
import { useSmoothScroll } from "@/components/smooth-scroll";

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
      <main id="top" className="w-full overflow-x-clip">
        <HeroSection onOpenContact={openContact} />
        <section id="about">
          <FeaturesSectionWithBentoGrid />
        </section>
        <FeatureSection />
        <HighlightsSection />
        <GrosmsShowcaseSection />
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
