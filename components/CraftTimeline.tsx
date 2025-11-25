"use client";

import { motion } from "framer-motion";

interface CraftStep {
  step: number;
  title: string;
  description: string;
}

interface CraftTimelineProps {
  steps: CraftStep[];
  title?: string;
  subtitle?: string;
  darkMode?: boolean;
}

export function CraftTimeline({
  steps,
  title = "The Craft",
  subtitle = "OUR PROCESS",
  darkMode = false,
}: CraftTimelineProps) {
  const bgClass = darkMode ? "bg-mocha" : "bg-ivory-warm";
  const textClass = darkMode ? "text-ivory" : "text-mocha";
  const mutedClass = darkMode ? "text-ivory/60" : "text-text-muted";
  const borderClass = darkMode ? "border-velor-gold/20" : "border-mocha/10";
  const lineClass = darkMode ? "bg-velor-gold/30" : "bg-mocha/20";

  return (
    <section className={`relative py-24 md:py-32 ${bgClass} overflow-hidden`}>
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-velor-gold tracking-[0.4em] text-xs mb-4">
            {subtitle}
          </p>
          <h2 className={`font-display text-4xl md:text-5xl ${textClass} tracking-[0.08em]`}>
            {title}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className={`absolute top-1/2 left-0 right-0 h-px ${lineClass} hidden md:block`} />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                {/* Step Number */}
                <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-full border-2 ${borderClass} ${bgClass} mb-6`}>
                  <span className="font-display text-2xl text-velor-gold">
                    {step.step}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`font-display text-lg ${textClass} tracking-[0.1em] mb-3`}>
                  {step.title}
                </h3>

                {/* Description */}
                <p className={`${mutedClass} text-sm leading-relaxed max-w-xs mx-auto`}>
                  {step.description}
                </p>

                {/* Arrow (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-2 text-velor-gold/40">
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M1 8h14M9 2l6 6-6 6" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
