"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ServicesHeroSection } from "@/components/services-hero-section";
import { ServicesGridSection } from "@/components/services-grid-section";
import { ServicesProcessSection } from "@/components/services-process-section";
import { HighlightsSection } from "@/components/highlights-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FaqSection } from "@/components/faq-section";
import StackFeatureSection from "@/components/ui/stack-feature-section";
import { SiteFooter } from "@/components/site-footer";
import { ContactModal } from "@/components/contact-modal";
import { WhatsappButton } from "@/components/whatsapp-button";
import { useSmoothScroll } from "@/components/smooth-scroll";
import { servicesFaqItems } from "@/lib/faq-data";

export function ServicesPageContent() {
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
        <ServicesHeroSection onOpenContact={openContact} />
        <ServicesGridSection />
        <ServicesProcessSection />
        <HighlightsSection />
        <TestimonialsSection />
        <FaqSection
          id="services-faq"
          eyebrow="Services FAQ"
          title="Questions About Our Services"
          subtitle="Everything you need to know before starting a project with Nirvix Technology."
          items={servicesFaqItems}
        />
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
