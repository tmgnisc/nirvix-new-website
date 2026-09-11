import { SITE_URL } from "@/lib/site";
import type { FaqItem } from "@/lib/faq-data";
import { teamMembers } from "@/lib/team-data";

export interface BlogSource {
  title: string;
  publisher: string;
  url: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  /**
   * Body blocks, rendered as trusted markup (inline HTML such as `<a>` is allowed):
   * - `## Heading` renders as an `<h2>`
   * - lines all starting `- ` render as a bulleted list, `1. ` as a numbered list
   * - lines starting `|` render as a table; the first row is the header, and a
   *   `| --- |` separator row is skipped
   * - anything else renders as a paragraph
   */
  content: string[];
  category: string;
  /** ISO publish date. */
  date: string;
  /** ISO date of the last substantive edit, shown on the page and as dateModified. */
  updated?: string;
  readTime: string;
  /** A `teamMembers` id. Falls back to DEFAULT_AUTHOR_ID. */
  authorId?: string;
  /**
   * 2-4 one-sentence answers shown in a box above the body. AI answer engines lift
   * the first clear answer on a page, so this is the part most likely to be quoted.
   */
  takeaways?: string[];
  /** Plain-text Q&A shown at the foot of the post and emitted as FAQPage markup. */
  faqs?: FaqItem[];
  /**
   * Where the post's statistics and factual claims come from. Rendered as a visible
   * source list and as `citation` in the article markup — cited, sourced content is
   * measurably more likely to be quoted by generative engines (GEO, KDD 2024).
   */
  sources?: BlogSource[];
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
    slug: "it-companies-in-lalitpur",
    title: "IT Companies in Lalitpur: A 2026 Guide to Choosing the Right Tech Partner",
    metaTitle: "IT Companies in Lalitpur, Nepal: 2026 Buyer's Guide",
    metaDescription:
      "Lalitpur is home to dozens of IT companies. Here's what kinds exist, what to ask on the first call, the red flags to avoid, and how to pick the right tech partner.",
    excerpt:
      "Lalitpur has quietly become one of Nepal's busiest tech hubs. Here's how to make sense of the IT companies based here, what to ask them, and the red flags that should end the conversation early.",
    category: "IT Consulting",
    date: "2026-09-11",
    readTime: "9 min read",
    takeaways: [
      "IT companies in Lalitpur fall into five broad types — web agencies, custom software houses, mobile app studios, digital marketing and SEO agencies, and outsourcing or product companies.",
      "Judge them on live work, the named people who will build your project, a discovery process before any quote, and written post-launch support terms.",
      "Your business, not the agency, should own the domain, the hosting account, and the source code.",
      "A Lalitpur address is a good tiebreaker between strong candidates, not a reason to choose on its own.",
    ],
    faqs: [
      {
        question: "What types of IT companies are based in Lalitpur?",
        answer:
          "Mostly web design and development agencies, custom software houses, mobile app studios, digital marketing and SEO agencies, and offshore development or product companies. Many firms cover more than one category, so ask to see live work in the specific type of project you need.",
      },
      {
        question: "How do I choose the best IT company in Lalitpur?",
        answer:
          "Shortlist companies that can show live projects similar in complexity to yours, name the people who will work on it, hold a discovery conversation before quoting, and put post-launch support terms in writing. Send every shortlisted company the same brief so their quotes are comparable.",
      },
      {
        question: "How much does it cost to hire an IT company in Lalitpur?",
        answer:
          "It depends on scope: a brochure website, an e-commerce store, and a custom booking platform are different price categories. Ask each company for an itemised quote covering design, development, content, integrations, hosting, and a year of maintenance, then compare those lines side by side.",
      },
      {
        question: "Who should own the domain and source code of my website?",
        answer:
          "You should. The domain, hosting account, and source code should be registered to your business, with the agency given access rather than ownership. Agree this in writing before the project starts.",
      },
      {
        question: "Where is Nirvix Technology located?",
        answer:
          "Nirvix Technology is a software and IT company in Satdobato, Lalitpur, Nepal. It builds websites, mobile apps, custom software, and AI solutions for businesses in Nepal, Australia, and New Zealand.",
      },
    ],
    keywords: [
      "IT companies in Lalitpur",
      "IT company in Lalitpur",
      "software company in Lalitpur",
      "web development company in Lalitpur",
      "best IT company in Lalitpur",
      "IT companies in Nepal",
    ],
    content: [
      "Search for IT companies in Lalitpur and you'll get a map crowded with pins — Jawalakhel, Kupondole, Pulchowk, Sanepa, Jhamsikhel, Satdobato, Ekantakuna. Software houses, web agencies, app studios, and digital marketing firms all sit within a few kilometres of each other. The list tells you who exists. It doesn't tell you who fits your project, and that's the part that actually costs money when you get it wrong.",
      `A disclosure before we start: Nirvix Technology is <a href="${SITE_URL}/" class="${linkClass}">an IT and software company based in Satdobato, Lalitpur</a>, so we're one of the pins on that map. This guide isn't a ranking — rankings written by one of the companies being ranked aren't worth much. It's the framework we'd want a client to use on us, and on everyone else they're talking to.`,
      "## Why so many IT companies are based in Lalitpur",
      "Talent is the first reason. Pulchowk Campus, the Institute of Engineering's flagship, sits in the middle of Lalitpur, and a steady stream of computer and electronics engineering graduates starts their careers within walking distance of it. Companies follow the talent, and the talent tends to stay near where it studied and lives.",
      "Practicality is the second. Lalitpur's mix of residential neighbourhoods and Ring Road access suits small and mid-sized tech teams better than the congested commercial core of central Kathmandu. A studio can take a floor of a house in Sanepa or an office near Satdobato and still be a short ride from clients anywhere in the Valley.",
      "The third reason is that location matters less than it used to. Plenty of IT companies in Lalitpur spend most of their week working for clients in Australia, Europe, or North America. For a local business, that's worth knowing: the company down the road may be very good, but its best people may also be busy on someone else's time zone.",
      "## The five kinds of IT company you'll find in Lalitpur",
      "<strong>Web design and development agencies.</strong> The largest group. They build business websites, e-commerce stores, and booking sites. Quality ranges from template installers to teams writing custom Next.js or React applications, and from the outside the two can look identical until you ask how the site is actually built.",
      "<strong>Custom software houses.</strong> They build internal tools, dashboards, ERPs, and integrations shaped around how a specific business works. This is where requirements discovery matters most, because the software is only as good as the understanding of the process it replaces.",
      "<strong>Mobile app studios.</strong> Some specialise in native iOS and Android; most now build cross-platform apps with React Native or Flutter. The question to ask is less about the framework and more about who maintains the app after the stores change their rules — which they do every year.",
      "<strong>Digital marketing and SEO agencies.</strong> Social media, paid ads, and search engine optimisation. Some are genuinely technical; others are content and ads teams with SEO in the name. The difference shows up in whether they can fix a crawl or indexing problem, not just write blog posts.",
      "<strong>Outsourcing centres and product companies.</strong> Offshore development teams working mainly for foreign clients, and a smaller number of companies building their own software products. Both are a sign of a maturing market, and product companies in particular tend to have stronger engineering habits because they live with their own code.",
      "Many firms, ours included, cover several of these. That's fine, as long as they can show real work in the specific category you need rather than a line on a services page.",
      "## What a good IT company in Lalitpur should be able to show you",
      `<strong>Live work, not screenshots.</strong> A mockup can be polished for a pitch deck; a live site can't hide slow load times, broken mobile layouts, or a contact form that doesn't send. Ask for URLs you can open yourself. Every site on our <a href="${SITE_URL}/projects" class="${linkClass}">portfolio of live client websites</a> is linked for exactly that reason — travel companies, non-profits, finance, education, and clients in Australia and New Zealand, all open in a browser rather than on trust.`,
      `<strong>The people who will actually do the work.</strong> A company's founders sell the project; its engineers build it. Ask who will be on your project and how long they've been with the company. Nepal's freelancing boom means good developers have more options than ever — we covered what that means for hiring in <a href="${SITE_URL}/blog/nepals-it-freelancing-boom-what-it-means-for-hiring" class="${linkClass}">our piece on Nepal's IT freelancing boom</a> — so staff turnover is a real delivery risk. Our <a href="${SITE_URL}/team" class="${linkClass}">team page</a> lists the people behind our work by name for the same reason.`,
      "<strong>A process before a price.</strong> A serious company asks about your customers, your timeline, your budget range, and how you'll measure success before it quotes. A company that sends a number within an hour of your first message is quoting a template, not your project.",
      "<strong>Written terms for after launch.</strong> Hosting, security updates, backups, bug fixes, and response times. Most disputes between businesses and IT vendors in Nepal aren't about the build — they're about what happens six months later when something breaks and nobody agreed who fixes it.",
      "## What should you ask on the first call?",
      "Who owns the domain, the hosting account, and the source code once the project is paid for? The only acceptable answer is you. Registering your domain in the agency's name is still common in the Nepali market, and it turns an ordinary vendor change into a hostage negotiation.",
      "What exactly is in the quote, and what isn't? Content writing, photography, copywriting in Nepali and English, payment gateway setup, and third-party licence fees are the usual hidden extras.",
      "How will the site or app perform on a mid-range Android phone on mobile data? That's how most of your customers will use it, and a company that only demos on a fast office connection and a large monitor is testing for itself, not for them.",
      "What happens if the developer assigned to my project leaves? A good answer involves documentation, code review, and a second person who already knows the codebase.",
      "## Red flags that should end the conversation",
      "A guarantee of first-page Google rankings, or worse, the number one spot. Nobody controls Google's results, and an agency promising otherwise is either uninformed or planning to use tactics that can get your site penalised.",
      "No written scope, or a scope so vague that 'website with admin panel' is the whole specification. Vague scopes are where budgets go to die.",
      "Prices far below everyone else's without an explanation. Sometimes it's a genuinely lean team. More often it's a reused template, a shared hosting plan that falls over under load, and a support promise that disappears after handover.",
      "An unwillingness to put you in touch with past clients. Established companies have clients who are happy to take a five-minute call.",
      "## Does it matter that your IT company is in Lalitpur?",
      "For most projects, being in the same city helps more than people expect. A two-hour workshop at a whiteboard settles more requirements than two weeks of email, and being in the same time zone means a problem reported at 10am gets looked at the same morning rather than overnight.",
      `Local context matters too. An IT company that builds for Nepali businesses every week already knows how to integrate eSewa, Khalti, Fonepay, and connectIPS, how customers here actually move through a checkout, and how SMS delivery behaves across Nepal Telecom and Ncell. That last one matters more than it sounds — OTPs and order confirmations that arrive late cost real signups, which is why we run a <a href="${SITE_URL}/bulk-sms-service" class="${linkClass}">bulk SMS and OTP service for Nepali businesses</a> alongside our development work. The wider shift toward digital-first customers is covered in <a href="${SITE_URL}/blog/digital-nepal-framework-what-it-means-for-businesses" class="${linkClass}">our Digital Nepal Framework explainer</a>.`,
      "That said, a Lalitpur address shouldn't be the deciding factor on its own. A great team in Kathmandu or Pokhara beats a mediocre one around the corner. Use location as a tiebreaker between companies that have already passed every other test.",
      "## How much does it cost to hire an IT company in Lalitpur?",
      "The honest answer is that it depends almost entirely on scope, and anyone quoting a flat number before understanding your project is guessing. A brochure website, an e-commerce store with payment integration, and a custom booking platform are three different price categories, not three sizes of the same product.",
      "What you can control is how comparable your quotes are. Send every company the same written brief, ask each one for an itemised breakdown, and compare line by line — design, development, content, integrations, hosting, and a year of maintenance. The cheapest total often turns out to be missing two or three of those lines.",
      "## Where Nirvix Technology fits",
      `We're a software and IT company in Satdobato, Lalitpur, working with businesses across Nepal and with clients in Australia and New Zealand. Our core work is <a href="${SITE_URL}/services#web-development" class="${linkClass}">custom web development</a>, <a href="${SITE_URL}/services#mobile-app-development" class="${linkClass}">mobile app development</a>, <a href="${SITE_URL}/services#custom-software-development" class="${linkClass}">custom software</a>, and <a href="${SITE_URL}/services#ai-solutions" class="${linkClass}">practical AI solutions</a> — the kind of workflow automation we unpacked in <a href="${SITE_URL}/blog/agentic-ai-for-business-what-it-means-in-2026" class="${linkClass}">our guide to agentic AI for Nepali businesses</a>.`,
      `We also build and run our own products, which keeps our engineering honest: <a href="${SITE_URL}/weavo" class="${linkClass}">Weavo, our travel agency software</a> for building branded quotations, itineraries, and vouchers, and our bulk SMS platform. And because a website nobody finds isn't much use, we're also an <a href="${SITE_URL}/seo-company-in-lalitpur" class="${linkClass}">SEO company in Lalitpur</a>, covering technical SEO, local SEO, and the <a href="${SITE_URL}/blog/answer-engine-optimization-aeo-nepal-2026" class="${linkClass}">answer engine optimisation</a> that decides whether AI assistants recommend you.`,
      `If you're shortlisting IT companies in Lalitpur, put us through the same questions as everyone else. For a broader checklist that applies anywhere in the country, see <a href="${SITE_URL}/blog/how-to-choose-the-right-it-company-in-nepal" class="${linkClass}">how to choose the right IT company in Nepal</a>. And if you'd like to talk it through in person, our office in Satdobato is a short ride from anywhere in the Valley — or you can start with a free, no-obligation quote below.`,
    ],
  },
  {
    slug: "agentic-ai-for-business-what-it-means-in-2026",
    title: "Agentic AI in 2026: What It Actually Means for Businesses in Nepal",
    excerpt:
      "Agentic AI is the biggest shift in enterprise technology since cloud. Here's what AI agents really change, where the hype ends, and how businesses in Nepal can start using them.",
    category: "AI Solutions",
    date: "2026-08-12",
    updated: "2026-09-11",
    readTime: "7 min read",
    takeaways: [
      "An AI chatbot answers a question; an AI agent completes a multi-step task, such as reading an order, checking stock, updating a record, and confirming with the customer.",
      "Gartner predicts 40% of enterprise applications will include task-specific AI agents by the end of 2026, up from less than 5% in 2025 — and that over 40% of agentic AI projects will be canceled by the end of 2027.",
      "For businesses in Nepal, the best starting points are narrow, repetitive workflows: support triage, order and invoice processing, scheduling, and lead qualification.",
      "Redesign the workflow around the agent, and keep a human in the loop for money, legal risk, and unhappy customers.",
    ],
    faqs: [
      {
        question: "What is agentic AI?",
        answer:
          "Agentic AI refers to AI systems that complete tasks rather than only answering questions. An AI agent can take several steps on its own — reading an incoming request, checking other systems, updating records, and sending a response — within limits the business sets.",
      },
      {
        question: "What is the difference between an AI chatbot and an AI agent?",
        answer:
          "A chatbot drafts a reply for a person to act on. An agent takes the action itself, connecting to systems such as a CRM, inventory, or payment records to finish a multi-step job.",
      },
      {
        question: "Can small businesses in Nepal use AI agents?",
        answer:
          "Yes, if they start narrow. High-volume, low-judgement workflows such as customer support triage, order and invoice processing, appointment scheduling, and lead qualification can be automated without an in-house data-science team.",
      },
      {
        question: "Why do agentic AI projects fail?",
        answer:
          "In our experience, most fail because an agent is bolted onto an existing broken process instead of the workflow being redesigned around it. Gartner predicts that over 40% of agentic AI projects will be canceled by the end of 2027.",
      },
    ],
    sources: [
      {
        title:
          "Gartner Predicts 40% of Enterprise Apps Will Feature Task-Specific AI Agents by 2026, Up from Less Than 5% in 2025",
        publisher: "Gartner",
        url: "https://www.gartner.com/en/newsroom/press-releases/2025-08-26-gartner-predicts-40-percent-of-enterprise-apps-will-feature-task-specific-ai-agents-by-2026-up-from-less-than-5-percent-in-2025",
      },
      {
        title: "Gartner Predicts Over 40% of Agentic AI Projects Will Be Canceled by End of 2027",
        publisher: "Gartner",
        url: "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027",
      },
    ],
    content: [
      "If you've read anything about enterprise technology in 2026, you've run into the phrase 'agentic AI' — and it's not just another buzzword cycle. The global IT giants have all rebuilt their pitch around it: Accenture, Deloitte, and Infosys (through its Topaz platform) now lead with AI agents rather than generic 'digital transformation.' When the biggest consultancies in the world reorganize their homepage around a single idea, it's worth understanding what that idea actually is.",
      "## What agentic AI actually means",
      `The short version: a regular AI chatbot answers a question, while an AI agent completes a task. Instead of just drafting a reply, an agent can read an incoming order, check inventory, flag a problem, update a record, and send a confirmation — a multi-step job that used to need a person clicking through several systems. Gartner predicts that by the end of 2026, 40% of enterprise applications will have task-specific AI agents built in, <a href="https://www.gartner.com/en/newsroom/press-releases/2025-08-26-gartner-predicts-40-percent-of-enterprise-apps-will-feature-task-specific-ai-agents-by-2026-up-from-less-than-5-percent-in-2025" target="_blank" rel="noopener noreferrer" class="${linkClass}">up from less than 5% in 2025</a>.`,
      "## Where the hype outruns the reality",
      `But the hype outruns the reality, and that gap matters for smaller businesses deciding where to spend. The same analysts are blunt about it: Gartner also predicts that <a href="https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027" target="_blank" rel="noopener noreferrer" class="${linkClass}">over 40% of agentic AI projects will be canceled by the end of 2027</a>. In our experience, the biggest predictor of success isn't the model or the budget — it's whether a business redesigns a workflow around the agent, rather than bolting an agent onto a broken process and expecting magic.`,
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
    takeaways: [
      "Judge an IT company's portfolio on relevance to your project's complexity, not on how many projects it lists.",
      "Good vendors hold a discovery conversation before quoting; a quote that arrives with no questions is a template.",
      "Agree post-launch support — response times, hosting, and what a retainer includes — before you sign.",
      "Compare the total cost of ownership over several years, not just the initial quote.",
    ],
    faqs: [
      {
        question: "What should I look for in an IT company in Nepal?",
        answer:
          "Relevant live work, a discovery process before pricing, clear post-launch support terms, and a quote you can compare on total cost of ownership rather than the upfront figure alone.",
      },
      {
        question: "What questions should I ask an IT company before hiring them?",
        answer:
          "Ask to see live projects similar in complexity to yours, who will work on your project, what happens after launch, who owns the domain and source code, and exactly what the quote includes and excludes.",
      },
      {
        question: "Why do IT projects in Nepal go wrong after launch?",
        answer:
          "Many teams are structured around project delivery rather than ongoing maintenance, so support terms are left vague. Agree response times, hosting responsibility, and retainer scope in writing before the project starts.",
      },
      {
        question: "Is the cheapest IT company quote the best value?",
        answer:
          "Rarely. A cheaper build that needs rewriting in eighteen months costs more than a slightly higher investment in clean, documented, maintainable code. Compare itemised quotes line by line.",
      },
    ],
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
    updated: "2026-09-11",
    readTime: "5 min read",
    takeaways: [
      "The Digital Nepal Framework is the government's 2019 blueprint of 80 digital initiatives across eight sectors, from digital foundation and agriculture to health, education, energy, tourism, finance, and urban infrastructure.",
      "Its biggest effect on businesses is on customer expectations: people who pay bills and file taxes online expect the same speed from private businesses.",
      "Digital wallet and bank QR payments, and instant SMS updates, are now default expectations across urban and semi-urban Nepal.",
      "Digitising government services is creating B2G demand for developers who understand how Nepali institutions work.",
    ],
    faqs: [
      {
        question: "What is the Digital Nepal Framework?",
        answer:
          "It is the Government of Nepal's digital transformation blueprint, published by the Ministry of Communication and Information Technology in 2019. It identifies 80 digital initiatives across eight sectors: digital foundation, agriculture, health, education, energy, tourism, finance, and urban infrastructure.",
      },
      {
        question: "How does the Digital Nepal Framework affect private businesses?",
        answer:
          "Mostly through customer expectations. As more government services move online, customers expect businesses to offer online payments, instant updates, and customer journeys that don't need a phone call or an office visit.",
      },
      {
        question: "Which payment methods should a business website in Nepal support?",
        answer:
          "At minimum, the digital wallets and bank QR payments customers already use, such as eSewa, Khalti, and bank-linked QR. Add card payments if you sell to customers outside Nepal.",
      },
      {
        question: "Is there demand for software development for Nepal's government?",
        answer:
          "Yes. As government bodies digitise record-keeping and service delivery, there is ongoing demand for developers who combine technical skill with an understanding of how Nepali institutions operate.",
      },
    ],
    sources: [
      {
        title: "2019 Digital Nepal Framework",
        publisher: "Ministry of Communication and Information Technology, Government of Nepal",
        url: "https://www.digitaldevelopment.org/wp-content/uploads/2023/09/bEN_Digital_Nepal_Framework_V7.2March2019-1.pdf",
      },
    ],
    content: [
      "The Digital Nepal Framework — the Ministry of Communication and Information Technology's 2019 blueprint of 80 digital initiatives across eight sectors — has been cited in government policy for years, but 2026 is the first stretch where its effects are visible outside of ministries — expanded digital ID integration, growing pressure on public agencies to accept online payments, and a steady rise in digital literacy programs reaching outside the Kathmandu valley.",
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
    takeaways: [
      "A growing share of Nepal's software talent works remotely for international clients, often for higher pay than the local market offers.",
      "Local businesses now compete with foreign remote employers for the same developers, so outdated salary benchmarks lose candidates.",
      "Partnering with an established local company is often more reliable than building an in-house team from scratch or managing rotating freelancers.",
      "Well-scoped work and a real career path retain developers better than salary alone.",
    ],
    faqs: [
      {
        question: "Why is it hard to hire developers in Nepal?",
        answer:
          "Many experienced developers work remotely for international clients who pay in foreign currency, so local employers are competing with global salaries. Businesses using outdated salary benchmarks often lose candidates before the interview stage.",
      },
      {
        question: "Should I hire freelancers or an IT company in Nepal?",
        answer:
          "Freelancers suit small, well-defined tasks. For products that need ongoing maintenance, an established company with retained senior staff reduces the risk of losing knowledge when one person moves on.",
      },
      {
        question: "What tech skills are strongest in Nepal's talent pool?",
        answer:
          "Web development and mobile app development have deep talent pools, and AI skills are growing as more developers take on international projects.",
      },
    ],
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
    takeaways: [
      "Nepali businesses in e-commerce, fintech, and healthcare are moving transactional SMS — OTPs, payment confirmations, delivery alerts — to global-grade platforms.",
      "GroSMS reports 2B+ messages a month across 200+ countries, a 99.94% average delivery rate, 0.8-second average latency, and a 99.9% uptime SLA.",
      "Handling send-and-verify in a single API call removes friction from OTP flows.",
      "Migrate transactional messages first, and keep promotional SMS where it is until the new platform has proven itself.",
    ],
    faqs: [
      {
        question: "What is bulk SMS?",
        answer:
          "Bulk SMS is sending large volumes of text messages through an SMS gateway. It covers promotional campaigns and transactional messages such as OTPs, order confirmations, and appointment reminders.",
      },
      {
        question: "What is the difference between promotional and transactional SMS?",
        answer:
          "Promotional SMS markets an offer to many recipients at once. Transactional SMS is triggered by a customer action — a login, a payment, an order — and has to arrive within seconds.",
      },
      {
        question: "How do I send OTP SMS in Nepal?",
        answer:
          "Integrate an SMS platform's API into your app or website so it sends a one-time code when a user signs up, logs in, or pays. Platforms such as GroSMS handle sending and verifying the code in a single API call.",
      },
      {
        question: "How do I switch bulk SMS providers without disruption?",
        answer:
          "Move transactional messages first, test delivery across Nepal Telecom and Ncell, then migrate promotional traffic once delivery rates are confirmed. Nirvix Technology handles this migration end to end as a GroSMS technology partner.",
      },
    ],
    sources: [
      {
        title: "GroSMS — Enterprise Messaging Platform",
        publisher: "GroSMS",
        url: "https://www.grosms.com/",
      },
    ],
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
    updated: "2026-09-11",
    readTime: "9 min read",
    takeaways: [
      "Answer Engine Optimization (AEO) — also called GEO or AIEO — structures content so AI systems such as ChatGPT, Gemini, and Google AI Overviews can quote it and cite your business.",
      "The research that introduced GEO found that citing sources, adding quotations, and adding statistics improved visibility in AI answers by 30-40%, while keyword stuffing did little.",
      "Put a direct answer immediately under a question-shaped heading, and back it with specific numbers, dates, and sources.",
      "Keep your business name, address, and services consistent across your website, Google Business Profile, and every directory you appear in.",
    ],
    faqs: [
      {
        question: "What is Answer Engine Optimization (AEO)?",
        answer:
          "AEO is the practice of structuring content so AI systems can extract a correct, quotable answer from it and attribute that answer to your business. It builds on SEO rather than replacing it.",
      },
      {
        question: "What is the difference between AEO, GEO, and AIEO?",
        answer:
          "They are three names for the same practice. AEO stands for Answer Engine Optimization, GEO for Generative Engine Optimization, and AIEO for AI Engine Optimization. All three aim to get your content cited in AI-generated answers.",
      },
      {
        question: "What is the difference between SEO and AEO?",
        answer:
          "SEO optimizes for a ranking position in search results. AEO optimizes for being the source an AI answer is built from. The same fast, crawlable, well-linked website supports both.",
      },
      {
        question: "How do I get my business cited by ChatGPT or Google AI Overviews?",
        answer:
          "Answer your customers' real questions directly under matching headings, support each answer with statistics and sources, keep your organization and FAQ schema accurate, and make sure your business details match everywhere they appear online.",
      },
      {
        question: "Does keyword stuffing help with AI search?",
        answer:
          "No. The research that introduced GEO found keyword stuffing offered little to no improvement in AI-generated answers, while citing sources, adding quotations, and adding statistics improved visibility by 30-40%.",
      },
    ],
    sources: [
      {
        title: "GEO: Generative Engine Optimization (Aggarwal et al., KDD 2024)",
        publisher: "arXiv",
        url: "https://arxiv.org/abs/2311.09735",
      },
      {
        title: "Review snippet structured data: self-serving reviews",
        publisher: "Google Search Central",
        url: "https://developers.google.com/search/docs/appearance/structured-data/review-snippet",
      },
    ],
    keywords: [
      "answer engine optimization",
      "AEO Nepal",
      "generative engine optimization",
      "GEO",
      "AI engine optimization",
      "AIEO",
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
      `Structured data does real work here. Schema markup for your organization, your services, and your FAQs tells a machine exactly what your business is and what it offers, rather than leaving it to infer from page copy. It is worth noting what not to do as well: review and rating markup a business publishes about itself is <a href="https://developers.google.com/search/docs/appearance/structured-data/review-snippet" target="_blank" rel="noopener noreferrer" class="${linkClass}">treated by Google as self-serving and ineligible for star ratings</a>, so genuine ratings belong on your Google Business Profile instead.`,
      "## AEO, GEO, and AIEO: what the research actually says",
      "AEO (Answer Engine Optimization), GEO (Generative Engine Optimization), and AIEO (AI Engine Optimization) are three names for the same job: getting your content quoted in the answers ChatGPT, Gemini, Perplexity, and Google AI Overviews generate. The term GEO comes from a research paper by researchers at Princeton and IIT Delhi, published at KDD 2024, which tested what actually changes how often a page is used in an AI-generated answer.",
      `Its findings are the most useful evidence the field has so far. The top-performing methods — citing sources, adding quotations from relevant experts, and adding statistics — <a href="https://arxiv.org/abs/2311.09735" target="_blank" rel="noopener noreferrer" class="${linkClass}">improved visibility in generative engine responses by 30-40%</a>. Keyword stuffing, the reflex of old-school SEO, offered little to no improvement.`,
      "- <strong>Cite sources:</strong> link every statistic and factual claim to where it came from.\n- <strong>Add statistics:</strong> replace a vague claim with a specific number and the date it applies to.\n- <strong>Add quotations:</strong> a named expert's view, attributed properly, is more quotable than anonymous copy.\n- <strong>Skip keyword stuffing:</strong> repeating a phrase makes a page harder for a model to trust, not easier to find.",
      "In practice, that means every claim that matters should carry a number, a date, and a link to its source. Those are the same things that make an article more trustworthy to a human reader, which is the point: generative engines are trying to reward the content a careful person would trust.",
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
    updated: "2026-09-11",
    readTime: "7 min read",
    takeaways: [
      "RCS adds verified sender branding, images, carousels, buttons, and read receipts to business messages; SMS works on every phone with no data connection.",
      "In Nepal, where many people use mid-range Android phones and data coverage is uneven, SMS remains the backbone for reach.",
      "Use SMS for OTPs, RCS with SMS fallback for transactional updates, and test RCS against plain SMS for promotions.",
      "Make transactional SMS fast and reliable first, then layer RCS on top.",
    ],
    faqs: [
      {
        question: "What is RCS messaging?",
        answer:
          "RCS (Rich Communication Services) is the upgrade to SMS built into the default messaging apps on Android and, since iOS 18, iPhone. It supports verified business senders, images, carousels, tappable buttons, and read receipts.",
      },
      {
        question: "Is RCS better than SMS for businesses?",
        answer:
          "It is richer but not universal. RCS needs a compatible phone, carrier support, and a data connection, while SMS reaches every phone. Most businesses use RCS as an enhancement with SMS fallback rather than a replacement.",
      },
      {
        question: "Should OTPs be sent by RCS or SMS?",
        answer:
          "SMS. For one-time passwords, fast and universal delivery matters more than branding, and a failed OTP means a lost signup or payment.",
      },
      {
        question: "What is SMS fallback?",
        answer:
          "SMS fallback automatically resends a message as a standard SMS when it cannot be delivered over RCS, so the customer receives it either way.",
      },
    ],
    sources: [
      {
        title: "Turn on RCS messaging on your iPhone",
        publisher: "Apple Support",
        url: "https://support.apple.com/en-us/122195",
      },
      {
        title: "RCS Now in iOS: a New Chapter for Mobile Messaging",
        publisher: "GSMA",
        url: "https://www.gsma.com/newsroom/article/rcs-nowin-ios-a-new-chapter-for-mobile-messaging/",
      },
    ],
    keywords: [
      "RCS vs SMS",
      "rich business messaging",
      "bulk SMS Nepal",
      "business messaging Nepal",
      "OTP SMS Nepal",
      "transactional SMS",
    ],
    content: [
      "Business messaging is going through its first real upgrade since the SMS standard was written in the 1980s. RCS — Rich Communication Services — is now supported across Android and, since Apple added support in iOS 18, on iPhone too, which finally makes it something businesses can plan around rather than watch. The pitch is straightforward: verified sender branding, images and carousels, tappable buttons, and read receipts, all inside the default messaging app. The question for a business in Nepal is narrower: does any of that change what you should actually send tomorrow?",
      "## RCS vs SMS at a glance",
      "| | SMS | RCS |\n| --- | --- | --- |\n| Works on | Every mobile phone | Compatible Android phones, and iPhones on iOS 18 or later |\n| Needs mobile data | No | Yes |\n| Carrier support | Universal | Required |\n| Sender identity | Number or shortcode | Verified business name, logo, and badge |\n| Content | Plain text | Images, carousels, buttons, and suggested replies |\n| Receipts | Delivery reports | Delivery and read receipts |\n| If it can't be delivered | — | Falls back to SMS, when fallback is set up |",
      "## What RCS adds over SMS",
      "The most valuable part is not the media, it is the verification. An RCS message from a verified sender shows your business name, your logo, and a verification badge instead of an unfamiliar shortcode. In a market where SMS fraud and fake OTP messages are a live problem, that alone changes how much a customer trusts what they are reading.",
      "Beyond that, RCS supports images, product carousels, suggested replies, and action buttons — so an order confirmation can carry a track-order button, and an appointment reminder can offer reschedule and cancel inline. It also gives the sender delivery and read receipts, and typing indicators for two-way conversations. Practically, it turns a notification into something closer to an app screen.",
      "## Where SMS still wins, decisively",
      "Reach. SMS works on every phone, on every carrier, with no data connection, no app, and no feature negotiation. RCS needs a compatible handset, a carrier that supports it, and an active data connection. In Nepal, where a large share of users are on mid-range Android devices and mobile data coverage is uneven outside urban centres, that gap is not a rounding error — it is the difference between a message that always arrives and one that usually arrives.",
      "This is exactly why every serious RCS deployment is built with SMS fallback. If the RCS message cannot be delivered, the platform sends the same content as an SMS. Businesses that treat RCS as an enhancement layer over a reliable SMS backbone get the upside without gambling on delivery; businesses that treat RCS as a replacement discover the gap during their first campaign.",
      "## Which channel to use for what",
      "| Message type | Best channel | Why |\n| --- | --- | --- |\n| OTPs and verification | SMS | Universal, fast delivery matters more than branding |\n| Order, delivery, and appointment updates | RCS with SMS fallback | Track-order and reschedule buttons remove support calls |\n| Promotional campaigns | Test RCS against SMS | Rich messages cost more per send, so measure the lift |",
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

/** Byline for posts that don't set `authorId`. */
export const DEFAULT_AUTHOR_ID = "nischal-tamang";

export interface PostAuthor {
  name: string;
  jobTitle: string;
  /** Matches the Person @id emitted on /team, so both describe one entity. */
  id: string;
  url: string;
}

/**
 * A named person, not the company, so answer engines have an accountable author to
 * attribute the article to. Throws on an unknown id so a typo fails the build instead
 * of shipping a post with no byline.
 */
export function getPostAuthor(post: BlogPost): PostAuthor {
  const authorId = post.authorId ?? DEFAULT_AUTHOR_ID;
  const member = teamMembers.find((m) => m.id === authorId);
  if (!member) {
    throw new Error(`Blog post "${post.slug}" has unknown authorId "${authorId}"`);
  }
  return {
    name: member.name,
    jobTitle: member.role,
    id: `${SITE_URL}/team#${member.id}`,
    url: `${SITE_URL}/team`,
  };
}

/** Last substantive edit, falling back to the publish date. */
export function getPostModified(post: BlogPost): string {
  return post.updated ?? post.date;
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
