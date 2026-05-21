import type { Product } from "@/data/products";
import { Target, ArrowLeftRight, Sparkles, Ban } from "lucide-react";

interface Props {
  product: Product;
}

const ProductRoutine = ({ product }: Props) => {
  const isDiva = product.isDiva;

  const title = isDiva
    ? "Twój wieczór z Divą"
    : product.slug === "shroom-power"
      ? "Twój dzień z Power"
      : "Twój rytuał z Relax";

  const meta = product.ritualMeta;
  const metaItems = meta
    ? [
        { icon: Target, label: "Najlepszy moment", value: meta.bestFor },
        { icon: ArrowLeftRight, label: "Zamiast", value: meta.instead },
        { icon: Sparkles, label: "Pasuje do", value: meta.pairsWith },
        { icon: Ban, label: "Unikaj", value: meta.avoid },
      ]
    : [];

  return (
    <>
      <div className={`h-[3px] w-full ${isDiva ? "bg-white" : "bg-foreground"}`} />
      <section className={`py-16 md:py-24 ${isDiva ? "bg-diva-dark" : "bg-background"}`}>
        <div className="container mx-auto px-5 md:px-12">
          <div className="mb-10 md:mb-14 max-w-3xl">
            <p className={`font-body text-xs font-medium uppercase tracking-[0.25em] mb-3 ${isDiva ? "text-diva-pink" : "text-foreground/60"}`}>
              Rytuał
            </p>
            <h2 className={`font-headline text-3xl md:text-5xl uppercase mb-3 ${isDiva ? "text-white" : "text-foreground"}`}>
              {title}
            </h2>
            {product.occasion?.subtitle && (
              <p className={`font-body text-base md:text-lg ${isDiva ? "text-white/65" : "text-foreground/65"}`}>
                {product.occasion.subtitle}
              </p>
            )}
          </div>

          {/* Meta strip — Best for / Instead / Pairs / Avoid */}
          {metaItems.length > 0 && (
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-10 md:mb-14 border-t-2 border-l-2 ${isDiva ? "border-white/20" : "border-foreground"}`}>
              {metaItems.map((m) => {
                const Icon = m.icon;
                return (
                  <div
                    key={m.label}
                    className={`p-5 md:p-6 border-r-2 border-b-2 ${isDiva ? "border-white/20" : "border-foreground"}`}
                  >
                    <Icon className={`w-5 h-5 mb-3 ${isDiva ? "text-diva-pink" : "text-foreground"}`} strokeWidth={2} />
                    <p className={`font-body text-[10px] font-bold uppercase tracking-[0.18em] mb-2 ${isDiva ? "text-diva-pink" : "text-foreground/60"}`}>
                      {m.label}
                    </p>
                    <p className={`font-body text-sm leading-snug ${isDiva ? "text-white/90" : "text-foreground"}`}>
                      {m.value}
                    </p>
                  </div>
                );
              })}
            </div>
          )}



          {/* Hour-by-hour ritual */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l ${isDiva ? "border-white/15" : "border-foreground/15"}`}>
            {product.routine.map((step, index) => (
              <div
                key={step.time}
                className={`relative p-5 md:p-6 lg:p-8 border-b border-r ${isDiva ? "border-white/15 hover:bg-white/[0.03]" : "border-foreground/15 hover:bg-foreground/[0.03]"} transition-colors duration-200`}
              >
                <div className={`font-headline text-4xl md:text-5xl lg:text-6xl mb-3 ${isDiva ? "text-diva-pink/70" : "text-foreground/30"}`}>
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className={`font-display text-xs uppercase tracking-[0.2em] mb-2 ${isDiva ? "text-diva-pink" : "text-foreground/60"}`}>
                  {step.time}
                </p>
                <h3 className={`font-display text-base font-bold uppercase tracking-wide mb-2 ${isDiva ? "text-white" : "text-foreground"}`}>
                  {step.label}
                </h3>
                <p className={`font-body text-xs leading-relaxed ${isDiva ? "text-white/55" : "text-foreground/65"}`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductRoutine;
