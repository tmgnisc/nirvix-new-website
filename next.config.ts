import type { NextConfig } from "next";

/**
 * 301/308 map from the old WordPress site that lived on this domain. GSC is still
 * re-crawling those URLs and reporting 404s, so every one of them needs to land on the
 * closest equivalent page rather than a dead end.
 *
 * Order matters — Next matches top to bottom, so the specific rules sit above the
 * pattern rules that sweep up old URLs not on the reported list.
 */
const legacyRedirects = [
  // --- Pages with a direct equivalent ---
  { source: "/our-team", destination: "/team" },
  { source: "/our-projects", destination: "/projects" },
  { source: "/about-us", destination: "/#about" },
  { source: "/contact-us", destination: "/#contact" },

  // --- Specific legacy article: closest topical match is our hiring/talent piece ---
  {
    source:
      "/2026/01/26/the-ultimate-guide-to-building-and-managing-a-remote-team-in-nepal-2026-edition",
    destination: "/blog/nepals-it-freelancing-boom-what-it-means-for-hiring",
  },

  // --- Named category archives ---
  { source: "/category/tech-trends", destination: "/blog" },
  { source: "/category/achievements", destination: "/projects" },

  // --- Patterns: catch the old URLs that were not in the reported list ---
  // Any WordPress RSS feed: /feed, /<post>/feed, /category/<x>/feed.
  { source: "/feed", destination: "/blog" },
  { source: "/:path*/feed", destination: "/blog" },
  // Dated permalinks, /YYYY/MM/DD/slug and /YYYY/MM/slug. The trailing wildcard also
  // absorbs the suffixes WordPress hangs off a post URL (/amp, /comment-page-2).
  {
    source: "/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:path*",
    destination: "/blog",
  },
  { source: "/:year(\\d{4})/:month(\\d{2})/:path*", destination: "/blog" },
  // Remaining taxonomy and author archives.
  { source: "/category/:slug*", destination: "/blog" },
  { source: "/tag/:slug*", destination: "/blog" },
  { source: "/author/:slug*", destination: "/team" },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
    ],
  },
  async redirects() {
    // permanent: true emits a 308, which Google treats the same as a 301 while
    // preserving the request method.
    return legacyRedirects.map((rule) => ({ ...rule, permanent: true }));
  },
};

export default nextConfig;
