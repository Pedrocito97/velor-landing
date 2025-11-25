"use client";

import { motion } from "framer-motion";
import { Sigil } from "./ui/Sigil";

interface ProductHeroProps {
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  image?: string;
  darkMode?: boolean;
}

export function ProductHero({
  name,
  subtitle,
  tagline,
  description,
  image,
  darkMode = false,
}: ProductHeroProps) {
  const bgClass = darkMode ? "bg-mocha" : "bg-ivory";
  const textClass = darkMode ? "text-ivory" : "text-mocha";
  const mutedClass = darkMode ? "text-ivory/60" : "text-text-muted";
  const borderColor = darkMode ? "border-velor-gold/15" : "border-velor-gold/20";

  return (
    <section className={`relative min-h-screen ${bgClass} overflow-hidden`}>
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${image}')` }}
          />
          <div className={`absolute inset-0 ${darkMode ? 'bg-mocha/85' : 'bg-ivory/85'}`} />
        </div>
      )}

      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${darkMode ? '#F5F2EB' : '#3D2B1F'} 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Decorative side lines */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className={`w-px h-24 bg-gradient-to-b from-transparent to-velor-gold/20`} />
        <div className="w-1.5 h-1.5 rotate-45 border border-velor-gold/30" />
        <div className={`w-px h-24 bg-gradient-to-t from-transparent to-velor-gold/20`} />
      </div>
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className={`w-px h-24 bg-gradient-to-b from-transparent to-velor-gold/20`} />
        <div className="w-1.5 h-1.5 rotate-45 border border-velor-gold/30" />
        <div className={`w-px h-24 bg-gradient-to-t from-transparent to-velor-gold/20`} />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 pt-36 pb-28 min-h-screen flex flex-col justify-center">
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.18 },
            },
          }}
        >
          {/* Top decorative element */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-10"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-velor-gold/40" />
            <Sigil size={28} color="#C5A572" animated={false} />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-velor-gold/40" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-velor-gold/80 tracking-[0.5em] text-[10px] mb-6 uppercase"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            {subtitle}
          </motion.p>

          {/* Name */}
          <motion.h1
            className={`font-display text-5xl md:text-6xl lg:text-7xl ${textClass} tracking-[0.15em] mb-8`}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            {name}
          </motion.h1>

          {/* Elegant divider */}
          <motion.div
            className="flex items-center justify-center gap-6 mb-8"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
            }}
          >
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-velor-gold/20 to-velor-gold/40" />
            <div className="w-2 h-2 rotate-45 border border-velor-gold/40" />
            <div className="w-20 h-px bg-gradient-to-l from-transparent via-velor-gold/20 to-velor-gold/40" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            className={`font-display text-xl md:text-2xl ${darkMode ? 'text-ivory/80' : 'text-mocha/80'} italic mb-8 tracking-wide`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            {tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            className={`${mutedClass} text-base md:text-lg leading-relaxed max-w-2xl mx-auto`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            {description}
          </motion.p>

          {/* Bottom ornament */}
          <motion.div
            className="flex items-center justify-center gap-3 mt-12"
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

      {/* Scroll Indicator - centered at bottom */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className={`${mutedClass} tracking-[0.3em] text-[10px] uppercase`}>Explore</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-velor-gold/50 via-velor-gold/30 to-transparent"
          animate={{
            scaleY: [1, 0.6, 1],
            opacity: [0.8, 0.4, 0.8],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Decorative Corners */}
      <div className={`absolute top-28 left-16 w-24 h-24 hidden lg:block`}>
        <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-velor-gold/20 to-transparent`} />
        <div className={`absolute top-0 left-0 h-full w-px bg-gradient-to-b from-velor-gold/20 to-transparent`} />
      </div>
      <div className={`absolute top-28 right-16 w-24 h-24 hidden lg:block`}>
        <div className={`absolute top-0 right-0 w-full h-px bg-gradient-to-l from-velor-gold/20 to-transparent`} />
        <div className={`absolute top-0 right-0 h-full w-px bg-gradient-to-b from-velor-gold/20 to-transparent`} />
      </div>
      <div className={`absolute bottom-28 left-16 w-24 h-24 hidden lg:block`}>
        <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-velor-gold/20 to-transparent`} />
        <div className={`absolute bottom-0 left-0 h-full w-px bg-gradient-to-t from-velor-gold/20 to-transparent`} />
      </div>
      <div className={`absolute bottom-28 right-16 w-24 h-24 hidden lg:block`}>
        <div className={`absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-velor-gold/20 to-transparent`} />
        <div className={`absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-velor-gold/20 to-transparent`} />
      </div>
    </section>
  );
}
