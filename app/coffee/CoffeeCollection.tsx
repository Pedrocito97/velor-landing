"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sigil } from "@/components/ui/Sigil";

interface CoffeeCollectionProps {
  image: string;
}

export function CoffeeCollection({ image }: CoffeeCollectionProps) {
  return (
    <section className="relative py-36 md:py-48 bg-ivory overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.01]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #C5A572 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Enhanced decorative side elements - Taller lines */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-velor-gold/30 to-transparent" />
        <div className="w-2.5 h-2.5 rotate-45 border-2 border-velor-gold/40" />
        <div className="w-px h-32 bg-gradient-to-t from-transparent via-velor-gold/30 to-transparent" />
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-velor-gold/30 to-transparent" />
        <div className="w-2.5 h-2.5 rotate-45 border-2 border-velor-gold/40" />
        <div className="w-px h-32 bg-gradient-to-t from-transparent via-velor-gold/30 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header - Enhanced spacing */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Top ornament */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-velor-gold/30" />
            <Sigil size={28} color="#C5A572" animated={false} />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-velor-gold/30" />
          </div>

          <motion.p
            className="text-velor-gold/80 tracking-[0.5em] text-[10px] mb-6 uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Five Expressions of Excellence
          </motion.p>

          <motion.h2
            className="font-display text-4xl md:text-5xl text-mocha tracking-[0.1em] mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            The Collection
          </motion.h2>

          {/* Enhanced elegant divider with triple-diamond */}
          <motion.div
            className="flex items-center justify-center gap-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-velor-gold/30 to-velor-gold/50" />
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rotate-45 bg-velor-gold/30" />
              <div className="w-2.5 h-2.5 rotate-45 border border-velor-gold/50" />
              <div className="w-1.5 h-1.5 rotate-45 bg-velor-gold/30" />
            </div>
            <div className="w-32 h-px bg-gradient-to-l from-transparent via-velor-gold/30 to-velor-gold/50" />
          </motion.div>
        </motion.div>

        {/* Collection Image - Enhanced framing */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Triple-layer frame decoration */}
          <div className="absolute -inset-6 md:-inset-8 border border-velor-gold/5 pointer-events-none" />
          <div className="absolute -inset-4 md:-inset-6 border border-velor-gold/15 pointer-events-none" />
          <div className="absolute -inset-2 md:-inset-3 border border-velor-gold/25 pointer-events-none" />

          {/* Enhanced corner accents - Larger with gradient */}
          <motion.div
            className="absolute -top-3 -left-3 w-12 h-12"
            initial={{ opacity: 0, x: -10, y: -10 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-velor-gold/60 to-transparent" />
            <div className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-velor-gold/60 to-transparent" />
          </motion.div>
          <motion.div
            className="absolute -top-3 -right-3 w-12 h-12"
            initial={{ opacity: 0, x: 10, y: -10 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-velor-gold/60 to-transparent" />
            <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-velor-gold/60 to-transparent" />
          </motion.div>
          <motion.div
            className="absolute -bottom-3 -left-3 w-12 h-12"
            initial={{ opacity: 0, x: -10, y: 10 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-velor-gold/60 to-transparent" />
            <div className="absolute bottom-0 left-0 h-full w-0.5 bg-gradient-to-t from-velor-gold/60 to-transparent" />
          </motion.div>
          <motion.div
            className="absolute -bottom-3 -right-3 w-12 h-12"
            initial={{ opacity: 0, x: 10, y: 10 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-velor-gold/60 to-transparent" />
            <div className="absolute bottom-0 right-0 h-full w-0.5 bg-gradient-to-t from-velor-gold/60 to-transparent" />
          </motion.div>

          {/* Image with shadow and hover effect */}
          <div className="relative overflow-hidden bg-ivory shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-shadow duration-500">
            <Image
              src={image}
              alt="VELOR CAF Collection - Five premium coffee roasts"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>
        </motion.div>

        {/* Product names below image - Enhanced timing */}
        <motion.div
          className="mt-20 grid grid-cols-5 gap-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { name: "CONTEND", tagline: "Rally the Spirit" },
            { name: "DECIDE", tagline: "Lock in the Path" },
            { name: "STEADY", tagline: "Control the Impulse" },
            { name: "FOCUS", tagline: "Sharper Attention" },
            { name: "BALANCE", tagline: "Center Your Presence" },
          ].map((roast, index) => (
            <motion.div
              key={roast.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
            >
              <h3 className="font-display text-lg md:text-xl text-mocha tracking-[0.15em] mb-1">
                {roast.name}
              </h3>
              <p className="text-text-muted text-[10px] md:text-xs italic tracking-wide hidden md:block">
                {roast.tagline}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced bottom ornament */}
        <motion.div
          className="flex items-center justify-center gap-3 mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <div className="w-1.5 h-1.5 bg-velor-gold/30 rotate-45" />
          <div className="w-1 h-1 bg-velor-gold/20 rotate-45" />
          <div className="w-1.5 h-1.5 bg-velor-gold/30 rotate-45" />
        </motion.div>
      </div>

      {/* Enhanced decorative corners - Larger with inner diamond */}
      <div className="absolute top-16 left-16 w-36 h-36 hidden lg:block">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-velor-gold/25 via-velor-gold/10 to-transparent" />
        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-velor-gold/25 via-velor-gold/10 to-transparent" />
        <div className="absolute top-4 left-4 w-2 h-2 rotate-45 border border-velor-gold/30" />
      </div>
      <div className="absolute top-16 right-16 w-36 h-36 hidden lg:block">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-velor-gold/25 via-velor-gold/10 to-transparent" />
        <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-velor-gold/25 via-velor-gold/10 to-transparent" />
        <div className="absolute top-4 right-4 w-2 h-2 rotate-45 border border-velor-gold/30" />
      </div>
      <div className="absolute bottom-16 left-16 w-36 h-36 hidden lg:block">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-velor-gold/25 via-velor-gold/10 to-transparent" />
        <div className="absolute bottom-0 left-0 h-full w-px bg-gradient-to-t from-velor-gold/25 via-velor-gold/10 to-transparent" />
        <div className="absolute bottom-4 left-4 w-2 h-2 rotate-45 border border-velor-gold/30" />
      </div>
      <div className="absolute bottom-16 right-16 w-36 h-36 hidden lg:block">
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-velor-gold/25 via-velor-gold/10 to-transparent" />
        <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-velor-gold/25 via-velor-gold/10 to-transparent" />
        <div className="absolute bottom-4 right-4 w-2 h-2 rotate-45 border border-velor-gold/30" />
      </div>
    </section>
  );
}
