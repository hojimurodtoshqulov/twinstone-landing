"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { cases } from "@/data/cases";

export default function CasesSection() {
  const { t } = useTranslation();

  return (
    <section id="cases" className="bg-stone-50 py-16 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading eyebrow={t("cases.eyebrow")} title={t("cases.title")} />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 md:grid-cols-3">
          {cases.map((item) => (
            <Link
              key={item.slug}
              href={`/granit/cases/${item.slug}`}
              className="group overflow-hidden rounded-2xl border border-stone-200 bg-white transition-shadow hover:shadow-xl hover:shadow-stone-200"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={item.image}
                  alt={t(`cases.items.${item.slug}.title`)}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 flex flex-wrap items-center gap-2 text-xs font-medium text-stone-500">
                  <span>{t(`cases.items.${item.slug}.city`)}</span>
                  <span aria-hidden="true">•</span>
                  <span>{t(`cases.items.${item.slug}.category`)}</span>
                </div>
                <h3 className="text-base font-semibold text-stone-950">
                  {t(`cases.items.${item.slug}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {t(`cases.items.${item.slug}.description`)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
