import { Metadata } from "next";
import {
  SpiritsHero,
  CollectionIntro,
  CoffeeExpressionShowcase,
  CocoaExpressionShowcase,
  CraftRitualSection,
  HeritageOrigin,
  DistillationProcess,
  TastingExperience,
  CollectionFooter,
} from "@/components/spirits";
import { Footer } from "@/components/Footer";
import { spiritsData } from "@/lib/products/spirits";

export const metadata: Metadata = {
  title: "VELOR Spirits | Premium African Liqueurs",
  description: "Premium liqueurs crafted from single-origin Cameroonian cocoa and highland arabica coffee. Experience the art of African indulgence.",
};

export default function SpiritsPage() {
  return (
    <main className="bg-ivory">
      {/* 1. Cinematic Hero */}
      <SpiritsHero
        name={spiritsData.division.name}
        subtitle={spiritsData.division.subtitle}
        tagline={spiritsData.division.tagline}
        description={spiritsData.division.heroDescription}
      />

      {/* 2. Collection Introduction */}
      <CollectionIntro products={spiritsData.products} />

      {/* 3. Coffee Expression Showcase */}
      <CoffeeExpressionShowcase product={spiritsData.products.coffee} />

      {/* 4. Cocoa Expression Showcase */}
      <CocoaExpressionShowcase product={spiritsData.products.cocoa} />

      {/* 5. The Ritual */}
      <CraftRitualSection data={spiritsData.ritual} />

      {/* 6. Heritage & Origin */}
      <HeritageOrigin data={spiritsData.heritage} />

      {/* 7. Distillation Process */}
      <DistillationProcess steps={spiritsData.process} />

      {/* 8. Tasting Experience */}
      <TastingExperience products={spiritsData.products} />

      {/* 9. Collection Footer CTA */}
      <CollectionFooter products={spiritsData.products} />

      {/* 10. Footer */}
      <Footer />
    </main>
  );
}
