import { motion } from "framer-motion";
import { Brain, Shield, Battery, Leaf } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Funkcje poznawcze",
    description: "Cynk przyczynia się do utrzymania prawidłowych funkcji poznawczych.",
    note: "*EFSA",
  },
  {
    icon: Shield,
    title: "Układ odpornościowy",
    description: "Witamina C wspiera prawidłowe funkcjonowanie układu odpornościowego.",
    note: "*EFSA",
  },
  {
    icon: Battery,
    title: "Naturalna energia",
    description: "Bez kofeiny, bez spadku energii. Adaptogeny wspierają organizm holistycznie.",
    note: "",
  },
  {
    icon: Leaf,
    title: "Czysty skład",
    description: "Bez dodanego cukru, bez sztucznych słodzików, barwników i konserwantów.",
    note: "",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-4">
            Dlaczego Shroom?
          </p>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
            Korzyści w każdym łyku
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group text-center p-8 bg-card rounded-3xl shadow-soft hover:shadow-card transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
                {benefit.note && (
                  <p className="font-body text-xs text-muted-foreground/60 mt-3">
                    {benefit.note}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
