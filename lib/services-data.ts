export interface ServiceItem {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: "Monitor" | "Smartphone" | "Code" | "BrainCircuit" | "Search" | "Cloud" | "Lightbulb" | "Palette";
  features: string[];
}

export const services: ServiceItem[] = [
  {
    slug: "web-development",
    name: "Web Development",
    shortDescription: "Custom, high-performance websites and web apps engineered for scale and speed.",
    description:
      "As a leading website development company in Nepal, we design and build responsive, SEO-friendly websites and web applications using modern frameworks like Next.js and React — optimized for speed, conversions, and long-term growth.",
    icon: "Monitor",
    features: [
      "Custom website design & development",
      "E-commerce & booking platforms",
      "Next.js / React web applications",
      "Performance & Core Web Vitals optimization",
    ],
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    shortDescription: "Native and cross-platform mobile apps built for iOS and Android.",
    description:
      "We build fast, reliable mobile apps for iOS and Android using cross-platform frameworks, so your business can reach customers on any device without doubling development cost.",
    icon: "Smartphone",
    features: [
      "iOS & Android app development",
      "Cross-platform apps (React Native)",
      "App Store & Play Store deployment",
      "Ongoing maintenance & updates",
    ],
  },
  {
    slug: "custom-software-development",
    name: "Custom Software Development",
    shortDescription: "Tailored software solutions engineered around your business processes.",
    description:
      "From internal tools to full-scale platforms, we design custom software that fits the exact way your business operates — built to be secure, scalable, and easy to maintain.",
    icon: "Code",
    features: [
      "Enterprise & internal business tools",
      "API design & third-party integrations",
      "Database architecture & optimization",
      "Legacy system modernization",
    ],
  },
  {
    slug: "ai-solutions",
    name: "AI Solutions",
    shortDescription: "AI-powered features and automation integrated into your products.",
    description:
      "We integrate practical AI into your products and workflows — from intelligent chatbots to automation pipelines — helping you save time and unlock new capabilities.",
    icon: "BrainCircuit",
    features: [
      "AI chatbots & virtual assistants",
      "Workflow & business process automation",
      "AI feature integration (LLMs, APIs)",
      "Data-driven product features",
    ],
  },
  {
    slug: "seo-services",
    name: "SEO Services",
    shortDescription: "Search engine optimization to improve visibility and organic traffic.",
    description:
      "Our SEO team helps businesses in Nepal and beyond rank higher on Google through technical SEO, on-page optimization, and content strategy that drives real, measurable organic traffic.",
    icon: "Search",
    features: [
      "Technical SEO & site audits",
      "On-page & content optimization",
      "Local SEO for Nepal-based businesses",
      "Keyword research & rank tracking",
    ],
  },
  {
    slug: "cloud-solutions",
    name: "Cloud Solutions",
    shortDescription: "Scalable cloud infrastructure, deployment, and DevOps.",
    description:
      "We architect and manage cloud infrastructure on AWS, Vercel, and other platforms — with CI/CD pipelines and DevOps practices that keep your product fast, secure, and always online.",
    icon: "Cloud",
    features: [
      "Cloud architecture (AWS, Vercel, etc.)",
      "CI/CD pipeline setup",
      "Server & database management",
      "Monitoring, scaling & security",
    ],
  },
  {
    slug: "it-consulting",
    name: "IT Consulting",
    shortDescription: "Strategic technology guidance for digital transformation.",
    description:
      "Not sure where to start? Our consultants help you plan technology roadmaps, choose the right stack, and prioritize the features that move your business forward.",
    icon: "Lightbulb",
    features: [
      "Technology stack & architecture advice",
      "Digital transformation roadmaps",
      "Product & technical audits",
      "Startup MVP planning",
    ],
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    shortDescription: "User-focused interface and experience design.",
    description:
      "We design clean, intuitive interfaces backed by user research — crafting experiences that are easy to use and consistent across your entire product.",
    icon: "Palette",
    features: [
      "Web & mobile UI/UX design",
      "Wireframing & prototyping",
      "Design systems & branding",
      "Usability testing & iteration",
    ],
  },
];
