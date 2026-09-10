import type { FaqItem } from "@/lib/faq-data";

export const SEO_PAGE_SLUG = "seo-company-in-lalitpur";

export interface SeoOffering {
  slug: string;
  name: string;
  description: string;
  icon: "Wrench" | "MapPin" | "FileText" | "Sparkles" | "Link2" | "ShoppingCart";
  points: string[];
}

export const seoOfferings: SeoOffering[] = [
  {
    slug: "technical-seo",
    name: "Technical SEO",
    description:
      "The foundation most sites in Nepal are missing. We fix what stops Google indexing and ranking your pages in the first place.",
    icon: "Wrench",
    points: [
      "Core Web Vitals and page speed",
      "Crawlability, indexing, and canonical fixes",
      "Structured data and schema markup",
      "Mobile-first and responsive audits",
    ],
  },
  {
    slug: "local-seo",
    name: "Local SEO",
    description:
      "How you show up when someone in Lalitpur or Kathmandu searches for what you sell — on Maps, in the local pack, and in AI answers.",
    icon: "MapPin",
    points: [
      "Google Business Profile optimisation",
      "Local citations and NAP consistency",
      "Location and service-area pages",
      "Review strategy that earns real ratings",
    ],
  },
  {
    slug: "on-page-seo",
    name: "On-Page SEO",
    description:
      "Titles, headings, internal links, and content structured so a search engine can tell exactly what each page is for.",
    icon: "FileText",
    points: [
      "Keyword mapping across your site",
      "Meta titles and descriptions that earn clicks",
      "Heading hierarchy and internal linking",
      "Content gaps against ranking competitors",
    ],
  },
  {
    slug: "content-and-aeo",
    name: "Content & Answer Engine Optimization",
    description:
      "Search is shifting from ten blue links to a single AI answer. We write so you get cited, not skipped.",
    icon: "Sparkles",
    points: [
      "Question-led content that AI can quote",
      "Entity and schema clarity for AI search",
      "Topic clusters around your services",
      "Content refreshes for decaying pages",
    ],
  },
  {
    slug: "link-building",
    name: "Link Building & Digital PR",
    description:
      "Earned links from real Nepali and international publications — no paid link schemes that risk a manual action.",
    icon: "Link2",
    points: [
      "Local directory and association listings",
      "Digital PR and journalist outreach",
      "Guest contributions on relevant sites",
      "Backlink audits and toxic link cleanup",
    ],
  },
  {
    slug: "ecommerce-seo",
    name: "E-commerce SEO",
    description:
      "Category and product pages that rank, for stores selling into Nepal and beyond.",
    icon: "ShoppingCart",
    points: [
      "Category and product page architecture",
      "Product schema and rich results",
      "Faceted navigation and index bloat",
      "Conversion-focused search intent mapping",
    ],
  },
];

export const seoProcess: { title: string; description: string }[] = [
  {
    title: "Audit",
    description:
      "We crawl your site, pull your Search Console data, and benchmark you against the businesses currently outranking you in Nepal.",
  },
  {
    title: "Fix",
    description:
      "Technical blockers first — speed, indexing, schema, and structure. This is usually where the fastest wins are hiding.",
  },
  {
    title: "Build",
    description:
      "Keyword-mapped pages, local landing pages, and content written for both search engines and the AI answers above them.",
  },
  {
    title: "Earn",
    description:
      "Links and citations from real sources — directories, associations, press, and partners — never bought links.",
  },
  {
    title: "Measure",
    description:
      "Monthly reporting on rankings, traffic, and enquiries, so you can see what the work is actually returning.",
  },
];

export const seoFaqItems: FaqItem[] = [
  {
    question: "What does an SEO company in Lalitpur actually do?",
    answer:
      "An SEO company improves how visible your website is in search results. At Nirvix Technology that means three things: fixing technical problems that stop Google indexing your site, restructuring and writing pages around the terms your customers actually search, and earning links and citations that build authority. We work from Satdobato, Lalitpur, with clients across Kathmandu valley and internationally.",
  },
  {
    question: "How much do SEO services in Lalitpur cost?",
    answer:
      "It depends on the size of your site and how competitive your market is. A one-off technical audit and fix is a fixed-scope project; ongoing SEO is usually a monthly retainer covering content, links, and reporting. We quote after a free audit, so the number reflects your site rather than a package price list.",
  },
  {
    question: "How long does SEO take to show results in Nepal?",
    answer:
      "Technical fixes can move rankings within weeks. Competitive commercial terms typically take three to six months of consistent work, and local pack visibility often moves faster than that. Anyone promising page one in thirty days is either targeting terms nobody searches or using tactics that risk a penalty.",
  },
  {
    question: "Do you offer local SEO for businesses in Kathmandu valley?",
    answer:
      "Yes. Local SEO is a large part of what we do — Google Business Profile optimisation, local citations, consistent NAP details, service-area pages, and a review strategy. This is what determines whether you appear when someone nearby searches for your service on Google or Maps.",
  },
  {
    question: "Can you improve SEO for a website you did not build?",
    answer:
      "Yes. We work on existing sites on WordPress, Shopify, custom builds, and everything in between. The audit tells us whether the current platform can get you where you want to go, or whether the structural limits of the build are the thing holding rankings back.",
  },
  {
    question: "Do you use paid links or PBNs?",
    answer:
      "No. Paid links and private blog networks violate Google's spam policies and put your domain at risk of a manual action that is slow and expensive to recover from. We build links through directories, associations, digital PR, genuine guest contributions, and content worth citing.",
  },
  {
    question: "How is SEO different now that AI answers appear above the results?",
    answer:
      "The goal shifts from ranking to being the source an AI answer is built from — often called Answer Engine Optimization. In practice it rewards the same fundamentals: fast crawlable pages, accurate schema, consistent business details, and content that answers a question directly instead of burying it. We build that into every engagement.",
  },
];
