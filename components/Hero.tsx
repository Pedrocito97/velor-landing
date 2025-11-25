"use client";

import { motion } from "framer-motion";
import { Logo } from "./ui/Logo";
import { Sigil } from "./ui/Sigil";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-ivory paper-texture overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-ivory/50 to-ivory pointer-events-none" />

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-velor-gold/20 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main content - perfectly centered */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center max-w-4xl mx-auto">

        {/* Decorative top line */}
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-velor-gold/40" />
          <Sigil size={24} color="#C5A572" animated={false} />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-velor-gold/40" />
        </motion.div>

        {/* Pre-title */}
        <motion.p
          className="text-velor-gold/80 tracking-[0.5em] text-xs mb-6 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          The House of
        </motion.p>

        {/* Logo */}
        <Logo size="xl" showTagline={false} animated={true} />

        {/* Elegant divider */}
        <motion.div
          className="mt-10 mb-8 flex items-center justify-center gap-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-velor-gold/30 to-velor-gold/50" />
          <div className="w-2 h-2 rotate-45 border border-velor-gold/50" />
          <div className="w-24 h-px bg-gradient-to-l from-transparent via-velor-gold/30 to-velor-gold/50" />
        </motion.div>

        {/* Brand Tagline */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          <p className="text-mocha/60 tracking-[0.25em] text-sm mb-4 uppercase">
            Spirits · Coffee · Chocolate
          </p>
          <p className="font-display text-xl md:text-2xl text-mocha/80 leading-relaxed tracking-wide italic">
            Where craft becomes legacy.
          </p>
        </motion.div>

        {/* Decorative bottom ornament */}
        <motion.div
          className="mt-12 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <div className="w-1.5 h-1.5 bg-velor-gold/30 rotate-45" />
          <div className="w-1 h-1 bg-velor-gold/20 rotate-45" />
          <div className="w-1.5 h-1.5 bg-velor-gold/30 rotate-45" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.8 }}
      >
        <span className="text-[10px] tracking-[0.3em] text-text-muted uppercase">
          Explore
        </span>
        <motion.div
          className="w-px h-16 bg-gradient-to-b from-velor-gold/60 via-velor-gold/30 to-transparent"
          animate={{
            scaleY: [1, 0.6, 1],
            opacity: [0.8, 0.3, 0.8],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Luxury corner accents */}
      <div className="absolute top-12 left-12 w-20 h-20">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-velor-gold/30 to-transparent" />
        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-velor-gold/30 to-transparent" />
      </div>
      <div className="absolute top-12 right-12 w-20 h-20">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-velor-gold/30 to-transparent" />
        <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-velor-gold/30 to-transparent" />
      </div>
      <div className="absolute bottom-12 left-12 w-20 h-20">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-velor-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 h-full w-px bg-gradient-to-t from-velor-gold/30 to-transparent" />
      </div>
      <div className="absolute bottom-12 right-12 w-20 h-20">
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-velor-gold/30 to-transparent" />
        <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-velor-gold/30 to-transparent" />
      </div>
    </section>
  );
}
