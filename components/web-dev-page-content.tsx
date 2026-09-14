"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { WebDevHeroSection } from "@/components/web-dev-hero-section";
import { WebDevServicesSection } from "@/components/web-dev-services-section";
import { HighlightsSection } from "@/components/highlights-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FaqSection } from "@/components/faq-section";
import StackFeatureSection from "@/components/ui/stack-feature-section";
import { SiteFooter } from "@/components/site-footer";
import { ContactModal } from "@/components/contact-modal";
import { WhatsappButton } from "@/components/whatsapp-button";
import { useSmoothScroll } from "@/components/smooth-scroll";
import { webDevFaqItems } from "@/lib/web-development-service-data";

export function WebDevPageContent() {
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
        <WebDevHeroSection onOpenContact={openContact} />
        <WebDevServicesSection />
        <HighlightsSection />
        <TestimonialsSection />
        <FaqSection
          id="web-development-faq"
          eyebrow="Web Development FAQ"
          title="Website Development Questions Businesses in Lalitpur Ask"
          subtitle="Straight answers on cost, timelines, ownership, and what goes into a website that actually works for a business in Nepal."
          items={webDevFaqItems}
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
