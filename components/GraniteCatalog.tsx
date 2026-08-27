"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Chip from "@/components/ui/Chip";
import { granites } from "@/data/granites";

export default function GraniteCatalog() {
  const { t } = useTranslation();

  return (
    <section id="catalog" className="py-16 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow={t("catalog.eyebrow")}
          title={t("catalog.title")}
          description={t("catalog.description")}
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {granites.map((granite) => {
            const name = t(`catalog.items.${granite.slug}.name`);
            return (
              <article
                key={granite.slug}
                className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition-shadow hover:shadow-xl hover:shadow-stone-200"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={granite.image}
                    alt={t("catalog.sampleAlt", { name })}
                    fill
                    className="object-cover brightness-[1.9]"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-lg font-semibold text-stone-950">{name}</h3>
                  <p className="mt-1 text-sm text-stone-600">
                    {t(`catalog.items.${granite.slug}.description`)}
                  </p>

                  <div className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span className="text-xl font-semibold text-stone-950">
                      {t("catalog.priceFrom", { price: granite.price })}
                    </span>
                    <span className="text-xs text-stone-500">{t("catalog.priceCaption")}</span>
                  </div>

                  <p className="mt-3 text-sm font-medium text-accent">{t("catalog.treatment")}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {granite.customFormat ? (
                      <Chip>{t("catalog.customFormat")}</Chip>
                    ) : (
                      granite.formats?.map((format) => (
                        <Chip key={format}>
                          {format} {t("catalog.unit")}
                        </Chip>
                      ))
                    )}
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {granite.thickness.map((thickness) => (
                      <Chip key={thickness}>
                        {thickness} {t("catalog.unit")}
                      </Chip>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
