"use client";

import { motion } from "framer-motion";

interface Product {
  id: string;
  name: string;
  type?: string;
  roast?: string;
  notes?: string;
  tagline: string;
  description?: string;
  cocoa?: string;
}

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
  columns?: 2 | 3 | 5;
}

export function ProductGrid({
  products,
  title,
  subtitle,
  columns = 3,
}: ProductGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    5: "md:grid-cols-5",
  };

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
        {(title || subtitle) && (
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {subtitle && (
              <p className="text-velor-gold tracking-[0.4em] text-xs mb-4">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="font-display text-4xl md:text-5xl text-mocha tracking-[0.08em]">
                {title}
              </h2>
            )}
          </motion.div>
        )}

        {/* Product Grid */}
        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-8`}>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <div className="relative p-8 border border-mocha/10 bg-ivory hover:border-velor-gold/30 transition-all duration-500">
                {/* Product Type Badge */}
                {(product.type || product.roast) && (
                  <div className="absolute top-4 right-4">
                    <span className="text-velor-gold/60 tracking-[0.2em] text-[10px]">
                      {product.type || product.roast}
                    </span>
                  </div>
                )}

                {/* Cocoa Percentage */}
                {product.cocoa && (
                  <div className="mb-4">
                    <span className="font-display text-4xl text-velor-gold/30">
                      {product.cocoa}
                    </span>
                  </div>
                )}

                {/* Product Name */}
                <h3 className="font-display text-2xl md:text-3xl text-mocha tracking-[0.1em] mb-3 group-hover:text-velor-gold transition-colors duration-300">
                  {product.name}
                </h3>

                {/* Notes */}
                {product.notes && (
                  <p className="text-text-muted text-xs tracking-[0.15em] mb-4">
                    {product.notes}
                  </p>
                )}

                {/* Tagline */}
                <p className="text-mocha/80 italic text-sm mb-4">
                  &ldquo;{product.tagline}&rdquo;
                </p>

                {/* Description */}
                {product.description && (
                  <p className="text-text-muted text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {product.description}
                  </p>
                )}

                {/* Corner accent */}
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-velor-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
