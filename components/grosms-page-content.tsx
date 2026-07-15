"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { GrosmsHeroSection } from "@/components/grosms-hero-section";
import { GrosmsFeaturesSection } from "@/components/grosms-features-section";
import { GrosmsUseCasesSection } from "@/components/grosms-use-cases-section";
import { GrosmsPricingSection } from "@/components/grosms-pricing-section";
import { FaqSection } from "@/components/faq-section";
import { SiteFooter } from "@/components/site-footer";
import { ContactModal } from "@/components/contact-modal";
import { WhatsappButton } from "@/components/whatsapp-button";
import { useSmoothScroll } from "@/components/smooth-scroll";
import { grosmsFaqItems } from "@/lib/grosms-data";

export function GrosmsPageContent() {
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
        <GrosmsHeroSection onOpenContact={openContact} />
        <GrosmsFeaturesSection />
        <GrosmsUseCasesSection />
        <GrosmsPricingSection onOpenContact={openContact} />
        <FaqSection
          id="grosms-faq"
          eyebrow="Bulk SMS FAQ"
          title="Questions About GroSMS"
          subtitle="Everything you need to know before getting started."
          items={grosmsFaqItems}
        />
        <SiteFooter onOpenContact={openContact} />
      </main>

      <AnimatePresence>
        {contactOpen && <ContactModal onClose={closeContact} />}
      </AnimatePresence>
      <WhatsappButton />
    </>
  );
}
