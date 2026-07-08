"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa6";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#team" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Home", href: "#top" },
      { label: "Testimonials", href: "#testimonials" },
    ],
  },
];

const contactInfo = [
  {
    icon: <Mail size={18} className="text-brand-light" />,
    text: "info@nirvixtech.com",
    href: "mailto:info@nirvixtech.com",
  },
  {
    icon: <Phone size={18} className="text-brand-light" />,
    text: "+977 9818255423",
    href: "tel:+9779818255423",
  },
  {
    icon: <MapPin size={18} className="text-brand-light" />,
    text: "Harisiddhi, Lalitpur",
  },
];

const socialLinks = [
  { icon: <FaFacebook size={20} />, label: "Facebook", href: "#facebook" },
  { icon: <FaLinkedin size={20} />, label: "LinkedIn", href: "#linkedin" },
  { icon: <FaTiktok size={20} />, label: "TikTok", href: "#tiktok" },
  { icon: <FaInstagram size={20} />, label: "Instagram", href: "#instagram" },
];

export function SiteFooter({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <footer id="contact" className="relative m-8 h-fit overflow-hidden rounded-3xl bg-[#0F0F11]">
      <div className="relative z-40 mx-auto max-w-7xl p-8 sm:p-14">
        <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-16">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="#0168b5" strokeWidth={1.8} strokeLinecap="round" className="h-7 w-7">
                <circle cx="12" cy="12" r="9" />
                <path d="M4.8 5.6A9 9 0 0 0 4.8 18.4" />
                <path d="M19.2 5.6a9 9 0 0 1 0 12.8" />
              </svg>
              <span className="text-2xl font-bold uppercase tracking-[0.15em] text-white">Nirvix</span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Your trusted tech partner from Nepal, delivering high-performance software, web, and
              mobile solutions.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="mb-6 text-lg font-semibold text-white">{section.title}</h4>
              <ul className="space-y-3 text-white/70">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-colors hover:text-brand-light">
                      {link.label}
                    </a>
                  </li>
                ))}
                {section.title === "Explore" && (
                  <li className="relative w-fit">
                    <button
                      type="button"
                      onClick={onOpenContact}
                      className="transition-colors hover:text-brand-light"
                    >
                      Get a Quote
                    </button>
                    <span className="absolute -right-3 top-0 h-2 w-2 animate-pulse rounded-full bg-brand-light" />
                  </li>
                )}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">Contact Us</h4>
            <ul className="space-y-4 text-white/70">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  {item.icon}
                  {item.href ? (
                    <a href={item.href} className="transition-colors hover:text-brand-light">
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-8 border-t border-white/15" />

        {/* Footer bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/60 md:flex-row">
          <div className="flex gap-6">
            {socialLinks.map(({ icon, label, href }) => (
              <a key={label} href={href} aria-label={label} className="transition-colors hover:text-brand-light">
                {icon}
              </a>
            ))}
          </div>

          <p className="text-center md:text-left">© Nirvix Technology 2025 | All Rights Reserved</p>

          <div className="flex gap-5">
            <a href="#terms" className="transition-colors hover:text-white">Terms &amp; Condition</a>
            <a href="#privacy" className="transition-colors hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="-mt-52 -mb-36 hidden h-[30rem] lg:flex">
        <TextHoverEffect text="Nirvix" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
