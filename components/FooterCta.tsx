"use client";

import { useTranslation } from "react-i18next";
import Container from "@/components/ui/Container";

export default function FooterCta() {
  const { t } = useTranslation();

  return (
    <section className="bg-stone-950 py-14 text-white sm:py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-xl font-semibold tracking-tight sm:text-3xl">
          {t("footerCta.title")}
        </h2>
        <a
          href="#lead-form"
          className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 text-sm font-semibold text-white transition-transform hover:scale-[1.03] hover:bg-accent-dark"
        >
          {t("footerCta.button")}
        </a>
      </Container>
    </section>
  );
}
