"use client";

import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { STORAGE_KEY } from "./client";
import type { Locale } from "./resources";

export function useLanguage() {
  const { i18n } = useTranslation();
  const language: Locale = i18n.language === "uz" ? "uz" : "ru";

  const setLanguage = useCallback(
    (next: Locale) => {
      i18n.changeLanguage(next);
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // ignore write failures
      }
    },
    [i18n],
  );

  const toggle = useCallback(() => {
    setLanguage(language === "ru" ? "uz" : "ru");
  }, [language, setLanguage]);

  return { language, setLanguage, toggle };
}
