"use client";

import { motion } from "framer-motion";
import { Sigil } from "./ui/Sigil";

const pillars = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M16 4L19 10L26 11L21 16L22 23L16 20L10 23L11 16L6 11L13 10L16 4Z" />
      </svg>
    ),
    title: "Hand-Harvested",
    description: "Every bean selected by experienced hands, ensuring only the finest make the cut.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="16" cy="16" r="10" />
        <path d="M16 6V16L22 22" />
      </svg>
    ),
    title: "Sun-Dried",
    description: "Patience under African skies. No machines, no shortcuts — just time and sunlight.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="6" y="10" width="20" height="16" rx="1" />
        <path d="M10 10V7" />
        <path d="M16 10V5" />
        <path d="M22 10V7" />
        <circle cx="12" cy="18" r="2" />
        <circle cx="20" cy="18" r="2" />
      </svg>
    ),
    title: "Small-Batch",
    description: "Crafted in limited quantities. Quality over volume, always.",
  },
];

export function Heritage() {
  return (
    <section className="relative py-32 md:py-40 bg-ivory-warm overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #3D2B1F 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Decorative side elements */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="w-px h-20 bg-gradient-to-b from-transparent to-velor-gold/20" />
        <div className="w-1.5 h-1.5 rotate-45 border border-velor-gold/30" />
        <div className="w-px h-20 bg-gradient-to-t from-transparent to-velor-gold/20" />
      </div>
      <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="w-px h-20 bg-gradient-to-b from-transparent to-velor-gold/20" />
        <div className="w-1.5 h-1.5 rotate-45 border border-velor-gold/30" />
        <div className="w-px h-20 bg-gradient-to-t from-transparent to-velor-gold/20" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
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
            Our Commitment
          </motion.p>

          <motion.h2
            className="font-display text-4xl md:text-5xl text-mocha tracking-[0.1em] mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Guardians of a Legacy
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
            className="text-text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            We don&apos;t just source ingredients. We partner with farmers who see their work
            as heritage — not a job, but an identity passed through generations.
          </motion.p>
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              {/* Icon container */}
              <div className="relative inline-flex items-center justify-center mb-8">
                <div className="absolute inset-0 w-20 h-20 border border-velor-gold/20 rotate-45 transform-gpu" />
                <div className="w-20 h-20 flex items-center justify-center text-velor-gold">
                  {pillar.icon}
                </div>
              </div>

              <h3 className="font-display text-xl text-mocha tracking-[0.2em] mb-4 uppercase">
                {pillar.title}
              </h3>

              <p className="text-text-muted text-sm leading-relaxed max-w-xs mx-auto">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative inline-block">
            {/* Quote decorations */}
            <div className="absolute -top-4 -left-6 text-velor-gold/30 text-4xl font-display">&ldquo;</div>
            <div className="absolute -bottom-4 -right-6 text-velor-gold/30 text-4xl font-display">&rdquo;</div>

            <div className="border-t border-b border-velor-gold/15 py-10 px-16">
              <p className="font-display text-xl md:text-2xl text-mocha/80 italic tracking-wide">
                This isn&apos;t production.
                <br />
                <span className="text-velor-gold">It&apos;s preservation.</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Ethical badge */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 border border-velor-gold/15">
            <div className="w-2 h-2 rounded-full bg-velor-gold/50" />
            <span className="text-mocha/50 tracking-[0.25em] text-[10px] uppercase">
              Ethically Sourced
            </span>
            <div className="w-px h-4 bg-velor-gold/20" />
            <span className="text-mocha/50 tracking-[0.25em] text-[10px] uppercase">
              Supporting Cameroonian Farmers
            </span>
          </div>
        </motion.div>

        {/* Bottom ornament */}
        <motion.div
          className="flex items-center justify-center gap-3 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="w-1.5 h-1.5 bg-velor-gold/30 rotate-45" />
          <div className="w-1 h-1 bg-velor-gold/20 rotate-45" />
          <div className="w-1.5 h-1.5 bg-velor-gold/30 rotate-45" />
        </motion.div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-20 left-20 w-28 h-28 hidden lg:block">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-velor-gold/10 to-transparent" />
        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-velor-gold/10 to-transparent" />
      </div>
      <div className="absolute top-20 right-20 w-28 h-28 hidden lg:block">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-velor-gold/10 to-transparent" />
        <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-velor-gold/10 to-transparent" />
      </div>
      <div className="absolute bottom-20 left-20 w-28 h-28 hidden lg:block">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-velor-gold/10 to-transparent" />
        <div className="absolute bottom-0 left-0 h-full w-px bg-gradient-to-t from-velor-gold/10 to-transparent" />
      </div>
      <div className="absolute bottom-20 right-20 w-28 h-28 hidden lg:block">
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-velor-gold/10 to-transparent" />
        <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-velor-gold/10 to-transparent" />
      </div>
    </section>
  );
}
