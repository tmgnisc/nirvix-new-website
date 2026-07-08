"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Loader } from "@/components/loader";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import FeatureSection from "@/components/ui/feature-section";
import { HighlightsSection } from "@/components/highlights-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import StackFeatureSection from "@/components/ui/stack-feature-section";
import { SiteFooter } from "@/components/site-footer";
import { ContactModal } from "@/components/contact-modal";
import { MenuOverlay } from "@/components/menu-overlay";
import { useSmoothScroll } from "@/components/smooth-scroll";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lenis, lock } = useSmoothScroll();

  function openContact() {
    setContactOpen(true);
    lock(true);
  }
  function closeContact() {
    setContactOpen(false);
    lock(false);
  }
  function openMenu() {
    setMenuOpen(true);
    lock(true);
  }
  function closeMenu() {
    setMenuOpen(false);
    lock(false);
  }
  function scrollToSection(href: string) {
    const id = href.replace("#", "");
    const el = document.getElementById(id) || document.body;
    if (lenis) lenis.scrollTo(el);
    else el.scrollIntoView({ behavior: "smooth" });
  }
  function navigateTo(href: string) {
    closeMenu();
    scrollToSection(href);
  }

  return (
    <>
      <Loader />
      <main id="top" className="w-full overflow-x-clip">
        <HeroSection onOpenContact={openContact} onOpenMenu={openMenu} />
        <AboutSection />
        <FeatureSection />
        <HighlightsSection />
        <TestimonialsSection />
        <StackFeatureSection onOpenContact={openContact} onLearnMore={() => scrollToSection("#about")} />
        <SiteFooter onOpenContact={openContact} />
      </main>

      <AnimatePresence>
        {contactOpen && <ContactModal onClose={closeContact} />}
      </AnimatePresence>
      <AnimatePresence>
        {menuOpen && (
          <MenuOverlay onClose={closeMenu} onOpenContact={openContact} onNavigate={navigateTo} />
        )}
      </AnimatePresence>
    </>
  );
}
