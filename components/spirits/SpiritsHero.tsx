"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { heroStagger, heroChild } from "@/lib/animations";

interface SpiritsHeroProps {
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
}

export function SpiritsHero({ name, subtitle, tagline, description }: SpiritsHeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ivory-warm"
    >
      {/* Background with parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        {/* Subtle radial gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_center,transparent_0%,rgba(250,248,243,0.3)_50%,rgba(250,248,243,0.7)_100%)] z-10" />

        {/* Subtle texture */}
        <div
          className="absolute inset-0 z-20 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at center, #3D2B1F 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </motion.div>

      {/* Floating gold particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 bg-velor-gold/30 rounded-full ${
              i % 3 === 0 ? "float-particle" : i % 3 === 1 ? "float-particle-delayed" : "float-particle-slow"
            }`}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 4) * 20}%`,
            }}
          />
        ))}
      </div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l border-t border-velor-gold/20 z-20" />
      <div className="absolute top-8 right-8 w-20 h-20 border-r border-t border-velor-gold/20 z-20" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l border-b border-velor-gold/20 z-20" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r border-b border-velor-gold/20 z-20" />

      {/* Main content */}
      <motion.div
        style={{ opacity }}
        className="relative z-30 container mx-auto px-6"
      >
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Top ornament */}
          <motion.div variants={heroChild} className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-velor-gold/40" />
            <div className="w-1.5 h-1.5 rotate-45 border border-velor-gold/60" />
            <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-velor-gold/40" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={heroChild}
            className="text-velor-gold tracking-[0.4em] text-xs md:text-sm uppercase mb-4"
          >
            {subtitle}
          </motion.p>

          {/* Main title */}
          <motion.h1
            variants={heroChild}
            className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-mocha tracking-[0.15em] mb-6"
          >
            {name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={heroChild}
            className="font-display text-xl md:text-2xl lg:text-3xl text-mocha/75 italic tracking-wide mb-8"
          >
            {tagline}
          </motion.p>

          {/* Divider */}
          <motion.div variants={heroChild} className="flex items-center justify-center gap-3 mb-10">
            <div className="w-20 md:w-32 h-px bg-gradient-to-r from-transparent to-velor-gold/50" />
            <div className="w-2 h-2 rotate-45 bg-velor-gold/40" />
            <div className="w-20 md:w-32 h-px bg-gradient-to-l from-transparent to-velor-gold/50" />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={heroChild}
            className="text-mocha/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed tracking-wide"
          >
            {description}
          </motion.p>

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
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3"
      >
        <span className="text-mocha/40 text-[10px] tracking-[0.3em] uppercase">
          Discover
        </span>
        <motion.div
          animate={{
            scaleY: [1, 0.6, 1],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-px h-12 bg-gradient-to-b from-velor-gold/60 to-transparent origin-top"
        />
      </motion.div>
    </section>
  );
}
