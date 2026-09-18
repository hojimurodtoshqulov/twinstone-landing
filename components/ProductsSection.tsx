"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Chip from "@/components/ui/Chip";
import { additionalProducts, pavingShapes, products } from "@/data/products";

export default function ProductsSection() {
  const { t } = useTranslation();

  return (
    <section id="products" className="py-16 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow={t("products.eyebrow")}
          title={t("products.title")}
          description={t("products.description")}
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.slug}
              className="group overflow-hidden rounded-2xl border border-stone-200 bg-white transition-shadow hover:shadow-xl hover:shadow-stone-200"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={product.image}
                  alt={t(`products.items.${product.slug}.title`)}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-stone-950">
                  {t(`products.items.${product.slug}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {t(`products.items.${product.slug}.description`)}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 sm:mt-12 sm:flex-row sm:gap-10">
          <div>
            <h3 className="text-sm font-semibold text-stone-950">{t("products.additionalTitle")}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {additionalProducts.map((slug) => (
                <Chip key={slug}>{t(`products.additional.${slug}`)}</Chip>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-stone-950">{t("products.shapesTitle")}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {pavingShapes.map((slug) => (
                <Chip key={slug}>{t(`products.shapes.${slug}`)}</Chip>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
