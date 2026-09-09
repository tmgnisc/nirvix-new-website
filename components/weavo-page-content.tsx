"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { WeavoHeroSection } from "@/components/weavo-hero-section";
import { WeavoFeaturesSection } from "@/components/weavo-features-section";
import { WeavoScreensSection } from "@/components/weavo-screens-section";
import { FaqSection } from "@/components/faq-section";
import { SiteFooter } from "@/components/site-footer";
import { ContactModal } from "@/components/contact-modal";
import { WhatsappButton } from "@/components/whatsapp-button";
import { useSmoothScroll } from "@/components/smooth-scroll";
import { weavoFaqItems } from "@/lib/weavo-data";

export function WeavoPageContent() {
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
        <WeavoHeroSection onOpenContact={openContact} />
        <WeavoFeaturesSection />
        <WeavoScreensSection />
        <FaqSection
          id="weavo-faq"
          eyebrow="Weavo FAQ"
          title="Questions About Weavo"
          subtitle="Everything travel agencies ask us before moving off Word documents."
          items={weavoFaqItems}
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
