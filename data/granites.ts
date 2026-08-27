import type { GraniteType } from "./types";

const STANDARD_FORMATS = ["200×400", "300×300", "600×300", "600×600", "600×1200", "600×1500"];
const STANDARD_THICKNESS = ["18", "30"];

export const granites: GraniteType[] = [
  {
    slug: "kuksaroy-rozovyy",
    price: "146 900 UZS",
    formats: STANDARD_FORMATS,
    thickness: STANDARD_THICKNESS,
    image: "/images/granite-kuksaroy-pink.webp",
  },
  {
    slug: "kuksaroy-seryy",
    price: "146 900 UZS",
    formats: STANDARD_FORMATS,
    thickness: STANDARD_THICKNESS,
    image: "/images/granite-kuksaroy-gray.webp",
  },
  {
    slug: "avrora",
    price: "146 900 UZS",
    formats: STANDARD_FORMATS,
    thickness: STANDARD_THICKNESS,
    image: "/images/granite-aurora.webp",
  },
  {
    slug: "nero",
    price: "146 900 UZS",
    customFormat: true,
    thickness: STANDARD_THICKNESS,
    image: "/images/granite-nero.webp",
  },
  {
    slug: "suvlik",
    price: "146 900 UZS",
    formats: STANDARD_FORMATS,
    thickness: STANDARD_THICKNESS,
    image: "/images/granite-suvlik.webp",
  },
  {
    slug: "kushrabot",
    price: "146 900 UZS",
    customFormat: true,
    thickness: STANDARD_THICKNESS,
    image: "/images/granite-kushrabot.webp",
  },
];
