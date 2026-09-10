"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ProjectsHeroSection } from "@/components/projects-hero-section";
import { ProjectsGridSection } from "@/components/projects-grid-section";
import { HighlightsSection } from "@/components/highlights-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import StackFeatureSection from "@/components/ui/stack-feature-section";
import { SiteFooter } from "@/components/site-footer";
import { ContactModal } from "@/components/contact-modal";
import { WhatsappButton } from "@/components/whatsapp-button";
import { useSmoothScroll } from "@/components/smooth-scroll";

export function ProjectsPageContent() {
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
        <ProjectsHeroSection onOpenContact={openContact} />
        <ProjectsGridSection />
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
