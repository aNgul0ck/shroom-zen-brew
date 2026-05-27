import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { toOppositeLang, useCurrentLang } from "@/lib/i18nRoutes";

interface Props {
  variant?: "default" | "light";
}

const LanguageSwitcher = ({ variant = "default" }: Props) => {
  const lang = useCurrentLang();
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  // Keep i18n language in sync with URL
  useEffect(() => {
    if (i18n.language !== lang) i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
  }, [lang, i18n]);

  const switchTo = (target: "pl" | "en") => {
    if (target === lang) return;
    const next =
      target === "en"
        ? toOppositeLang(location.pathname, "pl")
        : toOppositeLang(location.pathname, "en");
    navigate(next + location.search + location.hash);
  };

  const baseBtn =
    "font-display text-xs font-bold px-2.5 py-1 transition-colors";
  const lightInactive = "text-white/60 hover:text-white";
  const lightActive = "text-white";
  const darkInactive = "text-foreground/50 hover:text-foreground";
  const darkActive = "text-foreground underline underline-offset-4";

  const inactive = variant === "light" ? lightInactive : darkInactive;
  const active = variant === "light" ? lightActive : darkActive;

  return (
    <div className="flex items-center gap-0.5" aria-label="Language switcher">
      <button
        type="button"
        onClick={() => switchTo("pl")}
        className={`${baseBtn} ${lang === "pl" ? active : inactive}`}
        aria-pressed={lang === "pl"}
      >
        PL
      </button>
      <span className={variant === "light" ? "text-white/30" : "text-foreground/30"}>/</span>
      <button
        type="button"
        onClick={() => switchTo("en")}
        className={`${baseBtn} ${lang === "en" ? active : inactive}`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
