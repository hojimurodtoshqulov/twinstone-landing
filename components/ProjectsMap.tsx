"use client";

import { useTranslation } from "react-i18next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const regionKeys = [
  { key: "karakalpakstan", x: 40, y: 40, w: 220, h: 180 },
  { key: "khorezm", x: 40, y: 230, w: 120, h: 70 },
  { key: "navoiy", x: 180, y: 150, w: 240, h: 170 },
  { key: "bukhara", x: 170, y: 330, w: 160, h: 90 },
  { key: "kashkadarya", x: 340, y: 350, w: 140, h: 110 },
  { key: "surkhandarya", x: 460, y: 400, w: 100, h: 90 },
  { key: "samarkand", x: 350, y: 250, w: 130, h: 95 },
  { key: "jizzakh", x: 430, y: 190, w: 130, h: 90 },
  { key: "syrdarya", x: 560, y: 210, w: 60, h: 60 },
  { key: "fergana", x: 700, y: 220, w: 80, h: 80 },
  { key: "andijan", x: 770, y: 200, w: 90, h: 80 },
  { key: "namangan", x: 700, y: 130, w: 120, h: 80 },
] as const;

const tashkent = { x: 590, y: 120, w: 110, h: 100 };

export default function ProjectsMap() {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading align="center" title={t("map.title")} />

        <div className="mx-auto mt-12 max-w-4xl overflow-x-auto">
          <svg
            viewBox="0 0 900 520"
            role="img"
            aria-label={t("map.mapAria")}
            className="w-full min-w-[560px]"
          >
            {regionKeys.map((region) => (
              <rect
                key={region.key}
                x={region.x}
                y={region.y}
                width={region.w}
                height={region.h}
                rx={16}
                className="fill-stone-100 stroke-stone-200 transition-colors hover:fill-stone-200"
                strokeWidth={2}
              >
                <title>{t(`map.regions.${region.key}`)}</title>
              </rect>
            ))}

            <a href="#cases" aria-label={t("map.tashkentAria")}>
              <rect
                x={tashkent.x}
                y={tashkent.y}
                width={tashkent.w}
                height={tashkent.h}
                rx={16}
                className="fill-accent stroke-accent-dark transition-opacity hover:opacity-90"
                strokeWidth={2}
              />
              <text
                x={tashkent.x + tashkent.w / 2}
                y={tashkent.y + tashkent.h / 2 - 6}
                textAnchor="middle"
                className="fill-white text-[15px] font-semibold"
              >
                {t("map.tashkentName")}
              </text>
              <text
                x={tashkent.x + tashkent.w / 2}
                y={tashkent.y + tashkent.h / 2 + 16}
                textAnchor="middle"
                className="fill-white/85 text-[12px] font-medium"
              >
                {t("map.tashkentCases")}
              </text>
            </a>
          </svg>
        </div>

        <p className="mt-6 text-center text-sm text-stone-500">{t("map.caption")}</p>
      </Container>
    </section>
  );
}
