"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { fadeInUp, viewportOnce } from "@/lib/animations";

interface Product {
  name: string;
  variant: string;
  description: string;
  alcVol: string;
  image: string;
  accent: string;
}

const products: Product[] = [
  {
    name: "VELOR",
    variant: "COFFEE",
    description:
      "Deep, aromatic notes of single-origin espresso, balanced with subtle hints of dark chocolate and a whisper of vanilla. A transformative experience.",
    alcVol: "25% ALC. VOL",
    image: "/images/velor-bottles.jpg",
    accent: "from-amber-900/20",
  },
  {
    name: "VELOR",
    variant: "COCOA",
    description:
      "Rich, velvety cocoa from the finest cacao regions, intertwined with notes of roasted hazelnut and a delicate caramel finish. Pure indulgence.",
    alcVol: "25% ALC. VOL",
    image: "/images/velor-bottles-2.jpg",
    accent: "from-stone-700/20",
  },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      className="relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[80vh]`}
      >
        {/* Image Section */}
        <motion.div
          className={`relative overflow-hidden bg-ivory-dark ${
            isEven ? "lg:order-1" : "lg:order-2"
          }`}
          variants={{
            hidden: { opacity: 0, x: isEven ? -60 : 60 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
            },
          }}
        >
          {/* Gradient overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${product.accent} to-transparent z-10 pointer-events-none`}
          />

          {/* Product Image with parallax */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center p-12 md:p-16"
            style={{ y: imageY }}
          >
            <div className="relative w-full h-full max-w-md">
              <Image
                src={product.image}
                alt={`${product.name} ${product.variant}`}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={index === 0}
              />
            </div>
          </motion.div>

          {/* Decorative frame */}
          <div className="absolute inset-8 border border-velor-gold/10 pointer-events-none" />

          {/* Corner accents */}
          <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-velor-gold/30" />
          <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-velor-gold/30" />
        </motion.div>

        {/* Content Section */}
        <motion.div
          className={`relative flex items-center bg-ivory ${
            isEven ? "lg:order-2" : "lg:order-1"
          }`}
          variants={{
            hidden: { opacity: 0, x: isEven ? 60 : -60 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 },
            },
          }}
        >
          <div
            className={`w-full px-8 md:px-16 lg:px-20 py-16 lg:py-0 ${
              isEven ? "lg:pl-20 lg:pr-16" : "lg:pr-20 lg:pl-16"
            }`}
          >
            {/* Product label */}
            <motion.div
              className="flex items-center gap-4 mb-8"
              variants={fadeInUp}
            >
              <div className="w-8 h-px bg-velor-gold" />
              <span className="text-velor-gold tracking-[0.4em] text-xs font-medium">
                {product.name}
              </span>
            </motion.div>

            {/* Product name */}
            <motion.h3
              className="font-display text-5xl md:text-6xl lg:text-7xl text-mocha tracking-[0.15em] mb-8"
              variants={fadeInUp}
            >
              {product.variant}
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-text-muted leading-[1.9] text-lg mb-10 max-w-md"
              variants={fadeInUp}
            >
              {product.description}
            </motion.p>

            {/* Details */}
            <motion.div
              className="flex items-center gap-6"
              variants={fadeInUp}
            >
              <span className="text-text-light tracking-[0.2em] text-sm">
                {product.alcVol}
              </span>
              <div className="w-1 h-1 bg-velor-gold/40 rotate-45" />
              <span className="text-text-light tracking-[0.2em] text-sm">
                EST. 2025
              </span>
            </motion.div>

            {/* Decorative bottom element */}
            <motion.div
              className="mt-12 flex items-center gap-4"
              variants={fadeInUp}
            >
              <div className="w-16 h-px bg-gradient-to-r from-velor-gold/60 to-transparent" />
              <div className="w-2 h-2 rotate-45 border border-velor-gold/40" />
            </motion.div>
          </div>

          {/* Vertical text */}
          <div
            className={`hidden lg:block absolute top-1/2 -translate-y-1/2 ${
              isEven ? "right-8" : "left-8"
            }`}
          >
            <span
              className="text-velor-gold/20 tracking-[0.5em] text-xs font-medium uppercase"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
            >
              The House of Velor
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function ProductShowcase() {
  return (
    <section className="bg-ivory" id="collection">
      {/* Section header */}
      <div className="py-24 md:py-32">
        <motion.div
          className="max-w-4xl mx-auto px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          <motion.div
            className="flex items-center justify-center gap-6 mb-8"
            variants={fadeInUp}
          >
            <div className="w-16 h-px bg-velor-gold/30" />
            <span className="text-velor-gold tracking-[0.4em] text-xs">
              THE COLLECTION
            </span>
            <div className="w-16 h-px bg-velor-gold/30" />
          </motion.div>

          <motion.h2
            className="font-display text-4xl md:text-5xl text-mocha tracking-[0.1em]"
            variants={fadeInUp}
          >
            Crafted Excellence
          </motion.h2>

          <motion.p
            className="mt-6 text-text-muted text-lg max-w-xl mx-auto"
            variants={fadeInUp}
          >
            Two expressions of artisanal mastery, each a journey
            through the senses.
          </motion.p>
        </motion.div>
      </div>

      {/* Products */}
      <div>
        {products.map((product, index) => (
          <ProductCard key={product.variant} product={product} index={index} />
        ))}
      </div>
    </section>
  );
}
