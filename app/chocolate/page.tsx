import { Metadata } from "next";
import { ProductHero } from "@/components/ProductHero";
import { OriginStory } from "@/components/OriginStory";
import { CraftTimeline } from "@/components/CraftTimeline";
import { Footer } from "@/components/Footer";
import { chocolateData } from "@/lib/products/chocolate";
import { ChocolateCategories } from "./ChocolateCategories";
import { ChocolateCollection } from "./ChocolateCollection";
import { ChocolateShowcase } from "./ChocolateShowcase";

export const metadata: Metadata = {
  title: "VELOR TERRA | Premium Chocolate",
  description: chocolateData.division.description,
};

export default function ChocolatePage() {
  return (
    <main className="bg-ivory">
      <ProductHero
        name={chocolateData.division.name}
        subtitle={chocolateData.division.subtitle}
        tagline={chocolateData.division.tagline}
        description={chocolateData.division.description}
      />

      <ChocolateCollection image={chocolateData.division.collectionImage} />

      <ChocolateShowcase
        detailImage={chocolateData.division.detailImage}
        featureImage={chocolateData.division.featureImage}
      />

      <ChocolateCategories categories={chocolateData.categories} />

      <OriginStory
        title={chocolateData.story.title}
        highlight={chocolateData.story.highlight}
        paragraphs={chocolateData.story.paragraphs}
        image="/images/mount-cameroon.jpg"
        imagePosition="right"
      />

      <CraftTimeline
        steps={chocolateData.craftProcess}
        title="Bean to Bar"
        subtitle="THE CRAFT"
        darkMode={true}
      />

      <Footer />
    </main>
  );
}
