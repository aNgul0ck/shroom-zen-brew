import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import productDiva from "@/assets/product-diva.png";

const DivaSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a12] via-[#2d1220] to-[#1a0a12]" />
      
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-diva-pink/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-diva-pink" />
              <span className="font-body text-sm font-medium text-diva-pink">
                Social Elixir
              </span>
            </div>

            <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05]">
              <span className="text-diva-pink">diva</span>
            </h2>
            
            <p className="font-body text-2xl md:text-3xl text-white/90 mb-6 leading-relaxed">
              Celebruj każdą chwilę
            </p>

            <p className="font-body text-lg text-white/60 mb-10 max-w-md leading-relaxed">
              Bezalkoholowe aperitivo z 13 składnikami botanicznymi. 
              Diva łączy przyjemność ze świadomym wyborem — spektakularne koktajle bez kompromisów.
            </p>

            {/* Key features */}
            <div className="flex flex-wrap gap-3 mb-10">
              {["13 botaników", "Bezalkoholowe", "Jadalny brokat", "Żeń-szeń"].map((feature) => (
                <span
                  key={feature}
                  className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full font-body text-sm text-white/80 border border-white/10"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Price & CTA */}
            <div className="flex flex-wrap items-center gap-8">
              <div>
                <p className="font-display text-4xl font-bold text-white">112 zł</p>
                <p className="font-body text-sm text-white/50">500ml / 10 porcji</p>
              </div>
              
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-diva-pink text-[#1a0a12] px-8 py-4 rounded-full font-display font-bold text-base hover:bg-white transition-colors duration-300"
              >
                Zamów Divę
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow behind bottle */}
              <div className="absolute inset-0 bg-diva-pink/20 rounded-full blur-3xl scale-75" />
              
              <img
                src={productDiva}
                alt="Diva Social Elixir"
                className="relative h-[450px] md:h-[550px] w-auto object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DivaSection;
