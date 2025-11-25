"use client";

import { motion } from "framer-motion";

interface Categories {
  dark: {
    title: string;
    subtitle: string;
    description: string;
    products: string[];
  };
  milk: {
    title: string;
    subtitle: string;
    description: string;
    products: string[];
  };
  infused: {
    title: string;
    subtitle: string;
    description: string;
    variants: { name: string; note: string }[];
  };
}

interface ChocolateCategoriesProps {
  categories: Categories;
}

export function ChocolateCategories({ categories }: ChocolateCategoriesProps) {
  const categoryList = [
    { key: "dark", data: categories.dark, accent: "70-80%" },
    { key: "milk", data: categories.milk, accent: "45-55%" },
    { key: "infused", data: categories.infused, accent: "Unique" },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-mocha overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #F5F2EB 1px, transparent 0)`,
            backgroundSize: "32px 32px",
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
            THREE COLLECTIONS
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-ivory tracking-[0.08em]">
            Curated Categories
          </h2>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categoryList.map((category, index) => (
            <motion.div
              key={category.key}
              className="relative p-8 border border-velor-gold/20 bg-mocha-light/20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Cocoa Accent */}
              <div className="absolute top-4 right-4">
                <span className="text-velor-gold/40 tracking-[0.2em] text-xs">
                  {category.accent}
                </span>
              </div>

              {/* Title */}
              <p className="text-velor-gold tracking-[0.3em] text-xs mb-2">
                {category.data.subtitle}
              </p>
              <h3 className="font-display text-2xl text-ivory tracking-[0.1em] mb-4">
                {category.data.title}
              </h3>

              {/* Description */}
              <p className="text-ivory/60 text-sm leading-relaxed mb-6">
                {category.data.description}
              </p>

              {/* Variants (for infused) or Products */}
              {"variants" in category.data ? (
                <div className="space-y-2">
                  {category.data.variants.map((variant) => (
                    <div
                      key={variant.name}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-ivory/80">{variant.name}</span>
                      <span className="text-ivory/40 text-xs">
                        {variant.note}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex gap-2">
                  {category.data.products.map((product) => (
                    <span
                      key={product}
                      className="text-velor-gold/60 text-xs tracking-[0.1em] uppercase"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              )}

              {/* Corner accent */}
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-velor-gold/30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
