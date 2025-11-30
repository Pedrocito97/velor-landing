"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer, staggerChild, viewportOnce } from "@/lib/animations";
import { Sigil } from "@/components/ui/Sigil";
import { SpiritProduct } from "@/lib/products/spirits";

interface CollectionIntroProps {
  products: {
    coffee: SpiritProduct;
    cocoa: SpiritProduct;
  };
}

export function CollectionIntro({ products }: CollectionIntroProps) {
  const productsList = [products.coffee, products.cocoa];

  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-ivory overflow-hidden">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.01]"
        style={{
          backgroundImage: `radial-gradient(circle at center, #3D2B1F 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          {/* Sigil */}
          <motion.div variants={staggerChild} className="flex justify-center mb-8">
            <Sigil size={48} color="#C5A572" />
          </motion.div>

          {/* Section label */}
          <motion.p
            variants={staggerChild}
            className="text-velor-gold tracking-[0.4em] text-[10px] md:text-xs uppercase mb-4"
          >
            The Collection
          </motion.p>

          {/* Title */}
          <motion.h2
            variants={staggerChild}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-mocha tracking-[0.1em] mb-6"
          >
            Two Expressions
          </motion.h2>

          {/* Divider */}
          <motion.div variants={staggerChild} className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-velor-gold/40" />
            <div className="w-1.5 h-1.5 rotate-45 border border-velor-gold/50" />
            <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-velor-gold/40" />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={staggerChild}
            className="text-text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-16 md:mb-20"
          >
            Two distinct expressions of Cameroonian terroir. One rooted in the highlands,
            the other born of volcanic soil. Both crafted with generational expertise.
          </motion.p>

          {/* Product preview cards */}
          <motion.div
            variants={staggerChild}
            className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto"
          >
            {productsList.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={viewportOnce}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-ivory-warm border border-mocha/10 p-8 md:p-10 transition-all duration-500 hover:border-velor-gold/30 hover:shadow-lg">
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-velor-gold/20 transition-all duration-500 group-hover:w-12 group-hover:h-12 group-hover:border-velor-gold/40" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-velor-gold/20 transition-all duration-500 group-hover:w-12 group-hover:h-12 group-hover:border-velor-gold/40" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-velor-gold/20 transition-all duration-500 group-hover:w-12 group-hover:h-12 group-hover:border-velor-gold/40" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-velor-gold/20 transition-all duration-500 group-hover:w-12 group-hover:h-12 group-hover:border-velor-gold/40" />

                  {/* Image */}
                  <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.fullName}
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Origin badge */}
                  <p className="text-velor-gold tracking-[0.3em] text-[9px] md:text-[10px] uppercase mb-3">
                    {product.originBadge}
                  </p>

                  {/* Product name */}
                  <h3 className="font-display text-2xl md:text-3xl text-mocha tracking-[0.1em] mb-2">
                    {product.name}
                  </h3>
                  <p className="font-display text-xl md:text-2xl text-mocha/70 italic mb-4">
                    {product.variant}
                  </p>

                  {/* Explore link */}
                  <div className="flex items-center justify-center gap-2 text-velor-gold text-sm tracking-widest uppercase group-hover:gap-3 transition-all duration-300">
                    <span>Explore</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom ornament */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={viewportOnce}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2"
      >
        <div className="w-1 h-1 rotate-45 bg-velor-gold/30" />
        <div className="w-1.5 h-1.5 rotate-45 border border-velor-gold/40" />
        <div className="w-1 h-1 rotate-45 bg-velor-gold/30" />
      </motion.div>
    </section>
  );
}
