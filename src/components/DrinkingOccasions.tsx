import { Link } from "react-router-dom";
import { Sun, Moon, Sparkles, ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";

const ICONS = {
  "shroom-power": Sun,
  "shroom-relax": Moon,
  "diva": Sparkles,
} as const;

// Flat saturated brand colors per occasion (editorial system)
const ACCENTS: Record<string, { bg: string; text: string; accent: string }> = {
  "shroom-power": { bg: "#FFD24C", text: "#1C0A12", accent: "#1C0A12" },
  "shroom-relax": { bg: "#F4B8D9", text: "#1C0A12", accent: "#1C0A12" },
  "diva": { bg: "#9AA8E8", text: "#1C0A12", accent: "#1C0A12" },
};

const DrinkingOccasions = () => {
  const items = products.filter((p) => p.occasion);

  return (
    <section className="bg-background">
      {/* Header */}
      <div className="border-b-[3px] border-foreground">
        <div className="container mx-auto px-6 lg:px-12 py-10 md:py-14">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-foreground/60 mb-3">
            Kiedy, który, do czego
          </p>
          <h2 className="ed-heading text-foreground max-w-3xl">
            Każdy moment ma swojego Shrooma.
          </h2>
          <p className="font-body text-base md:text-lg text-foreground/65 max-w-2xl mt-3">
            Trzy napoje, trzy okazje. Zamiast kawy, zamiast wina, zamiast wszystkiego po czym czujesz się słabo.
          </p>
        </div>
      </div>

      {/* 3-up grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b-[3px] border-foreground">
        {items.map((p, idx) => {
          const Icon = ICONS[p.slug as keyof typeof ICONS] ?? Sun;
          const accent = ACCENTS[p.slug] ?? ACCENTS["shroom-power"];
          const isLast = idx === items.length - 1;
          return (
            <Link
              to={`/produkt/${p.slug}`}
              key={p.slug}
              className={`relative flex flex-col group ${!isLast ? "md:border-r-[3px] border-foreground" : ""} border-b-[3px] md:border-b-0 border-foreground last:border-b-0`}
              style={{ backgroundColor: accent.bg, color: accent.text }}
            >
              {/* Eyebrow */}
              <div className="flex items-center justify-between px-6 md:px-8 pt-7 md:pt-8">
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4" strokeWidth={2.5} />
                  <span className="font-body text-[11px] font-bold uppercase tracking-[0.2em]">
                    {p.occasion!.eyebrow}
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" strokeWidth={2} />
              </div>

              {/* Bottle + competitors */}
              <div className="flex-1 flex items-center justify-between gap-4 px-6 md:px-8 py-8 md:py-10">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-48 md:h-64 w-auto object-contain drop-shadow-xl"
                />
                <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                  <span className="font-body text-[10px] uppercase tracking-[0.18em] opacity-60 mb-1">
                    zamiast
                  </span>
                  {p.occasion!.replaces.map((r) => (
                    <span
                      key={r}
                      className="font-body text-[13px] md:text-[15px] font-medium"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 md:px-8 pb-7 md:pb-8 border-t-2 border-foreground/15 pt-5">
                <h3 className="font-headline text-2xl md:text-3xl uppercase leading-none mb-1">
                  {p.name}
                </h3>
                <p className="font-body text-sm opacity-80">{p.occasion!.headline}</p>
                <p className="font-body text-xs opacity-60 mt-1">{p.occasion!.subtitle}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default DrinkingOccasions;
