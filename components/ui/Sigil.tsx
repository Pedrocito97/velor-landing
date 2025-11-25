"use client";

import { motion } from "framer-motion";

interface SigilProps {
  className?: string;
  color?: string;
  size?: number;
  animated?: boolean;
}

export function Sigil({
  className = "",
  color = "currentColor",
  size = 80,
  animated = true,
}: SigilProps) {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5, ease: "easeInOut" },
        opacity: { duration: 0.3 },
      },
    },
  };

  const diamondVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  if (!animated) {
    return (
      <svg
        width={size}
        height={size * 1.2}
        viewBox="0 0 80 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Diamond accent */}
        <path
          d="M40 4L46 16L40 28L34 16L40 4Z"
          fill={color}
        />
        {/* V shape */}
        <path
          d="M12 32L40 88L68 32"
          stroke={color}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Inner V detail */}
        <path
          d="M24 40L40 72L56 40"
          stroke={color}
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.5"
        />
      </svg>
    );
  }

  return (
    <motion.svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 80 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial="hidden"
      animate="visible"
    >
      {/* Diamond accent */}
      <motion.path
        d="M40 4L46 16L40 28L34 16L40 4Z"
        fill={color}
        variants={diamondVariants}
      />
      {/* V shape */}
      <motion.path
        d="M12 32L40 88L68 32"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
      />
      {/* Inner V detail */}
      <motion.path
        d="M24 40L40 72L56 40"
        stroke={color}
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.4"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 0.4,
            transition: {
              delay: 0.5,
              pathLength: { duration: 1, ease: "easeInOut" },
              opacity: { duration: 0.3, delay: 0.5 },
            },
          },
        }}
      />
    </motion.svg>
  );
}
