import type { ProductItem } from "./types";

export const products: ProductItem[] = [
  { slug: "granitnye-plity", image: "/images/granit/optimized/artboard-3.webp" },
  { slug: "granitnaya-bruschatka", image: "/images/granit/optimized/dsc5626.webp" },
  {
    slug: "granitnye-stupeni",
    image: "/images/granit/optimized/for-showcase.webp",
    position: "50% 80%",
  },
  { slug: "kolotyy-granit", image: "/images/granit/optimized/for.webp", position: "50% 43%" },
];

/** Extra granite items made to order, shown as a compact list below the main product cards. */
export const additionalProducts = [
  "bordyur",
  "podokonniki",
  "stoleshnitsy",
  "plintusy",
  "parapety",
  "maf",
  "pamyatniki",
] as const;

/** Surface finishes available for granite products. */
export const surfaceFinishes = [
  "polirovannaya",
  "termo",
  "pilenaya",
  "buchardirovannaya",
  "kolotaya",
  "loschenaya",
] as const;
