"use client";

import { motion } from "framer-motion";
import { Logo } from "./ui/Logo";
import { Sigil } from "./ui/Sigil";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-ivory-warm paper-texture hero-vignette overflow-hidden">
      {/* Subtle radial gradient for depth and focus */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_center,transparent_0%,rgba(250,248,243,0.3)_50%,rgba(250,248,243,0.7)_100%)] pointer-events-none" />

      {/* Top-to-bottom subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-ivory-warm/40 pointer-events-none" />

      {/* Animated background particles - softer, slower, more elegant */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-velor-gold/15 rounded-full particle-glow"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, (i % 2 === 0 ? 10 : -10), 0],
              opacity: [0.15, 0.35, 0.15],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + i * 0.8,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main content - perfectly centered */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center max-w-4xl mx-auto">

        {/* Decorative top line */}
        <motion.div
          className="flex items-center gap-5 mb-14"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-velor-gold/50" />
          <Sigil size={28} color="#C5A572" animated={false} />
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-velor-gold/50" />
        </motion.div>

        {/* Pre-title */}
        <motion.p
          className="text-velor-gold/70 tracking-[0.6em] text-[10px] mb-8 uppercase font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          The House of
        </motion.p>

        {/* Logo */}
        <Logo size="xl" showTagline={false} animated={true} />

        {/* Elegant animated divider */}
        <motion.div
          className="mt-12 mb-10 flex items-center justify-center gap-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <motion.div
            className="w-28 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(197,165,114,0.4), rgba(197,165,114,0.6))'
            }}
            animate={{
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="w-2.5 h-2.5 rotate-45 border border-velor-gold/60"
            animate={{
              scale: [1, 1.1, 1],
              borderColor: ['rgba(197,165,114,0.6)', 'rgba(197,165,114,0.9)', 'rgba(197,165,114,0.6)'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="w-28 h-px"
            style={{
              background: 'linear-gradient(90deg, rgba(197,165,114,0.6), rgba(197,165,114,0.4), transparent)'
            }}
            animate={{
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Brand Tagline */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          <p className="text-mocha/50 tracking-[0.35em] text-xs mb-6 uppercase font-light">
            Spirits &middot; Coffee &middot; Chocolate
          </p>
          <p className="font-display text-2xl md:text-3xl text-mocha/75 leading-relaxed tracking-wide italic">
            Where craft becomes legacy.
          </p>
        </motion.div>

        {/* Decorative bottom ornament */}
        <motion.div
          className="mt-14 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <div className="w-1 h-1 bg-velor-gold/25 rotate-45" />
          <div className="w-1.5 h-1.5 bg-velor-gold/35 rotate-45" />
          <div className="w-1 h-1 bg-velor-gold/25 rotate-45" />
        </motion.div>
      </div>

      {/* Elegant scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <span className="text-[9px] tracking-[0.4em] text-mocha/40 uppercase font-light">
          Explore
        </span>

        <div className="relative flex flex-col items-center">
          <motion.div
            className="w-1 h-1 rotate-45 border border-velor-gold/50 mb-2"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-velor-gold/50 via-velor-gold/25 to-transparent origin-top"
            animate={{
              scaleY: [1, 0.5, 1],
              opacity: [0.6, 0.25, 0.6],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>

      {/* Luxury double-line corner accents */}
      {/* Top Left */}
      <div className="absolute top-12 left-12 w-24 h-24">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-velor-gold/40 to-transparent" />
        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-velor-gold/40 to-transparent" />
        <div className="absolute top-3 left-3 w-[calc(100%-12px)] h-px bg-gradient-to-r from-velor-gold/20 to-transparent" />
        <div className="absolute top-3 left-3 h-[calc(100%-12px)] w-px bg-gradient-to-b from-velor-gold/20 to-transparent" />
        <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-velor-gold/50 rotate-45 -translate-x-[2px] -translate-y-[2px]" />
      </div>

      {/* Top Right */}
      <div className="absolute top-12 right-12 w-24 h-24">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-velor-gold/40 to-transparent" />
        <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-velor-gold/40 to-transparent" />
        <div className="absolute top-3 right-3 w-[calc(100%-12px)] h-px bg-gradient-to-l from-velor-gold/20 to-transparent" />
        <div className="absolute top-3 right-3 h-[calc(100%-12px)] w-px bg-gradient-to-b from-velor-gold/20 to-transparent" />
        <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-velor-gold/50 rotate-45 translate-x-[2px] -translate-y-[2px]" />
      </div>

      {/* Bottom Left */}
      <div className="absolute bottom-12 left-12 w-24 h-24">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-velor-gold/40 to-transparent" />
        <div className="absolute bottom-0 left-0 h-full w-px bg-gradient-to-t from-velor-gold/40 to-transparent" />
        <div className="absolute bottom-3 left-3 w-[calc(100%-12px)] h-px bg-gradient-to-r from-velor-gold/20 to-transparent" />
        <div className="absolute bottom-3 left-3 h-[calc(100%-12px)] w-px bg-gradient-to-t from-velor-gold/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-velor-gold/50 rotate-45 -translate-x-[2px] translate-y-[2px]" />
      </div>

      {/* Bottom Right */}
      <div className="absolute bottom-12 right-12 w-24 h-24">
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-velor-gold/40 to-transparent" />
        <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-velor-gold/40 to-transparent" />
        <div className="absolute bottom-3 right-3 w-[calc(100%-12px)] h-px bg-gradient-to-l from-velor-gold/20 to-transparent" />
        <div className="absolute bottom-3 right-3 h-[calc(100%-12px)] w-px bg-gradient-to-t from-velor-gold/20 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-velor-gold/50 rotate-45 translate-x-[2px] translate-y-[2px]" />
      </div>
    </section>
  );
}
