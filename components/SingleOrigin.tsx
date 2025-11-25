"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "@/lib/animations";

const originData = {
  cocoa: {
    title: "Volcanic Cocoa",
    region: "Mount Cameroon Slopes",
    country: "Southwest Region, Cameroon",
    elevation: "800 - 2,000m",
    climate: "Tropical, Volcanic Heat",
    process: "Sun-Fermented & Sun-Dried",
    flavor: "Deep, dark, mineral-rich",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 4L24 12L32 14L26 20L28 28L20 24L12 28L14 20L8 14L16 12L20 4Z" />
        <circle cx="20" cy="32" r="4" />
      </svg>
    ),
  },
  coffee: {
    title: "Highland Coffee",
    region: "Western Highlands",
    country: "Northwest Region, Cameroon",
    elevation: "1,500 - 2,200m",
    climate: "Cool, Misty, Slow Growth",
    process: "Washed & Sun-Dried",
    flavor: "Bright, clean, complex",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="20" cy="20" rx="12" ry="16" />
        <path d="M20 4V36" />
        <path d="M12 12C12 12 16 16 20 16C24 16 28 12 28 12" />
      </svg>
    ),
  },
};

const promises = [
  {
    title: "Single-Origin",
    description: "Every bean traceable to its exact farm and region. No blending, no dilution.",
  },
  {
    title: "Direct Trade",
    description: "Working directly with farming families, ensuring fair compensation.",
  },
  {
    title: "Zero Industrial",
    description: "No mass production. No shortcuts. Human hands at every step.",
  },
  {
    title: "Full Transparency",
    description: "We know our farmers by name, their methods by heart.",
  },
];

function OriginCard({
  data,
  variant,
}: {
  data: typeof originData.cocoa;
  variant: "cocoa" | "coffee";
}) {
  return (
    <motion.div
      className={`relative p-8 md:p-12 ${
        variant === "cocoa" ? "bg-mocha text-ivory" : "bg-ivory-warm text-mocha"
      }`}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
        },
      }}
    >
      {/* Icon */}
      <div className={`mb-6 ${variant === "cocoa" ? "text-velor-gold" : "text-velor-gold"}`}>
        {data.icon}
      </div>

      {/* Title */}
      <h3 className="font-display text-3xl md:text-4xl tracking-[0.1em] mb-2">
        {data.title}
      </h3>

      {/* Region */}
      <p className={`tracking-[0.2em] text-xs uppercase mb-8 ${
        variant === "cocoa" ? "text-velor-gold" : "text-velor-gold"
      }`}>
        {data.region}
      </p>

      {/* Data points */}
      <div className="space-y-4">
        <div className="flex justify-between items-center py-3 border-b border-current/10">
          <span className={`text-sm tracking-wider ${variant === "cocoa" ? "text-ivory/60" : "text-text-muted"}`}>
            Country
          </span>
          <span className="font-display text-lg">{data.country}</span>
        </div>

        <div className="flex justify-between items-center py-3 border-b border-current/10">
          <span className={`text-sm tracking-wider ${variant === "cocoa" ? "text-ivory/60" : "text-text-muted"}`}>
            Elevation
          </span>
          <span className="font-display text-lg">{data.elevation}</span>
        </div>

        <div className="flex justify-between items-center py-3 border-b border-current/10">
          <span className={`text-sm tracking-wider ${variant === "cocoa" ? "text-ivory/60" : "text-text-muted"}`}>
            Climate
          </span>
          <span className="font-display text-lg">{data.climate}</span>
        </div>

        <div className="flex justify-between items-center py-3 border-b border-current/10">
          <span className={`text-sm tracking-wider ${variant === "cocoa" ? "text-ivory/60" : "text-text-muted"}`}>
            Process
          </span>
          <span className="font-display text-lg">{data.process}</span>
        </div>

        <div className="flex justify-between items-center py-3">
          <span className={`text-sm tracking-wider ${variant === "cocoa" ? "text-ivory/60" : "text-text-muted"}`}>
            Profile
          </span>
          <span className="font-display text-lg italic">{data.flavor}</span>
        </div>
      </div>

      {/* Corner accent */}
      <div className={`absolute top-6 right-6 w-8 h-8 border-r border-t ${
        variant === "cocoa" ? "border-velor-gold/30" : "border-velor-gold/30"
      }`} />
      <div className={`absolute bottom-6 left-6 w-8 h-8 border-l border-b ${
        variant === "cocoa" ? "border-velor-gold/30" : "border-velor-gold/30"
      }`} />
    </motion.div>
  );
}

export function SingleOrigin() {
  return (
    <section className="relative py-32 md:py-44 bg-ivory-warm overflow-hidden" id="single-origin">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]">
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
          className="text-center mb-16"
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
            <span className="text-velor-gold tracking-[0.4em] text-xs">
              THE PROMISE
            </span>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-velor-gold/40" />
          </motion.div>

          <motion.h2
            className="font-display text-4xl md:text-5xl lg:text-6xl text-mocha tracking-[0.08em] mb-6"
            variants={fadeInUp}
          >
            Single-Origin Excellence
          </motion.h2>

          <motion.p
            className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Most brands talk quality, but they can&apos;t back it. We can.
            Single-origin. Single-mountain. Single-heritage.
          </motion.p>
        </motion.div>

        {/* Origin cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-velor-gold/20 mb-20"
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
          <OriginCard data={originData.cocoa} variant="cocoa" />
          <OriginCard data={originData.coffee} variant="coffee" />
        </motion.div>

        {/* Our promises */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.3 },
            },
          }}
        >
          <motion.p
            className="text-center text-velor-gold tracking-[0.3em] text-xs mb-10"
            variants={fadeInUp}
          >
            WHY SINGLE-ORIGIN MATTERS
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {promises.map((promise) => (
              <motion.div
                key={promise.title}
                className="text-center"
                variants={fadeInUp}
              >
                <h4 className="font-display text-xl text-mocha tracking-[0.15em] mb-3">
                  {promise.title}
                </h4>
                <p className="text-text-muted text-sm leading-relaxed">
                  {promise.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-16 left-16 w-24 h-24 border-l border-t border-velor-gold/10" />
      <div className="absolute bottom-16 right-16 w-24 h-24 border-r border-b border-velor-gold/10" />
    </section>
  );
}
