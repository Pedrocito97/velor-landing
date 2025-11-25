import { Hero } from "@/components/Hero";
import { BrandStatement } from "@/components/BrandStatement";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Trilogy } from "@/components/Trilogy";
import { Craftsmanship } from "@/components/Craftsmanship";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero - Full screen brand introduction */}
      <Hero />

      {/* Brand Statement - Core philosophy */}
      <BrandStatement />

      {/* Product Showcase - Coffee & Cocoa */}
      <ProductShowcase />

      {/* Trilogy - Ember, Terra, Origin */}
      <Trilogy />

      {/* Craftsmanship - Story & values */}
      <Craftsmanship />

      {/* Footer */}
      <Footer />
    </main>
  );
}
