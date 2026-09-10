import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostContent } from "@/components/blog-post-content";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog-data";
import { SITE_URL, ORGANIZATION_ID } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return { title: "Article Not Found | Nirvix Technology" };
  }

  const pageUrl = `${SITE_URL}/blog/${post.slug}`;
  // metaTitle/metaDescription let a post ship a length-tuned SERP snippet; the
  // on-page title and excerpt are the fallback.
  const title = post.metaTitle ?? `${post.title} | Nirvix Technology Blog`;
  const description = post.metaDescription ?? post.excerpt;

  return {
    title,
    description,
    ...(post.keywords ? { keywords: post.keywords } : {}),
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
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "article",
      siteName: "Nirvix Technology",
      title: post.title,
      description,
      url: pageUrl,
      locale: "en_US",
      images: ["/logo.png"],
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: ["/logo.png"],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const pageUrl = `${SITE_URL}/blog/${post.slug}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${pageUrl}#article`,
    headline: post.title,
    description: post.excerpt,
    url: pageUrl,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en-US",
    author: { "@type": "Organization", name: post.author, "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    articleSection: post.category,
    image: `${SITE_URL}/logo.png`,
  };

  return (
    <>
      <script
        id="nirvix-jsonld-post-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        id="nirvix-jsonld-post-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BlogPostContent post={post} />
    </>
  );
}
