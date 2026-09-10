import type { Metadata } from "next";
import { NotFoundContent } from "@/components/not-found-content";

// This override is required, not optional: the root layout sets robots index:true,
// and without cancelling it here the 404 ships an `index, follow` tag. `follow` stays
// on so Google keeps crawling the recovery links to the new pages.
export const metadata: Metadata = {
  title: "Page Not Found | Nirvix Technology",
  description:
    "That page has moved or been retired. Find our services, projects, team, and blog from here.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <NotFoundContent />;
}
