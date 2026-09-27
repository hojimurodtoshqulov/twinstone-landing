"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/Container";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { siteImages } from "@/data/images";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="top" className="relative overflow-hidden bg-stone-950 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.14) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 top-10 h-[28rem] w-[28rem] rounded-full bg-accent/25 blur-[120px] sm:h-[36rem] sm:w-[36rem]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-stone-500/10 blur-[100px]"
        aria-hidden="true"
      />

      <Container className="relative z-10 py-20 sm:py-24 lg:py-0">
        <div className="grid items-center gap-14 lg:min-h-[92vh] lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-28">
          <div>
            <span className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-medium tracking-wide text-white/80 sm:text-xs">
              <span className="h-px w-5 bg-accent" aria-hidden="true" />
              {t("hero.eyebrow")}
            </span>

            <h1 className="max-w-xl text-[2.1rem] font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              {t("hero.title")}
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg">
              {t("hero.subtitle")}
            </p>

            <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#lead-form"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
              >
                {t("hero.ctaPrimary")}
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#catalog"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {t("hero.ctaSecondary")}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-4/3 overflow-hidden rounded-[1.75rem] shadow-2xl shadow-black/50 ring-1 ring-white/10 sm:aspect-16/11 lg:aspect-auto lg:h-[560px] xl:h-[600px]">
              <Image
                src={siteImages.hero}
                alt={t("hero.imageAlt")}
                fill
                priority
                className="object-cover"
                style={{ objectPosition: "50% 62%" }}
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
