import type { Metadata } from "next";
import { GrosmsPageContent } from "@/components/grosms-page-content";
import { grosmsFaqItems } from "@/lib/grosms-data";
import { SITE_URL, ORGANIZATION_ID } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/bulk-sms-service`;

const PAGE_TITLE = "Bulk SMS Service in Nepal | GroSMS via Nirvix Technology";
const PAGE_DESCRIPTION =
  "Nirvix Technology is a technology partner for GroSMS, bringing enterprise-grade bulk SMS, OTP, and transactional messaging to businesses in Nepal — sub-second delivery, 99.94% delivery rate, and developer-friendly APIs.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  robots: "index, follow",
  keywords: [
    "bulk sms service in nepal",
    "bulk sms nepal",
    "sms api nepal",
    "otp sms api",
    "GroSMS Nepal",
    "sms gateway nepal",
    "transactional sms nepal",
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
    { "@type": "ListItem", position: 2, name: "Bulk SMS Service", item: PAGE_URL },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  serviceType: "Bulk SMS Service",
  name: "Bulk SMS Service in Nepal (GroSMS)",
  description: PAGE_DESCRIPTION,
  url: PAGE_URL,
  areaServed: "Nepal",
  brand: {
    "@type": "Brand",
    name: "GroSMS",
    url: "https://www.grosms.com/",
  },
  provider: { "@id": ORGANIZATION_ID },
  offers: {
    "@type": "Offer",
    seller: { "@id": ORGANIZATION_ID },
    priceCurrency: "NPR",
    availability: "https://schema.org/InStock",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  mainEntity: grosmsFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function BulkSmsServicePage() {
  return (
    <>
      <script
        id="nirvix-jsonld-grosms-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        id="nirvix-jsonld-grosms-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        id="nirvix-jsonld-grosms-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <GrosmsPageContent />
    </>
  );
}
