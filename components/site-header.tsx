"use client";

import { Button } from "@/components/ui/button";

export function SiteHeader({
  onOpenContact,
  onOpenMenu,
}: {
  onOpenContact?: () => void;
  onOpenMenu?: () => void;
}) {
  return (
    <div className="absolute z-20 top-4 flex w-full items-center justify-between gap-4 px-4 text-neutral-900 sm:top-6 sm:px-8">
      <nav className="hidden flex-1 gap-8 text-sm lg:flex">
        <a href="#about" className="opacity-70 transition-opacity hover:opacity-100">
          About Us
        </a>
      </nav>
      <div className="flex flex-1 items-center justify-end gap-3">
        <Button className="hidden rounded-full sm:inline-flex" onClick={onOpenContact}>
          Get a Quote
        </Button>
        <button
          type="button"
          aria-label="Open menu"
          onClick={onOpenMenu}
          className="grid h-10 w-10 place-items-center rounded-full bg-neutral-900/10 backdrop-blur transition-colors hover:bg-neutral-900/20"
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-px w-4 bg-current" />
            <span className="block h-px w-4 bg-current" />
          </span>
        </button>
      </div>
    </div>
  );
}
