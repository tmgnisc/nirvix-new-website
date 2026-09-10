import { SITE_URL } from "@/lib/site";
import { services } from "@/lib/services-data";
import { projects } from "@/lib/projects-data";
import { blogPosts } from "@/lib/blog-data";
import { teamMembers } from "@/lib/team-data";
import { faqItems, servicesFaqItems } from "@/lib/faq-data";

// Built entirely from local data, so render it once at build time rather than per
// request (App Router GET handlers default to dynamic since v15).
export const dynamic = "force-static";

/** Strips the inline HTML the blog body carries so the summary stays plain text. */
function plain(text: string) {
  return text.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

/**
 * llms.txt — a curated, machine-readable map of the site for LLMs and AI search
 * crawlers (see llmstxt.org). Kept in sync with the same data the pages render from,
 * so it can't drift the way a hand-written static file would.
 */
function buildLlmsTxt() {
  const lines: string[] = [];

  lines.push("# Nirvix Technology");
  lines.push("");
  lines.push(
    "> An IT and software development company based in Satdobato, Lalitpur, Nepal. " +
      "We build custom websites, mobile apps, AI solutions, and cloud infrastructure " +
      "for businesses in Nepal and internationally, and we run two products of our own."
  );
  lines.push("");
  lines.push(
    "Nirvix Technology works with clients across Nepal, Australia, and New Zealand. " +
      "Contact: info@nirvixtech.com, +977-9818255423. Office: Satdobato, Lalitpur, Nepal."
  );
  lines.push("");

  lines.push("## Core pages");
  lines.push("");
  lines.push(`- [Home](${SITE_URL}/): IT and software company in Lalitpur, Nepal.`);
  lines.push(
    `- [Services](${SITE_URL}/services): Web, mobile, custom software, AI, SEO, and cloud services.`
  );
  lines.push(
    `- [Projects](${SITE_URL}/projects): Portfolio of ${projects.length} live client websites.`
  );
  lines.push(
    `- [Team](${SITE_URL}/team): The ${teamMembers.length} engineers, designers, and managers behind the work.`
  );
  lines.push(
    `- [SEO Company in Lalitpur](${SITE_URL}/seo-company-in-lalitpur): Technical SEO, local SEO, and answer-engine optimisation for businesses in Lalitpur and Kathmandu.`
  );
  lines.push(`- [Blog](${SITE_URL}/blog): Articles on web, AI, SEO, and the Nepali tech market.`);
  lines.push("");

  lines.push("## Products");
  lines.push("");
  lines.push(
    `- [Weavo](${SITE_URL}/weavo): Travel agency software — turns a trip into a branded, priced quotation, itinerary, or voucher PDF.`
  );
  lines.push(
    `- [Bulk SMS Service](${SITE_URL}/bulk-sms-service): Enterprise bulk SMS, OTP, and transactional messaging for Nepal, as a GroSMS technology partner.`
  );
  lines.push("");

  lines.push("## Services");
  lines.push("");
  for (const service of services) {
    lines.push(`- [${service.name}](${SITE_URL}/services#${service.slug}): ${service.shortDescription}`);
  }
  lines.push("");

  lines.push("## Articles");
  lines.push("");
  for (const post of [...blogPosts].sort((a, b) => b.date.localeCompare(a.date))) {
    lines.push(
      `- [${post.title}](${SITE_URL}/blog/${post.slug}): ${plain(post.excerpt)} (${post.category}, ${post.date})`
    );
  }
  lines.push("");

  lines.push("## Client projects");
  lines.push("");
  for (const project of projects) {
    lines.push(`- [${project.name}](${project.url}): ${project.description} (${project.category}, ${project.location})`);
  }
  lines.push("");

  lines.push("## Frequently asked questions");
  lines.push("");
  for (const item of [...faqItems, ...servicesFaqItems]) {
    lines.push(`- **${plain(item.question)}** ${plain(item.answer)}`);
  }
  lines.push("");

  return lines.join("\n");
}

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
