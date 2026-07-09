"use client";

import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";
import logoImg from "@/app/logo.png";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#" },
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

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Nirvix Technology, I'd like to know more about your services."
);

const contactInfo = [
  {
    icon: <Mail size={18} className="text-brand" />,
    text: "info@nirvixtech.com",
    href: "mailto:info@nirvixtech.com",
  },
  {
    icon: <Phone size={18} className="text-brand" />,
    text: "+977 9818255423",
    href: "tel:+9779818255423",
  },
  {
    icon: <FaWhatsapp size={18} className="text-brand" />,
    text: "Chat on WhatsApp",
    href: `https://wa.me/9779818255423?text=${WHATSAPP_MESSAGE}`,
    external: true,
  },
  {
    icon: <MapPin size={18} className="text-brand" />,
    text: "Satdobato, Lalitpur",
  },
];

const socialLinks = [
  {
    icon: <FaFacebook size={20} />,
    label: "Facebook",
    href: "https://www.facebook.com/p/Nirvix-Technology-61575980913561/",
  },
  {
    icon: <FaLinkedin size={20} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/nirvix-technology",
  },
  {
    icon: <FaTiktok size={20} />,
    label: "TikTok",
    href: "https://www.tiktok.com/@nirvix.technology",
  },
  {
    icon: <FaInstagram size={20} />,
    label: "Instagram",
    href: "https://www.instagram.com/nirvix_tech/",
  },
];

export function SiteFooter({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <footer id="contact" className="relative m-8 h-fit overflow-hidden rounded-3xl bg-white">
      <div className="relative z-40 mx-auto max-w-7xl p-8 sm:p-14">
        <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-16">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <Image src={logoImg} alt="Nirvix Technology" className="h-24 w-auto object-contain sm:h-28" />
            <p className="text-sm leading-relaxed text-gray-500">
              Your trusted tech partner from Nepal, delivering high-performance software, web, and
              mobile solutions.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-6 text-lg font-semibold text-gray-900">{section.title}</h3>
              <ul className="space-y-3 text-gray-600">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-colors hover:text-brand">
                      {link.label}
                    </a>
                  </li>
                ))}
                {section.title === "Explore" && (
                  <li className="relative w-fit">
                    <button
                      type="button"
                      onClick={onOpenContact}
                      className="transition-colors hover:text-brand"
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
            <h3 className="mb-6 text-lg font-semibold text-gray-900">Contact Us</h3>
            <ul className="space-y-4 text-gray-600">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="transition-colors hover:text-brand"
                      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
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

        {/* Footer bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <div className="flex gap-6">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-brand"
              >
                {icon}
              </a>
            ))}
          </div>

          <p className="text-center md:text-left">© Nirvix Technology 2025 | All Rights Reserved</p>

          <div className="flex gap-5">
            <a href="#terms" className="transition-colors hover:text-brand-deep">Terms &amp; Condition</a>
            <a href="#privacy" className="transition-colors hover:text-brand-deep">Privacy Policy</a>
          </div>
        </div>

        <hr className="mt-8 border-t border-gray-200" />
      </div>

      {/* Text hover effect */}
      <div className="relative z-10 -mt-24 -mb-36 hidden h-[30rem] lg:flex">
        <TextHoverEffect text="Nirvix" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
