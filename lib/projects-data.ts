export interface Project {
  /** Used for the screenshot filenames in /public/projects/. */
  slug: string;
  name: string;
  url: string;
  /** Shown under the name on the card. */
  category: string;
  description: string;
  location: string;
}

/**
 * Client websites built by Nirvix Technology. Each entry expects two screenshots in
 * `/public/projects/`: `<slug>-desktop.webp` (16:10) and `<slug>-mobile.webp` (9:19.5).
 * Regenerate them with `scripts/capture-project-shots.mjs`.
 */
export const projects: Project[] = [
  {
    slug: "leafpropertyhub-com",
    name: "Leaf Property Hub",
    url: "https://leafpropertyhub.com",
    category: "Real Estate",
    description:
      "A Kathmandu-based property marketplace for buying, selling, and renting ghar jagga across Nepal, with Lalpurja and Napi Naksa verification.",
    location: "Nepal",
  },
  {
    slug: "tradeskul-com",
    name: "TradeSkul",
    url: "https://tradeskul.com",
    category: "Education",
    description:
      "A NEPSE trading education platform with tiered courses, advisory content, and eSewa and Khalti payment integration.",
    location: "Nepal",
  },
  {
    slug: "seropheroonline-com",
    name: "Serophero Online",
    url: "https://seropheroonline.com",
    category: "News & Media",
    description:
      "A high-volume Nepali news portal covering politics, business, banking, and tourism, built for fast publishing and heavy daily traffic.",
    location: "Nepal",
  },
  {
    slug: "jonetrekking-com",
    name: "J One Trekking",
    url: "https://jonetrekking.com",
    category: "Travel & Tourism",
    description:
      "A trekking company website featuring Everest and Annapurna itineraries, with structured trip pages built for search visibility.",
    location: "Nepal",
  },
  {
    slug: "greaterhimalayatrips-com",
    name: "Greater Himalaya Treks & Tours",
    url: "https://greaterhimalayatrips.com",
    category: "Travel & Tourism",
    description:
      "A travel agency website presenting trekking and tour packages with enquiry flows designed to convert international visitors.",
    location: "Nepal",
  },
  {
    slug: "globalrisingtravel-com",
    name: "Global Rising Tours & Travel",
    url: "https://globalrisingtravel.com",
    category: "Travel & Tourism",
    description:
      "A full-service travel agency site covering domestic and international tours, holiday packages, visa services, and flight ticketing.",
    location: "Nepal",
  },
  {
    slug: "leaftravelsandtour-com",
    name: "Leaf Travel and Tour",
    url: "https://leaftravelsandtour.com",
    category: "Travel & Tourism",
    description:
      "A tour operator website offering trekking, safari, and customised holiday packages across Nepal.",
    location: "Nepal",
  },
  {
    slug: "srtravelandholidays-com",
    name: "SR Travel and Holidays",
    url: "https://srtravelandholidays.com",
    category: "Travel & Tourism",
    description:
      "A travel agency site bringing tours, trekking, flight bookings, holiday packages, and visa services under one brand.",
    location: "Nepal",
  },
  {
    slug: "mulinventure-com",
    name: "Mulin Venture",
    url: "https://mulinventure.com",
    category: "Design Studio",
    description:
      "A biophilic design studio site showcasing green roofs, living walls, and landscape greening work, with consultation booking.",
    location: "Nepal",
  },
  {
    slug: "damaruresources-com",
    name: "Damaru Resources",
    url: "https://damaruresources.com",
    category: "Recruitment",
    description:
      "A manpower and foreign employment agency website connecting Nepali talent to verified international opportunities.",
    location: "Nepal",
  },
  {
    slug: "suryodayaholdings-com",
    name: "Suryodaya Holdings",
    url: "https://suryodayaholdings.com",
    category: "Finance",
    description:
      "A launch site for an investment and holdings group, built as a brand-first landing experience ahead of full rollout.",
    location: "Nepal",
  },
  {
    slug: "nepalncef-com",
    name: "Nepal China Exchange Forum",
    url: "https://nepalncef.com",
    category: "Organization",
    description:
      "An organisation website promoting Nepal-China cooperation, cultural exchange, and partnership programmes.",
    location: "Nepal",
  },
  {
    slug: "jcibaglung-org",
    name: "JCI Baglung",
    url: "https://jcibaglung.org",
    category: "Non-profit",
    description:
      "A chapter site for a youth leadership organisation active since 1978, covering training programmes and community projects.",
    location: "Nepal",
  },
  {
    slug: "tdhfpsanp-org",
    name: "The Direct Help Foundation",
    url: "https://tdhfpsanp.org",
    category: "Non-profit",
    description:
      "A child welfare foundation website built around impact storytelling, programme pages, and donation calls to action.",
    location: "Nepal",
  },
  {
    slug: "aarativog-com",
    name: "Aarti Bhog Pariwar",
    url: "https://aarativog.com",
    category: "Non-profit",
    description:
      "A bilingual site for a food relief initiative serving free meals with dignity across Nepal.",
    location: "Nepal",
  },
  {
    slug: "poudelbanshamahasangh2076-org",
    name: "Poudel Bansha Mahasangh",
    url: "https://poudelbanshamahasangh2076.org",
    category: "Organization",
    description:
      "A community federation website in Nepali, covering membership, events, and organisational history.",
    location: "Nepal",
  },
  {
    slug: "jandjroo-com-au",
    name: "J&J Roo",
    url: "https://jandjroo.com.au",
    category: "Business",
    description:
      "An Australian brand site built for a local service business, with a conversion-focused landing structure.",
    location: "Australia",
  },
  {
    slug: "jandjroofitness-com-au",
    name: "J&J Roo Fitness",
    url: "https://jandjroofitness.com.au",
    category: "Fitness",
    description:
      "A fitness brand website presenting programmes, coaching, and membership sign-up for an Australian audience.",
    location: "Australia",
  },
  {
    slug: "luxeshineprofessional-co-nz",
    name: "LuxeShine Professional",
    url: "https://www.luxeshineprofessional.co.nz",
    category: "Business",
    description:
      "A cleaning and pest control services website for the New Zealand market, built around local service-area pages.",
    location: "New Zealand",
  },
  {
    slug: "towingbysbcs-com",
    name: "Towing by SBCS",
    url: "https://towingbysbcs.com",
    category: "Business",
    description:
      "A towing and roadside assistance website built for fast mobile access and one-tap calling in an emergency.",
    location: "Australia",
  },
  {
    slug: "nirvixtech-com",
    name: "Nirvix Technology",
    url: "https://www.nirvixtech.com",
    category: "Business",
    description:
      "Our own site — the reference build for how we approach performance, structured data, and search visibility.",
    location: "Nepal",
  },
];

export const projectCategories = Array.from(
  new Set(projects.map((project) => project.category))
).sort();
