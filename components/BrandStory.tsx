"use client";

import { motion } from "framer-motion";
import { Sigil } from "./ui/Sigil";

export function BrandStory() {
  return (
    <section className="relative py-32 md:py-40 bg-mocha overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #F5F2EB 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-16 left-16 w-24 h-24 hidden md:block">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-velor-gold/20 to-transparent" />
        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-velor-gold/20 to-transparent" />
      </div>
      <div className="absolute top-16 right-16 w-24 h-24 hidden md:block">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-velor-gold/20 to-transparent" />
        <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-velor-gold/20 to-transparent" />
      </div>
      <div className="absolute bottom-16 left-16 w-24 h-24 hidden md:block">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-velor-gold/20 to-transparent" />
        <div className="absolute bottom-0 left-0 h-full w-px bg-gradient-to-t from-velor-gold/20 to-transparent" />
      </div>
      <div className="absolute bottom-16 right-16 w-24 h-24 hidden md:block">
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-velor-gold/20 to-transparent" />
        <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-velor-gold/20 to-transparent" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {/* Top decorative line */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-12"
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-velor-gold/30" />
            <div className="w-1 h-1 bg-velor-gold/40 rotate-45" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-velor-gold/30" />
          </motion.div>

          {/* Sigil */}
          <motion.div
            className="flex justify-center mb-10"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
            }}
          >
            <Sigil size={60} color="#C5A572" animated={false} />
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-velor-gold/70 tracking-[0.5em] text-[10px] mb-8 uppercase"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            Established 2025
          </motion.p>

          {/* Headline */}
          <motion.h2
            className="font-display text-3xl md:text-4xl lg:text-5xl text-ivory tracking-[0.12em] mb-10 leading-tight"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            Where Craft
            <br />
            <span className="text-velor-gold">Becomes Legacy</span>
          </motion.h2>

          {/* Elegant divider */}
          <motion.div
            className="flex items-center justify-center gap-6 mb-10"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
            }}
          >
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-velor-gold/20 to-velor-gold/40" />
            <div className="w-2 h-2 rotate-45 border border-velor-gold/40" />
            <div className="w-20 h-px bg-gradient-to-l from-transparent via-velor-gold/20 to-velor-gold/40" />
          </motion.div>

          {/* Story */}
          <motion.div
            className="space-y-8"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <p className="text-ivory/80 text-lg md:text-xl leading-relaxed font-light tracking-wide">
              The House of Velor was born from a simple truth:
            </p>
            <p className="text-ivory/90 text-xl md:text-2xl leading-relaxed font-display italic tracking-wide">
              &ldquo;The finest ingredients, handled with reverence,
              <br className="hidden md:block" />
              create experiences that transcend the ordinary.&rdquo;
            </p>
            <p className="text-ivory/60 text-base leading-relaxed max-w-2xl mx-auto">
              We partner with generational farmers in Cameroon who cultivate cocoa and coffee
              using methods passed down through centuries. Their soil is mineral-rich.
              Their craft is patient. Their heritage is our foundation.
            </p>
          </motion.div>

          {/* Bottom ornament */}
          <motion.div
            className="flex items-center justify-center gap-3 mt-14"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 0.5, duration: 0.8 } },
            }}
          >
            <div className="w-1.5 h-1.5 bg-velor-gold/30 rotate-45" />
            <div className="w-1 h-1 bg-velor-gold/20 rotate-45" />
            <div className="w-1.5 h-1.5 bg-velor-gold/30 rotate-45" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
