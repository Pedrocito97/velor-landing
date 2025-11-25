import { Metadata } from "next";
import { ProductHero } from "@/components/ProductHero";
import { OriginStory } from "@/components/OriginStory";
import { CraftTimeline } from "@/components/CraftTimeline";
import { Footer } from "@/components/Footer";
import { coffeeData } from "@/lib/products/coffee";
import { CoffeeFormats } from "./CoffeeFormats";
import { CoffeeCollection } from "./CoffeeCollection";

export const metadata: Metadata = {
  title: "VELOR CAF | Premium Coffee",
  description: coffeeData.division.description,
};

export default function CoffeePage() {
  return (
    <main className="bg-ivory">
      <ProductHero
        name={coffeeData.division.name}
        subtitle={coffeeData.division.subtitle}
        tagline={coffeeData.division.tagline}
        description={coffeeData.division.description}
      />

      <CoffeeCollection image={coffeeData.division.collectionImage} />

      <CoffeeFormats formats={coffeeData.formats} />

      <OriginStory
        title={coffeeData.story.title}
        paragraphs={coffeeData.story.paragraphs}
        stats={coffeeData.story.stats}
        image="/images/highlands-coffee.jpg"
        imagePosition="left"
      />

      <CraftTimeline
        steps={coffeeData.craftProcess}
        title="From Cherry to Cup"
        subtitle="THE PROCESS"
        darkMode={true}
      />

      <Footer />
    </main>
  );
}
