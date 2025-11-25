import { Hero } from "@/components/Hero";
import { BrandOrigin } from "@/components/BrandOrigin";
import { CocoaStory } from "@/components/CocoaStory";
import { CoffeeStory } from "@/components/CoffeeStory";
import { Farmers } from "@/components/Farmers";
import { SingleOrigin } from "@/components/SingleOrigin";
import { Craftsmanship } from "@/components/Craftsmanship";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Trilogy } from "@/components/Trilogy";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero - Full screen with origin tagline */}
      <Hero />

      {/* Brand Origin Statement - Unifying message */}
      <BrandOrigin />

      {/* Mount Cameroon Cocoa Story */}
      <CocoaStory />

      {/* Highland Coffee Story */}
      <CoffeeStory />

      {/* The Farmers - Guardians of Legacy */}
      <Farmers />

      {/* Single-Origin Promise */}
      <SingleOrigin />

      {/* What Makes Us Special - Cocoa & Coffee pillars */}
      <Craftsmanship />

      {/* The Spirit - Product Showcase */}
      <ProductShowcase />

      {/* The Trilogy - Ember, Terra, Origin */}
      <Trilogy />

      {/* Footer */}
      <Footer />
    </main>
  );
}
