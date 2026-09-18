"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { navLinks, siteConfig } from "@/data/nav";
import { useLanguage } from "@/lib/i18n/useLanguage";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/components/ui/Icons";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";

export default function Header() {
  const { t } = useTranslation();
  const { language, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full pt-3 sm:pt-4">
      <Container>
        <div
          className={`flex h-14 items-center justify-between gap-4 rounded-2xl border px-3 backdrop-blur-xl transition-all duration-300 sm:h-16 sm:px-4 ${
            scrolled
              ? "border-stone-200 bg-white/85 shadow-lg shadow-stone-900/5"
              : "border-stone-200/60 bg-white/60 shadow-sm shadow-stone-900/2"
          }`}
        >
          <Link href="#top" className="shrink-0 pl-1">
            <Logo priority className="h-7 w-auto sm:h-8" />
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex xl:gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative rounded-full px-3.5 py-2 text-sm font-medium text-stone-600 transition-colors hover:text-stone-950"
              >
                {t(`nav.${link.key}`)}
                <span className="pointer-events-none absolute inset-x-3.5 -bottom-px h-px origin-center scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={toggle}
              className="hidden rounded-full border border-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-700 transition-colors hover:border-stone-400 hover:text-stone-950 sm:inline-flex"
              aria-label={t("header.langToggleAria")}
            >
              {language === "ru" ? "RU / UZ" : "UZ / RU"}
            </button>

            <a
              href={siteConfig.phoneHref}
              className="hidden items-center gap-2 rounded-full py-1.5 pl-1.5 pr-3 text-sm font-semibold text-stone-950 transition-colors hover:bg-stone-100 md:inline-flex"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/10 text-accent">
                <PhoneIcon className="h-3.5 w-3.5" />
              </span>
              {siteConfig.phone}
            </a>

            <a
              href="#lead-form"
              className="hidden items-center justify-center rounded-full bg-stone-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent sm:inline-flex"
            >
              {t("header.cta")}
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-full border border-stone-200 p-2 text-stone-800 lg:hidden"
              aria-label={t("header.openMenuAria")}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-60 bg-stone-950/40 transition-opacity lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`fixed inset-y-0 right-0 z-70 flex w-[85%] max-w-sm flex-col overflow-y-auto rounded-l-3xl bg-white p-6 shadow-2xl transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="mb-8 flex items-center justify-between">
          <Logo className="h-7 w-auto" />
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="rounded-full border border-stone-200 p-2 text-stone-700"
            aria-label={t("header.closeMenuAria")}
          >
            <CloseIcon />
          </button>
        </div>

        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3.5 py-3 text-base font-medium text-stone-800 transition-colors hover:bg-stone-50 hover:text-accent"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-4 border-t border-stone-100 pt-6">
          <button
            type="button"
            onClick={toggle}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-700"
          >
            {language === "ru" ? "RU / UZ" : "UZ / RU"}
          </button>
          <a href={siteConfig.phoneHref} className="inline-flex items-center gap-2 text-base font-semibold text-stone-950">
            <PhoneIcon className="h-4 w-4 text-accent" />
            {siteConfig.phone}
          </a>
          <a
            href="#lead-form"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-3 text-sm font-semibold text-white"
          >
            {t("header.cta")}
          </a>
        </div>
      </div>
    </header>
  );
}
