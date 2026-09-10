import type { Metadata } from "next";
import { Onest } from "next/font/google";
import { SmoothScrollProvider } from "@/components/smooth-scroll";
import { SITE_URL, ORGANIZATION_ID } from "@/lib/site";
import { WEAVO_APP_URL, WEAVO_DESCRIPTION } from "@/lib/weavo-data";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const SITE_TITLE = "IT & Software Company in Lalitpur, Nepal | Nirvix Technology";
const SITE_DESCRIPTION =
  "Nirvix Technology is an IT and software company in Lalitpur, Nepal — custom websites, mobile apps, AI solutions, and SEO. Book a free consultation.";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
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
    "IT company in Kathmandu",
    "software company in Lalitpur",
    "web design company in Kathmandu",
    "software development company in Kathmandu",
    "travel agency software Nepal",
    "bulk SMS service in Nepal",
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

const WEAVO_ID = `${SITE_URL}/weavo#software`;

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
  // NOTE: locality-level coordinates for Satdobato, Lalitpur. Replace with the
  // exact office pin from your Google Business Profile for best local ranking.
  geo: {
    "@type": "GeoCoordinates",
    latitude: 27.6588,
    longitude: 85.3247,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+977-9818255423",
    contactType: "customer service",
    email: "info@nirvixtech.com",
    areaServed: "Worldwide",
    availableLanguage: ["English", "Nepali"],
  },
  areaServed: [
    { "@type": "City", name: "Lalitpur" },
    { "@type": "City", name: "Kathmandu" },
    { "@type": "City", name: "Bhaktapur" },
    { "@type": "City", name: "Pokhara" },
    { "@type": "Country", name: "Nepal" },
    "Worldwide",
  ],
  foundingLocation: {
    "@type": "Place",
    name: "Lalitpur, Nepal",
  },
  slogan: "Your trusted tech partner from Nepal",
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
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT & Software Services in Nepal",
    itemListElement: SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: { "@id": ORGANIZATION_ID },
      },
    })),
  },
  owns: { "@id": WEAVO_ID },
  // NOTE: no aggregateRating/review here on purpose. Google treats review markup a
  // business publishes about itself as self-serving (disallowed for Organization /
  // LocalBusiness), and this node is injected site-wide by the root layout, so it
  // flagged every page — including /blog — with "multiple aggregate ratings" in GSC.
  // Star ratings should come from the Google Business Profile instead.
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

const weavoProductJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": WEAVO_ID,
  name: "Weavo",
  alternateName: "Weavo by Nirvix Technology",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Travel Agency Software",
  operatingSystem: "Web browser",
  url: `${SITE_URL}/weavo`,
  sameAs: [WEAVO_APP_URL],
  description: WEAVO_DESCRIPTION,
  image: `${SITE_URL}/products/weavo-dashboard.webp`,
  publisher: { "@id": ORGANIZATION_ID },
  author: { "@id": ORGANIZATION_ID },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
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
      <head>
        {/* Team photos and product shots are served from ImageKit — open the
            connection during HTML parse instead of after the first <img>. */}
        <link rel="preconnect" href="https://ik.imagekit.io" crossOrigin="" />
        <link rel="dns-prefetch" href="https://ik.imagekit.io" />
      </head>
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
          id="nirvix-jsonld-weavo-product"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(weavoProductJsonLd) }}
        />
        <script
          id="nirvix-jsonld-services"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
        />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
