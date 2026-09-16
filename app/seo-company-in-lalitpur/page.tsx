import type { Metadata } from "next";
import { SeoPageContent } from "@/components/seo-page-content";
import {
  seoOfferings,
  seoFaqItems,
  seoPricingPlans,
  SEO_PAGE_SLUG,
} from "@/lib/seo-service-data";
import { SITE_URL, ORGANIZATION_ID } from "@/lib/site";
import {
  buildPricingCatalogJsonLd,
  pricingCatalogId,
  pricingOfferRefs,
} from "@/lib/pricing-schema";

const PAGE_URL = `${SITE_URL}/${SEO_PAGE_SLUG}`;

const PAGE_TITLE = "SEO Company in Lalitpur, Nepal | Nirvix Technology";
const PAGE_DESCRIPTION =
  "Nirvix Technology is an SEO company in Lalitpur, Nepal offering technical SEO, local SEO, and content that ranks. Get your free SEO audit today.";

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
    "SEO company in Lalitpur",
    "SEO agency in Lalitpur",
    "SEO services in Lalitpur",
    "best SEO company in Lalitpur",
    "SEO company in Nepal",
    "local SEO Kathmandu",
    "technical SEO Nepal",
    "SEO expert Lalitpur",
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
    { "@type": "ListItem", position: 3, name: "SEO Company in Lalitpur", item: PAGE_URL },
  ],
};

const AREA_SERVED = [
  { "@type": "City", name: "Lalitpur" },
  { "@type": "City", name: "Kathmandu" },
  { "@type": "City", name: "Bhaktapur" },
  { "@type": "Country", name: "Nepal" },
];

const pricingJsonLd = buildPricingCatalogJsonLd({
  plans: seoPricingPlans,
  pageUrl: PAGE_URL,
  anchor: "seo-pricing",
  catalogName: "SEO packages and pricing in Nepal",
  serviceType: "Search Engine Optimization",
  planSuffix: "SEO Plan",
  areaServed: AREA_SERVED,
});

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "SEO Services in Lalitpur, Nepal",
  serviceType: "Search Engine Optimization",
  description: PAGE_DESCRIPTION,
  url: PAGE_URL,
  provider: { "@id": ORGANIZATION_ID },
  areaServed: AREA_SERVED,
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: PAGE_URL,
    servicePhone: "+977-9818255423",
  },
  offers: pricingOfferRefs(seoPricingPlans, PAGE_URL),
  hasOfferCatalog: [
    {
      "@type": "OfferCatalog",
      name: "SEO services",
      itemListElement: seoOfferings.map((offering) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: offering.name,
          description: offering.description,
          provider: { "@id": ORGANIZATION_ID },
        },
      })),
    },
    { "@id": pricingCatalogId(PAGE_URL) },
  ],
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
  mainEntity: seoFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function SeoCompanyLalitpurPage() {
  return (
    <>
      <script
        id="nirvix-jsonld-seo-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        id="nirvix-jsonld-seo-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        id="nirvix-jsonld-seo-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        id="nirvix-jsonld-seo-pricing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      <script
        id="nirvix-jsonld-seo-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SeoPageContent />
    </>
  );
}
