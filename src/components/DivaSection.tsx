import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import productDiva from "@/assets/product-diva.png";

const DivaSection = () => {
  return (
    <section className="py-24 bg-[#1a0a12] text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-sm font-medium text-diva-pink uppercase tracking-[0.3em] mb-4">
              Social Elixir
            </p>

            <h2 className="font-headline text-5xl md:text-6xl font-bold text-diva-pink mb-6">
              diva
            </h2>

            <p className="font-body text-xl text-white/80 mb-6 leading-relaxed">
              Celebruj każdą chwilę
            </p>

            <p className="font-body text-white/60 mb-8 leading-relaxed max-w-md">
              Bezalkoholowe aperitivo z 13 składnikami botanicznymi. 
              Spektakularne koktajle bez kompromisów — z jadalnym brokatem.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-3 mb-10">
              {["13 botaników", "Bezalkoholowe", "Jadalny brokat", "Żeń-szeń"].map((feature) => (
                <span
                  key={feature}
                  className="bg-white/10 px-4 py-2 rounded-full font-body text-sm text-white/80"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Price & CTA */}
            <div className="flex items-center gap-8">
              <div>
                <p className="font-display text-3xl font-bold text-white">112 zł</p>
                <p className="font-body text-sm text-white/50">500ml</p>
              </div>
              
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-diva-pink text-[#1a0a12] px-8 py-4 rounded-full font-display font-semibold text-sm hover:bg-white transition-colors duration-300"
              >
                Shop Diva
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-diva-pink/20 rounded-full blur-3xl scale-75" />
              
              <img
                src={productDiva}
                alt="Diva Social Elixir"
                className="relative h-[400px] md:h-[500px] w-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DivaSection;
