import type { Metadata } from "next";
import { TeamPageContent } from "@/components/team-page-content";
import { teamMembers } from "@/lib/team-data";
import { SITE_URL, ORGANIZATION_ID } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/team`;

const PAGE_TITLE = "Our Team | Nirvix Technology";
const PAGE_DESCRIPTION =
  "Meet the engineers, designers, and project managers behind Nirvix Technology — a software development and IT company based in Lalitpur, Kathmandu, Nepal.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords: [
    "Nirvix Technology team",
    "software development team Nepal",
    "IT company team Kathmandu",
    "web developers in Nepal",
    "software engineers Lalitpur",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Nirvix Technology",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    locale: "en_US",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/logo.png"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Team", item: PAGE_URL },
  ],
};

const teamJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${PAGE_URL}#team`,
  url: PAGE_URL,
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": ORGANIZATION_ID },
  mainEntity: {
    "@id": ORGANIZATION_ID,
    employee: teamMembers.map((member) => ({
      "@type": "Person",
      "@id": `${PAGE_URL}#${member.id}`,
      name: member.name,
      jobTitle: member.role,
      image: member.image,
      worksFor: { "@id": ORGANIZATION_ID },
    })),
  },
};

export default function TeamPage() {
  return (
    <>
      <script
        id="nirvix-jsonld-team-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        id="nirvix-jsonld-team"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamJsonLd) }}
      />
      <TeamPageContent />
    </>
  );
}
