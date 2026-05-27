import { Check, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const itemMeta = [
  { badgeBg: "bg-shroom-gold",  featured: false },
  { badgeBg: "bg-shroom-green", featured: true  },
  { badgeBg: "bg-shroom-sky",   featured: false },
];

interface SubItem {
  key: string;
  badge: string;
  name: string;
  headline: string;
  price: string;
  bottles: string;
  period: string;
  highlights: string[];
  cta: string;
}

const Subscriptions = () => {
  const { t } = useTranslation();
  const items = t("homepage.subscriptions.items", { returnObjects: true }) as SubItem[];
  const subs = items.map((it, i) => ({ ...it, ...itemMeta[i] }));
  const currency = t("homepage.subscriptions.currency");
  const mostPopular = t("homepage.subscriptions.mostPopular");

  return (
    <section className="bg-background" id="subskrypcje">
      <div className="container mx-auto px-6 lg:px-12 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="font-body text-xs font-medium text-accent uppercase tracking-[0.2em] mb-3">
              {t("homepage.subscriptions.eyebrow")}
            </p>
            <h2 className="ed-heading text-foreground leading-tight">
              {t("homepage.subscriptions.titlePart1")} <span className="text-foreground/30">{t("homepage.subscriptions.titleAccent")}</span>
            </h2>
          </div>
          <p className="font-body text-sm text-foreground/50 max-w-xs">
            {t("homepage.subscriptions.subtitle")}
          </p>
        </div>

        {/* Mobile snap scroller */}
        <div className="md:hidden -mx-6 px-6 flex gap-3 overflow-x-auto snap-x snap-mandatory pb-3 scrollbar-hide" style={{ scrollbarWidth: "none" }}>
          {subs.map((sub) => (
            <div
              key={sub.key}
              className={`snap-start shrink-0 w-[82%] group bg-background p-5 flex flex-col ${
                sub.featured ? "border-2 border-foreground" : "border border-foreground/8"
              }`}
            >
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className={`${sub.badgeBg} px-2 py-0.5 font-display text-[10px] font-semibold text-foreground`}>
                  {sub.badge}
                </span>
                {sub.featured && (
                  <span className="bg-foreground text-background px-2 py-0.5 font-body text-[10px] font-medium">
                    {mostPopular}
                  </span>
                )}
              </div>

              <h3 className="font-display text-xl font-bold text-foreground mb-1">{sub.name}</h3>
              <p className="font-body text-xs text-foreground/50 mb-4">{sub.headline}</p>

              <ul className="space-y-2 mb-5">
                {sub.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-shroom-green flex-shrink-0 mt-0.5" />
                    <span className="font-body text-xs text-foreground">{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <p className="font-display text-2xl font-bold text-foreground mb-0.5">
                  {sub.price} <span className="text-sm font-normal text-foreground/40">{currency}</span>
                </p>
                <p className="font-body text-[11px] text-foreground/40 mb-3">
                  {sub.bottles} . {sub.period}
                </p>
                <button className="w-full flex items-center justify-center gap-2 bg-foreground text-background py-3 font-display font-semibold text-xs">
                  {sub.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <p className="md:hidden font-body text-[10px] uppercase tracking-[0.2em] text-foreground/40 mt-2 mb-2">
          {t("homepage.subscriptions.mobileHint")}
        </p>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-[3px]">
          {subs.map((sub) => (
            <div
              key={sub.key}
              className={`group bg-background p-6 md:p-8 lg:p-10 flex flex-col hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 ${
                sub.featured ? "border-2 border-foreground" : "border border-foreground/8 hover:border-foreground/20"
              }`}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className={`${sub.badgeBg} px-2.5 py-1 font-display text-[11px] font-semibold text-foreground`}>
                  {sub.badge}
                </span>
                {sub.featured && (
                  <span className="bg-foreground text-background px-2.5 py-1 font-body text-[11px] font-medium">
                    {mostPopular}
                  </span>
                )}
              </div>

              <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-1">
                {sub.name}
              </h3>
              <p className="font-body text-sm lg:text-base text-foreground/50 mb-5">{sub.headline}</p>

              <ul className="space-y-2.5 mb-6">
                {sub.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-shroom-green flex-shrink-0" />
                    <span className="font-body text-sm text-foreground">{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <p className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-0.5">
                  {sub.price} <span className="text-base font-normal text-foreground/40">{currency}</span>
                </p>
                <p className="font-body text-xs text-foreground/40 mb-4">
                  {sub.bottles} . {sub.period}
                </p>
                <button className="w-full flex items-center justify-center gap-2 bg-foreground text-background py-3.5 font-display font-semibold text-sm group-hover:gap-3 transition-all duration-300 hover:opacity-90">
                  {sub.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 font-body text-[11px] text-foreground/40">
          {t("homepage.subscriptions.footer")}
        </p>
      </div>
    </section>
  );
};

export default Subscriptions;
