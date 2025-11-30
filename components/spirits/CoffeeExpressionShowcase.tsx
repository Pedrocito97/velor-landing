"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { fadeInUp, slideInLeft, slideInRight, viewportOnce, bottleReveal } from "@/lib/animations";
import { SpiritProduct } from "@/lib/products/spirits";

interface CoffeeExpressionShowcaseProps {
  product: SpiritProduct;
}

export function CoffeeExpressionShowcase({ product }: CoffeeExpressionShowcaseProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bottleY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-24 md:py-32 lg:py-40 bg-mocha overflow-hidden"
    >
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at center, #C5A572 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/2 right-0 w-1/2 h-1/2 -translate-y-1/2 bg-gradient-radial from-velor-gold/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content - Left side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="order-2 lg:order-1"
          >
            {/* Origin badge */}
            <motion.div
              variants={slideInLeft}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-velor-gold/50" />
              <span className="text-velor-gold tracking-[0.4em] text-[10px] md:text-xs uppercase">
                {product.originBadge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.div variants={slideInLeft} className="mb-2">
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-ivory tracking-[0.15em]">
                {product.name}
              </h2>
            </motion.div>
            <motion.p
              variants={slideInLeft}
              className="font-display text-3xl md:text-4xl text-ivory/70 italic tracking-wide mb-6"
            >
              {product.variant}
            </motion.p>

            {/* Divider */}
            <motion.div
              variants={slideInLeft}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-16 h-px bg-gradient-to-r from-velor-gold/60 to-transparent" />
              <div className="w-1.5 h-1.5 rotate-45 border border-velor-gold/50" />
            </motion.div>

            {/* Origin detail */}
            <motion.p
              variants={slideInLeft}
              className="text-ivory/50 tracking-[0.2em] text-sm uppercase mb-8"
            >
              {product.originDetail}
            </motion.p>

            {/* Description paragraphs */}
            <motion.div variants={slideInLeft} className="space-y-4 mb-10">
              {product.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-ivory/70 text-base md:text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Tasting notes */}
            <motion.div
              variants={slideInLeft}
              className="relative border border-velor-gold/20 p-6 md:p-8 mb-10"
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
                <p className="text-ivory/80 italic">
                  <span className="text-ivory/50">Palate:</span> {product.tastingNotes.primary}
                </p>
                <p className="text-ivory/80 italic">
                  <span className="text-ivory/50">Character:</span> {product.tastingNotes.secondary}
                </p>
                <p className="text-ivory/80 italic">
                  <span className="text-ivory/50">Finish:</span> {product.tastingNotes.finish}
                </p>
              </div>
            </motion.div>

            {/* Specs */}
            <motion.div
              variants={slideInLeft}
              className="flex items-center gap-6"
            >
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rotate-45 bg-velor-gold/50" />
                <span className="text-ivory/50 tracking-[0.2em] text-xs uppercase">
                  {product.abv}
                </span>
              </div>
              <div className="w-px h-4 bg-ivory/20" />
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rotate-45 bg-velor-gold/50" />
                <span className="text-ivory/50 tracking-[0.2em] text-xs uppercase">
                  {product.size}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottle - Right side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="order-1 lg:order-2 relative"
          >
            <motion.div
              variants={bottleReveal}
              style={{ y: bottleY }}
              className="relative"
            >
              {/* Spotlight glow */}
              <div className="absolute inset-0 bottle-spotlight" />

              {/* Triple frame */}
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-6 border border-velor-gold/10" />
                <div className="absolute -inset-4 border border-velor-gold/15" />
                <div className="absolute -inset-2 border border-velor-gold/20" />

                {/* Image container */}
                <div className="relative aspect-[3/4] gold-glow">
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
        </div>
      </div>
    </section>
  );
}
