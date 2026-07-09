"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Nirvix Technology, I'd like to know more about your services."
);
const WHATSAPP_HREF = `https://wa.me/9779818255423?text=${WHATSAPP_MESSAGE}`;

export function WhatsappButton() {
  return (
    <motion.a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed right-4 bottom-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 sm:right-6 sm:bottom-6"
    >
      <FaWhatsapp size={28} />
    </motion.a>
  );
}
