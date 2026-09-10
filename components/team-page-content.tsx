"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { TeamHeroSection } from "@/components/team-hero-section";
import { TeamSection } from "@/components/team-section";
import { HighlightsSection } from "@/components/highlights-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import StackFeatureSection from "@/components/ui/stack-feature-section";
import { SiteFooter } from "@/components/site-footer";
import { ContactModal } from "@/components/contact-modal";
import { WhatsappButton } from "@/components/whatsapp-button";
import { useSmoothScroll } from "@/components/smooth-scroll";

export function TeamPageContent() {
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
        <TeamHeroSection onOpenContact={openContact} />
        <TeamSection />
        <HighlightsSection />
        <TestimonialsSection />
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
