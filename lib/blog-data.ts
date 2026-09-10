import { SITE_URL } from "@/lib/site";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  /**
   * Body blocks. A block starting with `## ` renders as an `<h2>`; everything else
   * renders as a paragraph. Blocks may contain inline HTML (e.g. `<a>` links) and are
   * rendered as trusted markup.
   */
  content: string[];
  category: string;
  date: string;
  readTime: string;
  author: string;
  /** Overrides the `<title>` tag. Keep under ~60 chars. Falls back to `title`. */
  metaTitle?: string;
  /** Overrides the meta description. Keep 140-160 chars. Falls back to `excerpt`. */
  metaDescription?: string;
  /** Target keywords for this article. */
  keywords?: string[];
}

const linkClass = "text-brand underline underline-offset-2 hover:text-brand-deep";

export const blogPosts: BlogPost[] = [
  {
    slug: "agentic-ai-for-business-what-it-means-in-2026",
    title: "Agentic AI in 2026: What It Actually Means for Businesses in Nepal",
    excerpt:
      "Agentic AI is the biggest shift in enterprise technology since cloud. Here's what AI agents really change, where the hype ends, and how businesses in Nepal can start using them.",
    category: "AI Solutions",
    date: "2026-08-12",
    readTime: "7 min read",
    author: "Nirvix Technology",
    content: [
      "If you've read anything about enterprise technology in 2026, you've run into the phrase 'agentic AI' — and it's not just another buzzword cycle. The global IT giants have all rebuilt their pitch around it: Accenture, Deloitte, and Infosys (through its Topaz platform) now lead with AI agents rather than generic 'digital transformation.' When the biggest consultancies in the world reorganize their homepage around a single idea, it's worth understanding what that idea actually is.",
      "## What agentic AI actually means",
      "The short version: a regular AI chatbot answers a question, while an AI agent completes a task. Instead of just drafting a reply, an agent can read an incoming order, check inventory, flag a problem, update a record, and send a confirmation — a multi-step job that used to need a person clicking through several systems. Gartner projects that by the end of 2026 roughly 40% of enterprise applications will have task-specific AI agents built in, up from almost none two years ago.",
      "## Where the hype outruns the reality",
      "But the hype outruns the reality, and that gap matters for smaller businesses deciding where to spend. Industry surveys in 2026 suggest only around a quarter of organizations that started agentic AI projects have actually put one into real production. The single biggest predictor of success isn't the model or the budget — it's whether a business redesigns a workflow around the agent, rather than bolting an agent onto a broken process and expecting magic.",
      "## What this means for businesses in Nepal",
      "For businesses in Nepal, this is less about chasing the enterprise trend and more about picking the few places where agents genuinely save time. Customer support triage, invoice and order processing, appointment scheduling, and lead qualification are all narrow, repetitive workflows where a well-scoped agent pays for itself quickly — without needing a data-science team to maintain it.",
      `The practical starting point is almost always integration, not a moonshot. An agent is only as useful as the systems it can reach: your CRM, your payment records, your messaging channel. That's why a lot of real-world automation still runs on simple, reliable rails — for example, pairing an agent with <a href="${SITE_URL}/bulk-sms-service" class="${linkClass}">bulk SMS for instant order updates, reminders, and OTP verification</a> so the 'action' at the end of the agent's work actually reaches the customer in seconds.`,
      "## A practical roadmap for 2026",
      "A sensible 2026 roadmap for most businesses looks like this: pick one high-volume, low-judgement workflow; map exactly what a human does today, step by step; automate only the steps that are truly repetitive; and keep a human in the loop for anything involving money, legal risk, or an unhappy customer. That's how you get the productivity gains the enterprises are chasing without the failed-project statistics they're quietly reporting.",
      `At Nirvix Technology, we build <a href="${SITE_URL}/services" class="${linkClass}">AI solutions and custom software</a> around that exact principle — starting from a real workflow you want to fix, not from a demo. If you're trying to work out whether agentic AI is a fit for your business or just noise, that's a conversation worth having before you spend anything.`,
    ],
  },
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
      "## 1. Judge the portfolio on relevance, not volume",
      `The first filter that actually matters is portfolio relevance, not portfolio size. A company with twenty polished landing pages isn't necessarily equipped to build a booking platform with real-time inventory, or a mobile app that needs to work offline in areas with patchy connectivity. Ask to see projects similar in complexity to yours, not just similar in industry. Our own <a href="${SITE_URL}/projects" class="${linkClass}">portfolio of client websites</a> is public for that reason — every site listed is live, so you can open it and judge the work rather than take a screenshot on trust.`,
      "## 2. Watch how they handle requirements",
      "Second, look at how a company handles requirements before any code is written. Vendors who jump straight to a quote without asking about your users, your timeline, or how you'll measure success are optimizing for a quick sale, not a working product. A short discovery conversation should shape the proposal — not the other way around.",
      "## 3. Ask what happens after launch",
      "Third, ask about what happens after launch. Nepal's IT sector has a well-earned reputation for strong initial delivery and inconsistent long-term support, since many teams are structured around project-based work rather than ongoing maintenance. Get clarity upfront on response times, hosting responsibilities, and what a post-launch retainer actually includes.",
      "## 4. Weigh total cost of ownership, not the quote",
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
      "## What actually changes for businesses",
      "For businesses, this shift changes user expectations more than it changes regulation. Customers who now pay utility bills, renew licenses, and file taxes online are far less tolerant of a business that still requires a phone call or an in-person visit to get anything done. A slow or manual customer journey stands out more than it used to.",
      "## Digital payments are the clearest signal",
      `Digital payments are the clearest example. eSewa, Khalti, and bank-linked QR payments have gone from 'nice to have' to default expectation across urban and semi-urban Nepal. The same shift is happening with customer communication — businesses that once relied on phone calls now use <a href="${SITE_URL}/bulk-sms-service" class="${linkClass}">bulk SMS for order updates, appointment reminders, and OTP verification</a>, because customers expect instant, automated updates rather than a manual follow-up call.`,
      "## The B2G opportunity",
      "There's also a growing opportunity on the B2G side. As government bodies digitize record-keeping and service delivery, there is real, ongoing demand for developers who understand both software and how Nepali institutions actually operate — a specific mix of technical and contextual knowledge that few outside firms can offer.",
      "## Who actually benefits",
      `The businesses that benefit most from this shift aren't necessarily the biggest — they're the ones treating 'digital-first' as an actual product decision rather than a marketing line. That means fast checkout, local payment support, and interfaces that work well on the mid-range Android phones most of the country actually uses. Most of the <a href="${SITE_URL}/projects" class="${linkClass}">websites we have built for Nepali businesses</a> are designed against exactly that constraint.`,
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
      "## The hiring tension this creates",
      "For Nepali businesses, this creates a real hiring tension: local companies now compete with international remote employers for the same developers, and international clients often pay significantly more for the same skill level. Businesses that still benchmark salaries against five-year-old numbers are losing good candidates before the interview stage.",
      "## What hiring locally should mean now",
      "It also changes what 'hiring locally' should mean. Instead of building an in-house team from scratch and competing purely on salary, many businesses are better served by partnering with an established local company that already has senior talent retained through better projects, growth paths, and stability than a solo freelance contract can offer.",
      "## The upside: real depth of talent",
      `There's an upside too: this same freelancing boom means the depth of available talent, especially in web development, mobile apps, and increasingly AI, is genuinely strong. The businesses that win aren't necessarily the highest payers — they're the ones offering interesting, well-scoped work and a real career path, not just a paycheck. You can <a href="${SITE_URL}/team" class="${linkClass}">meet the engineers and designers on our team</a> to see what that retention looks like in practice.`,
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
      "## Where local gateways fall short",
      "That gap is why more Nepali businesses — particularly in e-commerce, fintech, and healthcare — are now looking beyond the traditional local providers toward platforms built for global-grade delivery. The bar has shifted from 'does the message eventually arrive' to 'does it arrive in under a second, every time, with proof of delivery.'",
      `<a href="https://www.grosms.com/" target="_blank" rel="noopener noreferrer" class="${linkClass}">GroSMS</a> is one of the platforms driving that shift — an enterprise messaging platform already handling over 2 billion messages a month across 200+ countries, with a 99.94% average delivery rate and 0.8-second average latency. <a href="${SITE_URL}/bulk-sms-service" class="${linkClass}">Nirvix Technology is a technology partner for GroSMS</a>, helping Nepali businesses get set up, integrated, and supported locally.`,
      "## OTP and verification flows",
      "The difference shows up most clearly in OTP and verification flows. Instead of stitching together a separate SMS provider and a separate verification service, GroSMS handles send-and-verify in a single API call — which matters for fintech apps and e-commerce checkouts where every extra second of friction costs conversions.",
      "## Reliability under peak load",
      "It also shows up in reliability during peak load. Local providers can struggle when a business runs a large promotional campaign or when order volume spikes during a festival sale. Smart routing with automatic carrier failover, backed by a 99.9% uptime SLA, keeps messages moving even when a single route gets congested.",
      "## How to make the switch",
      `For businesses evaluating a switch, the practical path is usually incremental: keep existing promotional SMS running while moving transactional messages — OTPs, order confirmations, appointment reminders — onto a more reliable platform first, since that's where delivery failures cost the most. <a href="${SITE_URL}/bulk-sms-service" class="${linkClass}">Nirvix Technology handles that migration end to end</a>, from API integration to testing delivery across major Nepali carriers.`,
    ],
  },
  {
    slug: "answer-engine-optimization-aeo-nepal-2026",
    title: "Answer Engine Optimization (AEO): How to Get Your Business Cited by AI in 2026",
    metaTitle: "Answer Engine Optimization (AEO) Guide for Nepal | 2026",
    metaDescription:
      "AI answers now sit above the blue links. Learn how Answer Engine Optimization works in 2026 and how businesses in Nepal can get cited by ChatGPT, Gemini, and AI Overviews.",
    excerpt:
      "Search traffic is shifting from ten blue links to a single AI answer. Here's what Answer Engine Optimization actually involves, and how businesses in Nepal can get cited instead of skipped.",
    category: "SEO",
    date: "2026-09-02",
    readTime: "8 min read",
    author: "Nirvix Technology",
    keywords: [
      "answer engine optimization",
      "AEO Nepal",
      "generative engine optimization",
      "AI search optimization",
      "SEO company in Nepal",
      "Google AI Overviews",
    ],
    content: [
      "For twenty years, SEO had one job: rank in the ten blue links. In 2026, a growing share of searches never reach those links at all. Google AI Overviews answer the question at the top of the page, ChatGPT and Perplexity answer it without a results page in the first place, and the click you used to win is now a citation you either earn or lose. That shift has a name — Answer Engine Optimization, or AEO — and it is quietly the biggest change to how businesses get found since mobile search.",
      "## What Answer Engine Optimization actually is",
      "AEO is the practice of structuring your content so an AI system can extract a correct, quotable answer from it and attribute that answer to you. It is not a replacement for SEO — the same crawlable, fast, well-linked site still wins — but the unit of success changes. Traditional SEO optimizes for a ranking position. AEO optimizes for being the source an answer is built from. You will see it called GEO (Generative Engine Optimization) too; the tactics are largely the same.",
      "The practical difference shows up in how you write. A page built to rank often buries the answer under three paragraphs of throat-clearing. A page built to be cited states the answer plainly, immediately under a heading that matches the question, then supports it with specifics an AI model can verify — numbers, dates, named entities, and sources.",
      "## The four things that decide whether AI cites you",
      "First, structure. Question-shaped H2s with direct answers underneath are far easier for a model to lift than a wall of narrative prose. Second, specificity — vague marketing claims get skipped, while a concrete figure with a date attached gets quoted. Third, entity clarity: your business name, location, services, and contact details need to be consistent everywhere, so the model is confident about who it is citing. Fourth, corroboration — AI systems weight information that appears consistently across multiple independent sources.",
      "Structured data does real work here. Schema markup for your organization, your services, and your FAQs tells a machine exactly what your business is and what it offers, rather than leaving it to infer from page copy. It is worth noting what not to do as well: review and rating markup a business publishes about itself is treated as self-serving and is not eligible for rich results, so genuine ratings belong on your Google Business Profile instead.",
      "## Why this matters more in Nepal than most markets",
      "Local search in Nepal has always been thin. Ask an AI assistant to recommend a software company in Kathmandu, or how much a business website costs in Nepal, and it is working from a much smaller pool of source material than it would for the same question in Delhi or Singapore. That is a disadvantage for users and an opportunity for businesses — the bar to become a cited source is genuinely lower here, and the market is nowhere near saturated with well-structured, locally specific content.",
      "It also compounds with the broader shift toward digital-first customer behaviour. Once customers are comfortable getting an answer from an AI assistant, the businesses that assistant names are the shortlist. Not being in the answer is closer to not existing than being on page two ever was.",
      "## A realistic AEO starting point",
      "Start by listing the twenty questions a prospective customer actually asks before they buy from you — pricing, timelines, process, what is included, what happens after launch. Give each one a page or a clearly marked section, answer it in the first two sentences, and back the answer with specifics. Keep your organization, service, and FAQ schema accurate and consistent. Then make sure your business details match across your website, Google Business Profile, and every directory you appear in.",
      "None of that requires new technology. It requires deciding that your website exists to answer questions rather than to describe your company, which is a harder editorial change than it sounds.",
      `## Where this connects to the rest of your stack`,
      `AEO sits alongside the same automation shift reshaping everything else — we covered that in <a href="${SITE_URL}/blog/agentic-ai-for-business-what-it-means-in-2026" class="${linkClass}">our guide to what agentic AI actually means for businesses in Nepal</a>, and the underlying customer expectation shift in <a href="${SITE_URL}/blog/digital-nepal-framework-what-it-means-for-businesses" class="${linkClass}">the Digital Nepal Framework explainer</a>. If you are also evaluating who should do this work, our <a href="${SITE_URL}/blog/how-to-choose-the-right-it-company-in-nepal" class="${linkClass}">framework for choosing the right IT company in Nepal</a> is a useful filter.`,
      `Nirvix Technology builds this into every project — <a href="${SITE_URL}/services" class="${linkClass}">our SEO, web development, and AI solution services</a> treat structured data, page speed, and answer-shaped content as the baseline rather than an upsell. If you are weighing up an <a href="${SITE_URL}/seo-company-in-lalitpur" class="${linkClass}">SEO company in Lalitpur</a>, that page covers how we scope and run the work. If you want to know whether your site is currently readable by AI search at all, that is a short, concrete audit worth doing before you spend anything on content.`,
    ],
  },
  {
    slug: "rcs-vs-sms-business-messaging-nepal-2026",
    title: "RCS vs SMS in 2026: What Nepali Businesses Need to Know About Rich Business Messaging",
    metaTitle: "RCS vs SMS in 2026: A Guide for Nepali Businesses",
    metaDescription:
      "RCS brings branding, images, and buttons to business messaging — but SMS still wins on reach in Nepal. Here's how the two compare in 2026 and which one to use where.",
    excerpt:
      "RCS adds branding, images, and tappable buttons to the messages businesses send. Here's how it compares to SMS in 2026, and why reach still makes SMS the backbone in Nepal.",
    category: "Bulk SMS",
    date: "2026-08-26",
    readTime: "7 min read",
    author: "Nirvix Technology",
    keywords: [
      "RCS vs SMS",
      "rich business messaging",
      "bulk SMS Nepal",
      "business messaging Nepal",
      "OTP SMS Nepal",
      "transactional SMS",
    ],
    content: [
      "Business messaging is going through its first real upgrade since the SMS standard was written in the 1980s. RCS — Rich Communication Services — is now supported across Android and, since Apple added support, on iPhone too, which finally makes it something businesses can plan around rather than watch. The pitch is straightforward: verified sender branding, images and carousels, tappable buttons, and read receipts, all inside the default messaging app. The question for a business in Nepal is narrower: does any of that change what you should actually send tomorrow?",
      "## What RCS adds over SMS",
      "The most valuable part is not the media, it is the verification. An RCS message from a verified sender shows your business name, your logo, and a verification badge instead of an unfamiliar shortcode. In a market where SMS fraud and fake OTP messages are a live problem, that alone changes how much a customer trusts what they are reading.",
      "Beyond that, RCS supports images, product carousels, suggested replies, and action buttons — so an order confirmation can carry a track-order button, and an appointment reminder can offer reschedule and cancel inline. It also gives the sender delivery and read receipts, and typing indicators for two-way conversations. Practically, it turns a notification into something closer to an app screen.",
      "## Where SMS still wins, decisively",
      "Reach. SMS works on every phone, on every carrier, with no data connection, no app, and no feature negotiation. RCS needs a compatible handset, a carrier that supports it, and an active data connection. In Nepal, where a large share of users are on mid-range Android devices and mobile data coverage is uneven outside urban centres, that gap is not a rounding error — it is the difference between a message that always arrives and one that usually arrives.",
      "This is exactly why every serious RCS deployment is built with SMS fallback. If the RCS message cannot be delivered, the platform sends the same content as an SMS. Businesses that treat RCS as an enhancement layer over a reliable SMS backbone get the upside without gambling on delivery; businesses that treat RCS as a replacement discover the gap during their first campaign.",
      "## Which channel to use for what",
      "For OTPs and verification, use SMS. Speed and universal delivery matter more than branding, and a failed OTP is a lost signup or a failed payment. Anything in a checkout or login flow should sit on the most reliable path available.",
      "For transactional updates — order confirmations, dispatch and delivery alerts, appointment reminders, payment receipts — RCS with SMS fallback is a genuine improvement. These are the messages where a tracking button or a reschedule action removes a support call.",
      "For promotional campaigns, RCS is where the rich formatting earns its cost, but measure it against plain SMS rather than assuming. Richer messages cost more per send, and in a price-sensitive market the lift has to be real.",
      `## What this means practically in Nepal`,
      `The local bulk SMS market has been built around basic promotional blasts for years, and the shift toward transactional-grade delivery is already underway — we wrote about that in <a href="${SITE_URL}/blog/bulk-sms-service-nepal-grosms" class="${linkClass}">our look at why businesses are moving to global-grade bulk SMS platforms</a>. RCS lands on top of that same shift. If your transactional messaging is not yet fast and reliable, adding rich formatting to it solves the wrong problem first.`,
      "The sensible sequence is to get transactional SMS onto a platform with sub-second latency, carrier failover, and real delivery reporting; instrument what your delivery rates actually are per carrier; then layer RCS onto the message types where a button or a branded sender changes customer behaviour. Sender verification and brand registration take time to approve, so starting that process early is worth it even if you do not send an RCS message for months.",
      `It also sits naturally alongside the automation work happening elsewhere in the business — an <a href="${SITE_URL}/blog/agentic-ai-for-business-what-it-means-in-2026" class="${linkClass}">AI agent handling order processing</a> is only useful if the message at the end of that workflow actually reaches the customer.`,
      `Nirvix Technology is a technology partner for GroSMS and handles this end to end — <a href="${SITE_URL}/bulk-sms-service" class="${linkClass}">bulk SMS and OTP verification for Nepali businesses</a>, including API integration, carrier delivery testing, and migration from an existing provider. If you want RCS on the roadmap, the groundwork starts with the SMS layer underneath it. You can see the rest of what we build on <a href="${SITE_URL}/services" class="${linkClass}">our services page</a>.`,
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

/**
 * Picks the articles to link at the foot of a post.
 *
 * Same category first, since that is the most useful next read. The remainder walks
 * forward from this post and wraps around, rather than always taking the top of the
 * list — otherwise the first three articles absorb every internal link on the blog and
 * everything after them ends up with one inbound link from the index page alone.
 */
export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const index = blogPosts.findIndex((post) => post.slug === slug);
  if (index === -1) return blogPosts.slice(0, limit);

  const current = blogPosts[index];
  const related = blogPosts.filter(
    (post) => post.slug !== slug && post.category === current.category
  );

  for (let step = 1; related.length < limit && step < blogPosts.length; step++) {
    const candidate = blogPosts[(index + step) % blogPosts.length];
    if (candidate.slug === slug) continue;
    if (related.some((post) => post.slug === candidate.slug)) continue;
    related.push(candidate);
  }

  return related.slice(0, limit);
}
