"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "@/lib/animations";

export function BrandOrigin() {
  return (
    <section className="relative bg-mocha overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-mocha via-transparent to-mocha opacity-40" />

      <div className="relative py-32 md:py-44">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center"
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
            {/* Top decorative line */}
            <motion.div
              className="flex items-center justify-center gap-6 mb-16"
              variants={fadeInUp}
            >
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-velor-gold/40" />
              <div className="relative">
                <div className="w-2 h-2 rotate-45 bg-velor-gold/60" />
              </div>
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-velor-gold/40" />
            </motion.div>

            {/* Main quote */}
            <motion.blockquote
              className="font-display text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-ivory leading-[1.4] md:leading-[1.5]"
              variants={fadeInUp}
            >
              <span className="block mb-4 md:mb-6">
                Our coffee and cocoa are born from the same land —
              </span>
              <span className="block text-velor-gold italic mb-4 md:mb-6">
                the fire of the mountain and the breath of the highlands.
              </span>
              <span className="block text-ivory/80">
                Every bean carries the story of the people who farm it,
              </span>
              <span className="block text-ivory/80">
                and every product we craft carries their legacy forward.
              </span>
            </motion.blockquote>

            {/* Bottom decorative line */}
            <motion.div
              className="flex items-center justify-center gap-6 mt-16"
              variants={fadeInUp}
            >
              <div className="w-16 h-px bg-velor-gold/30" />
              <div className="relative">
                <div className="w-1.5 h-1.5 rotate-45 border border-velor-gold/50" />
              </div>
              <div className="w-16 h-px bg-velor-gold/30" />
            </motion.div>

            {/* Location tag */}
            <motion.p
              className="mt-12 text-velor-gold/70 tracking-[0.3em] text-xs uppercase"
              variants={fadeInUp}
            >
              Cameroon, West Africa
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-12 left-12 w-20 h-20 border-l border-t border-velor-gold/10" />
      <div className="absolute top-12 right-12 w-20 h-20 border-r border-t border-velor-gold/10" />
      <div className="absolute bottom-12 left-12 w-20 h-20 border-l border-b border-velor-gold/10" />
      <div className="absolute bottom-12 right-12 w-20 h-20 border-r border-b border-velor-gold/10" />
    </section>
  );
}
