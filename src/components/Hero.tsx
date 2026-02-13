import { ArrowRight, Star, Check, Quote } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-lifestyle.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Friends enjoying Shroom drinks together"
          className="w-full h-full object-cover scale-x-[-1] object-[30%_center]"
        />
        {/* Gradient overlay - stronger on left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10 md:to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-24 pb-24">
        <div className="max-w-xl">
          {/* Star rating badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-8"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-shroom-gold text-shroom-gold" />
              ))}
            </div>
            <span className="font-body text-sm font-semibold text-white/90">4.9/5</span>
            <span className="font-body text-xs text-white/60">· 200+ recenzji</span>
          </motion.div>

          {/* Dream outcome headline */}
          <motion.h1
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-headline text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
          >
            Poczuj się{" "}
            <span className="text-shroom-gold">świetnie</span>
            <br />
            bez alkoholu
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-base sm:text-lg text-white/70 leading-relaxed mb-8 max-w-md"
          >
            Funkcjonalne napoje z soplówką jeżowatą. Energia, spokój i dobre samopoczucie — bez kompromisów.
          </motion.p>

          {/* Trust pills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {["0g cukru", "100% naturalne", "Lion's Mane"].map((item) => (
              <div
                key={item}
                className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-2 rounded-full"
              >
                <Check className="w-3.5 h-3.5 text-shroom-green" />
                <span className="font-body text-xs sm:text-sm text-white/90">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <a
              href="#produkty"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-display font-medium text-sm hover:bg-white/90 transition-colors duration-300"
            >
              Kup Shrooma
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#o-nas"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-display font-medium text-sm hover:bg-white/20 transition-colors duration-300"
            >
              Dowiedz się więcej
            </a>
          </motion.div>

          {/* Mini testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-start gap-3 max-w-sm"
          >
            <Quote className="w-5 h-5 text-shroom-gold/60 shrink-0 mt-0.5" />
            <div>
              <p className="font-body text-sm text-white/70 italic leading-relaxed">
                "Diva zastąpiła mi kieliszek wina. Wychodzę, bawię się i rano czuję się super."
              </p>
              <p className="font-body text-xs text-white/40 mt-1.5">
                — Ewa K., Projektantka UX
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
