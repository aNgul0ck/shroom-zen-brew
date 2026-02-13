import { ArrowRight, Wine, Sparkles, Leaf, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import productDiva from "@/assets/product-diva.png";

const features = [
  { icon: Wine, label: "Bezalkoholowe" },
  { icon: Sparkles, label: "Jadalny brokat" },
  { icon: Leaf, label: "13 botaników" },
  { icon: Heart, label: "Żeń-szeń" },
];

const DivaSection = () => {
  return (
    <section className="py-24 bg-[#1a0a12] text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Brand Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm font-medium text-diva-pink uppercase tracking-[0.3em] mb-4">
            Marka w marce
          </p>
          <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold text-diva-pink mb-4">
            diva
          </h2>
          <p className="font-body text-xl text-white/70">
            Social Elixir
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center order-2 lg:order-1"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-diva-pink/20 rounded-full blur-3xl scale-75" />
              
              <img
                src={productDiva}
                alt="Diva Social Elixir"
                className="relative h-[350px] md:h-[450px] w-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            {/* Tagline */}
            <p className="font-body text-2xl md:text-3xl text-white/90 mb-6 leading-relaxed">
              Celebruj każdą chwilę.
            </p>

            {/* Description - broken into digestible pieces */}
            <div className="space-y-4 mb-10">
              <p className="font-body text-white/60 leading-relaxed">
                Bezalkoholowe aperitivo stworzone do wyjątkowych momentów.
              </p>
              <p className="font-body text-white/60 leading-relaxed">
                13 składników botanicznych. Spektakularny smak. Jadalny brokat.
              </p>
              <p className="font-body text-white/60 leading-relaxed">
                Koktajle bez kompromisów.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-xl"
                >
                  <feature.icon className="w-5 h-5 text-diva-pink" />
                  <span className="font-body text-sm text-white/80">{feature.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Price & CTA */}
            <div className="flex flex-wrap items-center gap-6">
              <div>
                <p className="font-display text-3xl font-bold text-white">112 zł</p>
                <p className="font-body text-sm text-white/50">500ml</p>
              </div>
              
              <Link
                to="/produkt/diva"
                className="inline-flex items-center gap-2 bg-diva-pink text-[#1a0a12] px-8 py-4 rounded-full font-display font-semibold text-sm hover:bg-white transition-colors duration-300"
              >
                Shop Diva
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DivaSection;
