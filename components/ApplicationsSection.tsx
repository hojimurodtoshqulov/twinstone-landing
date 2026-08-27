"use client";

import { useTranslation } from "react-i18next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  HouseIcon,
  MonumentIcon,
  RoadIcon,
  StairsIcon,
  StorefrontIcon,
  TreeIcon,
} from "@/components/ui/Icons";
import { applications } from "@/data/applications";

const icons = {
  storefront: StorefrontIcon,
  stairs: StairsIcon,
  road: RoadIcon,
  tree: TreeIcon,
  monument: MonumentIcon,
  house: HouseIcon,
};

export default function ApplicationsSection() {
  const { t } = useTranslation();

  return (
    <section id="applications" className="bg-stone-50 py-16 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading align="center" title={t("applications.title")} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">
          {applications.map((item) => {
            const Icon = icons[item.icon];
            return (
              <div
                key={item.slug}
                className="flex flex-col items-center gap-4 rounded-2xl border border-stone-200 bg-white px-4 py-7 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <Icon className="h-9 w-9 text-accent sm:h-10 sm:w-10" />
                <h3 className="text-sm font-bold leading-snug text-stone-950">
                  {t(`applications.items.${item.slug}`)}
                </h3>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
