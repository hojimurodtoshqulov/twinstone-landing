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
    <header
      className={`sticky top-0 z-50 w-full border-b bg-stone-50/95 backdrop-blur transition-shadow ${
        scrolled ? "border-stone-200 shadow-sm" : "border-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-20">
        <Link href="#top" className="shrink-0">
          <Logo priority className="h-8 w-auto sm:h-9" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-950"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggle}
            className="hidden rounded-full border border-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-700 transition-colors hover:border-stone-400 sm:inline-flex"
            aria-label={t("header.langToggleAria")}
          >
            {language === "ru" ? "RU / UZ" : "UZ / RU"}
          </button>

          <a
            href={siteConfig.phoneHref}
            className="hidden items-center gap-1.5 text-sm font-semibold text-stone-950 md:inline-flex"
          >
            <PhoneIcon className="h-4 w-4 text-accent" />
            {siteConfig.phone}
          </a>

          <a
            href="#lead-form"
            className="hidden rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark sm:inline-flex"
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
        className={`fixed inset-y-0 right-0 z-70 flex w-[85%] max-w-sm flex-col overflow-y-auto bg-white p-6 shadow-xl transition-transform duration-300 lg:hidden ${
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
              className="rounded-lg px-3 py-3 text-base font-medium text-stone-800 hover:bg-stone-50"
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
