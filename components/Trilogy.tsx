"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "@/lib/animations";

interface Division {
  name: string;
  subtitle: string;
  element: string;
  icon: React.ReactNode;
  emotionalCore: string;
  description: string;
}

const divisions: Division[] = [
  {
    name: "EMBER",
    subtitle: "VELOR",
    element: "Fire",
    icon: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M24 6C24 6 12 18 12 30C12 36.6274 17.3726 42 24 42C30.6274 42 36 36.6274 36 30C36 18 24 6 24 6Z" />
        <path d="M24 18C24 18 18 24 18 30C18 33.3137 20.6863 36 24 36C27.3137 36 30 33.3137 30 30C30 24 24 18 24 18Z" />
        <circle cx="24" cy="30" r="3" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    emotionalCore: "The Volcanic Cocoa",
    description:
      "Born on Mount Cameroon's fiery slopes. The volcano's heat, the mineral-rich soil, the alchemy of transformation in every bean.",
  },
  {
    name: "TERRA",
    subtitle: "VELOR",
    element: "Earth",
    icon: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="24" cy="24" r="18" />
        <ellipse cx="24" cy="24" rx="18" ry="8" />
        <path d="M6 24C6 24 14 18 24 18C34 18 42 24 42 24" />
        <path d="M10 32C10 32 16 28 24 28C32 28 38 32 38 32" />
        <circle cx="24" cy="14" r="3" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    emotionalCore: "The Farmers' Hands",
    description:
      "Generations of cultivators walking the same steep paths. Their wooden fermentation boxes, their sun-dried beans, their heritage.",
  },
  {
    name: "ORIGIN",
    subtitle: "VELOR",
    element: "Air / Journey",
    icon: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M6 24H42" />
        <path d="M34 16L42 24L34 32" />
        <path d="M14 14C14 14 20 20 20 24C20 28 14 34 14 34" />
        <path d="M24 10C24 10 28 18 28 24C28 30 24 38 24 38" />
        <circle cx="10" cy="24" r="2" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    emotionalCore: "The Complete Journey",
    description:
      "From the highlands' breath to the volcano's fire, from soil to sensation. Single-origin excellence in every bottle.",
  },
];

function DivisionCard({
  division,
  index,
}: {
  division: Division;
  index: number;
}) {
  return (
    <motion.div
      className="group relative"
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: index * 0.15,
            ease: [0.4, 0, 0.2, 1],
          },
        },
      }}
    >
      {/* Card */}
      <div className="relative bg-ivory h-full p-10 md:p-12 transition-all duration-500 group-hover:bg-ivory-warm">
        {/* Top border accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-velor-gold/30 to-transparent" />

        {/* Number */}
        <div className="absolute top-8 right-8">
          <span className="font-display text-6xl text-velor-gold/10 group-hover:text-velor-gold/20 transition-colors duration-500">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Icon */}
        <div className="text-velor-gold/70 mb-8 transition-all duration-500 group-hover:text-velor-gold group-hover:scale-110">
          {division.icon}
        </div>

        {/* Subtitle */}
        <p className="text-velor-gold tracking-[0.3em] text-xs mb-2">
          {division.subtitle}
        </p>

        {/* Name */}
        <h3 className="font-display text-3xl md:text-4xl text-mocha tracking-[0.2em] mb-4">
          {division.name}
        </h3>

        {/* Element tag */}
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="w-4 h-px bg-velor-gold/40" />
          <span className="text-text-muted tracking-[0.15em] text-xs uppercase">
            {division.element}
          </span>
        </div>

        {/* Emotional core */}
        <p className="font-display text-lg text-mocha-light italic mb-4">
          {division.emotionalCore}
        </p>

        {/* Description */}
        <p className="text-text-muted text-sm leading-[1.8]">
          {division.description}
        </p>

        {/* Bottom decorative element */}
        <div className="mt-10 flex items-center gap-3">
          <div className="w-8 h-px bg-velor-gold/30 transition-all duration-500 group-hover:w-16 group-hover:bg-velor-gold/60" />
          <div className="w-1.5 h-1.5 rotate-45 border border-velor-gold/30 transition-colors duration-500 group-hover:border-velor-gold/60 group-hover:bg-velor-gold/20" />
        </div>

        {/* Hover frame */}
        <div className="absolute inset-0 border border-transparent group-hover:border-velor-gold/10 transition-colors duration-500 pointer-events-none" />

        {/* Corner accents on hover */}
        <div className="absolute top-4 left-4 w-6 h-6 border-l border-t border-transparent group-hover:border-velor-gold/20 transition-colors duration-500" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-transparent group-hover:border-velor-gold/20 transition-colors duration-500" />
      </div>
    </motion.div>
  );
}

export function Trilogy() {
  return (
    <section className="relative py-32 md:py-44 bg-ivory-warm overflow-hidden" id="trilogy">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, #C5A572 25%, transparent 25%), linear-gradient(-45deg, #C5A572 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #C5A572 75%), linear-gradient(-45deg, transparent 75%, #C5A572 75%)`,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
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
            <div className="relative">
              <div className="w-2 h-2 rotate-45 bg-velor-gold/40" />
            </div>
            <span className="text-velor-gold tracking-[0.4em] text-xs">
              THE ELEMENTAL TRILOGY
            </span>
            <div className="relative">
              <div className="w-2 h-2 rotate-45 bg-velor-gold/40" />
            </div>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-velor-gold/40" />
          </motion.div>

          <motion.h2
            className="font-display text-4xl md:text-5xl lg:text-6xl text-mocha tracking-[0.08em] mb-6"
            variants={fadeInUp}
          >
            Three Sensory Chapters
          </motion.h2>

          <motion.p
            className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Each division represents a different psychological frequency — unified
            by The House of Velor. No overlap. No competition.
          </motion.p>
        </motion.div>

        {/* Division cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-velor-gold/10"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {divisions.map((division, index) => (
            <DivisionCard key={division.name} division={division} index={index} />
          ))}
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          className="mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <p className="font-display text-xl md:text-2xl text-mocha/70 italic">
            &ldquo;Each evokes a different psychological frequency&rdquo;
          </p>
        </motion.div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-16 left-16 w-24 h-24 border-l border-t border-velor-gold/10" />
      <div className="absolute bottom-16 right-16 w-24 h-24 border-r border-b border-velor-gold/10" />
    </section>
  );
}
