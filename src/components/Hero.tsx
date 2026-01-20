import { ArrowRight, Leaf, Sparkles, Shield } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-drinks.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="Shroom drinks"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Tagline */}
          <p className="font-body text-sm font-medium text-accent uppercase tracking-[0.3em] mb-6">
            The choice of feeling good
          </p>

          {/* Headline */}
          <h1 className="font-headline text-5xl sm:text-6xl lg:text-8xl font-bold text-foreground leading-[1.05] mb-10">
            shroom drinks
          </h1>

          {/* Key Benefits - Visual Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border px-5 py-2.5 rounded-full">
              <Leaf className="w-4 h-4 text-shroom-green" />
              <span className="font-body text-sm text-foreground">100% Natural</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border px-5 py-2.5 rounded-full">
              <Sparkles className="w-4 h-4 text-shroom-gold" />
              <span className="font-body text-sm text-foreground">Lion's Mane</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border px-5 py-2.5 rounded-full">
              <Shield className="w-4 h-4 text-shroom-lavender" />
              <span className="font-body text-sm text-foreground">Sugar-Free</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#produkty"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-display font-medium text-sm hover:bg-foreground/90 transition-colors duration-300"
            >
              Explore products
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#o-nas"
              className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border text-foreground px-8 py-4 rounded-full font-display font-medium text-sm hover:bg-secondary transition-colors duration-300"
            >
              Learn more
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-foreground/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
