"use client";

import { motion } from "framer-motion";
import { viewportOnce, fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import { SpiritProduct } from "@/lib/products/spirits";

interface TastingExperienceProps {
  products: {
    coffee: SpiritProduct;
    cocoa: SpiritProduct;
  };
}

export function TastingExperience({ products }: TastingExperienceProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Coffee side - Dark */}
        <div className="relative py-20 md:py-28 lg:py-36 bg-mocha">
          {/* Texture */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `radial-gradient(circle at center, #C5A572 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative px-6 md:px-12 lg:px-16"
          >
            {/* Label */}
            <motion.div
              variants={slideInLeft}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="w-6 h-px bg-velor-gold/50" />
              <span className="text-velor-gold tracking-[0.3em] text-[10px] uppercase">
                Coffee Expression
              </span>
            </motion.div>

            {/* Title */}
            <motion.h3
              variants={slideInLeft}
              className="font-display text-3xl md:text-4xl text-ivory tracking-[0.1em] mb-8"
            >
              How to Enjoy
            </motion.h3>

            {/* Serving suggestions */}
            <motion.div variants={slideInLeft} className="space-y-6 mb-10">
              {products.coffee.servingSuggestions.map((suggestion, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full border border-velor-gold/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-velor-gold text-xs">{index + 1}</span>
                  </div>
                  <div>
                    <p className="text-ivory font-medium mb-1">{suggestion.method}</p>
                    <p className="text-ivory/50 text-sm">{suggestion.detail}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Temperature recommendation */}
            <motion.div
              variants={slideInLeft}
              className="inline-flex items-center gap-3 px-5 py-3 border border-velor-gold/20"
            >
              <div className="w-1 h-1 rotate-45 bg-velor-gold/50" />
              <span className="text-ivory/60 text-xs tracking-[0.2em] uppercase">
                Serve at 12-14°C
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Cocoa side - Light */}
        <div className="relative py-20 md:py-28 lg:py-36 bg-ivory">
          {/* Texture */}
          <div
            className="absolute inset-0 opacity-[0.01]"
            style={{
              backgroundImage: `radial-gradient(circle at center, #3D2B1F 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative px-6 md:px-12 lg:px-16"
          >
            {/* Label */}
            <motion.div
              variants={slideInRight}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="w-6 h-px bg-velor-gold/50" />
              <span className="text-velor-gold tracking-[0.3em] text-[10px] uppercase">
                Cocoa Expression
              </span>
            </motion.div>

            {/* Title */}
            <motion.h3
              variants={slideInRight}
              className="font-display text-3xl md:text-4xl text-mocha tracking-[0.1em] mb-8"
            >
              How to Enjoy
            </motion.h3>

            {/* Serving suggestions */}
            <motion.div variants={slideInRight} className="space-y-6 mb-10">
              {products.cocoa.servingSuggestions.map((suggestion, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full border border-mocha/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-mocha/70 text-xs">{index + 1}</span>
                  </div>
                  <div>
                    <p className="text-mocha font-medium mb-1">{suggestion.method}</p>
                    <p className="text-mocha/50 text-sm">{suggestion.detail}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Temperature recommendation */}
            <motion.div
              variants={slideInRight}
              className="inline-flex items-center gap-3 px-5 py-3 border border-mocha/15"
            >
              <div className="w-1 h-1 rotate-45 bg-velor-gold/50" />
              <span className="text-mocha/60 text-xs tracking-[0.2em] uppercase">
                Serve at 16-18°C
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Center divider with sigil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={viewportOnce}
          className="w-16 h-16 rounded-full bg-velor-gold flex items-center justify-center shadow-lg"
        >
          <span className="font-display text-2xl text-ivory">V</span>
        </motion.div>
      </div>
    </section>
  );
}
