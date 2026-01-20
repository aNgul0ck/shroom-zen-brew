import { motion } from "framer-motion";
import { Brain, Battery, Moon, Heart } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "Focus",
    description: "Wsparcie koncentracji i funkcji poznawczych",
  },
  {
    icon: Battery,
    title: "Energy",
    description: "Naturalna energia bez crashu kofeinowego",
  },
  {
    icon: Moon,
    title: "Relax",
    description: "Wyciszenie i regeneracja po intensywnym dniu",
  },
  {
    icon: Heart,
    title: "Balance",
    description: "Adaptogeny dla równowagi ciała i umysłu",
  },
];

const IntroSection = () => {
  return (
    <section className="py-24 bg-background border-t border-border" id="o-nas">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="font-body text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] mb-4">
            Czym jest Shroom?
          </p>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Napoje funkcjonalne<br />nowej generacji
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Stworzone z myślą o Twoim ciele i umyśle. 
            Bez kompromisów — tylko to, co działa.
          </p>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary/50 flex items-center justify-center group-hover:bg-secondary transition-colors duration-300">
                <pillar.icon className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {pillar.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 pt-10 border-t border-border"
        >
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-center">
            <div>
              <p className="font-display text-3xl font-bold text-foreground">500mg</p>
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wide">Lion's Mane</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-foreground">0g</p>
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wide">Added sugar</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-foreground">100%</p>
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wide">Natural</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-foreground">Made in</p>
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wide">Poland 🇵🇱</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
