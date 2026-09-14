import type { Metadata } from "next";
import { WebDevPageContent } from "@/components/web-dev-page-content";
import {
  webDevOfferings,
  webDevFaqItems,
  WEB_DEV_PAGE_SLUG,
} from "@/lib/web-development-service-data";
import { SITE_URL, ORGANIZATION_ID } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/${WEB_DEV_PAGE_SLUG}`;

const PAGE_TITLE = "Website Development Company in Lalitpur | Nirvix Technology";
const PAGE_DESCRIPTION =
  "Nirvix Technology is a website development company in Lalitpur, Nepal building fast, SEO-ready business websites, e-commerce stores, and web apps. Free quote.";

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
    "website development company in Lalitpur",
    "web development company in Lalitpur",
    "website design company in Lalitpur",
    "best website development company in Lalitpur",
    "web developer Lalitpur",
    "website development company in Nepal",
    "e-commerce website development Nepal",
    "website design Kathmandu",
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
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Website Development Company in Lalitpur",
      item: PAGE_URL,
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Website Development Services in Lalitpur, Nepal",
  serviceType: "Website Development",
  description: PAGE_DESCRIPTION,
  url: PAGE_URL,
  provider: { "@id": ORGANIZATION_ID },
  areaServed: [
    { "@type": "City", name: "Lalitpur" },
    { "@type": "City", name: "Kathmandu" },
    { "@type": "City", name: "Bhaktapur" },
    { "@type": "Country", name: "Nepal" },
    { "@type": "Country", name: "Australia" },
    { "@type": "Country", name: "New Zealand" },
  ],
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: PAGE_URL,
    servicePhone: "+977-9818255423",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Website development services",
    itemListElement: webDevOfferings.map((offering) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: offering.name,
        description: offering.description,
        provider: { "@id": ORGANIZATION_ID },
      },
    })),
  },
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": ORGANIZATION_ID },
  primaryImageOfPage: `${SITE_URL}/logo.png`,
  breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
  mainEntity: { "@id": `${PAGE_URL}#service` },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  mainEntity: webDevFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function WebsiteDevelopmentCompanyLalitpurPage() {
  return (
    <>
      <script
        id="nirvix-jsonld-webdev-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        id="nirvix-jsonld-webdev-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        id="nirvix-jsonld-webdev-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        id="nirvix-jsonld-webdev-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <WebDevPageContent />
    </>
  );
}
