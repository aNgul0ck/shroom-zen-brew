import { ArrowRight, Sun, Moon, Brain, Sparkles, Coffee, GlassWater } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import productPower from "@/assets/product-power.png";
import productRelax from "@/assets/product-relax.png";
import productDiva from "@/assets/product-diva.png";
import productBrainbliss from "@/assets/product-brainbliss.png";
import productGlass from "@/assets/product-glass.png";
import productMatcha from "@/assets/product-matcha.png";
import { useLocalizedPath } from "@/lib/i18nRoutes";

type HeroCardData = {
  slug: string;
  image: string;
  icon: typeof Sun;
  borderColor: string;
  badgeBg: string;
  keyBase: string;
  ctaKey: string;
};

const heroSpecs: HeroCardData[] = [
  {
    slug: "shroom-power",
    image: productPower,
    icon: Sun,
    borderColor: "border-t-shroom-gold",
    badgeBg: "bg-shroom-gold",
    keyBase: "homepage.functionalDrinks.power",
    ctaKey: "common.cta.buyPower",
  },
  {
    slug: "shroom-relax",
    image: productRelax,
    icon: Moon,
    borderColor: "border-t-shroom-green",
    badgeBg: "bg-shroom-green",
    keyBase: "homepage.functionalDrinks.relax",
    ctaKey: "common.cta.buyRelax",
  },
];

type SecondarySpec = {
  slug: string;
  image: string;
  icon: typeof Sun;
  accent: string;
  keyBase: string;
};

const secondarySpecs: SecondarySpec[] = [
  {
    slug: "brainbliss",
    image: productBrainbliss,
    icon: Brain,
    accent: "bg-shroom-sage",
    keyBase: "homepage.functionalDrinks.brainbliss",
  },
  {
    slug: "matcha-latte",
    image: productMatcha,
    icon: Coffee,
    accent: "bg-shroom-gold",
    keyBase: "homepage.functionalDrinks.matcha",
  },
  {
    slug: "shroom-glass",
    image: productGlass,
    icon: GlassWater,
    accent: "bg-shroom-sky",
    keyBase: "homepage.functionalDrinks.glass",
  },
];

const HeroCard = ({ spec }: { spec: HeroCardData }) => {
  const { t } = useTranslation();
  const lp = useLocalizedPath();
  const Icon = spec.icon;
  const name = t(`${spec.keyBase}.name`);
  const benefits = t(`${spec.keyBase}.benefits`, { returnObjects: true }) as string[];
  const safeBenefits = Array.isArray(benefits) ? benefits : [];

  return (
    <div className={`relative bg-background border-t-[4px] ${spec.borderColor} p-4 sm:p-6 md:p-10 lg:p-12 flex flex-col group overflow-hidden`}>
      <span className={`${spec.badgeBg} self-start px-2 py-1 sm:px-3 sm:py-1.5 font-display text-[10px] sm:text-xs font-bold text-foreground flex items-center gap-1 sm:gap-1.5 mb-3 sm:mb-6`}>
        <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        {t(`${spec.keyBase}.timeOfDay`)}
      </span>

      <div className="flex justify-center items-end min-h-[160px] sm:min-h-[260px] md:min-h-[360px] mb-3 sm:mb-6">
        <img
          src={spec.image}
          alt={name}
          className="h-[160px] sm:h-[260px] md:h-[360px] lg:h-[420px] w-auto object-contain transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 md:gap-5">
        <div className="flex-1 min-w-0">
          <h3 className="font-headline text-xl sm:text-3xl md:text-4xl lg:text-5xl uppercase text-foreground leading-[0.95] mb-1 sm:mb-2">
            {name}
          </h3>
          <p className="font-body text-xs sm:text-sm md:text-base text-foreground/65 mb-2 sm:mb-4 line-clamp-2">
            {t(`${spec.keyBase}.tagline`)}
          </p>
          <div className="hidden sm:flex flex-wrap items-center gap-x-3 gap-y-1 font-body text-xs md:text-sm text-foreground/60">
            {safeBenefits.map((b, i) => (
              <span key={b} className="flex items-center gap-3">
                {i > 0 && <span className="text-foreground/25">|</span>}
                {b}
              </span>
            ))}
          </div>
          <p className="sm:hidden font-display font-bold text-foreground text-sm">
            {t(`${spec.keyBase}.price`)}
          </p>
        </div>

        <Link
          to={lp(`/produkt/${spec.slug}`)}
          className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-foreground text-background font-display font-bold text-[11px] sm:text-xs md:text-sm uppercase tracking-wider px-3 py-2.5 sm:px-6 sm:py-3.5 md:px-7 md:py-4 hover:opacity-85 transition-opacity whitespace-nowrap"
        >
          <span className="sm:hidden">{t("common.cta.buy")}</span>
          <span className="hidden sm:inline">{t(spec.ctaKey)}</span>
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </Link>
      </div>
    </div>
  );
};

const SecondaryCard = ({ spec }: { spec: SecondarySpec }) => {
  const { t } = useTranslation();
  const lp = useLocalizedPath();
  const Icon = spec.icon;
  const name = t(`${spec.keyBase}.name`);

  return (
    <Link
      to={lp(`/produkt/${spec.slug}`)}
      className="relative bg-background border border-foreground/10 p-5 md:p-6 flex flex-col group hover:border-foreground/40 transition-colors"
    >
      <span className={`${spec.accent} inline-flex items-center gap-1.5 self-start px-2 py-1 font-display text-[10px] font-bold text-foreground mb-4`}>
        <Icon className="w-3 h-3" />
        {t(`${spec.keyBase}.tag`)}
      </span>

      <div className="flex justify-center items-end min-h-[180px] md:min-h-[220px] mb-5">
        <img
          src={spec.image}
          alt={name}
          className="h-[180px] md:h-[220px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="font-display font-bold text-foreground text-base md:text-lg leading-tight mb-1">
        {name}
      </h3>
      <p className="font-body text-xs md:text-sm text-foreground/55 mb-4 line-clamp-2">
        {t(`${spec.keyBase}.description`)}
      </p>

      <div className="flex items-center justify-between gap-3 mt-auto pt-3 border-t border-foreground/10">
        <span className="font-display font-bold text-foreground text-base">
          {t(`${spec.keyBase}.price`)}
        </span>
        <span className="inline-flex items-center gap-1.5 font-display font-semibold text-xs uppercase tracking-wider text-foreground group-hover:gap-2.5 transition-all">
          {t("common.cta.see")}
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </Link>
  );
};

const DivaBanner = () => {
  const { t } = useTranslation();
  const lp = useLocalizedPath();
  const tags = t("homepage.functionalDrinks.diva.tags", { returnObjects: true }) as string[];
  const safeTags = Array.isArray(tags) ? tags : [];

  return (
    <div
      className="relative overflow-hidden border border-white/10 my-6 sm:my-10 md:my-16"
      style={{
        background:
          "radial-gradient(120% 100% at 20% 0%, hsl(280 40% 22%) 0%, hsl(265 35% 14%) 45%, hsl(260 50% 8%) 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60 mix-blend-screen"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 12% 22%, rgba(255,255,255,0.9) 50%, transparent 51%), radial-gradient(1.5px 1.5px at 78% 36%, rgba(255,220,180,0.8) 50%, transparent 51%), radial-gradient(1px 1px at 46% 78%, rgba(255,255,255,0.7) 50%, transparent 51%), radial-gradient(1.5px 1.5px at 88% 82%, rgba(255,200,230,0.7) 50%, transparent 51%), radial-gradient(1px 1px at 28% 58%, rgba(255,255,255,0.6) 50%, transparent 51%), radial-gradient(2px 2px at 62% 12%, rgba(255,235,180,0.6) 50%, transparent 51%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 4px)",
        }}
      />

      <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-0 p-6 md:p-10 lg:p-14">
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <span className="inline-flex items-center gap-1.5 self-start px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 font-display text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white mb-5">
            <Sparkles className="w-3 h-3" />
            {t("homepage.functionalDrinks.diva.badge")}
          </span>
          <h3 className="font-headline text-4xl md:text-5xl lg:text-6xl uppercase text-white leading-[0.95] mb-4">
            {t("homepage.functionalDrinks.diva.name")} <span className="italic font-light">{t("homepage.functionalDrinks.diva.italic")}</span>
          </h3>
          <p className="font-body text-sm md:text-base text-white/70 max-w-md mb-6">
            {t("homepage.functionalDrinks.diva.description")}
          </p>

          <div className="flex flex-wrap gap-2 mb-7">
            {safeTags.map((b) => (
              <span
                key={b}
                className="font-body text-xs px-3 py-1.5 bg-white/5 border border-white/15 text-white/85"
              >
                {b}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to={lp("/produkt/diva")}
              className="inline-flex items-center gap-2 bg-white text-[hsl(265_35%_14%)] font-display font-bold text-xs md:text-sm uppercase tracking-wider px-6 py-3.5 md:px-7 md:py-4 hover:opacity-90 transition-opacity"
            >
              {t("homepage.functionalDrinks.diva.cta")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to={lp("/produkt/diva")}
              className="font-display font-semibold text-xs md:text-sm uppercase tracking-wider text-white/70 hover:text-white transition-colors"
            >
              {t("homepage.functionalDrinks.diva.ctaSecondary")} →
            </Link>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 flex justify-center items-center min-h-[280px] md:min-h-[380px]">
          <div
            className="absolute inset-8 rounded-full opacity-50 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, hsl(320 60% 50%) 0%, transparent 70%)",
            }}
          />
          <img
            src={productDiva}
            alt="Diva Social Elixir"
            className="relative h-[280px] md:h-[380px] lg:h-[440px] w-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

const FunctionalDrinks = () => {
  const { t } = useTranslation();
  const lp = useLocalizedPath();

  return (
    <section className="bg-background" id="produkty">
      <div className="container mx-auto px-5 sm:px-6 lg:px-12 py-10 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 md:gap-4 mb-6 md:mb-14">
          <div>
            <p className="font-body text-xs font-medium text-accent uppercase tracking-[0.2em] mb-2 sm:mb-3">
              {t("homepage.functionalDrinks.eyebrow")}
            </p>
            <h2 className="ed-heading text-foreground leading-tight">
              {t("homepage.functionalDrinks.sectionTitle")} <span className="text-foreground/30">{t("homepage.functionalDrinks.sectionTitleAccent")}</span>
            </h2>
          </div>
          <p className="font-body text-sm lg:text-base text-foreground/50 max-w-xs">
            {t("homepage.functionalDrinks.sectionSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-[2px] sm:gap-[3px] bg-foreground/10">
          {heroSpecs.map((spec) => (
            <HeroCard key={spec.slug} spec={spec} />
          ))}
        </div>

        <div className="border border-t-0 border-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-3 px-4 sm:px-5 md:px-8 py-3.5 md:py-5">
          <p className="font-display text-xs sm:text-sm md:text-base font-bold text-foreground text-center sm:text-left">
            {t("homepage.functionalDrinks.duoStrip")} <span className="text-foreground/30">→</span>
          </p>
          <Link
            to={lp("/produkt/shroom-power")}
            className="inline-flex items-center gap-2 border-2 border-foreground text-foreground px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 font-display font-semibold text-[11px] sm:text-xs md:text-sm hover:bg-foreground hover:text-background transition-colors whitespace-nowrap"
          >
            {t("homepage.functionalDrinks.duoCta")}
            <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </Link>
        </div>

        <DivaBanner />

        <div className="flex items-end justify-between gap-4 mb-5 md:mb-8 pt-6 md:pt-8 border-t border-foreground/10">
          <div>
            <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.2em] mb-2">
              {t("homepage.functionalDrinks.secondaryEyebrow")}
            </p>
            <h3 className="font-headline text-xl sm:text-2xl md:text-3xl uppercase text-foreground">
              {t("homepage.functionalDrinks.secondaryTitle")}
            </h3>
          </div>
        </div>

        <div className="sm:hidden -mx-5 px-5 flex gap-3 overflow-x-auto snap-x snap-mandatory pb-3 scrollbar-hide" style={{ scrollbarWidth: "none" }}>
          {secondarySpecs.map((spec) => (
            <div key={spec.slug} className="snap-start shrink-0 w-[78%]">
              <SecondaryCard spec={spec} />
            </div>
          ))}
        </div>
        <p className="sm:hidden font-body text-[10px] uppercase tracking-[0.2em] text-foreground/40 mt-2">
          {t("homepage.functionalDrinks.scrollHint")}
        </p>

        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-[3px] bg-foreground/10">
          {secondarySpecs.map((spec) => (
            <SecondaryCard key={spec.slug} spec={spec} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunctionalDrinks;
