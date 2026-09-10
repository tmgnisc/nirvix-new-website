import type { Metadata } from "next";
import { WeavoPageContent } from "@/components/weavo-page-content";
import { weavoFaqItems, WEAVO_APP_URL, WEAVO_DESCRIPTION } from "@/lib/weavo-data";
import { SITE_URL, ORGANIZATION_ID } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/weavo`;

const PAGE_TITLE = "Weavo — Travel Agency Software in Nepal | Nirvix Technology";
// WEAVO_DESCRIPTION stays long for the JSON-LD; the SERP snippet needs to fit ~160.
const PAGE_DESCRIPTION =
  "Weavo is travel agency software by Nirvix Technology in Nepal. Turn a trip into a branded, priced quotation, itinerary or voucher PDF in minutes. Free plan.";

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
    "travel agency software Nepal",
    "tour operator software Nepal",
    "quotation software for travel agency",
    "itinerary builder software",
    "travel itinerary software Nepal",
    "trekking agency software Nepal",
    "hotel voucher software",
    "Weavo",
    "Weavo Nirvix Technology",
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
    images: [
      {
        url: "/products/weavo-dashboard.webp",
        width: 1920,
        height: 1200,
        alt: "The Weavo dashboard by Nirvix Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/products/weavo-dashboard.webp"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Weavo", item: PAGE_URL },
  ],
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${PAGE_URL}#software`,
  name: "Weavo",
  alternateName: "Weavo by Nirvix Technology",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Travel Agency Software",
  operatingSystem: "Web browser",
  url: PAGE_URL,
  sameAs: [WEAVO_APP_URL],
  description: WEAVO_DESCRIPTION,
  screenshot: [
    `${SITE_URL}/products/weavo-dashboard.webp`,
    `${SITE_URL}/products/weavo-document-builder.webp`,
    `${SITE_URL}/products/weavo-documents.webp`,
  ],
  featureList: [
    "Branded quotations with priced service lines, discount and tax",
    "Day-by-day itineraries on your own letterhead",
    "Hotel confirmation vouchers with room type and meal plan",
    "Reusable library of customers, hotels and packages",
    "Live letterhead preview rendered by the same engine as the PDF",
    "Multi-currency pricing set per document",
    "Email documents from Weavo with a delivery record",
    "Admin and staff accounts per workspace",
  ],
  publisher: { "@id": ORGANIZATION_ID },
  author: { "@id": ORGANIZATION_ID },
  provider: { "@id": ORGANIZATION_ID },
  offers: [
    {
      "@type": "Offer",
      name: "Free",
      price: "0",
      priceCurrency: "NPR",
      description: "5 documents a month, 1 letterhead template, no card required.",
      availability: "https://schema.org/InStock",
      url: WEAVO_APP_URL,
    },
    {
      "@type": "Offer",
      name: "Standard",
      price: "299",
      priceCurrency: "NPR",
      description:
        "Unlimited documents, up to 10 letterhead templates, email delivery, team accounts. Per workspace, billed monthly.",
      availability: "https://schema.org/InStock",
      url: WEAVO_APP_URL,
    },
    {
      "@type": "Offer",
      name: "Premium",
      price: "499",
      priceCurrency: "NPR",
      description:
        "Unlimited letterhead templates, new document types on release, priority support and guided onboarding. Per workspace, billed monthly.",
      availability: "https://schema.org/InStock",
      url: WEAVO_APP_URL,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  mainEntity: weavoFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function WeavoPage() {
  return (
    <>
      <script
        id="nirvix-jsonld-weavo-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        id="nirvix-jsonld-weavo-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        id="nirvix-jsonld-weavo-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <WeavoPageContent />
    </>
  );
}
