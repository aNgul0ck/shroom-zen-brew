import { motion } from "framer-motion";
import { Brain, Battery, Moon, Heart } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "Focus",
    description: "Wyostrz umysł bez kawy na pusty żołądek.",
    color: "bg-shroom-sage/40",
  },
  {
    icon: Battery,
    title: "Energy",
    description: "Naturalna moc bez crashu o 15:00.",
    color: "bg-shroom-peach/40",
  },
  {
    icon: Moon,
    title: "Relax",
    description: "Wycisz się bez scrollowania do 3 w nocy.",
    color: "bg-shroom-lavender/30",
  },
  {
    icon: Heart,
    title: "Balance",
    description: "Adaptogeny, nie kolejna tabletka.",
    color: "bg-shroom-gold/30",
  },
];

const IntroSection = () => {
  return (
    <section className="py-28 md:py-36 bg-background" id="o-nas">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Message — bold & edgy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-24 md:mb-32"
        >
          <p className="font-body text-sm font-medium text-accent uppercase tracking-[0.2em] mb-6">
            Czym jest Shroom?
          </p>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8">
            Stop feeling{" "}
            <span className="text-muted-foreground/40">like shit.</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Napoje funkcjonalne z soplówką jeżowatą. Bez cukru, bez ściemy, bez efektów ubocznych. Tylko to, czego Twój organizm naprawdę potrzebuje.
          </p>
        </motion.div>

        {/* 4 Pillars — clean cards with pastel backgrounds */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              className={`${pillar.color} rounded-3xl p-8 md:p-10 group`}
            >
              <div className="w-12 h-12 rounded-2xl bg-background/70 flex items-center justify-center mb-8">
                <pillar.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats — minimal, spaced out */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 md:mt-32"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
            {[
              { value: "500mg", label: "Lion's Mane" },
              { value: "0g", label: "Dodanego cukru" },
              { value: "100%", label: "Naturalne składniki" },
              { value: "🇵🇱", label: "Made in Poland" },
            ].map((stat, i) => (
              <div key={i} className="text-center lg:text-left">
                <p className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
