"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { CheckIcon, LayersIcon, RulerIcon } from "@/components/ui/Icons";
import { qualityFeatures } from "@/data/quality";
import { siteImages } from "@/data/images";

const icons = {
  check: CheckIcon,
  ruler: RulerIcon,
  layers: LayersIcon,
};

export default function QualitySection() {
  const { t } = useTranslation();

  return (
    <section id="quality" className="bg-stone-950 py-16 text-white sm:py-24 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow={t("quality.eyebrow")} title={t("quality.title")} onDark />

            <div className="mt-8 flex flex-col gap-6 sm:mt-10">
              {qualityFeatures.map((feature) => {
                const Icon = icons[feature.icon];
                return (
                  <div key={feature.key} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {t(`quality.features.${feature.key}.title`)}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/65">
                        {t(`quality.features.${feature.key}.description`)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src={siteImages.quality}
              style={{ objectPosition: siteImages.qualityPosition }}
              alt={t("quality.imageAlt")}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
