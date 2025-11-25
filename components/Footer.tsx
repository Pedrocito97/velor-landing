"use client";

import { motion } from "framer-motion";
import { Sigil } from "./ui/Sigil";
import { fadeInUp, viewportOnce } from "@/lib/animations";

const socialLinks = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
];

const footerLinks = [
  { name: "Our Cocoa", href: "#cocoa-story" },
  { name: "Our Coffee", href: "#coffee-story" },
  { name: "The Farmers", href: "#farmers" },
  { name: "Single-Origin", href: "#single-origin" },
  { name: "The Spirit", href: "#collection" },
];

export function Footer() {
  return (
    <footer className="relative bg-ivory overflow-hidden">
      {/* Top decorative border */}
      <div className="h-px bg-gradient-to-r from-transparent via-velor-gold/30 to-transparent" />

      {/* Main footer content */}
      <div className="relative py-24 md:py-32">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #C5A572 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div
            className="flex flex-col items-center text-center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {/* Sigil */}
            <motion.div variants={fadeInUp}>
              <Sigil size={70} color="#C5A572" animated={false} />
            </motion.div>

            {/* Brand name */}
            <motion.div className="mt-8" variants={fadeInUp}>
              <p className="text-velor-gold tracking-[0.3em] text-xs mb-2">
                THE HOUSE OF
              </p>
              <h3 className="font-display text-3xl md:text-4xl tracking-[0.25em] text-mocha">
                VELOR
              </h3>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="mt-4 text-text-muted tracking-[0.15em] text-sm italic"
              variants={fadeInUp}
            >
              From the fire of the volcano to the breath of the highlands.
            </motion.p>

            {/* Ethical badge */}
            <motion.div
              className="mt-6 inline-flex items-center gap-3 px-4 py-2 border border-velor-gold/30"
              variants={fadeInUp}
            >
              <div className="w-2 h-2 bg-velor-gold/60 rounded-full" />
              <span className="text-velor-gold/80 tracking-[0.2em] text-xs">
                ETHICALLY SOURCED • SUPPORTING CAMEROONIAN FARMERS
              </span>
            </motion.div>

            {/* Divider */}
            <motion.div
              className="my-12 flex items-center gap-6"
              variants={fadeInUp}
            >
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-velor-gold/30" />
              <div className="relative">
                <div className="w-2 h-2 rotate-45 border border-velor-gold/40" />
              </div>
              <div className="w-20 h-px bg-gradient-to-l from-transparent to-velor-gold/30" />
            </motion.div>

            {/* Navigation links */}
            <motion.nav
              className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
              variants={fadeInUp}
            >
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-text-muted hover:text-velor-gold tracking-[0.15em] text-sm transition-colors duration-300 elegant-link"
                >
                  {link.name}
                </a>
              ))}
            </motion.nav>

            {/* Contact */}
            <motion.div className="mt-12 space-y-3" variants={fadeInUp}>
              <p className="text-text-light tracking-[0.2em] text-xs uppercase">
                Inquiries
              </p>
              <a
                href="mailto:contact@houseofvelor.com"
                className="text-mocha tracking-[0.1em] text-sm hover:text-velor-gold transition-colors duration-300"
              >
                contact@houseofvelor.com
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="mt-10 flex items-center gap-8"
              variants={fadeInUp}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-text-muted hover:text-velor-gold transition-all duration-300 hover:scale-110"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Corner accents */}
        <div className="absolute top-12 left-12 w-16 h-16 border-l border-t border-velor-gold/10" />
        <div className="absolute top-12 right-12 w-16 h-16 border-r border-t border-velor-gold/10" />
        <div className="absolute bottom-24 left-12 w-16 h-16 border-l border-b border-velor-gold/10" />
        <div className="absolute bottom-24 right-12 w-16 h-16 border-r border-b border-velor-gold/10" />
      </div>

      {/* Bottom bar */}
      <div className="border-t border-velor-gold/10 bg-ivory-warm">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-text-light tracking-[0.1em]">
            <p>
              &copy; {new Date().getFullYear()} The House of Velor. All rights
              reserved.
            </p>
            <div className="flex items-center gap-8">
              <a
                href="#"
                className="hover:text-velor-gold transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <div className="w-1 h-1 bg-velor-gold/30 rotate-45" />
              <a
                href="#"
                className="hover:text-velor-gold transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
