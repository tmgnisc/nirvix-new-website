"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { SeoHeroSection } from "@/components/seo-hero-section";
import { SeoServicesSection } from "@/components/seo-services-section";
import { HighlightsSection } from "@/components/highlights-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FaqSection } from "@/components/faq-section";
import StackFeatureSection from "@/components/ui/stack-feature-section";
import { SiteFooter } from "@/components/site-footer";
import { ContactModal } from "@/components/contact-modal";
import { WhatsappButton } from "@/components/whatsapp-button";
import { useSmoothScroll } from "@/components/smooth-scroll";
import { seoFaqItems } from "@/lib/seo-service-data";

export function SeoPageContent() {
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
        <SeoHeroSection onOpenContact={openContact} />
        <SeoServicesSection />
        <HighlightsSection />
        <TestimonialsSection />
        <FaqSection
          id="seo-faq"
          eyebrow="SEO FAQ"
          title="SEO Questions Businesses in Lalitpur Ask"
          subtitle="Straight answers on cost, timelines, and what SEO can and cannot do for a business in Nepal."
          items={seoFaqItems}
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
