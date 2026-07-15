import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/services-page-content";
import { services } from "@/lib/services-data";
import { servicesFaqItems } from "@/lib/faq-data";
import { SITE_URL, ORGANIZATION_ID } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/services`;

const PAGE_TITLE = "Website Development Company in Nepal | Nirvix Technology";
const PAGE_DESCRIPTION =
  "Nirvix Technology is a website development company in Nepal offering web development, mobile apps, custom software, AI solutions, SEO, and cloud services. Get a free quote today.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  robots: "index, follow",
  keywords: [
    "website development company in Nepal",
    "web development Nepal",
    "software development company Nepal",
    "mobile app development Nepal",
    "custom software development Nepal",
    "AI solutions Nepal",
    "SEO services Nepal",
    "cloud solutions Nepal",
    "IT consulting Nepal",
    "UI/UX design Nepal",
    "Nirvix Technology services",
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
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: PAGE_URL,
    },
  ],
};

const collectionPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    name: "Nirvix Technology",
    url: `${SITE_URL}/`,
  },
  about: { "@id": ORGANIZATION_ID },
  breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: services.map((service, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        "@id": `${PAGE_URL}#${service.slug}`,
        name: service.name,
        description: service.description,
        url: `${PAGE_URL}#${service.slug}`,
        provider: { "@id": ORGANIZATION_ID },
        areaServed: "Worldwide",
      },
    })),
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  mainEntity: servicesFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        id="nirvix-jsonld-services-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        id="nirvix-jsonld-services-collection"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }}
      />
      <script
        id="nirvix-jsonld-services-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ServicesPageContent />
    </>
  );
}
