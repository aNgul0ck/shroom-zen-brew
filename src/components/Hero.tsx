import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import productPower from "@/assets/product-power.png";
import productRelax from "@/assets/product-relax.png";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/30 to-background" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-card border border-border/50 px-4 py-2 rounded-full mb-6 shadow-soft">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="font-body text-sm font-medium text-foreground">
                Pierwszy napój adaptogenowy w Polsce
              </span>
            </div>

            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] mb-6">
              Moc natury
              <br />
              <span className="text-accent">w każdym łyku</span>
            </h1>

            <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-md">
              Napoje funkcjonalne z soplówką jeżowatą i naturalną witaminą C. 
              Bez cukru, bez sztucznych słodzików.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#produkty"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-display font-semibold text-base hover:scale-105 transition-all duration-300 shadow-elevated"
              >
                Odkryj napoje
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#o-nas"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-primary/20 text-foreground px-8 py-4 rounded-full font-display font-semibold text-base hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                Poznaj markę
              </a>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative flex items-end gap-4">
              {/* Power Bottle */}
              <div className="animate-float">
                <img
                  src={productPower}
                  alt="Shroom Power"
                  className="h-64 md:h-80 lg:h-96 w-auto object-contain drop-shadow-2xl"
                />
              </div>
              
              {/* Relax Bottle */}
              <div className="animate-float-delayed">
                <img
                  src={productRelax}
                  alt="Shroom Relax"
                  className="h-64 md:h-80 lg:h-96 w-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
