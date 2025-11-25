"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "@/lib/animations";

export function BrandStatement() {
  return (
    <section className="relative py-32 md:py-44 bg-ivory-warm overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #C5A572 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.1 },
            },
          }}
        >
          {/* Top decorative element */}
          <motion.div
            className="flex items-center justify-center gap-8 mb-16"
            variants={fadeInUp}
          >
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-velor-gold/40 to-transparent" />
            <div className="relative">
              <div className="w-3 h-3 rotate-45 border border-velor-gold/60" />
              <div className="absolute inset-0 w-3 h-3 rotate-45 border border-velor-gold/30 scale-150" />
            </div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-velor-gold/40 to-transparent" />
          </motion.div>

          {/* Main statement */}
          <motion.div variants={fadeInUp}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-mocha leading-[1.3] tracking-[0.04em]">
              Quiet luxury.
            </h2>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.3] tracking-[0.04em] mt-2">
              <span className="text-gold-gradient">Silent authority.</span>
            </h2>
          </motion.div>

          {/* Subtext */}
          <motion.p
            className="mt-12 text-text-muted text-lg md:text-xl font-light leading-[1.9] max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Crafted for those who understand that true elegance
            <br className="hidden md:block" />
            needs no announcement. Each bottle is a testament
            <br className="hidden md:block" />
            to uncompromising craft.
          </motion.p>

          {/* Bottom decorative element */}
          <motion.div
            className="flex items-center justify-center gap-8 mt-16"
            variants={fadeInUp}
          >
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-velor-gold/40 to-transparent" />
            <div className="relative">
              <div className="w-3 h-3 rotate-45 border border-velor-gold/60" />
              <div className="absolute inset-0 w-3 h-3 rotate-45 border border-velor-gold/30 scale-150" />
            </div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-velor-gold/40 to-transparent" />
          </motion.div>
        </motion.div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-12 left-12 w-20 h-20 border-l border-t border-velor-gold/10" />
      <div className="absolute top-12 right-12 w-20 h-20 border-r border-t border-velor-gold/10" />
      <div className="absolute bottom-12 left-12 w-20 h-20 border-l border-b border-velor-gold/10" />
      <div className="absolute bottom-12 right-12 w-20 h-20 border-r border-b border-velor-gold/10" />
    </section>
  );
}
