export interface GrosmsStat {
  value: string;
  label: string;
}

export interface GrosmsFeature {
  title: string;
  description: string;
  icon: "Zap" | "ShieldCheck" | "Code2" | "BarChart3" | "KeyRound" | "Route";
}

export interface GrosmsUseCase {
  title: string;
  description: string;
  icon: "ShoppingCart" | "Landmark" | "HeartPulse" | "Building2";
}

export interface GrosmsPlan {
  name: string;
  volume: string;
  highlight?: boolean;
}

export const grosmsStats: GrosmsStat[] = [
  { value: "10,000+", label: "Businesses served" },
  { value: "2B+", label: "Messages sent monthly" },
  { value: "99.94%", label: "Average delivery rate" },
  { value: "200+", label: "Countries reached" },
];

export const grosmsFeatures: GrosmsFeature[] = [
  {
    title: "Sub-Second Delivery",
    description:
      "Messages route through direct carrier connections in 200+ countries, with an average latency of just 0.8 seconds.",
    icon: "Zap",
  },
  {
    title: "Smart Routing & Failover",
    description:
      "Automatic carrier failover keeps messages moving even when a route is congested or down, backed by a 99.9% uptime SLA.",
    icon: "Route",
  },
  {
    title: "Developer-Friendly APIs",
    description:
      "REST, HTTP, and SMPP APIs with SDKs in Node.js, Python, PHP, Java, Ruby, Go, and .NET make integration straightforward.",
    icon: "Code2",
  },
  {
    title: "OTP Send & Verify",
    description:
      "Generate, send, and verify one-time passwords in a single API call — no separate verification service needed.",
    icon: "KeyRound",
  },
  {
    title: "Enterprise-Grade Security",
    description: "TLS 1.3 encryption, SOC 2 Type II controls, and GDPR-ready data handling.",
    icon: "ShieldCheck",
  },
  {
    title: "Real-Time Analytics",
    description:
      "Track delivery status, engagement, and failures as they happen through a live analytics dashboard.",
    icon: "BarChart3",
  },
];

export const grosmsUseCases: GrosmsUseCase[] = [
  {
    title: "E-Commerce & Retail",
    description: "Order confirmations, shipping updates, and cart-recovery messages that reach customers instantly.",
    icon: "ShoppingCart",
  },
  {
    title: "FinTech & Banking",
    description: "2FA and OTP verification, transaction alerts, and fraud warnings delivered with bank-grade reliability.",
    icon: "Landmark",
  },
  {
    title: "Healthcare",
    description: "Appointment reminders and patient follow-ups that reduce no-shows without extra staff overhead.",
    icon: "HeartPulse",
  },
  {
    title: "Enterprises & SaaS",
    description: "User verification, system alerts, and operational notifications at any scale.",
    icon: "Building2",
  },
];

export const grosmsPlans: GrosmsPlan[] = [
  { name: "Starter", volume: "Up to 1,000 SMS / month" },
  { name: "Growth", volume: "1,000 – 10,000 SMS / month", highlight: true },
  { name: "Enterprise", volume: "10,000+ SMS / month" },
];

export const grosmsFaqItems = [
  {
    question: "Is GroSMS available for businesses in Nepal?",
    answer:
      "Yes. Nirvix Technology is a technology partner for GroSMS, helping businesses across Nepal set up accounts, integrate the API, and get the most out of the platform.",
  },
  {
    question: "How is Nirvix Technology involved with GroSMS?",
    answer:
      "Nirvix Technology partners with GroSMS to bring its bulk SMS platform to local businesses — handling onboarding, integration into your website or app, and ongoing support, while GroSMS operates the underlying messaging infrastructure.",
  },
  {
    question: "How much does bulk SMS cost through GroSMS?",
    answer:
      "Plans are priced under NPR 1 per SMS depending on volume, with Starter, Growth, and Enterprise tiers. A free trial with 1,000 SMS credits is available with no card required. Talk to us for a custom quote based on your expected volume.",
  },
  {
    question: "Can GroSMS send OTP and verification codes?",
    answer:
      "Yes. GroSMS supports send-and-verify OTP in a single API call, making it well suited for login verification, transaction confirmation, and fraud prevention.",
  },
  {
    question: "Do I need developer resources to integrate GroSMS?",
    answer:
      "Not necessarily. GroSMS offers REST, HTTP, and SMPP APIs with SDKs in seven languages, and Nirvix Technology can handle the full integration for you as part of onboarding.",
  },
];
