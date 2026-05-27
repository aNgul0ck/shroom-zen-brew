import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AboutHero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-shroom-peach pt-28 md:pt-32">
      <div className="container mx-auto px-6 lg:px-12 py-20 md:py-32">
        <div className="max-w-4xl">
          <p className="font-body text-xs font-medium text-foreground/60 uppercase tracking-[0.25em] mb-6">
            {t("about.hero.kicker")}
          </p>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] mb-8">
            {t("about.hero.headlineLine1")}{" "}
            <span className="text-foreground/40">{t("about.hero.headlineLine2")}</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl mb-10">
            {t("about.hero.subheadline")}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/produkt/shroom-power"
              className="group inline-flex items-center gap-2 bg-foreground text-background px-7 py-4 font-display font-bold text-base hover:gap-4 transition-all duration-300"
            >
              {t("about.hero.ctaPrimary")}
              <ArrowRight className="w-5 h-5 transition-transform" />
            </Link>
            <a
              href="#zespol"
              className="inline-flex items-center bg-background text-foreground border-2 border-foreground px-7 py-4 font-display font-bold text-base hover:bg-foreground hover:text-background transition-colors"
            >
              {t("about.hero.ctaSecondary")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;