"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/Container";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="top" className="relative flex min-h-[85vh] items-end overflow-hidden bg-stone-950 text-white sm:min-h-[92vh]">
      <Image
        src="/images/hero-desktop.webp"
        alt={t("hero.imageAlt")}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-t from-stone-950 via-stone-950/70 to-stone-950/20" />

      <Container className="relative z-10 pb-14 pt-28 sm:pb-16 sm:pt-32">
        <span className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-medium tracking-wide text-white/90 backdrop-blur sm:text-xs">
          <span className="h-px w-5 bg-accent" aria-hidden="true" />
          {t("hero.eyebrow")}
        </span>

        <h1 className="max-w-3xl text-[2.1rem] font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
          {t("hero.title")}
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
          {t("hero.subtitle")}
        </p>

        <div className="mt-9 flex flex-wrap gap-3 sm:gap-4">
          <a
            href="#lead-form"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] hover:bg-accent-dark"
          >
            {t("hero.ctaPrimary")}
          </a>
          <a
            href="#catalog"
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            {t("hero.ctaSecondary")}
          </a>
        </div>
      </Container>
    </section>
  );
}
