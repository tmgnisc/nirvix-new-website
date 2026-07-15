import { SITE_URL } from "@/lib/site";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  /** Paragraphs may contain inline HTML (e.g. `<a>` links) and are rendered as trusted markup. */
  content: string[];
  category: string;
  date: string;
  readTime: string;
  author: string;
}

const linkClass = "text-brand underline underline-offset-2 hover:text-brand-deep";

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-the-right-it-company-in-nepal",
    title: "How to Choose the Right IT Company in Nepal in 2026",
    excerpt:
      "With dozens of software and web development companies now operating out of Kathmandu, here's a practical framework for picking the right one for your project.",
    category: "IT Consulting",
    date: "2026-07-01",
    readTime: "6 min read",
    author: "Nirvix Technology",
    content: [
      "Search for 'best IT company in Nepal' today and you'll find no shortage of options — Kathmandu and Lalitpur alone are home to hundreds of software houses, web agencies, and freelance collectives, all claiming to be the right fit. For a business owner without a technical background, that's more noise than signal.",
      "The first filter that actually matters is portfolio relevance, not portfolio size. A company with twenty polished landing pages isn't necessarily equipped to build a booking platform with real-time inventory, or a mobile app that needs to work offline in areas with patchy connectivity. Ask to see projects similar in complexity to yours, not just similar in industry.",
      "Second, look at how a company handles requirements before any code is written. Vendors who jump straight to a quote without asking about your users, your timeline, or how you'll measure success are optimizing for a quick sale, not a working product. A short discovery conversation should shape the proposal — not the other way around.",
      "Third, ask about what happens after launch. Nepal's IT sector has a well-earned reputation for strong initial delivery and inconsistent long-term support, since many teams are structured around project-based work rather than ongoing maintenance. Get clarity upfront on response times, hosting responsibilities, and what a post-launch retainer actually includes.",
      `Finally, weigh cost against total ownership, not the initial quote. A cheaper build that needs a rewrite in eighteen months costs more than a slightly higher upfront investment in clean, documented, maintainable code. At Nirvix Technology, every <a href="${SITE_URL}/services" class="${linkClass}">proposal for our web development, mobile app, and custom software services</a> includes exactly what you're getting at each of these four points, before you sign anything.`,
    ],
  },
  {
    slug: "digital-nepal-framework-what-it-means-for-businesses",
    title: "Digital Nepal Framework: What It Actually Means for Local Businesses",
    excerpt:
      "Nepal's push toward a digital economy is more than a government slogan. Here's what the shift toward e-governance and digital payments means for businesses building software today.",
    category: "Industry Trends",
    date: "2026-06-17",
    readTime: "5 min read",
    author: "Nirvix Technology",
    content: [
      "The Digital Nepal Framework has been cited in government policy for years, but 2026 is the first stretch where its effects are visible outside of ministries — expanded digital ID integration, growing pressure on public agencies to accept online payments, and a steady rise in digital literacy programs reaching outside the Kathmandu valley.",
      "For businesses, this shift changes user expectations more than it changes regulation. Customers who now pay utility bills, renew licenses, and file taxes online are far less tolerant of a business that still requires a phone call or an in-person visit to get anything done. A slow or manual customer journey stands out more than it used to.",
      `Digital payments are the clearest example. eSewa, Khalti, and bank-linked QR payments have gone from 'nice to have' to default expectation across urban and semi-urban Nepal. The same shift is happening with customer communication — businesses that once relied on phone calls now use <a href="${SITE_URL}/bulk-sms-service" class="${linkClass}">bulk SMS for order updates, appointment reminders, and OTP verification</a>, because customers expect instant, automated updates rather than a manual follow-up call.`,
      "There's also a growing opportunity on the B2G side. As government bodies digitize record-keeping and service delivery, there is real, ongoing demand for developers who understand both software and how Nepali institutions actually operate — a specific mix of technical and contextual knowledge that few outside firms can offer.",
      "The businesses that benefit most from this shift aren't necessarily the biggest — they're the ones treating 'digital-first' as an actual product decision rather than a marketing line. That means fast checkout, local payment support, and interfaces that work well on the mid-range Android phones most of the country actually uses.",
    ],
  },
  {
    slug: "nepals-it-freelancing-boom-what-it-means-for-hiring",
    title: "Nepal's IT Freelancing Boom: What It Means for Businesses Hiring Local Talent",
    excerpt:
      "Nepal has quietly become one of the fastest-growing freelance tech talent markets in South Asia. Here's what that means if you're hiring developers locally.",
    category: "Tech Talent",
    date: "2026-06-03",
    readTime: "5 min read",
    author: "Nirvix Technology",
    content: [
      "Nepal's IT freelancing sector has grown well past the side-income stereotype it carried a decade ago. A large and increasing share of the country's software talent now works remotely for international clients on platforms like Upwork and Fiverr, earning in foreign currency and building skills far faster than the traditional local job market rewards.",
      "For Nepali businesses, this creates a real hiring tension: local companies now compete with international remote employers for the same developers, and international clients often pay significantly more for the same skill level. Businesses that still benchmark salaries against five-year-old numbers are losing good candidates before the interview stage.",
      "It also changes what 'hiring locally' should mean. Instead of building an in-house team from scratch and competing purely on salary, many businesses are better served by partnering with an established local company that already has senior talent retained through better projects, growth paths, and stability than a solo freelance contract can offer.",
      "There's an upside too: this same freelancing boom means the depth of available talent, especially in web development, mobile apps, and increasingly AI, is genuinely strong. The businesses that win aren't necessarily the highest payers — they're the ones offering interesting, well-scoped work and a real career path, not just a paycheck.",
      `At Nirvix Technology, this is part of why we invest in keeping senior engineers on stable, varied project work rather than treating hiring as a revolving door — it's a direct response to a talent market where good developers have more options than ever. It's also why businesses increasingly work with our <a href="${SITE_URL}/services" class="${linkClass}">custom software and web development team</a> directly, rather than managing a rotating cast of freelancers project by project.`,
    ],
  },
  {
    slug: "bulk-sms-service-nepal-grosms",
    title: "Bulk SMS Marketing in Nepal: Why More Businesses Are Switching in 2026",
    excerpt:
      "Sparrow SMS and Aakash SMS built the local bulk SMS market — here's why more businesses are now looking at global-grade platforms like GroSMS instead.",
    category: "Bulk SMS",
    date: "2026-07-10",
    readTime: "6 min read",
    author: "Nirvix Technology",
    content: [
      "For years, bulk SMS in Nepal has meant picking between a handful of local gateways — reliable enough for basic promotional blasts, but rarely built for the kind of transactional messaging modern apps depend on: instant OTPs, payment confirmations, and delivery alerts that customers expect within seconds, not minutes.",
      "That gap is why more Nepali businesses — particularly in e-commerce, fintech, and healthcare — are now looking beyond the traditional local providers toward platforms built for global-grade delivery. The bar has shifted from 'does the message eventually arrive' to 'does it arrive in under a second, every time, with proof of delivery.'",
      `<a href="https://www.grosms.com/" target="_blank" rel="noopener noreferrer" class="${linkClass}">GroSMS</a> is one of the platforms driving that shift — an enterprise messaging platform already handling over 2 billion messages a month across 200+ countries, with a 99.94% average delivery rate and 0.8-second average latency. <a href="${SITE_URL}/bulk-sms-service" class="${linkClass}">Nirvix Technology is a technology partner for GroSMS</a>, helping Nepali businesses get set up, integrated, and supported locally.`,
      "The difference shows up most clearly in OTP and verification flows. Instead of stitching together a separate SMS provider and a separate verification service, GroSMS handles send-and-verify in a single API call — which matters for fintech apps and e-commerce checkouts where every extra second of friction costs conversions.",
      "It also shows up in reliability during peak load. Local providers can struggle when a business runs a large promotional campaign or when order volume spikes during a festival sale. Smart routing with automatic carrier failover, backed by a 99.9% uptime SLA, keeps messages moving even when a single route gets congested.",
      `For businesses evaluating a switch, the practical path is usually incremental: keep existing promotional SMS running while moving transactional messages — OTPs, order confirmations, appointment reminders — onto a more reliable platform first, since that's where delivery failures cost the most. <a href="${SITE_URL}/bulk-sms-service" class="${linkClass}">Nirvix Technology handles that migration end to end</a>, from API integration to testing delivery across major Nepali carriers.`,
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
