"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, slideInLeft, slideInRight, viewportOnce } from "@/lib/animations";
import { HeritageStat } from "@/lib/products/spirits";

interface HeritageOriginProps {
  data: {
    title: string;
    subtitle: string;
    stats: HeritageStat[];
    paragraphs: string[];
    quote: string;
  };
  image?: string;
}

export function HeritageOrigin({ data, image = "/images/highlands-coffee.jpg" }: HeritageOriginProps) {
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            <motion.div
              variants={slideInLeft}
              className="relative"
            >
              {/* Triple frame */}
              <div className="relative">
                <div className="absolute -inset-6 border border-velor-gold/10" />
                <div className="absolute -inset-4 border border-velor-gold/15" />
                <div className="absolute -inset-2 border border-velor-gold/20" />

                {/* Image container */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={image}
                    alt="Cameroonian Heritage"
                    fill
                    className="object-cover"
                  />
                  {/* Subtle gold overlay */}
                  <div className="absolute inset-0 bg-velor-gold/5" />
                </div>

                {/* Corner accents */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  viewport={viewportOnce}
                  className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-velor-gold/50"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  viewport={viewportOnce}
                  className="absolute -top-3 -right-3 w-8 h-8 border-r-2 border-t-2 border-velor-gold/50"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  viewport={viewportOnce}
                  className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 border-velor-gold/50"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  viewport={viewportOnce}
                  className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-velor-gold/50"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {/* Subtitle */}
            <motion.div
              variants={slideInRight}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-velor-gold/50" />
              <span className="text-velor-gold tracking-[0.4em] text-[10px] md:text-xs uppercase">
                {data.subtitle}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={slideInRight}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-mocha tracking-[0.1em] mb-8"
            >
              {data.title}
            </motion.h2>

            {/* Stats */}
            <motion.div
              variants={slideInRight}
              className="grid grid-cols-3 gap-4 mb-10"
            >
              {data.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="font-display text-3xl md:text-4xl text-velor-gold mb-1">
                    {stat.value}
                  </p>
                  <p className="text-mocha/50 text-[10px] tracking-[0.2em] uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Divider */}
            <motion.div
              variants={slideInRight}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-16 h-px bg-gradient-to-r from-velor-gold/50 to-transparent" />
              <div className="w-1.5 h-1.5 rotate-45 border border-velor-gold/40" />
            </motion.div>

            {/* Paragraphs */}
            <motion.div variants={slideInRight} className="space-y-4 mb-10">
              {data.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-text-muted text-base md:text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Quote */}
            <motion.div
              variants={slideInRight}
              className="relative pl-6 border-l-2 border-velor-gold/30"
            >
              <p className="font-display text-xl md:text-2xl text-mocha/80 italic">
                &ldquo;{data.quote}&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom ornament */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={viewportOnce}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2"
      >
        <div className="w-1 h-1 rotate-45 bg-velor-gold/20" />
        <div className="w-1.5 h-1.5 rotate-45 border border-velor-gold/30" />
        <div className="w-1 h-1 rotate-45 bg-velor-gold/20" />
      </motion.div>
    </section>
  );
}
