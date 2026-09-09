export interface WeavoStat {
  value: string;
  label: string;
}

export interface WeavoFeature {
  title: string;
  description: string;
  icon: "FileText" | "Route" | "BedDouble" | "Library" | "Palette" | "Coins";
}

export interface WeavoScreen {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  title: string;
  description: string;
  notes: string[];
}

export const WEAVO_APP_URL = "https://weavo.nirvixtech.com/";

/**
 * Canonical product description. Shared by the sitewide SoftwareApplication node
 * in app/layout.tsx and the richer one on /weavo — they carry the same @id, so a
 * consumer merges them and any disagreement here would surface as two values.
 */
export const WEAVO_DESCRIPTION =
  "Weavo is travel agency software built by Nirvix Technology in Nepal. Turn a trip into a branded quotation, itinerary or hotel voucher PDF in minutes — priced, on your own letterhead. Free plan available.";

export const weavoStats: WeavoStat[] = [
  { value: "3", label: "Document types live today" },
  { value: "9", label: "Currencies, set per document" },
  { value: "1", label: "Library reused across every trip" },
  { value: "PDF", label: "Download or email from Weavo" },
];

export const weavoFeatures: WeavoFeature[] = [
  {
    title: "Branded Quotations",
    description:
      "Priced service lines, discount and tax, a valid-until date, inclusions, exclusions and your terms — issued on your own letterhead, not ours.",
    icon: "FileText",
  },
  {
    title: "Day-by-Day Itineraries",
    description:
      "Build the trip day by day with destinations, dates and traveller counts, then issue it on the same letterhead as the quotation it came from.",
    icon: "Route",
  },
  {
    title: "Hotel Confirmations",
    description:
      "Hotel, room type, meal plan, check-in and check-out, and the nights confirmed — the voucher a guest actually arrives at the front desk with.",
    icon: "BedDouble",
  },
  {
    title: "A Reusable Library",
    description:
      "Customers, hotels and packages live in a library you build once. Pull a hotel into a booking and its details and rates come with it, still editable.",
    icon: "Library",
  },
  {
    title: "Your Branding Throughout",
    description:
      "Upload your logo, set your colours, add your legal name and PAN/VAT number. Three letterhead styles, and a live preview rendered by the same engine as the PDF.",
    icon: "Palette",
  },
  {
    title: "Multi-Currency Pricing",
    description:
      "Quote in NPR, USD, EUR, GBP, INR, AUD, AED, JPY or CNY — chosen per document, so a euro quotation and a rupee quotation need no workaround.",
    icon: "Coins",
  },
];

export const weavoScreens: WeavoScreen[] = [
  {
    src: "/products/weavo-dashboard.webp",
    width: 1920,
    height: 1200,
    alt: "The Weavo dashboard by Nirvix Technology, showing document counts, pipeline and accepted value, recent documents and a setup checklist",
    caption: "Dashboard",
    title: "The number you actually need on a Monday",
    description:
      "How much work is sitting with a client, how much has been accepted, and what the team produced last — without running a report.",
    notes: [
      "Pipeline and accepted value in your own currency",
      "Recent documents with customer, type, status and total",
      "A share-by-type breakdown and a per-month count",
    ],
  },
  {
    src: "/products/weavo-document-builder.webp",
    width: 1920,
    height: 1333,
    alt: "The Weavo document builder, with an editing form on the left and a live branded letterhead preview on the right",
    caption: "Document builder",
    title: "The form on the left, the finished page on the right",
    description:
      "Every field you fill in lands on the letterhead immediately, priced and totalled, so a quotation is proofread as it is written.",
    notes: [
      "Services priced by quantity, unit and unit price",
      "Subtotal, discount, tax and total worked out for you",
      "Download the PDF, email it or duplicate it in one panel",
    ],
  },
  {
    src: "/products/weavo-documents.webp",
    width: 1920,
    height: 907,
    alt: "The Weavo documents list, with search plus document type and status filters",
    caption: "Documents",
    title: "Everything quoted, planned or confirmed",
    description:
      "One list for the whole workspace. Search by number, customer or destination, then narrow it by type or status.",
    notes: [
      "Filter by quotation, itinerary or hotel confirmation",
      "Filter by draft, issued, sent, accepted or cancelled",
      "View, edit, export or delete without leaving the row",
    ],
  },
];

export const weavoFaqItems = [
  {
    question: "What is Weavo?",
    answer:
      "Weavo is travel agency software built and deployed by Nirvix Technology in Nepal. It turns a trip into a branded, client-ready PDF — a quotation, an itinerary or a hotel confirmation — in minutes, and keeps every customer, hotel and package in one organised workspace.",
  },
  {
    question: "Who is Weavo built for?",
    answer:
      "Travel agencies, tour operators and trekking companies that still produce quotations and itineraries in Word or Excel. If your team retypes the same hotel rates into a new document for every enquiry, Weavo replaces that workflow.",
  },
  {
    question: "What documents does Weavo produce?",
    answer:
      "Quotations, itineraries and hotel confirmations today, with invoices and payment receipts next. Each is built from the trip you entered — customer, dates, travellers, priced services — rendered on your letterhead, then downloaded or emailed straight from Weavo.",
  },
  {
    question: "Do the documents carry our branding?",
    answer:
      "Yours, entirely. Upload your logo, set a primary and secondary colour, add your legal name, PAN or VAT number and the footer text you want on every page. Weavo does not put its own name on the document your client opens.",
  },
  {
    question: "Can we quote in different currencies?",
    answer:
      "Yes. Currency is set per document across NPR, USD, EUR, GBP, INR, AUD, AED, JPY and CNY — so a euro quotation for one client and a rupee quotation for the next need no workaround.",
  },
  {
    question: "Can our whole team work in it?",
    answer:
      "Yes. A workspace holds as many people as you need, split into admins who manage branding, settings and users, and staff who produce documents. Everyone shares the same library and document list, and no other company's workspace is visible from yours.",
  },
  {
    question: "How much does Weavo cost?",
    answer:
      "There is a free plan with 5 documents a month and no card required, then Standard at Rs 299 per workspace per month for unlimited documents and email delivery, and Premium at Rs 499 for unlimited letterhead templates, priority support and guided onboarding.",
  },
  {
    question: "Who do we contact for support?",
    answer:
      "Nirvix Technology builds and maintains Weavo, so onboarding, workspace setup, integration and support all come from the same team in Lalitpur, Nepal. Reach us by phone, email or WhatsApp.",
  },
];
