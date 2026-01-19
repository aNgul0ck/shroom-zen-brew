import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-drinks.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="Shroom drinks lifestyle"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <p className="font-body text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-6">
              Napoje funkcjonalne
            </p>

            {/* Headline */}
            <h1 className="font-headline text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] mb-8">
              Świadomy wybór.
              <br />
              <span className="text-accent">Codziennie.</span>
            </h1>

            {/* Subheadline */}
            <p className="font-body text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
              Pierwszy w Polsce napój z soplówką jeżowatą. Źródło cynku i witaminy C. 
              Bez cukru, bez sztucznych dodatków.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#produkty"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-display font-semibold text-base hover:scale-105 transition-transform duration-300 shadow-elevated"
              >
                Odkryj napoje
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#o-nas"
                className="inline-flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-border text-foreground px-8 py-4 rounded-full font-display font-semibold text-base hover:bg-card transition-colors duration-300"
              >
                Poznaj markę
              </a>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-6 mt-16 pt-8 border-t border-border/30"
          >
            {[
              { value: "0g", label: "cukru" },
              { value: "100%", label: "naturalny" },
              { value: "Made in", label: "Poland" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="font-display text-2xl font-bold text-foreground">{item.value}</p>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-foreground/40 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
