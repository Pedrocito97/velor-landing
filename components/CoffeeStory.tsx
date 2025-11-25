"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, viewportOnce } from "@/lib/animations";

const coffeeStats = [
  { label: "Altitude", value: "1,500m+", detail: "Highland Elevation" },
  { label: "Climate", value: "Cool Mist", detail: "Slow Maturation" },
  { label: "Process", value: "Washed", detail: "Mountain Water" },
];

export function CoffeeStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-ivory-warm overflow-hidden"
      id="coffee-story"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Content Section - Now on LEFT */}
        <div className="relative flex items-center py-20 lg:py-32 px-8 lg:px-16 xl:px-24 order-2 lg:order-1">
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
            className="relative z-10 max-w-xl ml-auto"
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
              <span className="text-velor-gold tracking-[0.4em] text-xs">
                THE HIGHLAND COFFEE
              </span>
              <div className="w-12 h-px bg-velor-gold/60" />
            </motion.div>

            {/* Headline */}
            <motion.h2
              className="font-display text-4xl md:text-5xl lg:text-6xl text-mocha tracking-[0.05em] mb-8"
              variants={fadeInUp}
            >
              The Breath of<br />
              <span className="text-velor-gold">the Highlands</span>
            </motion.h2>

            {/* Lead paragraph */}
            <motion.p
              className="text-lg md:text-xl text-mocha-light leading-relaxed mb-8"
              variants={fadeInUp}
            >
              High in the Cameroonian highlands, coffee grows slowly in cool air
              and mist. The altitude forces the beans to mature at a crawl,
              concentrating flavor and sweetness.
            </motion.p>

            {/* Story content */}
            <motion.div
              className="space-y-6 text-text-muted leading-[1.9]"
              variants={fadeInUp}
            >
              <p>
                Farmers handpick only the ripest cherries and wash them in clear
                mountain water. The result? Coffee with bright acidity, clean
                sweetness, and a mountain-born complexity that industrial farms
                can&apos;t replicate.
              </p>
              <p className="font-display text-xl text-mocha italic">
                &ldquo;Our coffee carries the breath of the highlands —
                cool, clean, and unhurried.&rdquo;
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-velor-gold/20"
              variants={fadeInUp}
            >
              {coffeeStats.map((stat) => (
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

        {/* Image Section - Now on RIGHT */}
        <div className="relative h-[50vh] lg:h-auto overflow-hidden order-1 lg:order-2">
          <motion.div
            className="absolute inset-0"
            style={{ y: imageY }}
          >
            {/* Placeholder gradient with cooler tones - replace with actual highland image */}
            <div
              className="w-full h-[120%] bg-gradient-to-br from-stone-600 via-stone-500 to-emerald-900/40"
              style={{
                backgroundImage: `url('/images/highlands-coffee.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            {/* Mist/fog overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-ivory-warm/40 via-white/10 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-ivory-warm/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-700/60 via-transparent to-transparent lg:hidden" />
          </motion.div>

          {/* Floating stat on image */}
          <motion.div
            className="absolute bottom-8 right-8 lg:bottom-16 lg:right-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="bg-ivory/90 backdrop-blur-sm p-6 border border-velor-gold/20">
              <p className="text-velor-gold tracking-[0.3em] text-xs mb-1">SINGLE ORIGIN</p>
              <p className="font-display text-2xl text-mocha">Arabica Beans</p>
              <p className="text-text-muted text-sm mt-1">Hand-picked at Peak Ripeness</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-velor-gold/20 hidden lg:block" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-velor-gold/20 hidden lg:block" />
    </section>
  );
}
