import type { GraniteType } from "./types";

const STANDARD_FORMATS = ["200×400", "300×300", "600×300", "600×600", "600×1200", "600×1500"];
const STANDARD_THICKNESS = ["18", "30"];

export const granites: GraniteType[] = [
  {
    slug: "nero",
    price: "146 900 UZS",
    customFormat: true,
    thickness: STANDARD_THICKNESS,
    image: "/images/granit/optimized/granite01.webp",
  },
  {
    slug: "olivkovyy",
    price: "146 900 UZS",
    formats: STANDARD_FORMATS,
    thickness: STANDARD_THICKNESS,
    image: "/images/granit/optimized/granite02.webp",
  },
  {
    slug: "kuksaroy-seryy",
    price: "146 900 UZS",
    formats: STANDARD_FORMATS,
    thickness: STANDARD_THICKNESS,
    image: "/images/granit/optimized/granite03.webp",
  },
  {
    slug: "bezhevyy",
    price: "146 900 UZS",
    formats: STANDARD_FORMATS,
    thickness: STANDARD_THICKNESS,
    image: "/images/granit/optimized/granite04.webp",
  },
  {
    slug: "suvlik",
    price: "146 900 UZS",
    formats: STANDARD_FORMATS,
    thickness: STANDARD_THICKNESS,
    image: "/images/granit/optimized/granite05.webp",
  },
  {
    slug: "kushrabot",
    price: "146 900 UZS",
    customFormat: true,
    thickness: STANDARD_THICKNESS,
    image: "/images/granit/optimized/granite06.webp",
  },
];
