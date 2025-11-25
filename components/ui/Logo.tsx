"use client";

import { motion } from "framer-motion";
import { Sigil } from "./Sigil";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  animated?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeConfig = {
  sm: { sigil: 40, title: "text-lg", subtitle: "text-xs", gap: "gap-2" },
  md: { sigil: 60, title: "text-2xl", subtitle: "text-sm", gap: "gap-3" },
  lg: { sigil: 80, title: "text-4xl", subtitle: "text-base", gap: "gap-4" },
  xl: { sigil: 100, title: "text-5xl md:text-6xl", subtitle: "text-lg", gap: "gap-5" },
};

export function Logo({
  className = "",
  showTagline = true,
  animated = true,
  size = "lg",
}: LogoProps) {
  const config = sizeConfig[size];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const taglineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 2,
        duration: 0.8,
      },
    },
  };

  const title = "THE HOUSE OF";
  const brand = "VELOR";

  if (!animated) {
    return (
      <div className={`flex flex-col items-center ${config.gap} ${className}`}>
        <Sigil size={config.sigil} color="#C5A572" animated={false} />
        <div className="text-center">
          <p
            className={`font-display tracking-[0.3em] text-mocha ${config.subtitle}`}
          >
            {title}
          </p>
          <h1
            className={`font-display tracking-[0.35em] text-mocha font-normal ${config.title}`}
          >
            {brand}
          </h1>
          {showTagline && (
            <p className="mt-3 tracking-[0.2em] text-text-muted text-xs uppercase">
              Est. 2025
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center ${config.gap} ${className}`}>
      <Sigil size={config.sigil} color="#C5A572" animated={true} />

      <motion.div
        className="text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className={`font-display tracking-[0.3em] text-mocha ${config.subtitle}`}
          variants={letterVariants}
        >
          {title}
        </motion.p>

        <motion.h1
          className={`font-display tracking-[0.35em] text-mocha font-normal ${config.title}`}
        >
          {brand.split("").map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        {showTagline && (
          <motion.p
            className="mt-3 tracking-[0.2em] text-text-muted text-xs uppercase"
            variants={taglineVariants}
          >
            Est. 2025
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
