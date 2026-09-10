import type { Metadata } from "next";
import { ProjectsPageContent } from "@/components/projects-page-content";
import { projects } from "@/lib/projects-data";
import { SITE_URL, ORGANIZATION_ID } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/projects`;

const PAGE_TITLE = "Our Projects | Web Development Portfolio | Nirvix Technology";
const PAGE_DESCRIPTION =
  "Explore websites built by Nirvix Technology — travel, real estate, news, education, and non-profit sites across Nepal, Australia, and New Zealand.";

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
    "Nirvix Technology projects",
    "web development portfolio Nepal",
    "website design portfolio Nepal",
    "IT company Nepal portfolio",
    "websites built in Nepal",
    "travel agency website Nepal",
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
    { "@type": "ListItem", position: 2, name: "Projects", item: PAGE_URL },
  ],
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${PAGE_URL}#projects`,
  url: PAGE_URL,
  name: "Nirvix Technology Projects",
  description: PAGE_DESCRIPTION,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": ORGANIZATION_ID },
  mainEntity: {
    "@type": "ItemList",
    name: "Websites built by Nirvix Technology",
    numberOfItems: projects.length,
    itemListElement: projects.map((project, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "WebSite",
        name: project.name,
        url: project.url,
        description: project.description,
        image: `${SITE_URL}/projects/${project.slug}-desktop.webp`,
        creator: { "@id": ORGANIZATION_ID },
      },
    })),
  },
};

export default function ProjectsPage() {
  return (
    <>
      <script
        id="nirvix-jsonld-projects-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        id="nirvix-jsonld-projects"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <ProjectsPageContent />
    </>
  );
}
