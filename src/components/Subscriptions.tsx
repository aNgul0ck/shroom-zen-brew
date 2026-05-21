import { Check, ArrowRight } from "lucide-react";

const subscriptions = [
  {
    badge: "Starter",
    name: "Starter Ritual",
    headline: "Spróbuj. Serio.",
    price: "149",
    bottles: "12 butelek",
    period: "Power lub Relax",
    highlights: ["2 tygodnie eksperymentu", "1 butelka dziennie", "Idealny na prezent"],
    cta: "Zacznij",
    badgeBg: "bg-shroom-gold",
  },
  {
    badge: "Bestseller",
    name: "Good Trip",
    headline: "Rytm dnia i wieczoru.",
    price: "269",
    bottles: "24 butelki",
    period: "12 Power + 12 Relax",
    highlights: ["Pełny rytm dnia", "Rano: poranny rytuał", "Wieczór: wieczorny rytuał"],
    cta: "Wybierz",
    badgeBg: "bg-shroom-green",
    featured: true,
  },
  {
    badge: "Pro",
    name: "Feel Your Best",
    headline: "Codzienny rytuał well-being.",
    price: "499",
    bottles: "48 butelek",
    period: "24 Power + 24 Relax",
    highlights: ["Miesiąc codziennego rytuału", "2 butelki dziennie", "Najlepsza cena za butelkę"],
    cta: "Go Heroic",
    badgeBg: "bg-shroom-sky",
  },
];

const Subscriptions = () => {
  return (
    <section className="bg-background" id="subskrypcje">
      <div className="container mx-auto px-6 lg:px-12 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="font-body text-xs font-medium text-accent uppercase tracking-[0.2em] mb-3">
              Subskrypcje
            </p>
            <h2 className="ed-heading text-foreground leading-tight">
              Wybierz swój <span className="text-foreground/30">rytm.</span>
            </h2>
          </div>
          <p className="font-body text-sm text-foreground/50 max-w-xs">
            Elastyczne plany. Zero zobowiązań, anuluj kiedy chcesz.
          </p>
        </div>

        {/* Mobile: horizontal snap-scroller */}
        <div className="md:hidden -mx-6 px-6 flex gap-3 overflow-x-auto snap-x snap-mandatory pb-3 scrollbar-hide" style={{ scrollbarWidth: "none" }}>
          {subscriptions.map((sub) => (
            <div
              key={sub.name}
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
                    Najczęściej wybierany
                  </span>
                )}
              </div>

              <h3 className="font-display text-xl font-bold text-foreground mb-1">
                {sub.name}
              </h3>
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
                  {sub.price} <span className="text-sm font-normal text-foreground/40">zł</span>
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
          ← przesuń →
        </p>

        {/* Tablet+: grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-[3px]">
          {subscriptions.map((sub) => (
            <div
              key={sub.name}
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
                    Najczęściej wybierany
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
                  {sub.price} <span className="text-base font-normal text-foreground/40">zł</span>
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
          Bez zobowiązań . Anuluj w dowolnym momencie . Bezpieczna płatność
        </p>
      </div>
    </section>
  );
};

export default Subscriptions;
