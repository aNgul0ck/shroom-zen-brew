import productGlass from "@/assets/product-glass.png";
import productBrainbliss from "@/assets/product-brainbliss.png";
import productMatcha from "@/assets/product-matcha.png";

export interface Accessory {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  price: number;
  badge?: string;
  pairsCopy: string; // short reason to add for the current product
}

export const accessories: Record<string, Accessory> = {
  glass: {
    slug: "shroom-glass",
    name: "Shroom Glass",
    tagline: "Szklanka grzybek",
    description: "Autorska szklanka 260 ml w kształcie kapelusza soplówki. Każdy łyk staje się rytuałem.",
    image: productGlass,
    price: 59,
    badge: "Limitowana edycja",
    pairsCopy: "Aperitivo zasługuje na własny kieliszek.",
  },
  brainbliss: {
    slug: "brainbliss",
    name: "BrainBliss",
    tagline: "Lion's Mane w kapsułkach",
    description: "500 mg ekstraktu z soplówki jeżowatej. 30 porcji codziennego rytuału, gdy nie sięgasz po butelkę.",
    image: productBrainbliss,
    price: 89,
    badge: "Codzienna dawka",
    pairsCopy: "Twój rytuał Lion's Mane, gdy nie pijesz Shrooma.",
  },
  matcha: {
    slug: "shroom-matcha",
    name: "Shroom × BROS Matcha",
    tagline: "Matcha Latte z Lion's Mane",
    description: "Ceremonialna matcha z soplówką jeżowatą. Codzienny poranny rytuał w 60 sekund.",
    image: productMatcha,
    price: 99,
    badge: "Collab BROS",
    pairsCopy: "Poranny rytuał na zimne dni.",
  },
};

/**
 * Curated upsell strategy per product:
 *  - Beverages (Power, Relax) → BrainBliss (featured), then Glass + Matcha as secondary
 *  - Diva → Glass (featured, ritual elevation), then BrainBliss as secondary
 */
export const upsellMap: Record<string, { featured: Accessory; secondary: Accessory[] }> = {
  "shroom-power": {
    featured: accessories.brainbliss,
    secondary: [accessories.glass, accessories.matcha],
  },
  "shroom-relax": {
    featured: accessories.brainbliss,
    secondary: [accessories.glass, accessories.matcha],
  },
  diva: {
    featured: accessories.glass,
    secondary: [accessories.brainbliss, accessories.matcha],
  },
};
