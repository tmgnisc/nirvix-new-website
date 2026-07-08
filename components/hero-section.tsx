"use client";

import IntroAnimation from "@/components/ui/scroll-morph-hero";
import { SiteHeader } from "@/components/site-header";

export function HeroSection({
  onOpenContact,
  onOpenMenu,
}: {
  onOpenContact?: () => void;
  onOpenMenu?: () => void;
}) {
  return (
    <div className="relative h-[100svh] min-h-[36rem] w-full">
      <SiteHeader onOpenContact={onOpenContact} onOpenMenu={onOpenMenu} />
      <IntroAnimation />
    </div>
  );
}
