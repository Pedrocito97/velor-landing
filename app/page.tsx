import { Hero } from "@/components/Hero";
import { BrandStory } from "@/components/BrandStory";
import { Divisions } from "@/components/Divisions";
import { Heritage } from "@/components/Heritage";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero - Full screen brand introduction */}
      <Hero />

      {/* Brand Story - Where Craft Becomes Legacy */}
      <BrandStory />

      {/* Three Divisions - Spirits, Coffee, Chocolate */}
      <Divisions />

      {/* Heritage - Guardians of a Legacy */}
      <Heritage />

      {/* Footer */}
      <Footer />
    </main>
  );
}
