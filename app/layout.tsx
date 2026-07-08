import type { Metadata } from "next";
import { Onest } from "next/font/google";
import Script from "next/script";
import { SmoothScrollProvider } from "@/components/smooth-scroll";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Nirvix Technology | Best Software Development & IT Services in Nepal",
  description:
    "Nirvix Technology delivers high-performance web, mobile, and custom software solutions in Nepal. Scale your business with clean code and modern UI/UX. Get a free quote!",
  metadataBase: new URL("https://nirvixtech.com"),
  robots: "index, follow",
  keywords: [
    "software development company Nepal",
    "IT services Nepal",
    "web development Nepal",
    "mobile app development Nepal",
    "custom software development",
    "IT consulting Nepal",
    "UI/UX design Nepal",
    "Nirvix Technology",
  ],
  alternates: {
    canonical: "https://nirvixtech.com/",
  },
  openGraph: {
    type: "website",
    siteName: "Nirvix Technology",
    title: "Nirvix Technology | Best Software Development & IT Services in Nepal",
    description:
      "Nirvix Technology delivers high-performance web, mobile, and custom software solutions in Nepal. Scale your business with clean code and modern UI/UX.",
    url: "https://nirvixtech.com/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nirvix Technology | Best Software Development & IT Services in Nepal",
    description:
      "Nirvix Technology delivers high-performance web, mobile, and custom software solutions in Nepal.",
  },
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230f2f63' stroke-width='2' stroke-linecap='round'%3E%3Ccircle cx='12' cy='12' r='9'/%3E%3Cpath d='M4.8 5.6A9 9 0 0 0 4.8 18.4'/%3E%3Cpath d='M19.2 5.6a9 9 0 0 1 0 12.8'/%3E%3C/svg%3E",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Nirvix Technology",
  alternateName: "Nirvix Tech",
  url: "https://nirvixtech.com/",
  description:
    "Nirvix Technology delivers high-performance web, mobile, and custom software solutions in Nepal.",
  email: "info@nirvixtech.com",
  telephone: "+977-9818255423",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Harisiddhi",
    addressLocality: "Lalitpur",
    addressCountry: "NP",
  },
  areaServed: "Worldwide",
  knowsAbout: [
    "Web Development",
    "Mobile App Development",
    "Custom Software Development",
    "IT Consulting",
    "UI/UX Design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${onest.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Script
          id="nirvix-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
