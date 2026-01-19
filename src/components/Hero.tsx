import { ArrowRight } from "lucide-react";
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
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Tagline */}
          <p className="font-body text-sm font-medium text-accent uppercase tracking-[0.3em] mb-6">
            The choice of feeling good
          </p>

          {/* Headline */}
          <h1 className="font-headline text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-8">
            shroom drinks
          </h1>

          {/* Subheadline */}
          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            Your new wellness drink — made with natural ingredients and backed by scientific research
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#o-nas"
              className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-8 py-4 rounded-full font-display font-medium text-sm hover:bg-secondary transition-colors duration-300"
            >
              Learn more
            </a>
            <a
              href="#produkty"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-display font-medium text-sm hover:bg-foreground/90 transition-colors duration-300"
            >
              Explore products
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
