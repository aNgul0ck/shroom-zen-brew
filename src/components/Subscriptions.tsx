import { motion } from "framer-motion";
import { Check } from "lucide-react";

const subscriptions = [
  {
    id: 1,
    badge: "Starter",
    badgeColor: "bg-shroom-peach text-foreground",
    name: "Starter Ritual",
    description: "12 bottles of Power or Relax",
    price: "149",
    period: "A 2-week ritual · 1 bottle per day",
    perfectFor: "New users who want to gently explore the effects",
    benefits: [
      "A light start to feel the difference",
      "Ideal as a personal or thoughtful gift",
    ],
    cta: "Start ritual",
    ctaStyle: "bg-shroom-peach text-foreground hover:bg-shroom-peach/80",
    toggle: true,
  },
  {
    id: 2,
    badge: "Most popular",
    badgeColor: "bg-shroom-green text-foreground",
    name: "Good Trip",
    description: "A day in harmony",
    price: "269",
    period: "12 Power + 12 Relax · 24 bottles / month",
    perfectFor: "Those who want to follow the natural rhythm of the day",
    benefits: [
      "Morning activation and evening unwind",
      "Full-body support from AM to PM",
    ],
    cta: "Choose Good Trip",
    ctaStyle: "bg-shroom-green text-foreground hover:bg-shroom-green/80",
    featured: true,
  },
  {
    id: 3,
    badge: "Advanced",
    badgeColor: "bg-shroom-lavender text-white",
    name: "Feel Your Best",
    description: "One month of balance",
    price: "499",
    period: "24 Power + 24 Relax · 2 bottles per day",
    perfectFor: "People who want clarity by day and recovery by night",
    benefits: [
      "Helps enter a state of focus and mental clarity",
      "Keeps your rhythm steady without burning out",
      "For those who go all in — consciously",
    ],
    cta: "Go Heroic",
    ctaStyle: "bg-shroom-lavender text-white hover:bg-shroom-lavender/80",
  },
];

const Subscriptions = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
            Subscriptions
          </h2>
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
            <span className="text-xs">🍄</span>
          </div>
        </div>

        <p className="font-body text-muted-foreground max-w-2xl mb-12">
          Get more for less at a monthly rate, with dedicated customer portal access to manage
          your subscriptions and cancel them anytime. Three packages to match your needs.
        </p>

        {/* Subscription Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {subscriptions.map((sub, index) => (
            <motion.div
              key={sub.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`bg-card rounded-2xl p-6 border ${sub.featured ? 'border-shroom-green' : 'border-border'}`}
            >
              {/* Badge */}
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${sub.badgeColor}`}>
                {sub.badge}
              </span>

              {/* Toggle for Starter */}
              {sub.toggle && (
                <div className="flex gap-2 mb-4">
                  <button className="px-4 py-2 bg-secondary rounded-full text-sm font-medium">
                    Power
                  </button>
                  <button className="px-4 py-2 text-muted-foreground text-sm font-medium hover:bg-secondary/50 rounded-full transition-colors">
                    Relax
                  </button>
                </div>
              )}

              {/* Name & Description */}
              <h3 className="font-display text-xl font-bold text-foreground mb-1">
                {sub.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-4">
                {sub.description}
              </p>

              {/* Price */}
              <p className="font-display text-4xl font-bold text-foreground mb-1">
                {sub.price} <span className="text-lg font-normal">PLN</span>
              </p>
              <p className="font-body text-xs text-muted-foreground mb-6">
                {sub.period}
              </p>

              {/* Perfect for */}
              <p className="font-body text-xs text-muted-foreground mb-2">Perfect for:</p>
              <p className="font-body text-sm text-foreground mb-6">
                {sub.perfectFor}
              </p>

              {/* Benefits */}
              <p className="font-body text-xs text-muted-foreground mb-3">What it gives you:</p>
              <ul className="space-y-2 mb-6">
                {sub.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 font-body text-sm text-foreground">
                    <span className="text-muted-foreground mt-0.5">○</span>
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* Cancel note for Starter */}
              {sub.toggle && (
                <p className="font-body text-xs text-muted-foreground mb-4">
                  Not feeling it? Cancel anytime after the first month.
                </p>
              )}

              {/* CTA */}
              <button className={`w-full py-3 rounded-full font-display font-semibold text-sm transition-colors ${sub.ctaStyle}`}>
                {sub.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Manage Button */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-foreground text-foreground px-8 py-3 rounded-full font-display font-medium text-sm hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Manage subscriptions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Subscriptions;
