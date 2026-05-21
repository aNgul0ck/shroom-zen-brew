import { ArrowRight, Sun, Moon, PartyPopper, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import productPower from "@/assets/product-power.png";
import productRelax from "@/assets/product-relax.png";
import productDiva from "@/assets/product-diva.png";
import productBrainbliss from "@/assets/product-brainbliss.png";

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

const secondary: Product[] = [
  {
    name: "Diva Social Elixir",
    tagline: "Aperitivo bez alkoholu.",
    description: "Bezalkoholowy elixir z 13 składnikami botanicznymi. Na każde wyjście.",
    image: productDiva,
    icon: PartyPopper,
    time: "Social",
    benefits: ["13 botaników", "Bez alkoholu", "500 ml"],
    borderColor: "border-t-shroom-sky",
    badgeBg: "bg-shroom-sky",
    slug: "diva",
    price: "99 zł",
    cta: "Kup Divę",
  },
  {
    name: "BrainBliss",
    tagline: "Lion's Mane w kapsułce.",
    description: "Soplówka jeżowata w kapsułkach. 500 mg, 30 porcji.",
    image: productBrainbliss,
    icon: Brain,
    time: "Codziennie",
    benefits: ["Lion's Mane 500 mg", "30 porcji"],
    borderColor: "border-t-shroom-sage",
    badgeBg: "bg-shroom-sage",
    slug: "brainbliss",
    price: "89 zł",
    cta: "Kup BrainBliss",
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

const SecondaryCard = ({ product }: { product: Product }) => {
  const Icon = product.icon;
  return (
    <Link
      to={`/produkt/${product.slug}`}
      className={`relative bg-background border-t-[3px] ${product.borderColor} p-5 md:p-7 flex flex-col sm:flex-row sm:items-center gap-5 group`}
    >
      <div className="flex justify-center sm:w-40 sm:shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="h-32 md:h-36 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex-1 min-w-0">
        <span className={`${product.badgeBg} inline-flex items-center gap-1.5 px-2 py-0.5 font-display text-[10px] font-bold text-foreground mb-2`}>
          <Icon className="w-3 h-3" />
          {product.time}
        </span>
        <h3 className="font-display font-bold text-foreground text-lg md:text-xl mb-1">
          {product.name}
        </h3>
        <p className="font-body text-xs md:text-sm text-foreground/55 mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between gap-3">
          <span className="font-display font-bold text-foreground text-base">
            {product.price}
          </span>
          <span className="inline-flex items-center gap-1.5 font-display font-semibold text-xs uppercase tracking-wider text-foreground group-hover:gap-2.5 transition-all">
            Zobacz
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
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
            Power na dzień, Relax na wieczór. Plus dwa produkty na resztę życia.
          </p>
        </div>

        {/* Hero duo: Power + Relax */}
        <div className="grid md:grid-cols-2 gap-[3px] bg-foreground/10 p-[0px] mb-[3px]">
          {hero.map((product) => (
            <HeroCard key={product.slug} product={product} />
          ))}
        </div>

        {/* Duo CTA strip */}
        <div className="border border-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-3 px-5 md:px-8 py-4 md:py-5 mb-10 md:mb-14">
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

        {/* Secondary line */}
        <div className="flex items-end justify-between gap-4 mb-6 md:mb-8 pt-6 md:pt-8 border-t border-foreground/10">
          <div>
            <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.2em] mb-2">
              Reszta linii
            </p>
            <h3 className="font-headline text-2xl md:text-3xl uppercase text-foreground">
              Na social i codziennie.
            </h3>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-[3px] bg-foreground/10">
          {secondary.map((product) => (
            <SecondaryCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunctionalDrinks;
