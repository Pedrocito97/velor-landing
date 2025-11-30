"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { viewportOnce, bottleReveal, heroStagger, heroChild } from "@/lib/animations";
import { SpiritProduct } from "@/lib/products/spirits";

interface CollectionFooterProps {
  products: {
    coffee: SpiritProduct;
    cocoa: SpiritProduct;
  };
}

export function CollectionFooter({ products }: CollectionFooterProps) {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-mocha overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-mocha via-mocha/95 to-mocha" />

        {/* Texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at center, #C5A572 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gradient-radial from-velor-gold/10 to-transparent pointer-events-none" />
      </div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-24 h-24 border-l border-t border-velor-gold/15 hidden md:block" />
      <div className="absolute top-8 right-8 w-24 h-24 border-r border-t border-velor-gold/15 hidden md:block" />
      <div className="absolute bottom-8 left-8 w-24 h-24 border-l border-b border-velor-gold/15 hidden md:block" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-r border-b border-velor-gold/15 hidden md:block" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          {/* Top ornament */}
          <motion.div variants={heroChild} className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent to-velor-gold/40" />
            <div className="w-1.5 h-1.5 rotate-45 border border-velor-gold/50" />
            <div className="w-12 md:w-20 h-px bg-gradient-to-l from-transparent to-velor-gold/40" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={heroChild}
            className="text-velor-gold tracking-[0.4em] text-[10px] md:text-xs uppercase mb-4"
          >
            The Collection
          </motion.p>

          {/* Title */}
          <motion.h2
            variants={heroChild}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory tracking-[0.15em] mb-6"
          >
            Begin Your Journey
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={heroChild}
            className="text-ivory/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-12 md:mb-16"
          >
            Experience the art of African indulgence. Two expressions of
            Cameroonian terroir, crafted for those who appreciate the extraordinary.
          </motion.p>

          {/* Bottles display */}
          <motion.div
            variants={bottleReveal}
            className="relative max-w-3xl mx-auto mb-12 md:mb-16"
          >
            {/* Spotlight */}
            <div className="absolute inset-0 bottle-spotlight" />

            {/* Triple frame */}
            <div className="absolute -inset-6 border border-velor-gold/10 hidden md:block" />
            <div className="absolute -inset-4 border border-velor-gold/15 hidden md:block" />
            <div className="absolute -inset-2 border border-velor-gold/20" />

            {/* Bottles container */}
            <div className="relative flex items-center justify-center gap-6 md:gap-12 py-8 md:py-12 px-4">
              {/* Coffee bottle */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-1/3 max-w-[180px] aspect-[3/4]"
              >
                <Image
                  src={products.coffee.image}
                  alt={products.coffee.fullName}
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </motion.div>

              {/* Center divider */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-px h-16 md:h-24 bg-gradient-to-b from-transparent via-velor-gold/30 to-transparent" />
                <div className="w-2 h-2 rotate-45 border border-velor-gold/40" />
                <div className="w-px h-16 md:h-24 bg-gradient-to-b from-transparent via-velor-gold/30 to-transparent" />
              </div>

              {/* Cocoa bottle */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="relative w-1/3 max-w-[180px] aspect-[3/4]"
              >
                <Image
                  src={products.cocoa.image}
                  alt={products.cocoa.fullName}
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </motion.div>
            </div>

            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-velor-gold/40" />
            <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-velor-gold/40" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-velor-gold/40" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-velor-gold/40" />
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={heroChild}>
            <a
              href="mailto:contact@velorspirits.com"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-velor-gold/40 bg-velor-gold/5 hover:bg-velor-gold/10 hover:border-velor-gold/60 transition-all duration-500"
            >
              <span className="text-velor-gold tracking-[0.2em] text-sm uppercase">
                Contact for Enquiries
              </span>
              <svg
                className="w-5 h-5 text-velor-gold transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.div>

          {/* Bottom ornament */}
          <motion.div
            variants={heroChild}
            className="mt-16 md:mt-20 flex items-center justify-center gap-2"
          >
            <div className="w-1 h-1 rotate-45 bg-velor-gold/20" />
            <div className="w-1.5 h-1.5 rotate-45 border border-velor-gold/30" />
            <div className="w-2 h-2 rotate-45 border border-velor-gold/40" />
            <div className="w-1.5 h-1.5 rotate-45 border border-velor-gold/30" />
            <div className="w-1 h-1 rotate-45 bg-velor-gold/20" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
