import type { Metadata } from "next";
import { Onest } from "next/font/google";
import { SmoothScrollProvider } from "@/components/smooth-scroll";
import { faqItems } from "@/lib/faq-data";
import { testimonials } from "@/lib/testimonials-data";
import { SITE_URL, ORGANIZATION_ID } from "@/lib/site";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const SITE_TITLE = "Nirvix Technology | IT Company in Nepal | Software & IT Solution";
const SITE_DESCRIPTION =
  "Nirvix Technology is a leading IT company in Nepal offering custom software, websites, AI solutions, SEO, and cloud services. Contact us today for a free consultation.";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  robots: "index, follow",
  keywords: [
    "IT company in Nepal",
    "software development company Nepal",
    "IT services Nepal",
    "web development Nepal",
    "mobile app development Nepal",
    "custom software development",
    "AI solutions Nepal",
    "SEO services Nepal",
    "cloud solutions Nepal",
    "IT consulting Nepal",
    "UI/UX design Nepal",
    "Nirvix Technology",
  ],
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    type: "website",
    siteName: "Nirvix Technology",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}/`,
    locale: "en_US",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/logo.png"],
  },
};

const SERVICES = [
  {
    name: "Web Development",
    description:
      "Custom, high-performance websites and web applications engineered for scale and speed.",
  },
  {
    name: "Mobile App Development",
    description: "Native and cross-platform mobile apps built for iOS and Android.",
  },
  {
    name: "Custom Software Development",
    description: "Tailored software solutions engineered around your business processes.",
  },
  {
    name: "AI Solutions",
    description: "AI-powered features and automation integrated into your products.",
  },
  {
    name: "SEO Services",
    description: "Search engine optimization to improve visibility and organic traffic.",
  },
  {
    name: "Cloud Solutions",
    description: "Scalable cloud infrastructure, deployment, and DevOps.",
  },
  {
    name: "IT Consulting",
    description: "Strategic technology guidance for digital transformation.",
  },
  {
    name: "UI/UX Design",
    description: "User-focused interface and experience design.",
  },
];

const averageRating =
  testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  "@id": ORGANIZATION_ID,
  name: "Nirvix Technology",
  alternateName: "Nirvix Tech",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  description: SITE_DESCRIPTION,
  email: "info@nirvixtech.com",
  telephone: "+977-9818255423",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Satdobato",
    addressLocality: "Lalitpur",
    addressCountry: "NP",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+977-9818255423",
    contactType: "customer service",
    email: "info@nirvixtech.com",
    areaServed: "Worldwide",
    availableLanguage: ["English", "Nepali"],
  },
  areaServed: "Worldwide",
  sameAs: [
    "https://www.facebook.com/p/Nirvix-Technology-61575980913561/",
    "https://www.linkedin.com/company/nirvix-technology",
    "https://www.tiktok.com/@nirvix.technology",
    "https://www.instagram.com/nirvix_tech/",
  ],
  knowsAbout: [
    "Web Development",
    "Mobile App Development",
    "Custom Software Development",
    "AI Solutions",
    "SEO",
    "Cloud Solutions",
    "IT Consulting",
    "UI/UX Design",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: averageRating.toFixed(1),
    bestRating: 5,
    worstRating: 1,
    reviewCount: testimonials.length,
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewBody: t.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating,
      bestRating: 5,
      worstRating: 1,
    },
  })),
};

const servicesJsonLd = SERVICES.map((service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: service.name,
  name: service.name,
  description: service.description,
  provider: { "@id": ORGANIZATION_ID },
  areaServed: "Worldwide",
}));

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nirvix Technology",
  url: `${SITE_URL}/`,
  publisher: {
    "@type": "Organization",
    name: "Nirvix Technology",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${onest.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <script
          id="nirvix-jsonld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          id="nirvix-jsonld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          id="nirvix-jsonld-services"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
        />
        <script
          id="nirvix-jsonld-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
