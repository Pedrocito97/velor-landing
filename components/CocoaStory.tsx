"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, viewportOnce } from "@/lib/animations";

const cocoaStats = [
  { label: "Elevation", value: "4,095m", detail: "Mount Cameroon Peak" },
  { label: "Soil Type", value: "Volcanic", detail: "Mineral-Rich Black Soil" },
  { label: "Heritage", value: "Generations", detail: "Ancestral Farming" },
];

export function CocoaStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-ivory overflow-hidden"
      id="cocoa-story"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Image Section */}
        <div className="relative h-[50vh] lg:h-auto overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{ y: imageY }}
          >
            {/* Placeholder gradient - replace with actual mountain image */}
            <div
              className="w-full h-[120%] bg-gradient-to-br from-mocha via-mocha-light to-amber-900"
              style={{
                backgroundImage: `url('/images/mount-cameroon.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-ivory/20 lg:to-ivory/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-mocha/60 via-transparent to-transparent lg:hidden" />
          </motion.div>

          {/* Floating stat on image */}
          <motion.div
            className="absolute bottom-8 left-8 lg:bottom-16 lg:left-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="bg-mocha/90 backdrop-blur-sm p-6 border border-velor-gold/20">
              <p className="text-velor-gold tracking-[0.3em] text-xs mb-1">ACTIVE VOLCANO</p>
              <p className="font-display text-2xl text-ivory">Mount Cameroon</p>
              <p className="text-ivory/60 text-sm mt-1">West Africa&apos;s Highest Peak</p>
            </div>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="relative flex items-center py-20 lg:py-32 px-8 lg:px-16 xl:px-24">
          {/* Background texture */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #C5A572 1px, transparent 0)`,
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          <motion.div
            className="relative z-10 max-w-xl"
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
            {/* Section label */}
            <motion.div
              className="flex items-center gap-4 mb-8"
              variants={fadeInUp}
            >
              <div className="w-12 h-px bg-velor-gold/60" />
              <span className="text-velor-gold tracking-[0.4em] text-xs">
                THE VOLCANIC COCOA
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              className="font-display text-4xl md:text-5xl lg:text-6xl text-mocha tracking-[0.05em] mb-8"
              variants={fadeInUp}
            >
              Born on the<br />
              <span className="text-velor-gold">Slopes of Fire</span>
            </motion.h2>

            {/* Lead paragraph */}
            <motion.p
              className="text-lg md:text-xl text-mocha-light leading-relaxed mb-8"
              variants={fadeInUp}
            >
              Mount Cameroon isn&apos;t just a mountain — it&apos;s an active volcano.
              The soil is black, mineral-rich, and unforgiving. Only the most
              resilient crops survive there… and cocoa is one of them.
            </motion.p>

            {/* Story content */}
            <motion.div
              className="space-y-6 text-text-muted leading-[1.9]"
              variants={fadeInUp}
            >
              <p>
                For generations, farmers on the mountain have worked land that
                literally breathes heat. They prune by hand. They harvest by hand.
                No shortcuts. No mass-production nonsense.
              </p>
              <p className="font-display text-xl text-mocha italic">
                &ldquo;Every bean is shaped by ash, altitude, and ancestral skill.
                It&apos;s cocoa with a pulse.&rdquo;
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-velor-gold/20"
              variants={fadeInUp}
            >
              {cocoaStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl md:text-3xl text-velor-gold mb-1">
                    {stat.value}
                  </p>
                  <p className="text-mocha tracking-[0.15em] text-xs uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-velor-gold/20 hidden lg:block" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-velor-gold/20 hidden lg:block" />
    </section>
  );
}
