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
    cta: "Rozpocznij",
    bg: "bg-shroom-gold",
  },
  {
    badge: "Bestseller",
    name: "Good Trip",
    headline: "Dzień w harmonii.",
    price: "269",
    bottles: "24 butelki",
    period: "12 Power + 12 Relax",
    highlights: ["Pełny rytm dnia", "Rano: aktywacja", "Wieczór: wyciszenie"],
    cta: "Wybierz",
    bg: "bg-shroom-green",
    featured: true,
  },
  {
    badge: "Pro",
    name: "Feel Your Best",
    headline: "Pełna transformacja.",
    price: "499",
    bottles: "48 butelek",
    period: "24 Power + 24 Relax",
    highlights: ["Miesiąc wsparcia", "2 butelki dziennie", "Maksymalne efekty"],
    cta: "Go Heroic",
    bg: "bg-shroom-sky",
  },
];

const Subscriptions = () => {
  return (
    <section className="bg-shroom-sage" id="subskrypcje">
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
            Elastyczne plany. Zero zobowiązań — anuluj kiedy chcesz.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-[3px]">
          {subscriptions.map((sub) => (
            <div key={sub.name} className={`${sub.bg} p-6 md:p-8 flex flex-col`}>
              <div className="flex items-center gap-2 mb-5">
                <span className="bg-background/70 px-2.5 py-1 font-display text-[11px] font-semibold text-foreground">
                  {sub.badge}
                </span>
                {sub.featured && (
                  <span className="bg-foreground text-background px-2.5 py-1 font-body text-[11px] font-medium">
                    Najczęściej wybierany
                  </span>
                )}
              </div>

              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
                {sub.name}
              </h3>
              <p className="font-body text-sm text-foreground/50 mb-5">{sub.headline}</p>

              <ul className="space-y-2 mb-6">
                {sub.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-foreground flex-shrink-0" />
                    <span className="font-body text-xs text-foreground">{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <p className="font-display text-3xl font-bold text-foreground mb-0.5">
                  {sub.price} <span className="text-base font-normal text-foreground/40">zł</span>
                </p>
                <p className="font-body text-[11px] text-foreground/40 mb-4">
                  {sub.bottles} · {sub.period}
                </p>
                <button className="w-full flex items-center justify-center gap-2 bg-foreground text-background py-3 font-display font-semibold text-xs hover:opacity-90 transition-opacity">
                  {sub.cta}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 font-body text-[11px] text-foreground/40">
          Bez zobowiązań · Anuluj w dowolnym momencie · Bezpieczna płatność
        </p>
      </div>
    </section>
  );
};

export default Subscriptions;
