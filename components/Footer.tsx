"use client";

import { useTranslation } from "react-i18next";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/ui/Icons";
import { useLanguage } from "@/lib/i18n/useLanguage";
import { siteConfig } from "@/data/nav";

export default function Footer() {
  const { t } = useTranslation();
  const { language, toggle } = useLanguage();

  return (
    <footer className="bg-stone-900 py-12 text-stone-300 sm:py-16">
      <Container>
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div>
            <div className="inline-flex rounded-xl bg-white px-3 py-2.5">
              <Logo className="h-7 w-auto" />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-400">
              {t("footer.tagline")}
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <a href={siteConfig.phoneHref} className="flex items-center gap-2 text-stone-200 hover:text-white">
              <PhoneIcon className="h-4 w-4 text-accent" />
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-stone-200 hover:text-white">
              <MailIcon className="h-4 w-4 text-accent" />
              {siteConfig.email}
            </a>
            <div className="flex max-w-xs items-start gap-2 text-stone-400">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{t("footer.address")}</span>
            </div>
          </div>

          <div className="flex items-start sm:items-end">
            <button
              type="button"
              onClick={toggle}
              className="rounded-full border border-stone-700 px-4 py-2 text-xs font-semibold text-stone-200 transition-colors hover:border-stone-500"
            >
              {language === "ru" ? "RU / UZ" : "UZ / RU"}
            </button>
          </div>
        </div>

        <div className="mt-10 border-t border-stone-800 pt-6 text-xs text-stone-500">
          {t("footer.copyright")}
        </div>
      </Container>
    </footer>
  );
}
