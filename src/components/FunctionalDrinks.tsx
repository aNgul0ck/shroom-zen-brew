import { ArrowRight, Sun, Moon, PartyPopper, Brain, Sparkles, Coffee, GlassWater } from "lucide-react";
import { Link } from "react-router-dom";
import productPower from "@/assets/product-power.png";
import productRelax from "@/assets/product-relax.png";
import productDiva from "@/assets/product-diva.png";
import productBrainbliss from "@/assets/product-brainbliss.png";
import productGlass from "@/assets/product-glass.png";
import productMatcha from "@/assets/product-matcha.png";

type Product = {
  name: string;
  tagline: string;
  description: string;
  image: string;
  icon: typeof Sun;
  time: string;
  benefits: string[];
  borderColor: string;
  badgeBg: string;
  slug: string;
  price: string;
  cta: string;
};

const hero: Product[] = [
  {
    name: "Shroom Power",
    tagline: "Twój dzienny rytuał.",
    description: "Funkcjonalny napój na cały dzień. Z soplówką jeżowatą i żeń-szeniem.",
    image: productPower,
    icon: Sun,
    time: "Dzień",
    benefits: ["Lion's Mane", "Żeń-szeń", "Wit. C"],
    borderColor: "border-t-shroom-gold",
    badgeBg: "bg-shroom-gold",
    slug: "shroom-power",
    price: "79 zł",
    cta: "Kup Power",
  },
  {
    name: "Shroom Relax",
    tagline: "Twój popołudniowy i wieczorny rytuał.",
    description: "Funkcjonalny napój na popołudnie i wieczór. Z L-teaniną i chmielem. Bez alkoholu.",
    image: productRelax,
    icon: Moon,
    time: "Popołudnie / wieczór",
    benefits: ["Lion's Mane", "L-Teanina", "Chmiel"],
    borderColor: "border-t-shroom-green",
    badgeBg: "bg-shroom-green",
    slug: "shroom-relax",
    price: "79 zł",
    cta: "Kup Relax",
  },
];

type SecondaryProduct = {
  name: string;
  tagline: string;
  description: string;
  image: string;
  icon: typeof Sun;
  tag: string;
  slug: string;
  price: string;
  accent: string;
};

const secondary: SecondaryProduct[] = [
  {
    name: "BrainBliss",
    tagline: "Lion's Mane w kapsułce.",
    description: "Soplówka jeżowata w kapsułkach. 500 mg, 30 porcji.",
    image: productBrainbliss,
    icon: Brain,
    tag: "Codziennie",
    slug: "brainbliss",
    price: "89 zł",
    accent: "bg-shroom-sage",
  },
  {
    name: "Shroom x BROS Matcha Latte",
    tagline: "Matcha + Lion's Mane.",
    description: "Kremowe, roślinne latte z matchą ceremonialnej jakości i soplówką jeżowatą.",
    image: productMatcha,
    icon: Coffee,
    tag: "Poranek",
    slug: "matcha-latte",
    price: "99 zł",
    accent: "bg-shroom-gold",
  },
  {
    name: "Shroom Glass",
    tagline: "Szklanka grzybek.",
    description: "Ręcznie wykonana szklanka w kształcie grzybka. 260 ml. Limitowana seria.",
    image: productGlass,
    icon: GlassWater,
    tag: "Akcesoria",
    slug: "shroom-glass",
    price: "59 zł",
    accent: "bg-shroom-sky",
  },
];

const HeroCard = ({ product }: { product: Product }) => {
  const Icon = product.icon;
  return (
    <div className={`relative bg-background border-t-[4px] ${product.borderColor} p-6 md:p-10 lg:p-12 flex flex-col group overflow-hidden`}>
      <span className={`${product.badgeBg} self-start px-3 py-1.5 font-display text-xs font-bold text-foreground flex items-center gap-1.5 mb-6`}>
        <Icon className="w-3.5 h-3.5" />
        {product.time}
      </span>

      <div className="flex justify-center items-end min-h-[260px] md:min-h-[360px] mb-6">
        <img
          src={product.image}
          alt={product.name}
          className="h-[260px] md:h-[360px] lg:h-[420px] w-auto object-contain transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
        <div className="flex-1">
          <h3 className="font-headline text-3xl md:text-4xl lg:text-5xl uppercase text-foreground leading-[0.95] mb-2">
            {product.name}
          </h3>
          <p className="font-body text-sm md:text-base text-foreground/65 mb-4">
            {product.tagline}
          </p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-body text-xs md:text-sm text-foreground/60">
            {product.benefits.map((b, i) => (
              <span key={b} className="flex items-center gap-3">
                {i > 0 && <span className="text-foreground/25">|</span>}
                {b}
              </span>
            ))}
          </div>
        </div>

        <Link
          to={`/produkt/${product.slug}`}
          className="inline-flex items-center justify-center gap-2 bg-foreground text-background font-display font-bold text-xs md:text-sm uppercase tracking-wider px-6 py-3.5 md:px-7 md:py-4 hover:opacity-85 transition-opacity whitespace-nowrap"
        >
          {product.cta}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

const SecondaryCard = ({ product }: { product: SecondaryProduct }) => {
  const Icon = product.icon;
  return (
    <Link
      to={`/produkt/${product.slug}`}
      className="relative bg-background border border-foreground/10 p-5 md:p-6 flex flex-col group hover:border-foreground/40 transition-colors"
    >
      <span className={`${product.accent} inline-flex items-center gap-1.5 self-start px-2 py-1 font-display text-[10px] font-bold text-foreground mb-4`}>
        <Icon className="w-3 h-3" />
        {product.tag}
      </span>

      <div className="flex justify-center items-end min-h-[180px] md:min-h-[220px] mb-5">
        <img
          src={product.image}
          alt={product.name}
          className="h-[180px] md:h-[220px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="font-display font-bold text-foreground text-base md:text-lg leading-tight mb-1">
        {product.name}
      </h3>
      <p className="font-body text-xs md:text-sm text-foreground/55 mb-4 line-clamp-2">
        {product.description}
      </p>

      <div className="flex items-center justify-between gap-3 mt-auto pt-3 border-t border-foreground/10">
        <span className="font-display font-bold text-foreground text-base">
          {product.price}
        </span>
        <span className="inline-flex items-center gap-1.5 font-display font-semibold text-xs uppercase tracking-wider text-foreground group-hover:gap-2.5 transition-all">
          Zobacz
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </Link>
  );
};

const DivaBanner = () => {
  return (
    <div
      className="relative overflow-hidden border border-white/10 my-10 md:my-16"
      style={{
        background:
          "radial-gradient(120% 100% at 20% 0%, hsl(280 40% 22%) 0%, hsl(265 35% 14%) 45%, hsl(260 50% 8%) 100%)",
      }}
    >
      {/* sparkle layer */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60 mix-blend-screen"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 12% 22%, rgba(255,255,255,0.9) 50%, transparent 51%), radial-gradient(1.5px 1.5px at 78% 36%, rgba(255,220,180,0.8) 50%, transparent 51%), radial-gradient(1px 1px at 46% 78%, rgba(255,255,255,0.7) 50%, transparent 51%), radial-gradient(1.5px 1.5px at 88% 82%, rgba(255,200,230,0.7) 50%, transparent 51%), radial-gradient(1px 1px at 28% 58%, rgba(255,255,255,0.6) 50%, transparent 51%), radial-gradient(2px 2px at 62% 12%, rgba(255,235,180,0.6) 50%, transparent 51%)",
        }}
      />
      {/* glitter grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 4px)",
        }}
      />

      <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-0 p-6 md:p-10 lg:p-14">
        {/* Copy */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <span className="inline-flex items-center gap-1.5 self-start px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 font-display text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white mb-5">
            <Sparkles className="w-3 h-3" />
            Brand w brandzie
          </span>
          <h3 className="font-headline text-4xl md:text-5xl lg:text-6xl uppercase text-white leading-[0.95] mb-4">
            Diva <span className="italic font-light">Social Elixir</span>
          </h3>
          <p className="font-body text-sm md:text-base text-white/70 max-w-md mb-6">
            Bezalkoholowy aperitivo z 13 botanikami. Na każde wyjście, kolację i after, w którym chcesz pamiętać poranek.
          </p>

          <div className="flex flex-wrap gap-2 mb-7">
            {["13 botaników", "0% alkoholu", "500 ml", "Made in PL"].map((b) => (
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
              to="/produkt/diva"
              className="inline-flex items-center gap-2 bg-white text-[hsl(265_35%_14%)] font-display font-bold text-xs md:text-sm uppercase tracking-wider px-6 py-3.5 md:px-7 md:py-4 hover:opacity-90 transition-opacity"
            >
              Kup Divę za 99 zł
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/produkt/diva"
              className="font-display font-semibold text-xs md:text-sm uppercase tracking-wider text-white/70 hover:text-white transition-colors"
            >
              Poznaj recepturę →
            </Link>
          </div>
        </div>

        {/* Visual */}
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
  return (
    <section className="bg-background" id="produkty">
      <div className="container mx-auto px-6 lg:px-12 py-12 md:py-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 lg:mb-14">
          <div>
            <p className="font-body text-xs font-medium text-accent uppercase tracking-[0.2em] mb-3">
              Shroom Drinks
            </p>
            <h2 className="ed-heading text-foreground leading-tight">
              Rytm dnia <span className="text-foreground/30">i nocy.</span>
            </h2>
          </div>
          <p className="font-body text-sm lg:text-base text-foreground/50 max-w-xs">
            Power na dzień, Relax na wieczór. Plus reszta linii na każdą okazję.
          </p>
        </div>

        {/* Hero duo: Power + Relax */}
        <div className="grid md:grid-cols-2 gap-[3px] bg-foreground/10">
          {hero.map((product) => (
            <HeroCard key={product.slug} product={product} />
          ))}
        </div>

        {/* Duo CTA strip */}
        <div className="border border-t-0 border-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-3 px-5 md:px-8 py-4 md:py-5">
          <p className="font-display text-sm md:text-base font-bold text-foreground text-center sm:text-left">
            Dzień + Wieczór = pełny rytm <span className="text-foreground/30">→</span>
          </p>
          <Link
            to="/produkt/shroom-power"
            className="inline-flex items-center gap-2 border-2 border-foreground text-foreground px-5 py-2.5 md:px-6 md:py-3 font-display font-semibold text-xs md:text-sm hover:bg-foreground hover:text-background transition-colors whitespace-nowrap"
          >
            Kup duet za 158 zł
            <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </Link>
        </div>

        {/* Diva solo banner — brand w brandzie */}
        <DivaBanner />

        {/* Secondary line: BrainBliss + Matcha + Glass */}
        <div className="flex items-end justify-between gap-4 mb-6 md:mb-8 pt-6 md:pt-8 border-t border-foreground/10">
          <div>
            <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.2em] mb-2">
              Reszta linii
            </p>
            <h3 className="font-headline text-2xl md:text-3xl uppercase text-foreground">
              Codzienność, poranek i akcesoria.
            </h3>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[3px] bg-foreground/10">
          {secondary.map((product) => (
            <SecondaryCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunctionalDrinks;
