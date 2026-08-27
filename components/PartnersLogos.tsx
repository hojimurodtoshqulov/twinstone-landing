"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { partners } from "@/data/partners";

export default function PartnersLogos() {
  const { t } = useTranslation();

  return (
    <section className="border-y border-stone-100 py-14 sm:py-20">
      <Container>
        <SectionHeading align="center" title={t("partners.title")} />

        <div className="mt-10 grid grid-cols-2 items-center gap-6 sm:mt-12 sm:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center grayscale transition-all hover:grayscale-0"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={200}
                height={70}
                className="h-auto w-full max-w-45 object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
