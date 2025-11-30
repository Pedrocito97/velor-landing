"use client";

import { motion } from "framer-motion";
import { viewportOnce, stepReveal, drawLine } from "@/lib/animations";
import { RitualStep } from "@/lib/products/spirits";

interface CraftRitualSectionProps {
  data: {
    title: string;
    subtitle: string;
    steps: RitualStep[];
    quote: string;
  };
}

// Ritual icons as SVG components
function SealIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 md:w-16 md:h-16">
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1" className="text-velor-gold/40" />
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1" className="text-velor-gold/60" />
      <path
        d="M24 12L26.5 19.5H34L28 24L30.5 32L24 27L17.5 32L20 24L14 19.5H21.5L24 12Z"
        stroke="currentColor"
        strokeWidth="1"
        className="text-velor-gold"
        fill="none"
      />
    </svg>
  );
}

function PourIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 md:w-16 md:h-16">
      <path
        d="M20 8L22 4H26L28 8"
        stroke="currentColor"
        strokeWidth="1"
        className="text-velor-gold/60"
      />
      <path
        d="M18 8H30L28 36C28 38 26 40 24 40C22 40 20 38 20 36L18 8Z"
        stroke="currentColor"
        strokeWidth="1"
        className="text-velor-gold"
        fill="none"
      />
      <path
        d="M28 20C32 22 34 26 34 30C34 36 30 40 24 44"
        stroke="currentColor"
        strokeWidth="1"
        className="text-velor-gold/40"
        strokeDasharray="2 2"
      />
    </svg>
  );
}

function TasteIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 md:w-16 md:h-16">
      <ellipse cx="24" cy="36" rx="16" ry="4" stroke="currentColor" strokeWidth="1" className="text-velor-gold/40" />
      <path
        d="M10 20C10 12 16 6 24 6C32 6 38 12 38 20V36C38 38 32 40 24 40C16 40 10 38 10 36V20Z"
        stroke="currentColor"
        strokeWidth="1"
        className="text-velor-gold"
        fill="none"
      />
      <path
        d="M16 20C16 16 20 14 24 14C28 14 32 16 32 20"
        stroke="currentColor"
        strokeWidth="1"
        className="text-velor-gold/60"
      />
    </svg>
  );
}

const icons: Record<string, React.ReactNode> = {
  seal: <SealIcon />,
  pour: <PourIcon />,
  taste: <TasteIcon />,
};

export function CraftRitualSection({ data }: CraftRitualSectionProps) {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-obsidian overflow-hidden">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at center, #C5A572 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-96 bg-gradient-radial from-velor-gold/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={viewportOnce}
          className="text-center mb-16 md:mb-24"
        >
          {/* Subtitle */}
          <p className="text-velor-gold tracking-[0.4em] text-[10px] md:text-xs uppercase mb-4">
            {data.subtitle}
          </p>

          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory tracking-[0.15em] mb-6">
            {data.title}
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-velor-gold/40" />
            <div className="w-2 h-2 rotate-45 border border-velor-gold/50" />
            <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-velor-gold/40" />
          </div>
        </motion.div>

        {/* Ritual Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[16.66%] right-[16.66%] h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={viewportOnce}
              className="w-full h-full bg-gradient-to-r from-transparent via-velor-gold/30 to-transparent origin-left"
            />
          </div>

          {/* Steps grid */}
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {data.steps.map((step, index) => (
              <motion.div
                key={step.id}
                custom={index}
                variants={stepReveal}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="text-center"
              >
                {/* Icon container */}
                <div className="relative inline-flex items-center justify-center mb-8">
                  {/* Glow ring */}
                  <motion.div
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                    className="absolute inset-0 rounded-full border border-velor-gold/20"
                    style={{ padding: "20px", margin: "-20px" }}
                  />

                  {/* Icon */}
                  <div className="relative z-10 text-ivory">
                    {icons[step.icon] || icons.seal}
                  </div>
                </div>

                {/* Step number */}
                <p className="text-velor-gold/40 text-sm tracking-[0.3em] mb-3">
                  0{step.id}
                </p>

                {/* Step name */}
                <h3 className="font-display text-xl md:text-2xl text-ivory tracking-[0.15em] mb-4">
                  {step.name}
                </h3>

                {/* Description */}
                <p className="text-ivory/50 text-sm md:text-base leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={viewportOnce}
          className="mt-20 md:mt-28 text-center"
        >
          <div className="relative inline-block">
            {/* Quote marks */}
            <span className="absolute -left-6 -top-4 text-velor-gold/30 text-4xl font-display">
              &ldquo;
            </span>
            <span className="absolute -right-6 -bottom-4 text-velor-gold/30 text-4xl font-display">
              &rdquo;
            </span>

            <p className="font-display text-xl md:text-2xl lg:text-3xl text-ivory/80 italic tracking-wide max-w-2xl">
              {data.quote}
            </p>
          </div>
        </motion.div>

        {/* Bottom ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={viewportOnce}
          className="mt-16 flex items-center justify-center gap-2"
        >
          <div className="w-1 h-1 rotate-45 bg-velor-gold/20" />
          <div className="w-1.5 h-1.5 rotate-45 border border-velor-gold/30" />
          <div className="w-2 h-2 rotate-45 border border-velor-gold/40" />
          <div className="w-1.5 h-1.5 rotate-45 border border-velor-gold/30" />
          <div className="w-1 h-1 rotate-45 bg-velor-gold/20" />
        </motion.div>
      </div>
    </section>
  );
}
