"use client";

import { useTranslation } from "react-i18next";
import Container from "@/components/ui/Container";

interface StatItem {
  number: string;
  text: string;
}

export default function HeroStats() {
  const { t } = useTranslation();
  const items = t("heroStats.items", { returnObjects: true }) as StatItem[];

  return (
    <section className="border-b border-stone-100 bg-white">
      <Container>
        <div className="grid grid-cols-1 divide-y divide-stone-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {items.map((stat) => (
            <div key={stat.number} className="flex items-center gap-4 py-6 sm:flex-col sm:items-start sm:gap-2 sm:px-6 sm:py-8 first:sm:pl-0 last:sm:pr-0">
              <span className="text-2xl font-bold text-accent sm:text-3xl">{stat.number}</span>
              <span className="text-sm font-semibold leading-snug text-stone-900 sm:text-base">
                {stat.text}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
