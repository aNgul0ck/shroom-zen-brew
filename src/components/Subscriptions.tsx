import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const subscriptions = [
  {
    badge: "Starter",
    name: "Starter Ritual",
    headline: "Spróbuj. Serio.",
    price: "149",
    bottles: "12 butelek",
    period: "Power lub Relax",
    highlights: [
      "2 tygodnie eksperymentu",
      "1 butelka dziennie",
      "Idealny na prezent",
    ],
    cta: "Rozpocznij",
    gradient: "ed-bg-gold",
  },
  {
    badge: "Bestseller",
    name: "Good Trip",
    headline: "Dzień w harmonii.",
    price: "269",
    bottles: "24 butelki",
    period: "12 Power + 12 Relax",
    highlights: [
      "Pełny rytm dnia",
      "Rano: aktywacja",
      "Wieczór: wyciszenie",
    ],
    cta: "Wybierz",
    gradient: "ed-bg-mint",
    featured: true,
  },
  {
    badge: "Pro",
    name: "Feel Your Best",
    headline: "Pełna transformacja.",
    price: "499",
    bottles: "48 butelek",
    period: "24 Power + 24 Relax",
    highlights: [
      "Miesiąc wsparcia",
      "2 butelki dziennie",
      "Maksymalne efekty",
    ],
    cta: "Go Heroic",
    gradient: "ed-bg-sky",
  },
];

const Subscriptions = () => {
  return (
    <section className="ed-section ed-bg-cream" id="subskrypcje">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl mb-6 md:mb-8">
          <p className="font-body text-sm font-medium text-accent uppercase tracking-[0.2em] mb-6">
            Subskrypcje
          </p>
          <h2 className="ed-heading text-foreground">
            Wybierz swój{" "}
            <span className="text-muted-foreground/40">rytm.</span>
          </h2>
        </div>

        <p className="font-body text-lg text-muted-foreground max-w-xl mb-16 md:mb-20">
          Regularne wsparcie organizmu. Elastyczne plany. Zero zobowiązań — anuluj kiedy chcesz.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-1">
          {subscriptions.map((sub, index) => (
            <motion.div
              key={sub.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`${sub.gradient} p-8 md:p-10 flex flex-col relative`}
            >
              {/* Badges */}
              <div className="flex items-center gap-2 mb-8">
                <span className="ed-overlay-card px-3 py-1 rounded-none font-display text-xs font-semibold text-foreground">
                  {sub.badge}
                </span>
                {sub.featured && (
                  <span className="bg-foreground text-background px-3 py-1 font-body text-xs font-medium">
                    Najczęściej wybierany
                  </span>
                )}
              </div>

              {/* Name & Headline */}
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                {sub.name}
              </h3>
              <p className="font-body text-base text-muted-foreground mb-8">
                {sub.headline}
              </p>

              {/* Highlights */}
              <ul className="space-y-3 mb-10">
                {sub.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-foreground flex-shrink-0" />
                    <span className="font-body text-sm text-foreground">{h}</span>
                  </li>
                ))}
              </ul>

              {/* Price & CTA */}
              <div className="mt-auto">
                <div className="mb-6">
                  <p className="ed-stat text-4xl">{sub.price} <span className="text-lg font-normal text-muted-foreground">zł</span></p>
                  <p className="font-body text-sm text-muted-foreground mt-1">
                    {sub.bottles} · {sub.period}
                  </p>
                </div>

                <button className="w-full inline-flex items-center justify-center gap-2 bg-foreground text-background py-4 font-display font-semibold text-sm hover:opacity-90 transition-opacity">
                  {sub.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-12 font-body text-sm text-muted-foreground">
          Bez zobowiązań · Anuluj w dowolnym momencie · Bezpieczna płatność
        </p>
      </div>
    </section>
  );
};

export default Subscriptions;
