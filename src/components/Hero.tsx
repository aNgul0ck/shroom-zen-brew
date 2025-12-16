import { ArrowRight, Sparkles } from "lucide-react";
import productPower from "@/assets/product-power.png";
import productRelax from "@/assets/product-relax.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration with brand colors */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-shroom-sage/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-shroom-peach/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-shroom-gold/15 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-1/3 w-64 h-64 bg-shroom-pink/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-up">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="font-body text-sm font-medium text-secondary-foreground">
                Pierwszy napój adaptogenowy w Polsce
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6 animate-fade-up delay-100">
              Moc natury
              <br />
              <span className="text-gradient">w każdym łyku</span>
            </h1>

            <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up delay-200">
              Shroom to napoje funkcjonalne z soplówką jeżowatą — naturalnym adaptogenem wspierającym Twój mózg i ciało. Bez cukru, bez sztucznych słodzików.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
              <a
                href="#produkty"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-display font-semibold text-base hover:scale-105 transition-all duration-300 shadow-elevated"
              >
                Odkryj napoje
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#adaptogeny"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-display font-semibold text-base hover:bg-secondary/80 transition-all duration-300"
              >
                Czym są adaptogeny?
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/50 animate-fade-up delay-400">
              <div>
                <p className="font-display text-3xl font-bold text-primary">100%</p>
                <p className="font-body text-sm text-muted-foreground">Naturalny skład</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-primary">0g</p>
                <p className="font-body text-sm text-muted-foreground">Dodanego cukru</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-primary">🇵🇱</p>
                <p className="font-body text-sm text-muted-foreground">Made in Poland</p>
              </div>
            </div>
          </div>

          {/* Hero Image - Real Products */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative flex items-end gap-4">
              {/* Power Bottle */}
              <div className="animate-float">
                <img
                  src={productPower}
                  alt="Shroom Power"
                  className="h-72 md:h-96 w-auto object-contain drop-shadow-2xl"
                />
              </div>
              
              {/* Relax Bottle */}
              <div className="animate-float-delayed">
                <img
                  src={productRelax}
                  alt="Shroom Relax"
                  className="h-72 md:h-96 w-auto object-contain drop-shadow-2xl"
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -left-8 top-1/4 bg-card px-4 py-3 rounded-2xl shadow-card animate-float-delayed">
                <p className="font-display font-bold text-primary text-sm">Lion's Mane</p>
                <p className="font-body text-xs text-muted-foreground">Soplówka jeżowata</p>
              </div>
              
              <div className="absolute -right-4 bottom-1/4 bg-shroom-coral text-shroom-cream px-4 py-3 rounded-2xl shadow-card animate-float">
                <p className="font-display font-bold text-sm">Nootropik</p>
                <p className="font-body text-xs text-shroom-cream/90">Wspiera mózg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
