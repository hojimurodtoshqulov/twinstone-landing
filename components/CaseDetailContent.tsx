"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterCta from "@/components/FooterCta";
import Container from "@/components/ui/Container";
import type { CaseItem } from "@/data/types";

export default function CaseDetailContent({ item }: { item: CaseItem }) {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main>
        <section className="py-12 sm:py-20">
          <Container className="max-w-4xl">
            <Link href="/#cases" className="text-sm font-medium text-accent hover:underline">
              {t("cases.backLink")}
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-medium text-stone-500">
              <span>{t(`cases.items.${item.slug}.city`)}</span>
              <span aria-hidden="true">•</span>
              <span>{t(`cases.items.${item.slug}.category`)}</span>
            </div>

            <h1 className="mt-3 text-2xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
              {t(`cases.items.${item.slug}.title`)}
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600">
              {t(`cases.items.${item.slug}.description`)}
            </p>

            <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl">
              <Image
                src={item.image}
                alt={t(`cases.items.${item.slug}.title`)}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 900px, 100vw"
              />
            </div>
          </Container>
        </section>
      </main>
      <FooterCta />
      <Footer />
    </>
  );
}
