import type { ProductItem } from "./types";

export const products: ProductItem[] = [
  { slug: "kamennyy-kovyor", image: "/images/products/stone-carpet.webp" },
  { slug: "naturalnyy-granit", image: "/images/products/natural-granite.webp" },
  { slug: "bruschatka-kvadrat", image: "/images/products/paving-square.webp" },
  { slug: "travertin", image: "/images/products/travertine.webp" },
];

/** Extra items from the Twinstone catalog shown as a compact list below the main product cards. */
export const additionalProducts = ["bordyur", "taktilnaya-plitka", "lotok"] as const;

/** Paving ("bruschatka") shape variations available in the catalog. */
export const pavingShapes = [
  "kvadrat",
  "malyy-kvadrat",
  "pryamougolnik",
  "bruschatka-klassika",
  "staryy-gorod",
  "megapolis",
  "lepestok",
  "rombus",
  "origami",
] as const;
