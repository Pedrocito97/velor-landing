"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, viewportOnce } from "@/lib/animations";
import { Sigil } from "./ui/Sigil";

const cocoaPillars = [
  {
    title: "Volcanic Soil",
    description: "Mineral-rich black earth from centuries of eruptions creates naturally intense, darker, more complex cocoa.",
  },
  {
    title: "High Altitude",
    description: "Slow growth at elevation concentrates flavor. The same science that makes mountain wine exceptional.",
  },
  {
    title: "Sun-Fermented",
    description: "No chemicals, no artificial dryers. Raw heat from the sky keeps the beans' aroma pure and powerful.",
  },
  {
    title: "Zero Dilution",
    description: "Single-origin. Single-mountain. Single-heritage. Never blended from dozens of farms.",
  },
];

const coffeePillars = [
  {
    title: "Highland Altitude",
    description: "Cool air and mist force beans to mature slowly, concentrating flavor and sweetness.",
  },
  {
    title: "Hand-Picked",
    description: "Only the ripest cherries, selected by farmers who've inherited generations of expertise.",
  },
  {
    title: "Washed & Sun-Dried",
    description: "Clear mountain water and open skies. Clean processing for a clean, bright cup.",
  },
  {
    title: "Complex Profile",
    description: "Bright acidity and mountain-born complexity that industrial farms simply cannot replicate.",
  },
];

export function Craftsmanship() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      id="craftsmanship"
    >
      {/* Background */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        {/* Base color */}
        <div className="absolute inset-0 bg-mocha" />

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
        <div className="absolute inset-0 bg-gradient-to-b from-mocha via-transparent to-mocha opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-mocha/50 via-transparent to-mocha/50" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full py-32 md:py-44"
        style={{ opacity: textOpacity }}
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <motion.div
            className="text-center mb-24"
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
            {/* Sigil */}
            <motion.div
              className="flex justify-center mb-10"
              variants={fadeInUp}
            >
              <Sigil size={60} color="#C5A572" animated={false} />
            </motion.div>

            {/* Section label */}
            <motion.div
              className="flex items-center justify-center gap-6 mb-8"
              variants={fadeInUp}
            >
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-velor-gold/40" />
              <span className="text-velor-gold tracking-[0.4em] text-xs">
                THE CRAFT
              </span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-velor-gold/40" />
            </motion.div>

            {/* Title */}
            <motion.h2
              className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory tracking-[0.08em] mb-8"
              variants={fadeInUp}
            >
              What Makes Us Untouchable
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              className="text-ivory/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Most brands talk quality, but they can&apos;t back it.
              Mount Cameroon cocoa and Highland coffee do.
            </motion.p>
          </motion.div>

          {/* Two Column Pillars */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2, delayChildren: 0.3 },
              },
            }}
          >
            {/* Cocoa Column */}
            <motion.div
              className="lg:pr-12 lg:border-r lg:border-velor-gold/20"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-4 mb-8">
                <svg className="w-8 h-8 text-velor-gold" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 4L20 12L28 14L22 20L24 28L16 24L8 28L10 20L4 14L12 12L16 4Z" />
                </svg>
                <h3 className="font-display text-2xl text-velor-gold tracking-[0.2em]">
                  COCOA
                </h3>
              </div>
              <p className="text-ivory/40 tracking-[0.15em] text-xs uppercase mb-8">
                From Mount Cameroon&apos;s Volcanic Slopes
              </p>
              <div className="space-y-6">
                {cocoaPillars.map((pillar, index) => (
                  <div key={pillar.title} className="flex gap-4">
                    <span className="font-display text-2xl text-velor-gold/30 w-8 flex-shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h4 className="font-display text-lg text-ivory tracking-[0.1em] mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-ivory/50 text-sm leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Coffee Column */}
            <motion.div
              className="lg:pl-12"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-4 mb-8">
                <svg className="w-8 h-8 text-velor-gold" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <ellipse cx="16" cy="16" rx="10" ry="14" />
                  <path d="M16 2V30" />
                </svg>
                <h3 className="font-display text-2xl text-velor-gold tracking-[0.2em]">
                  COFFEE
                </h3>
              </div>
              <p className="text-ivory/40 tracking-[0.15em] text-xs uppercase mb-8">
                From the Cameroonian Highlands
              </p>
              <div className="space-y-6">
                {coffeePillars.map((pillar, index) => (
                  <div key={pillar.title} className="flex gap-4">
                    <span className="font-display text-2xl text-velor-gold/30 w-8 flex-shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h4 className="font-display text-lg text-ivory tracking-[0.1em] mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-ivory/50 text-sm leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Quote */}
          <motion.div
            className="mt-24 md:mt-32 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.6, duration: 0.8 },
              },
            }}
          >
            {/* Quote marks */}
            <div className="flex justify-center mb-6">
              <span className="font-display text-5xl text-velor-gold/30">&ldquo;</span>
            </div>

            <blockquote className="font-display text-xl md:text-2xl lg:text-3xl text-ivory/80 italic max-w-3xl mx-auto leading-relaxed">
              The farmer&apos;s hands make the difference. Not machines. Not factories.
              Human precision forged over generations.
            </blockquote>

            <div className="flex justify-center mt-6">
              <span className="font-display text-5xl text-velor-gold/30">&rdquo;</span>
            </div>

            {/* Decorative line */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <div className="w-12 h-px bg-velor-gold/20" />
              <div className="w-2 h-2 rotate-45 border border-velor-gold/30" />
              <div className="w-12 h-px bg-velor-gold/20" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative frames */}
      <div className="absolute top-12 left-12 w-32 h-32 border-l border-t border-velor-gold/10" />
      <div className="absolute top-12 right-12 w-32 h-32 border-r border-t border-velor-gold/10" />
      <div className="absolute bottom-12 left-12 w-32 h-32 border-l border-b border-velor-gold/10" />
      <div className="absolute bottom-12 right-12 w-32 h-32 border-r border-b border-velor-gold/10" />

      {/* Side accents */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-velor-gold/20 to-transparent" />
      </div>
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-velor-gold/20 to-transparent" />
      </div>
    </section>
  );
}
