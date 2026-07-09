"use client";

import { Button } from "@/components/ui/button";

export function SiteHeader({
  onOpenContact,
}: {
  onOpenContact?: () => void;
}) {
  return (
    <div className="absolute z-20 top-4 flex w-full items-center justify-between gap-4 px-4 text-neutral-900 sm:top-6 sm:px-8">
      <nav className="hidden flex-1 gap-8 text-sm lg:flex">
        <a href="#about" className="opacity-70 transition-opacity hover:opacity-100">
          About Us
        </a>
      </nav>
      <div className="flex flex-1 items-center justify-end gap-3">
        <Button className="rounded-full" onClick={onOpenContact}>
          Get a Quote
        </Button>
      </div>
    </div>
  );
}
