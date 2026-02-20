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
    color: "bg-shroom-peach/30",
    badgeColor: "bg-background/70",
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
    color: "bg-shroom-sage/35",
    badgeColor: "bg-background/70",
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
    color: "bg-shroom-lavender/20",
    badgeColor: "bg-background/70",
  },
];

const Subscriptions = () => {
  return (
    <section className="py-28 md:py-36 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-6 md:mb-8"
        >
          <p className="font-body text-sm font-medium text-accent uppercase tracking-[0.2em] mb-6">
            Subskrypcje
          </p>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]">
            Wybierz swój{" "}
            <span className="text-muted-foreground/40">rytm.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-body text-lg text-muted-foreground max-w-xl mb-16 md:mb-20"
        >
          Regularne wsparcie organizmu. Elastyczne plany. Zero zobowiązań — anuluj kiedy chcesz.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {subscriptions.map((sub, index) => (
            <motion.div
              key={sub.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`${sub.color} rounded-3xl p-8 md:p-10 flex flex-col relative`}
            >
              {/* Badges */}
              <div className="flex items-center gap-2 mb-8">
                <span className={`${sub.badgeColor} backdrop-blur-sm px-3 py-1 rounded-full font-display text-xs font-semibold text-foreground`}>
                  {sub.badge}
                </span>
                {sub.featured && (
                  <span className="bg-foreground text-background px-3 py-1 rounded-full font-body text-xs font-medium">
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
                    <div className="w-5 h-5 rounded-full bg-background/60 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-foreground" />
                    </div>
                    <span className="font-body text-sm text-foreground">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Price & CTA — pinned to bottom */}
              <div className="mt-auto">
                <div className="mb-6">
                  <p className="font-display text-4xl font-bold text-foreground">
                    {sub.price}{" "}
                    <span className="text-lg font-normal text-muted-foreground">
                      zł
                    </span>
                  </p>
                  <p className="font-body text-sm text-muted-foreground mt-1">
                    {sub.bottles} · {sub.period}
                  </p>
                </div>

                <button className="w-full inline-flex items-center justify-center gap-2 bg-foreground text-background py-4 rounded-full font-display font-semibold text-sm hover:opacity-90 transition-opacity">
                  {sub.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 font-body text-sm text-muted-foreground"
        >
          Bez zobowiązań · Anuluj w dowolnym momencie · Bezpieczna płatność
        </motion.p>
      </div>
    </section>
  );
};

export default Subscriptions;
