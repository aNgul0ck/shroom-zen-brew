import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

// Bidirectional slug mapping PL ↔ EN.
// Translated slugs improve EN SEO.
export const slugMap: Record<string, { pl: string; en: string }> = {
  home: { pl: "", en: "" },
  brief: { pl: "brief", en: "brief" },
  research: { pl: "badania", en: "research" },
  blog: { pl: "blog", en: "blog" },
  productBase: { pl: "produkt", en: "product" },
  quiz: { pl: "quiz", en: "quiz" },
  cart: { pl: "koszyk", en: "cart" },
  about: { pl: "o-shroomie", en: "about" },
  history: { pl: "nasza-historia", en: "about" },
  b2b: { pl: "b2b", en: "b2b" },
};

export function useLocalizedPath() {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("en") ? "en" : "pl";

  return (path: string) => {
    if (lang === "pl") return path;
    // Map known PL slugs to EN, e.g. /produkt/x → /en/product/x
    let mapped = path;
    for (const k of Object.values(slugMap)) {
      if (!k.pl) continue;
      const re = new RegExp(`^/${k.pl}(/|$)`);
      if (re.test(mapped)) {
        mapped = mapped.replace(re, `/${k.en}$1`);
        break;
      }
    }
    return `/en${mapped === "/" ? "" : mapped}`;
  };
}

// Strip /en prefix and translate slug back to PL equivalent for switcher
export function toOppositeLang(pathname: string, currentLang: "pl" | "en"): string {
  if (currentLang === "en") {
    // Remove /en prefix and translate EN slug → PL
    const stripped = pathname.replace(/^\/en/, "") || "/";
    let mapped = stripped;
    for (const k of Object.values(slugMap)) {
      if (!k.en || k.en === k.pl) continue;
      const re = new RegExp(`^/${k.en}(/|$)`);
      if (re.test(mapped)) {
        mapped = mapped.replace(re, `/${k.pl}$1`);
        break;
      }
    }
    return mapped;
  }
  // PL → EN
  let mapped = pathname;
  for (const k of Object.values(slugMap)) {
    if (!k.pl || k.en === k.pl) continue;
    const re = new RegExp(`^/${k.pl}(/|$)`);
    if (re.test(mapped)) {
      mapped = mapped.replace(re, `/${k.en}$1`);
      break;
    }
  }
  return `/en${mapped === "/" ? "" : mapped}`;
}

export function useCurrentLang(): "pl" | "en" {
  const location = useLocation();
  return location.pathname.startsWith("/en") ? "en" : "pl";
}
