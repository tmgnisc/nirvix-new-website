import type { FaqItem } from "@/lib/faq-data";

export const WEB_DEV_PAGE_SLUG = "website-development-company-in-lalitpur";

export interface WebDevOffering {
  slug: string;
  name: string;
  description: string;
  icon: "Monitor" | "ShoppingCart" | "CalendarCheck" | "LayoutDashboard" | "RefreshCw" | "ShieldCheck";
  points: string[];
}

export const webDevOfferings: WebDevOffering[] = [
  {
    slug: "business-websites",
    name: "Business Websites",
    description:
      "Custom-designed company websites that load fast on a mid-range Android phone and tell visitors exactly what you do within five seconds.",
    icon: "Monitor",
    points: [
      "Custom design, not a resold theme",
      "Mobile-first, responsive layouts",
      "Content management you can edit yourself",
      "SEO-ready structure and schema from day one",
    ],
  },
  {
    slug: "ecommerce-development",
    name: "E-commerce Development",
    description:
      "Online stores built for how customers in Nepal actually pay — with local wallets and gateways integrated, not bolted on.",
    icon: "ShoppingCart",
    points: [
      "eSewa, Khalti, Fonepay, and connectIPS integration",
      "Product, inventory, and order management",
      "SMS order confirmations and delivery alerts",
      "Checkout tuned for mobile data connections",
    ],
  },
  {
    slug: "booking-websites",
    name: "Booking & Travel Websites",
    description:
      "Enquiry and booking sites for trekking agencies, tour operators, hotels, and clinics — our most-built category of website in Nepal.",
    icon: "CalendarCheck",
    points: [
      "Trip, package, and itinerary pages",
      "Enquiry and booking forms that reach your inbox",
      "Multi-currency pricing for international travellers",
      "Integration with Weavo quotations and itineraries",
    ],
  },
  {
    slug: "web-applications",
    name: "Web Applications",
    description:
      "Portals, dashboards, and internal tools built with Next.js and React when a brochure site is not enough.",
    icon: "LayoutDashboard",
    points: [
      "Customer and member portals",
      "Admin dashboards and reporting",
      "API design and third-party integrations",
      "Role-based access and secure authentication",
    ],
  },
  {
    slug: "website-redesign",
    name: "Website Redesign & Migration",
    description:
      "Rebuilding an outdated or slow site without losing the Google rankings and traffic it has already earned.",
    icon: "RefreshCw",
    points: [
      "Performance and Core Web Vitals audit",
      "URL mapping and 301 redirects",
      "WordPress and legacy platform migration",
      "Content and design refresh",
    ],
  },
  {
    slug: "maintenance-hosting",
    name: "Hosting, Maintenance & Support",
    description:
      "The part most disputes are really about. Written support terms, so you know who fixes what when something breaks.",
    icon: "ShieldCheck",
    points: [
      "Managed hosting, SSL, and backups",
      "Security and dependency updates",
      "Uptime monitoring and bug fixes",
      "Agreed response times in writing",
    ],
  },
];

export const webDevProcess: { title: string; description: string }[] = [
  {
    title: "Discover",
    description:
      "A conversation about your customers, goals, and budget range before we quote — often in person at our office in Satdobato.",
  },
  {
    title: "Plan",
    description:
      "A written scope, sitemap, and itemised quote covering design, development, content, integrations, and hosting.",
  },
  {
    title: "Design",
    description:
      "Page designs you review on your own phone before a line of production code is written.",
  },
  {
    title: "Build",
    description:
      "Development on a staging link you can open any time, with page speed, schema, and SEO structure built in.",
  },
  {
    title: "Launch & Support",
    description:
      "Go-live, Search Console setup, and handover of the domain, hosting, and code in your business's name — then ongoing support.",
  },
];

export const webDevFaqItems: FaqItem[] = [
  {
    question: "What does a website development company in Lalitpur do?",
    answer:
      "A website development company plans, designs, builds, and maintains websites and web applications. At Nirvix Technology that covers business websites, e-commerce stores with Nepali payment gateways, booking sites, custom web apps, redesigns, and hosting and support. We are based in Satdobato, Lalitpur, and work with businesses across Kathmandu valley, Australia, and New Zealand.",
  },
  {
    question: "How much does website development cost in Lalitpur?",
    answer:
      "It depends on scope. A business website, an e-commerce store with payment integration, and a custom web application are different price categories, not sizes of the same product. We give an itemised quote after a short discovery call, covering design, development, content, integrations, hosting, and maintenance, so you can compare it line by line against other quotes.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A typical business website takes three to six weeks from approved scope to launch. E-commerce stores and booking sites usually take six to ten weeks, and custom web applications are planned in phases. The biggest variable is usually how quickly content and feedback come back from the client.",
  },
  {
    question: "Can you integrate eSewa, Khalti, and other Nepali payment gateways?",
    answer:
      "Yes. We integrate eSewa, Khalti, Fonepay, and connectIPS, along with international gateways for businesses selling to customers abroad. We also connect SMS order confirmations and OTPs through our bulk SMS service.",
  },
  {
    question: "Who owns the website, domain, and source code?",
    answer:
      "You do. The domain, hosting account, and source code are registered to your business, and we are given access rather than ownership. We put this in writing before the project starts.",
  },
  {
    question: "Will my new website be SEO-friendly?",
    answer:
      "Yes. Every site we build ships with fast page loads, clean heading structure, meta titles and descriptions, schema markup, an XML sitemap, and Google Search Console set up. Because we are also an SEO company in Lalitpur, ongoing SEO work can pick up exactly where the build leaves off.",
  },
  {
    question: "Do you work with businesses outside Lalitpur?",
    answer:
      "Yes. Most of our clients are across Kathmandu valley and the rest of Nepal, and we also build websites for businesses in Australia and New Zealand. Being in Lalitpur simply means clients nearby can meet us in person.",
  },
];
