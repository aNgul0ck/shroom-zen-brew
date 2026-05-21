import { ArrowRight, Plus, Sparkles } from "lucide-react";
import { upsellMap, type Accessory } from "@/data/accessories";
import type { Product } from "@/data/products";

interface Props {
  product: Product;
}

const ProductUpsells = ({ product }: Props) => {
  const config = upsellMap[product.slug];
  if (!config) return null;

  const isDiva = product.isDiva;
  const eyebrow = isDiva ? "Rytuał Divy" : "Wzmocnij rytuał";
  const headline = isDiva ? "Dolej elegancji" : "Dodaj do koszyka";

  // Border + text helpers consistent with editorial style
  const border = isDiva ? "border-white/15" : "border-foreground/15";
  const textMain = isDiva ? "text-white" : "text-foreground";
  const textMuted = isDiva ? "text-white/60" : "text-foreground/65";
  const accentText = isDiva ? "text-diva-pink" : "text-foreground";

  return (
    <>
      <div className={`h-[3px] w-full ${isDiva ? "bg-white" : "bg-foreground"}`} />
      <section className={`py-16 md:py-24 ${isDiva ? "bg-diva-dark" : "ed-bg-cream"}`}>
        <div className="container mx-auto px-5 md:px-12">
          {/* Header */}
          <div className="mb-10 md:mb-14 flex items-end justify-between gap-6">
            <div>
              <p className={`font-body text-xs font-medium uppercase tracking-[0.25em] mb-3 ${accentText}`}>
                {eyebrow}
              </p>
              <h2 className={`font-headline text-3xl md:text-5xl uppercase ${textMain}`}>
                {headline}
              </h2>
            </div>
            <p className={`hidden md:block max-w-xs font-body text-sm ${textMuted}`}>
              Akcesoria i kapsułki, które domykają codzienny rytuał Shrooma.
            </p>
          </div>

          {/* Grid: featured (2 cols) + secondary stack */}
          <div className={`grid lg:grid-cols-3 border-t border-l ${border}`}>
            {/* Featured */}
            <FeaturedCard accessory={config.featured} isDiva={isDiva} />

            {/* Secondary */}
            <div className={`lg:col-span-1 border-r border-b lg:border-l-0 ${border} flex flex-col`}>
              {config.secondary.map((acc) => (
                <SecondaryCard key={acc.slug} accessory={acc} isDiva={isDiva} border={border} />
              ))}
            </div>
          </div>

          {/* Bundle hint */}
          <div className={`mt-6 flex items-center gap-2 font-body text-[12px] uppercase tracking-[0.2em] ${textMuted}`}>
            <Plus className="w-3.5 h-3.5" />
            <span>Dorzuć w jednej dostawie · darmowa wysyłka od 200 zł</span>
          </div>
        </div>
      </section>
    </>
  );
};

const FeaturedCard = ({ accessory, isDiva }: { accessory: Accessory; isDiva: boolean }) => {
  const border = isDiva ? "border-white/15" : "border-foreground/15";
  const bg = isDiva
    ? "bg-gradient-to-br from-diva-darker via-diva-dark to-diva-darker"
    : "bg-foreground/[0.04]";
  const textMain = isDiva ? "text-white" : "text-foreground";
  const textMuted = isDiva ? "text-white/65" : "text-foreground/70";
  const badgeBorder = isDiva ? "border-diva-pink text-diva-pink" : "border-foreground text-foreground";
  const ctaBg = isDiva ? "bg-diva-pink text-diva-dark hover:bg-diva-pink/90" : "bg-foreground text-background hover:bg-foreground/90";

  return (
    <div className={`relative lg:col-span-2 border-b border-r ${border} ${bg} p-6 md:p-10 group overflow-hidden`}>
      {/* Sparkle glow for diva */}
      {isDiva && (
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-diva-pink/15 blur-3xl pointer-events-none" />
      )}

      <div className="relative grid md:grid-cols-[1.1fr_1fr] gap-6 md:gap-10 items-center">
        {/* Copy */}
        <div className="order-2 md:order-1">
          {accessory.badge && (
            <span className={`inline-flex items-center gap-1.5 border px-2.5 py-1 font-body text-[10px] uppercase tracking-[0.18em] mb-5 ${badgeBorder}`}>
              <Sparkles className="w-3 h-3" />
              {accessory.badge}
            </span>
          )}
          <h3 className={`font-headline text-3xl md:text-5xl uppercase leading-[0.95] mb-3 ${textMain}`}>
            {accessory.name}
          </h3>
          <p className={`font-display text-sm md:text-base uppercase tracking-[0.15em] mb-4 ${isDiva ? "text-diva-pink" : "text-foreground/70"}`}>
            {accessory.tagline}
          </p>
          <p className={`font-body text-sm md:text-base leading-relaxed mb-6 max-w-md ${textMuted}`}>
            {accessory.description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`#${accessory.slug}`}
              className={`inline-flex items-center gap-2 px-5 py-3 font-display text-xs font-bold uppercase tracking-[0.18em] transition-colors ${ctaBg}`}
            >
              Dodaj · {accessory.price} zł
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <p className={`font-body text-xs ${textMuted}`}>
              {accessory.pairsCopy}
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2 flex items-center justify-center">
          <img
            src={accessory.image}
            alt={accessory.name}
            className="h-52 md:h-72 lg:h-80 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

const SecondaryCard = ({
  accessory,
  isDiva,
  border,
}: {
  accessory: Accessory;
  isDiva: boolean;
  border: string;
}) => {
  const textMain = isDiva ? "text-white" : "text-foreground";
  const textMuted = isDiva ? "text-white/55" : "text-foreground/60";
  const hoverBg = isDiva ? "hover:bg-white/[0.04]" : "hover:bg-foreground/[0.04]";

  return (
    <a
      href={`#${accessory.slug}`}
      className={`flex items-center gap-4 p-5 md:p-6 border-b last:border-b-0 ${border} ${hoverBg} group transition-colors flex-1`}
    >
      <img
        src={accessory.image}
        alt={accessory.name}
        className="h-20 md:h-24 w-auto object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
      />
      <div className="flex-1 min-w-0">
        <p className={`font-body text-[10px] uppercase tracking-[0.18em] mb-1 ${isDiva ? "text-diva-pink" : "text-foreground/55"}`}>
          {accessory.tagline}
        </p>
        <h4 className={`font-headline text-xl md:text-2xl uppercase leading-tight mb-1 ${textMain}`}>
          {accessory.name}
        </h4>
        <p className={`font-body text-xs leading-snug line-clamp-2 mb-2 ${textMuted}`}>
          {accessory.pairsCopy}
        </p>
        <span className={`inline-flex items-center gap-1.5 font-display text-[11px] font-bold uppercase tracking-[0.18em] ${textMain}`}>
          {accessory.price} zł
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </a>
  );
};

export default ProductUpsells;
