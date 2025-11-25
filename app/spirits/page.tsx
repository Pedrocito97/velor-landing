import { Metadata } from "next";
import { ProductHero } from "@/components/ProductHero";
import { OriginStory } from "@/components/OriginStory";
import { CraftTimeline } from "@/components/CraftTimeline";
import { Footer } from "@/components/Footer";
import { spiritsData } from "@/lib/products/spirits";
import { SpiritsProducts } from "./SpiritsProducts";

export const metadata: Metadata = {
  title: "VELOR Spirits | Premium Liqueurs",
  description: spiritsData.division.description,
};

export default function SpiritsPage() {
  return (
    <main className="bg-ivory">
      <ProductHero
        name={spiritsData.division.name}
        subtitle={spiritsData.division.subtitle}
        tagline={spiritsData.division.tagline}
        description={spiritsData.division.description}
      />

      <SpiritsProducts products={spiritsData.products} />

      <OriginStory
        title={spiritsData.story.title}
        paragraphs={spiritsData.story.paragraphs}
        image="/images/highlands-coffee.jpg"
        imagePosition="right"
      />

      <CraftTimeline
        steps={spiritsData.craftPillars.map((pillar, index) => ({
          step: index + 1,
          title: pillar.title,
          description: pillar.description,
        }))}
        title="The Craft"
        subtitle="OUR PILLARS"
        darkMode={true}
      />

      <Footer />
    </main>
  );
}
