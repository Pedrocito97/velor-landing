"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "@/lib/animations";

const farmerProfiles = [
  {
    name: "The Cultivator",
    role: "Cocoa Farmer",
    generation: "3rd Generation",
    story: "Walking the same steep paths his grandfather walked, carrying baskets of sun-dried beans.",
    image: "/images/farmer-1.jpg",
  },
  {
    name: "The Processor",
    role: "Fermentation Master",
    generation: "Family Tradition",
    story: "Fermenting cocoa in wooden boxes built by his own hands, dried under real sunlight.",
    image: "/images/farmer-2.jpg",
  },
  {
    name: "The Harvester",
    role: "Coffee Picker",
    generation: "Highland Born",
    story: "Hand-picking only the ripest cherries, washing them in clear mountain water.",
    image: "/images/farmer-3.jpg",
  },
];

const craftElements = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4L20 12L28 14L22 20L24 28L16 24L8 28L10 20L4 14L12 12L16 4Z" />
      </svg>
    ),
    title: "Hand Pruned",
    description: "Every branch shaped with care",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="16" r="10" />
        <path d="M16 6V16L22 22" />
      </svg>
    ),
    title: "Sun Dried",
    description: "Patience under open skies",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 26C6 26 10 22 16 22C22 22 26 26 26 26" />
        <path d="M8 18C8 18 12 14 16 14C20 14 24 18 24 18" />
        <path d="M10 10C10 10 13 6 16 6C19 6 22 10 22 10" />
      </svg>
    ),
    title: "Wood Fermented",
    description: "Traditional boxes, ancestral methods",
  },
];

export function Farmers() {
  return (
    <section className="relative py-32 md:py-44 bg-ivory overflow-hidden" id="farmers">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #C5A572 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
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
          <motion.div
            className="flex items-center justify-center gap-6 mb-8"
            variants={fadeInUp}
          >
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-velor-gold/40" />
            <div className="w-2 h-2 rotate-45 bg-velor-gold/40" />
            <span className="text-velor-gold tracking-[0.4em] text-xs">
              THE PEOPLE
            </span>
            <div className="w-2 h-2 rotate-45 bg-velor-gold/40" />
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-velor-gold/40" />
          </motion.div>

          <motion.h2
            className="font-display text-4xl md:text-5xl lg:text-6xl text-mocha tracking-[0.08em] mb-6"
            variants={fadeInUp}
          >
            Guardians of a Legacy
          </motion.h2>

          <motion.p
            className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            These farmers don&apos;t farm to get by. They farm because it&apos;s their identity —
            their inheritance. They don&apos;t produce cocoa. They produce heritage.
          </motion.p>
        </motion.div>

        {/* Farmer profiles */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {farmerProfiles.map((farmer, index) => (
            <motion.div
              key={farmer.name}
              className="group"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
                },
              }}
            >
              {/* Image container */}
              <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-mocha/10">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-mocha/40 to-mocha/60 transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${farmer.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                {/* Sepia overlay for warmth */}
                <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-velor-gold/0 group-hover:bg-velor-gold/10 transition-colors duration-500" />

                {/* Generation badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-ivory/90 backdrop-blur-sm px-3 py-1.5 text-xs tracking-[0.2em] text-mocha uppercase">
                    {farmer.generation}
                  </span>
                </div>

                {/* Corner accents */}
                <div className="absolute bottom-4 right-4 w-12 h-12 border-r border-b border-velor-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="text-center">
                <p className="text-velor-gold tracking-[0.25em] text-xs mb-2">
                  {farmer.role.toUpperCase()}
                </p>
                <h3 className="font-display text-2xl text-mocha tracking-[0.1em] mb-3">
                  {farmer.name}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {farmer.story}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Craft elements */}
        <motion.div
          className="border-t border-velor-gold/20 pt-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.2 },
            },
          }}
        >
          <motion.p
            className="text-center text-velor-gold tracking-[0.3em] text-xs mb-12"
            variants={fadeInUp}
          >
            THE CRAFT
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {craftElements.map((element) => (
              <motion.div
                key={element.title}
                className="text-center"
                variants={fadeInUp}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-velor-gold/30 text-velor-gold mb-4">
                  {element.icon}
                </div>
                <h4 className="font-display text-xl text-mocha tracking-[0.15em] mb-2">
                  {element.title}
                </h4>
                <p className="text-text-muted text-sm">
                  {element.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          className="mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <div className="inline-block">
            <span className="font-display text-4xl text-velor-gold/30">&ldquo;</span>
            <p className="font-display text-xl md:text-2xl text-mocha/80 italic max-w-3xl mx-auto px-8">
              This isn&apos;t agriculture. It&apos;s craftsmanship surrounded by clouds and volcanic rock.
            </p>
            <span className="font-display text-4xl text-velor-gold/30">&rdquo;</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-16 left-16 w-24 h-24 border-l border-t border-velor-gold/10" />
      <div className="absolute bottom-16 right-16 w-24 h-24 border-r border-b border-velor-gold/10" />
    </section>
  );
}
