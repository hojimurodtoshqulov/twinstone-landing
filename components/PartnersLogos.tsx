"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/Container";
import { partners } from "@/data/partners";

export default function PartnersLogos() {
  const { t } = useTranslation();

  return (
    <section className="bg-stone-950 py-16 sm:py-24">
      <Container>
        <h2 className="max-w-xl text-3xl font-bold uppercase tracking-tight text-white sm:text-5xl">
          {t("partners.title")}
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-x-10 gap-y-12 sm:mt-16 sm:grid-cols-3 sm:gap-x-12 lg:grid-cols-5 lg:gap-x-14">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-start opacity-60 grayscale brightness-200 transition-opacity duration-300 hover:opacity-100"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={200}
                height={70}
                className="h-auto w-full max-w-44 object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
