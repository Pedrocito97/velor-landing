"use client";

import { motion } from "framer-motion";
import { Logo } from "./ui/Logo";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-ivory paper-texture overflow-hidden">
      {/* Optional video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-10"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/80 via-ivory/60 to-ivory" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        <Logo size="xl" showTagline={false} animated={true} />

        {/* New Origin Tagline */}
        <motion.div
          className="mt-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          <p className="font-display text-lg md:text-xl lg:text-2xl text-mocha/80 leading-relaxed tracking-wide">
            <span className="block">Our cocoa carries the fire of the volcano.</span>
            <span className="block text-velor-gold italic mt-1">Our coffee carries the breath of the highlands.</span>
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <span className="text-xs tracking-[0.2em] text-text-muted uppercase">
          Discover
        </span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-velor-gold to-transparent"
          animate={{
            scaleY: [1, 0.5, 1],
            opacity: [1, 0.3, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        />
      </motion.div>

      {/* Decorative corners */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-velor-gold/20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-velor-gold/20" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-velor-gold/20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-velor-gold/20" />
    </section>
  );
}
