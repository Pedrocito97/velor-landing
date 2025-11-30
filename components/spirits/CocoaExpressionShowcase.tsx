"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { fadeInUp, slideInLeft, slideInRight, viewportOnce, bottleReveal } from "@/lib/animations";
import { SpiritProduct } from "@/lib/products/spirits";

interface CocoaExpressionShowcaseProps {
  product: SpiritProduct;
}

export function CocoaExpressionShowcase({ product }: CocoaExpressionShowcaseProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bottleY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-24 md:py-32 lg:py-40 bg-ivory overflow-hidden"
    >
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.01]"
        style={{
          backgroundImage: `radial-gradient(circle at center, #3D2B1F 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 w-1/2 h-1/2 -translate-y-1/2 bg-gradient-radial from-velor-gold/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Bottle - Left side (reversed layout) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            <motion.div
              variants={bottleReveal}
              style={{ y: bottleY }}
              className="relative"
            >
              {/* Spotlight glow - adjusted for light background */}
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-radial from-mocha/5 to-transparent pointer-events-none" />
              </div>

              {/* Triple frame */}
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-6 border border-mocha/10" />
                <div className="absolute -inset-4 border border-mocha/15" />
                <div className="absolute -inset-2 border border-mocha/20" />

                {/* Image container */}
                <div className="relative aspect-[3/4]">
                  <Image
                    src={product.image}
                    alt={product.fullName}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Corner accents */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  viewport={viewportOnce}
                  className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-velor-gold/50"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  viewport={viewportOnce}
                  className="absolute -top-3 -right-3 w-8 h-8 border-r-2 border-t-2 border-velor-gold/50"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  viewport={viewportOnce}
                  className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 border-velor-gold/50"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                  viewport={viewportOnce}
                  className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-velor-gold/50"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Content - Right side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {/* Origin badge */}
            <motion.div
              variants={slideInRight}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-velor-gold/50" />
              <span className="text-velor-gold tracking-[0.4em] text-[10px] md:text-xs uppercase">
                {product.originBadge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.div variants={slideInRight} className="mb-2">
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-mocha tracking-[0.15em]">
                {product.name}
              </h2>
            </motion.div>
            <motion.p
              variants={slideInRight}
              className="font-display text-3xl md:text-4xl text-mocha/70 italic tracking-wide mb-6"
            >
              {product.variant}
            </motion.p>

            {/* Divider */}
            <motion.div
              variants={slideInRight}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-16 h-px bg-gradient-to-r from-velor-gold/60 to-transparent" />
              <div className="w-1.5 h-1.5 rotate-45 border border-velor-gold/50" />
            </motion.div>

            {/* Origin detail */}
            <motion.p
              variants={slideInRight}
              className="text-mocha/50 tracking-[0.2em] text-sm uppercase mb-8"
            >
              {product.originDetail}
            </motion.p>

            {/* Description paragraphs */}
            <motion.div variants={slideInRight} className="space-y-4 mb-10">
              {product.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-text-muted text-base md:text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Tasting notes */}
            <motion.div
              variants={slideInRight}
              className="relative border border-mocha/15 p-6 md:p-8 mb-10 bg-ivory-warm/50"
            >
              {/* Corner accents */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-l border-t border-velor-gold/40" />
              <div className="absolute -top-1 -right-1 w-4 h-4 border-r border-t border-velor-gold/40" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l border-b border-velor-gold/40" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r border-b border-velor-gold/40" />

              <p className="text-velor-gold tracking-[0.3em] text-[10px] uppercase mb-4">
                Tasting Notes
              </p>
              <div className="space-y-2">
                <p className="text-mocha/80 italic">
                  <span className="text-mocha/50">Palate:</span> {product.tastingNotes.primary}
                </p>
                <p className="text-mocha/80 italic">
                  <span className="text-mocha/50">Character:</span> {product.tastingNotes.secondary}
                </p>
                <p className="text-mocha/80 italic">
                  <span className="text-mocha/50">Finish:</span> {product.tastingNotes.finish}
                </p>
              </div>
            </motion.div>

            {/* Specs */}
            <motion.div
              variants={slideInRight}
              className="flex items-center gap-6"
            >
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rotate-45 bg-velor-gold/50" />
                <span className="text-mocha/50 tracking-[0.2em] text-xs uppercase">
                  {product.abv}
                </span>
              </div>
              <div className="w-px h-4 bg-mocha/20" />
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rotate-45 bg-velor-gold/50" />
                <span className="text-mocha/50 tracking-[0.2em] text-xs uppercase">
                  {product.size}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
