import type { Metadata } from "next";
import { BlogPageContent } from "@/components/blog-page-content";
import { blogPosts } from "@/lib/blog-data";
import { SITE_URL, ORGANIZATION_ID } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/blog`;

const PAGE_TITLE = "Blog | Nirvix Technology";
const PAGE_DESCRIPTION =
  "Practical articles on web development, mobile apps, AI solutions, SEO, and cloud infrastructure from Nirvix Technology, a leading IT company in Nepal.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  robots: "index, follow",
  keywords: [
    "Nirvix Technology blog",
    "IT company Nepal blog",
    "web development articles Nepal",
    "software development blog Nepal",
    "SEO tips Nepal",
    "AI automation for business",
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
      name: "Blog",
      item: PAGE_URL,
    },
  ],
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${PAGE_URL}#blog`,
  url: PAGE_URL,
  name: "Nirvix Technology Blog",
  description: PAGE_DESCRIPTION,
  publisher: { "@id": ORGANIZATION_ID },
  blogPost: blogPosts.map((post) => ({
    "@type": "BlogPosting",
    "@id": `${PAGE_URL}/${post.slug}#article`,
    headline: post.title,
    description: post.excerpt,
    url: `${PAGE_URL}/${post.slug}`,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
  })),
};

export default function BlogPage() {
  return (
    <>
      <script
        id="nirvix-jsonld-blog-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        id="nirvix-jsonld-blog"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <BlogPageContent />
    </>
  );
}
