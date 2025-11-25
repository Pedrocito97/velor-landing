"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, viewportOnce } from "@/lib/animations";
import { Sigil } from "./ui/Sigil";

const craftValues = [
  {
    number: "01",
    title: "Earth-Made",
    description:
      "From soil to bean to bar — every ingredient traced to its origin. We honor the land that gives.",
  },
  {
    number: "02",
    title: "Uncompromising",
    description:
      "No shortcuts. No substitutes. Only the finest expressions of nature's bounty, refined by master craftsmen.",
  },
  {
    number: "03",
    title: "Timeless",
    description:
      "Crafted not for trends, but for those who appreciate the eternal. A legacy in every bottle.",
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
              From Soil to Sensation
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              className="text-ivory/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Luxury houses live on mythology, not marketing. Every drop tells a
              story of origin, transformation, and mastery.
            </motion.p>
          </motion.div>

          {/* Values */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8"
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
            {craftValues.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center group"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
                  },
                }}
              >
                {/* Number */}
                <div className="relative inline-block mb-8">
                  <span className="font-display text-7xl md:text-8xl text-velor-gold/20">
                    {value.number}
                  </span>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-px bg-velor-gold/40" />
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl md:text-3xl text-ivory tracking-[0.15em] mb-4">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-ivory/50 leading-[1.9] text-sm md:text-base">
                  {value.description}
                </p>
              </motion.div>
            ))}
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
              That word carries texture. It tastes like what you&apos;re selling
              — not sweet, but substantial.
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
