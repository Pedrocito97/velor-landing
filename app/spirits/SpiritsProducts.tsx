"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  variant: string;
  origin: string;
  originDetail: string;
  abv: string;
  size: string;
  tastingNotes: string;
  description: string;
  image: string;
}

interface SpiritsProductsProps {
  products: Product[];
}

export function SpiritsProducts({ products }: SpiritsProductsProps) {
  return (
    <section className="relative py-24 md:py-32 bg-ivory overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #C5A572 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

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
            THE COLLECTION
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-mocha tracking-[0.08em]">
            Two Expressions
          </h2>
        </motion.div>

        {/* Products */}
        <div className="space-y-24">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-square overflow-hidden bg-mocha/5">
                  <Image
                    src={product.image}
                    alt={`${product.name} ${product.variant}`}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Corner accents */}
                <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-velor-gold/30" />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-velor-gold/30" />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                {/* Origin badge */}
                <div className="inline-block mb-6">
                  <span className="text-velor-gold tracking-[0.3em] text-xs border border-velor-gold/30 px-4 py-2">
                    {product.origin}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-display text-4xl md:text-5xl text-mocha tracking-[0.1em] mb-2">
                  {product.name}
                </h3>
                <p className="font-display text-2xl text-velor-gold tracking-[0.15em] mb-6">
                  {product.variant}
                </p>

                {/* Details */}
                <div className="flex gap-8 mb-6 text-text-muted text-sm">
                  <span>{product.abv}</span>
                  <span>{product.size}</span>
                </div>

                {/* Origin Detail */}
                <p className="text-text-muted text-sm tracking-[0.1em] mb-6">
                  {product.originDetail}
                </p>

                {/* Tasting Notes */}
                <div className="mb-6">
                  <p className="text-velor-gold tracking-[0.2em] text-xs mb-2">
                    TASTING NOTES
                  </p>
                  <p className="text-mocha/80 italic">{product.tastingNotes}</p>
                </div>

                {/* Description */}
                <p className="text-text-muted leading-relaxed">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
