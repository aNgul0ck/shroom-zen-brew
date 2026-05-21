import { ArrowRight, Sun, Moon, PartyPopper, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import productPower from "@/assets/product-power.png";
import productRelax from "@/assets/product-relax.png";
import productDiva from "@/assets/product-diva.png";
import productBrainbliss from "@/assets/product-brainbliss.png";

const products = [
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
  },
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
  },
];

const ProductCard = ({ product, size = "default" }: { product: typeof products[0]; size?: "default" | "compact" }) => {
  const Icon = product.icon;
  const isCompact = size === "compact";

  return (
    <div className={`bg-background border-t-[3px] ${product.borderColor} ${isCompact ? "p-4" : "p-6 lg:p-8"} group flex flex-col`}>
      <span className={`${product.badgeBg} self-start px-2.5 py-1 font-display text-[11px] font-semibold text-foreground flex items-center gap-1.5 mb-4`}>
        <Icon className="w-3 h-3" />
        {product.time}
      </span>

      <div className="flex justify-center mb-5">
        <img
          src={product.image}
          alt={product.name}
          className={`${isCompact ? "h-28" : "h-40 lg:h-48"} w-auto object-contain group-hover:scale-105 transition-transform duration-500`}
        />
      </div>

      <h3 className={`font-display font-bold text-foreground mb-0.5 ${isCompact ? "text-base" : "text-lg lg:text-xl"}`}>
        {product.name}
      </h3>
      <p className={`font-body text-foreground/60 mb-2 ${isCompact ? "text-xs" : "text-sm"}`}>
        {product.tagline}
      </p>
      <p className={`font-body text-foreground/40 leading-relaxed mb-4 flex-1 ${isCompact ? "text-[11px] hidden" : "text-xs lg:text-sm"}`}>
        {product.description}
      </p>

      <div className="flex flex-wrap gap-1 mb-4">
        {product.benefits.map((b) => (
          <span key={b} className="bg-foreground/5 px-2 py-0.5 font-body text-[11px] text-foreground/50">
            {b}
          </span>
        ))}
      </div>

      <Link
        to={`/produkt/${product.slug}`}
        className={`inline-flex items-center gap-2 bg-foreground text-background font-display font-semibold hover:opacity-90 transition-opacity self-start ${
          isCompact ? "px-3 py-2 text-[11px]" : "px-5 py-3 text-sm"
        }`}
      >
        {product.price}
        <ArrowRight className={isCompact ? "w-3 h-3" : "w-4 h-4"} />
      </Link>
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
            Cztery produkty do naturalnego rytmu Twojego życia.
          </p>
        </div>

        {/* Desktop: 4-column grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-[3px]">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        {/* Mobile/Tablet: duo + CTA + rest */}
        <div className="lg:hidden">
          {/* Power + Relax duo */}
          <div className="grid grid-cols-2 gap-[3px] mb-[3px]">
            <ProductCard product={products[0]} size="compact" />
            <ProductCard product={products[1]} size="compact" />
          </div>

          {/* Duo CTA strip */}
          <div className="border border-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-4 mb-[3px]">
            <p className="font-display text-sm font-bold text-foreground text-center sm:text-left">
              Rano + Wieczór = pełny rytm <span className="text-foreground/30">→</span>
            </p>
            <Link
              to="/produkt/shroom-power"
              className="inline-flex items-center gap-2 border-2 border-foreground text-foreground px-5 py-2.5 font-display font-semibold text-xs hover:bg-foreground hover:text-background transition-colors whitespace-nowrap"
            >
              Kup duet za 158 zł
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Diva + BrainBliss */}
          <div className="grid grid-cols-2 gap-[3px]">
            <ProductCard product={products[2]} size="compact" />
            <ProductCard product={products[3]} size="compact" />
          </div>
        </div>

        {/* Desktop duo CTA — below 4-col grid */}
        <div className="hidden lg:flex border border-foreground/10 items-center justify-between px-8 py-5 mt-[3px]">
          <p className="font-display text-base font-bold text-foreground">
            Rano + Wieczór = pełny rytm <span className="text-foreground/30">→</span>
          </p>
          <Link
            to="/produkt/shroom-power"
            className="inline-flex items-center gap-2 border-2 border-foreground text-foreground px-6 py-3 font-display font-semibold text-sm hover:bg-foreground hover:text-background transition-colors"
          >
            Kup duet za 158 zł
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FunctionalDrinks;
