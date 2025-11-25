"use client";

import { motion } from "framer-motion";
import { DivisionCard } from "./DivisionCard";
import { Sigil } from "./ui/Sigil";

const divisions = [
  {
    name: "VELOR",
    subtitle: "SPIRITUS",
    tagline: "The Art of Indulgence",
    description: "Premium liqueurs crafted with Cameroonian botanicals",
    href: "/spirits",
    image: "/images/velor-bottles.jpg",
  },
  {
    name: "VELOR",
    subtitle: "CAF",
    tagline: "Sharpen the Mind",
    description: "Single-origin coffee from highland farms",
    href: "/coffee",
    image: "/images/highlands-coffee.jpg",
  },
  {
    name: "VELOR",
    subtitle: "TERRA",
    tagline: "Grounded Indulgence",
    description: "Artisan chocolate from sun-dried cacao",
    href: "/chocolate",
    image: "/images/mount-cameroon.jpg",
  },
];

export function Divisions() {
  return (
    <section className="relative py-32 md:py-40 bg-ivory overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.01]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #C5A572 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Decorative side lines */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-velor-gold/20 to-transparent hidden lg:block" />
      <div className="absolute right-8 top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-velor-gold/20 to-transparent hidden lg:block" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Top ornament */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-velor-gold/30" />
            <Sigil size={28} color="#C5A572" animated={false} />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-velor-gold/30" />
          </div>

          <motion.p
            className="text-velor-gold/80 tracking-[0.5em] text-[10px] mb-6 uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Three Expressions of Excellence
          </motion.p>

          <motion.h2
            className="font-display text-4xl md:text-5xl lg:text-6xl text-mocha tracking-[0.1em] mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Our Collections
          </motion.h2>

          {/* Elegant divider */}
          <motion.div
            className="flex items-center justify-center gap-6 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-velor-gold/20 to-velor-gold/40" />
            <div className="w-2 h-2 rotate-45 border border-velor-gold/40" />
            <div className="w-20 h-px bg-gradient-to-l from-transparent via-velor-gold/20 to-velor-gold/40" />
          </motion.div>

          <motion.p
            className="text-text-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Each division tells its own story, united by craft, heritage,
            and uncompromising quality.
          </motion.p>
        </motion.div>

        {/* Division Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {divisions.map((division, index) => (
            <DivisionCard
              key={division.href}
              name={division.name}
              subtitle={division.subtitle}
              tagline={division.tagline}
              description={division.description}
              href={division.href}
              image={division.image}
              index={index}
            />
          ))}
        </div>

        {/* Bottom ornament */}
        <motion.div
          className="flex items-center justify-center gap-3 mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="w-1.5 h-1.5 bg-velor-gold/30 rotate-45" />
          <div className="w-1 h-1 bg-velor-gold/20 rotate-45" />
          <div className="w-1.5 h-1.5 bg-velor-gold/30 rotate-45" />
        </motion.div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-20 left-20 w-28 h-28 hidden lg:block">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-velor-gold/15 to-transparent" />
        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-velor-gold/15 to-transparent" />
      </div>
      <div className="absolute top-20 right-20 w-28 h-28 hidden lg:block">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-velor-gold/15 to-transparent" />
        <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-velor-gold/15 to-transparent" />
      </div>
      <div className="absolute bottom-20 left-20 w-28 h-28 hidden lg:block">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-velor-gold/15 to-transparent" />
        <div className="absolute bottom-0 left-0 h-full w-px bg-gradient-to-t from-velor-gold/15 to-transparent" />
      </div>
      <div className="absolute bottom-20 right-20 w-28 h-28 hidden lg:block">
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-velor-gold/15 to-transparent" />
        <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-velor-gold/15 to-transparent" />
      </div>
    </section>
  );
}
