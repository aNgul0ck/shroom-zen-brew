import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import pl from "./locales/pl.json";

// Detect from URL prefix /en first, then localStorage, then navigator
const urlLanguageDetector = {
  name: "urlPath",
  lookup() {
    if (typeof window === "undefined") return undefined;
    return window.location.pathname.startsWith("/en") ? "en" : undefined;
  },
  cacheUserLanguage() {},
};

const detector = new LanguageDetector();
detector.addDetector(urlLanguageDetector);

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pl: { translation: pl },
    },
    fallbackLng: "pl",
    supportedLngs: ["pl", "en"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["urlPath", "localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "shroom_lang",
    },
    returnObjects: true,
  });

export default i18n;
