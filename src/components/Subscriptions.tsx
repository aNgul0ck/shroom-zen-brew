import { motion } from "framer-motion";
import { Check, Zap, Sun, Moon, Crown } from "lucide-react";

const subscriptions = [
  {
    id: 1,
    icon: Zap,
    badge: "Starter",
    badgeColor: "bg-shroom-peach text-foreground",
    name: "Starter Ritual",
    headline: "Spróbuj",
    price: "149",
    bottles: "12 butelek",
    period: "Power lub Relax",
    highlights: [
      "2 tygodnie eksperymentu",
      "1 butelka dziennie",
      "Idealny na prezent",
    ],
    cta: "Rozpocznij",
    ctaStyle: "bg-shroom-peach text-foreground hover:bg-shroom-peach/80",
  },
  {
    id: 2,
    icon: Sun,
    badge: "Bestseller",
    badgeColor: "bg-shroom-green text-foreground",
    name: "Good Trip",
    headline: "Dzień w harmonii",
    price: "269",
    bottles: "24 butelki",
    period: "12 Power + 12 Relax",
    highlights: [
      "Pełny rytm dnia",
      "Rano: aktywacja",
      "Wieczór: wyciszenie",
    ],
    cta: "Wybierz",
    ctaStyle: "bg-shroom-green text-foreground hover:bg-shroom-green/80",
    featured: true,
  },
  {
    id: 3,
    icon: Crown,
    badge: "Pro",
    badgeColor: "bg-shroom-lavender text-white",
    name: "Feel Your Best",
    headline: "Pełna transformacja",
    price: "499",
    bottles: "48 butelek",
    period: "24 Power + 24 Relax",
    highlights: [
      "Miesiąc wsparcia",
      "2 butelki dziennie",
      "Maksymalne efekty",
    ],
    cta: "Go Heroic",
    ctaStyle: "bg-shroom-lavender text-white hover:bg-shroom-lavender/80",
  },
];

const Subscriptions = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] mb-4">
            Subskrypcje
          </p>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            Wybierz swój rytm
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Regularne wsparcie organizmu. Elastyczne plany. 
            Anuluj kiedy chcesz.
          </p>
        </motion.div>

        {/* Subscription Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {subscriptions.map((sub, index) => (
            <motion.div
              key={sub.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`bg-card rounded-2xl p-6 lg:p-8 border relative ${
                sub.featured 
                  ? 'border-shroom-green ring-2 ring-shroom-green/20' 
                  : 'border-border'
              }`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${sub.badgeColor.split(' ')[0]} flex items-center justify-center mb-6`}>
                <sub.icon className="w-6 h-6 text-foreground" />
              </div>

              {/* Badge */}
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${sub.badgeColor}`}>
                {sub.badge}
              </span>

              {/* Name & Headline */}
              <h3 className="font-display text-xl font-bold text-foreground mb-1">
                {sub.name}
              </h3>
              <p className="font-body text-muted-foreground mb-6">
                {sub.headline}
              </p>

              {/* Price */}
              <div className="mb-6">
                <p className="font-display text-4xl font-bold text-foreground">
                  {sub.price} <span className="text-lg font-normal text-muted-foreground">zł</span>
                </p>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  {sub.bottles} · {sub.period}
                </p>
              </div>

              {/* Highlights */}
              <ul className="space-y-3 mb-8">
                {sub.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-foreground" />
                    </div>
                    <span className="font-body text-sm text-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className={`w-full py-3.5 rounded-full font-display font-semibold text-sm transition-colors ${sub.ctaStyle}`}>
                {sub.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Trust Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-10 font-body text-sm text-muted-foreground"
        >
          Bez zobowiązań. Anuluj w dowolnym momencie. Bezpieczna płatność.
        </motion.p>
      </div>
    </section>
  );
};

export default Subscriptions;
