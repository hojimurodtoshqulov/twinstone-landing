export interface GraniteType {
  slug: string;
  price: string;
  /** Dimension chips, e.g. "200×400". Omitted when `customFormat` is true. */
  formats?: string[];
  /** True for stone cut to project (no fixed catalog formats). */
  customFormat?: boolean;
  /** Thickness values without unit, e.g. "18". */
  thickness: string[];
  image: string;
}

export interface ProductItem {
  slug: string;
  image: string;
}

export interface ApplicationItem {
  slug: string;
  icon: "storefront" | "stairs" | "road" | "tree" | "monument" | "house";
}

export interface CaseItem {
  slug: string;
  image: string;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface QualityFeature {
  key: "check" | "ruler" | "layers";
  icon: "check" | "ruler" | "layers";
}

export interface NavLink {
  key: "products" | "applications" | "catalog" | "quality" | "projects" | "faq";
  href: string;
}
