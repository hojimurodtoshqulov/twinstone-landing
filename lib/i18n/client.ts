"use client";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { resources, type Locale } from "./resources";

export const DEFAULT_LOCALE: Locale = "ru";
export const STORAGE_KEY = "twinstone-lang";

if (!i18next.isInitialized) {
  i18next.use(initReactI18next).init({
    resources,
    lng: DEFAULT_LOCALE,
    fallbackLng: DEFAULT_LOCALE,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
} else {
  // Hot reload re-runs this module with fresh resources; push them into the existing instance.
  for (const [lng, bundle] of Object.entries(resources)) {
    i18next.addResourceBundle(lng, "translation", bundle.translation, true, true);
  }
}

export default i18next;
