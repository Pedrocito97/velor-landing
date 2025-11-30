"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { viewportOnce, stepReveal } from "@/lib/animations";
import { ProcessStep } from "@/lib/products/spirits";

interface DistillationProcessProps {
  steps: ProcessStep[];
}

export function DistillationProcess({ steps }: DistillationProcessProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 bg-mocha overflow-hidden"
    >
      {/* Parallax background texture */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at center, #C5A572 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-radial from-velor-gold/5 to-transparent pointer-events-none" />

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
            The Craft
          </p>

          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory tracking-[0.1em] mb-6">
            From Soil to Spirit
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-velor-gold/40" />
            <div className="w-1.5 h-1.5 rotate-45 border border-velor-gold/50" />
            <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-velor-gold/40" />
          </div>
        </motion.div>

        {/* Process Steps */}
        <div className="relative max-w-6xl mx-auto">
          {/* Horizontal connector line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={viewportOnce}
              className="w-full h-px bg-gradient-to-r from-transparent via-velor-gold/30 to-transparent origin-left"
            />
          </div>

          {/* Steps grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                custom={index}
                variants={stepReveal}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="relative text-center lg:text-left"
              >
                {/* Step number */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  {/* Circle background */}
                  <div className="w-24 h-24 rounded-full border border-velor-gold/20 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full border border-velor-gold/30 flex items-center justify-center">
                      <span className="font-display text-3xl text-velor-gold">
                        0{step.step}
                      </span>
                    </div>
                  </div>

                  {/* Pulse animation */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                    className="absolute inset-0 rounded-full border border-velor-gold/20"
                  />
                </div>

                {/* Step title */}
                <h3 className="font-display text-xl md:text-2xl text-ivory tracking-[0.15em] mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-ivory/50 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow to next (mobile/tablet) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6">
                    <svg
                      className="w-6 h-6 text-velor-gold/30"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={viewportOnce}
          className="mt-20 md:mt-28 text-center"
        >
          <p className="font-display text-lg md:text-xl text-ivory/60 italic max-w-xl mx-auto">
            Each step matters. Each moment of patience adds depth.
            This is why VELOR tastes like nowhere else.
          </p>
        </motion.div>

        {/* Bottom ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={viewportOnce}
          className="mt-12 flex items-center justify-center gap-2"
        >
          <div className="w-1 h-1 rotate-45 bg-velor-gold/20" />
          <div className="w-1.5 h-1.5 rotate-45 border border-velor-gold/30" />
          <div className="w-1 h-1 rotate-45 bg-velor-gold/20" />
        </motion.div>
      </div>
    </section>
  );
}
