"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { CheckIcon } from "@/components/ui/Icons";
import { siteImages } from "@/data/images";

export default function DeliverySection() {
  const { t } = useTranslation();
  const checklist = t("delivery.checklist", { returnObjects: true }) as string[];

  return (
    <section className="py-16 sm:py-24 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl lg:order-2">
            <Image
              src={siteImages.delivery}
              alt={t("delivery.imageAlt")}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          <div className="lg:order-1">
            <SectionHeading eyebrow={t("delivery.eyebrow")} title={t("delivery.title")} />

            <ul className="mt-8 flex flex-col gap-4">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-stone-800">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-md text-sm leading-relaxed text-stone-600">
              {t("delivery.note")}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
