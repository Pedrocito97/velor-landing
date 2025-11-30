export const spiritsData = {
  division: {
    name: "VELOR",
    subtitle: "SPIRITS",
    tagline: "The Art of Indulgence",
    description: "Premium liqueurs crafted from single-origin Cameroonian cocoa and highland arabica coffee. Each bottle captures generations of craft and the soul of African terroir.",
    heroDescription: "Where centuries of Cameroonian craft meet the art of fine spirits. Two expressions. One legacy.",
  },

  products: {
    coffee: {
      id: "coffee-liqueur",
      name: "VELOR",
      variant: "COFFEE",
      fullName: "VELOR COFFEE EXPRESSION",
      origin: "Highland Arabica",
      originBadge: "HIGHLAND ARABICA",
      originDetail: "Cameroonian Highlands | 1,500m+",
      abv: "25% ALC. VOL",
      size: "700ml",
      tastingNotes: {
        primary: "Bright acidity, clean sweetness",
        secondary: "Mountain-born complexity",
        finish: "Lingering highland character",
      },
      description: [
        "Hand-picked cherries from the cool mountain air and mist of the Cameroonian Highlands.",
        "Washed in clear mountain water, sun-dried to perfection.",
        "Infused slowly to capture every nuance of highland arabica.",
      ],
      servingSuggestions: [
        { method: "Neat", detail: "Slightly chilled at 12-14°C" },
        { method: "On Ice", detail: "Over a single ice sphere" },
        { method: "Paired", detail: "With dark chocolate" },
      ],
      image: "/images/velor-bottles.jpg",
    },
    cocoa: {
      id: "cocoa-liqueur",
      name: "VELOR",
      variant: "COCOA",
      fullName: "VELOR COCOA EXPRESSION",
      origin: "Single-Origin Cocoa",
      originBadge: "SINGLE-ORIGIN COCOA",
      originDetail: "Cameroon | Mineral-Rich Volcanic Terroir",
      abv: "25% ALC. VOL",
      size: "700ml",
      tastingNotes: {
        primary: "Deep volcanic richness, dark chocolate",
        secondary: "Warm earthy undertones",
        finish: "Lingering mineral finish",
      },
      description: [
        "Cocoa grown in mineral-rich soil on the volcanic slopes of Mount Cameroon.",
        "Slow fermentation in wooden boxes, zero dilution.",
        "The terroir speaks through every sip.",
      ],
      servingSuggestions: [
        { method: "Neat", detail: "At room temperature, 16-18°C" },
        { method: "Cocktail", detail: "In an espresso martini" },
        { method: "Paired", detail: "With aged cheese" },
      ],
      image: "/images/velor-bottles-2.jpg",
    },
  },

  // Legacy array format for backwards compatibility
  productsArray: [
    {
      id: "coffee-liqueur",
      name: "VELOR",
      variant: "COFFEE",
      origin: "Highland Arabica",
      originDetail: "Cameroonian Highlands • 1,500m+",
      abv: "25% ALC. VOL",
      size: "700ml",
      tastingNotes: "Bright acidity, clean sweetness, mountain-born complexity",
      description: "Hand-picked cherries, washed in clear mountain water, sun-dried to perfection. Infused slowly to capture every nuance of highland arabica.",
      image: "/images/velor-bottles.jpg",
    },
    {
      id: "cocoa-liqueur",
      name: "VELOR",
      variant: "COCOA",
      origin: "Single-Origin Cocoa",
      originDetail: "Cameroon • Mineral-Rich Terroir",
      abv: "25% ALC. VOL",
      size: "700ml",
      tastingNotes: "Deep volcanic richness, dark chocolate, warm earthy finish",
      description: "Cocoa grown in mineral-rich soil, slow fermentation in wooden boxes, zero dilution. The terroir speaks through every sip.",
      image: "/images/velor-bottles-2.jpg",
    },
  ],

  ritual: {
    title: "THE RITUAL",
    subtitle: "A Ceremonial Experience",
    steps: [
      {
        id: 1,
        name: "THE UNSEALING",
        description: "Each bottle sealed with care. Breaking the seal begins your journey.",
        icon: "seal",
      },
      {
        id: 2,
        name: "THE POUR",
        description: "Slow, deliberate. Watch the liquid catch the light.",
        icon: "pour",
      },
      {
        id: 3,
        name: "THE MOMENT",
        description: "First on the nose. Then the palate. Layers reveal themselves.",
        icon: "taste",
      },
    ],
    quote: "This is not consumption. This is ceremony.",
  },

  heritage: {
    title: "From Soil to Spirit",
    subtitle: "OUR HERITAGE",
    stats: [
      { value: "3", label: "GENERATIONS" },
      { value: "1,500m+", label: "ALTITUDE" },
      { value: "0%", label: "DILUTION" },
    ],
    paragraphs: [
      "Every bottle of VELOR begins in the highlands of Cameroon, where generational farmers cultivate cocoa and coffee with methods passed down through centuries.",
      "We don't rush. We don't dilute. We capture the essence of terroir — the mineral richness of the soil, the patience of sun-drying, the depth of slow fermentation.",
      "This is not mass production. This is craft elevated to art.",
    ],
    quote: "The farmer's hands make the difference.",
  },

  process: [
    {
      step: 1,
      title: "HARVEST",
      description: "Hand-picked at peak ripeness by generational farmers",
    },
    {
      step: 2,
      title: "FERMENT",
      description: "Slow fermentation in wooden boxes, sun-dried under open skies",
    },
    {
      step: 3,
      title: "INFUSE",
      description: "Patient extraction, no shortcuts, pure expression",
    },
    {
      step: 4,
      title: "BOTTLE",
      description: "Small batch, numbered editions, sealed with care",
    },
  ],

  story: {
    title: "From Soil to Spirit",
    paragraphs: [
      "Every bottle of VELOR begins in the highlands of Cameroon, where generational farmers cultivate cocoa and coffee with methods passed down through centuries.",
      "We don't rush. We don't dilute. We capture the essence of terroir — the mineral richness of the soil, the patience of sun-drying, the depth of slow fermentation.",
      "This is not mass production. This is craft elevated to art.",
    ],
  },

  craftPillars: [
    { title: "Single Origin", description: "One source, unmistakable character" },
    { title: "Small Batch", description: "Crafted, never manufactured" },
    { title: "Zero Dilution", description: "Pure expression of terroir" },
    { title: "Slow Infusion", description: "Time reveals complexity" },
  ],
};

// Type exports for TypeScript
export type SpiritProduct = typeof spiritsData.products.coffee;
export type RitualStep = typeof spiritsData.ritual.steps[0];
export type ProcessStep = typeof spiritsData.process[0];
export type HeritageStat = typeof spiritsData.heritage.stats[0];
