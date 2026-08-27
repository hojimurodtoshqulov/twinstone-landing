"use client";

import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n, { DEFAULT_LOCALE, STORAGE_KEY } from "./client";
import type { Locale } from "./resources";

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      // localStorage unavailable (private mode, etc.) — fall back to default.
    }

    const initial: Locale = stored === "uz" ? "uz" : DEFAULT_LOCALE;
    if (initial !== i18n.language) {
      i18n.changeLanguage(initial);
    }
    document.documentElement.lang = initial;

    const onChange = (lng: string) => {
      document.documentElement.lang = lng;
    };
    i18n.on("languageChanged", onChange);
    return () => {
      i18n.off("languageChanged", onChange);
    };
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
