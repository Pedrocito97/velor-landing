"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface DivisionCardProps {
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  href: string;
  image: string;
  index: number;
}

export function DivisionCard({
  name,
  subtitle,
  tagline,
  description,
  href,
  image,
  index,
}: DivisionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.9,
        delay: index * 0.2,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <Link href={href} className="group block">
        <div className="relative overflow-hidden">
          {/* Outer frame */}
          <div className="absolute inset-0 border border-velor-gold/0 group-hover:border-velor-gold/20 transition-colors duration-500 z-10 pointer-events-none" />

          {/* Image Container */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out group-hover:scale-105"
              style={{ backgroundImage: `url('${image}')` }}
            />

            {/* Sophisticated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-mocha via-mocha/50 to-mocha/10" />

            {/* Hover gold tint */}
            <div className="absolute inset-0 bg-velor-gold/0 group-hover:bg-velor-gold/5 transition-colors duration-700" />

            {/* Animated shine effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-velor-gold/10 via-transparent to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
            {/* Top line decoration */}
            <div className="flex items-center gap-3 mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0">
              <div className="w-8 h-px bg-velor-gold/50" />
              <div className="w-1 h-1 bg-velor-gold/60 rotate-45" />
            </div>

            {/* Subtitle */}
            <p className="text-velor-gold tracking-[0.5em] text-[10px] mb-3 transition-all duration-300 group-hover:tracking-[0.6em]">
              {subtitle}
            </p>

            {/* Name */}
            <h3 className="font-display text-3xl md:text-4xl text-ivory tracking-[0.15em] mb-3 transition-transform duration-300 group-hover:-translate-y-1">
              {name}
            </h3>

            {/* Tagline */}
            <p className="text-ivory/80 text-sm italic mb-2 font-light">
              {tagline}
            </p>

            {/* Description */}
            <p className="text-ivory/50 text-xs tracking-wide mb-8 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500">
              {description}
            </p>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <span className="text-velor-gold tracking-[0.25em] text-[10px] uppercase group-hover:tracking-[0.35em] transition-all duration-300">
                Explore Collection
              </span>
              <motion.div className="flex items-center">
                <motion.svg
                  className="w-4 h-4 text-velor-gold"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    d="M1 8h14M9 2l6 6-6 6"
                    className="transition-all duration-300 group-hover:translate-x-1"
                    style={{ transform: "translateX(0)" }}
                  />
                </motion.svg>
              </motion.div>
            </div>
          </div>

          {/* Corner Accents - more elegant */}
          <div className="absolute top-6 left-6 w-10 h-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-velor-gold/50 to-transparent" />
            <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-velor-gold/50 to-transparent" />
          </div>
          <div className="absolute top-6 right-6 w-10 h-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-velor-gold/50 to-transparent" />
            <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-velor-gold/50 to-transparent" />
          </div>

          {/* Bottom subtle line */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-velor-gold/40 group-hover:w-3/4 transition-all duration-700" />
        </div>
      </Link>
    </motion.div>
  );
}
