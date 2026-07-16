"use client";

import { HeroOrbitContent } from "@/components/hero-orbit-content";
import { SiteHeader } from "@/components/site-header";

export function HeroSection({
  onOpenContact,
}: {
  onOpenContact?: () => void;
}) {
  return (
    <div className="relative min-h-screen w-full">
      <SiteHeader onOpenContact={onOpenContact} />
      <HeroOrbitContent />
    </div>
  );
}
