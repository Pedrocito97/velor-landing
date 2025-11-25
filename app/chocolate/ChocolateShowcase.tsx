"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sigil } from "@/components/ui/Sigil";

interface ChocolateShowcaseProps {
  detailImage: string;
  featureImage: string;
}

export function ChocolateShowcase({
  detailImage,
  featureImage,
}: ChocolateShowcaseProps) {
  return (
    <section className="relative py-36 md:py-48 bg-mocha overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #F5F2EB 1px, transparent 0)`,
            backgroundSize: "50px 50px",
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
            Crafted with Precision
          </motion.p>

          <motion.h2
            className="font-display text-4xl md:text-5xl text-ivory tracking-[0.1em] mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            The Art of Indulgence
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

        {/* Two Image Showcase - Enhanced framing */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Feature Image - JUDGMENT detail */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Triple-layer frame decoration */}
            <div className="absolute -inset-5 md:-inset-6 border border-velor-gold/5 pointer-events-none" />
            <div className="absolute -inset-3 md:-inset-4 border border-velor-gold/15 pointer-events-none" />
            <div className="absolute -inset-1.5 md:-inset-2 border border-velor-gold/25 pointer-events-none" />

            {/* Enhanced corner accents - Larger with gradient */}
            <motion.div
              className="absolute -top-2 -left-2 w-10 h-10"
              initial={{ opacity: 0, x: -10, y: -10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-velor-gold/60 to-transparent" />
              <div className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-velor-gold/60 to-transparent" />
            </motion.div>
            <motion.div
              className="absolute -top-2 -right-2 w-10 h-10"
              initial={{ opacity: 0, x: 10, y: -10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-velor-gold/60 to-transparent" />
              <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-velor-gold/60 to-transparent" />
            </motion.div>
            <motion.div
              className="absolute -bottom-2 -left-2 w-10 h-10"
              initial={{ opacity: 0, x: -10, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-velor-gold/60 to-transparent" />
              <div className="absolute bottom-0 left-0 h-full w-0.5 bg-gradient-to-t from-velor-gold/60 to-transparent" />
            </motion.div>
            <motion.div
              className="absolute -bottom-2 -right-2 w-10 h-10"
              initial={{ opacity: 0, x: 10, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-velor-gold/60 to-transparent" />
              <div className="absolute bottom-0 right-0 h-full w-0.5 bg-gradient-to-t from-velor-gold/60 to-transparent" />
            </motion.div>

            {/* Image with shadow and hover effect */}
            <div className="relative overflow-hidden bg-ivory shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-shadow duration-500">
              <Image
                src={featureImage}
                alt="VELOR TERRA JUDGMENT - Premium milk chocolate bar"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>

            {/* Caption */}
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <h3 className="font-display text-xl text-ivory tracking-[0.15em] mb-2">
                JUDGMENT
              </h3>
              <p className="text-ivory/50 text-xs italic tracking-wide">
                Control the Impulse, Taste the Decision
              </p>
            </motion.div>
          </motion.div>

          {/* Detail Image - Bar with packaging */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Triple-layer frame decoration */}
            <div className="absolute -inset-5 md:-inset-6 border border-velor-gold/5 pointer-events-none" />
            <div className="absolute -inset-3 md:-inset-4 border border-velor-gold/15 pointer-events-none" />
            <div className="absolute -inset-1.5 md:-inset-2 border border-velor-gold/25 pointer-events-none" />

            {/* Enhanced corner accents - Larger with gradient */}
            <motion.div
              className="absolute -top-2 -left-2 w-10 h-10"
              initial={{ opacity: 0, x: -10, y: -10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-velor-gold/60 to-transparent" />
              <div className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-velor-gold/60 to-transparent" />
            </motion.div>
            <motion.div
              className="absolute -top-2 -right-2 w-10 h-10"
              initial={{ opacity: 0, x: 10, y: -10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-velor-gold/60 to-transparent" />
              <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-velor-gold/60 to-transparent" />
            </motion.div>
            <motion.div
              className="absolute -bottom-2 -left-2 w-10 h-10"
              initial={{ opacity: 0, x: -10, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-velor-gold/60 to-transparent" />
              <div className="absolute bottom-0 left-0 h-full w-0.5 bg-gradient-to-t from-velor-gold/60 to-transparent" />
            </motion.div>
            <motion.div
              className="absolute -bottom-2 -right-2 w-10 h-10"
              initial={{ opacity: 0, x: 10, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-velor-gold/60 to-transparent" />
              <div className="absolute bottom-0 right-0 h-full w-0.5 bg-gradient-to-t from-velor-gold/60 to-transparent" />
            </motion.div>

            {/* Image with shadow and hover effect */}
            <div className="relative overflow-hidden bg-ivory shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-shadow duration-500">
              <Image
                src={detailImage}
                alt="VELOR TERRA chocolate bar and packaging"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>

            {/* Caption */}
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <h3 className="font-display text-xl text-ivory tracking-[0.15em] mb-2">
                Single Origin
              </h3>
              <p className="text-ivory/50 text-xs italic tracking-wide">
                100g of Pure Cameroonian Excellence
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Specs badge */}
        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-4 px-8 py-3 border border-velor-gold/15">
            <span className="text-ivory/50 tracking-[0.25em] text-[10px] uppercase">
              Slow Conched
            </span>
            <div className="w-px h-3 bg-velor-gold/20" />
            <span className="text-ivory/50 tracking-[0.25em] text-[10px] uppercase">
              Small Batch
            </span>
            <div className="w-px h-3 bg-velor-gold/20" />
            <span className="text-ivory/50 tracking-[0.25em] text-[10px] uppercase">
              Bean to Bar
            </span>
          </div>
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
