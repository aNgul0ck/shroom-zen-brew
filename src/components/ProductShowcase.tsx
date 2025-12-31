import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import productPower from "@/assets/product-power.png";
import productRelax from "@/assets/product-relax.png";

const ProductShowcase = () => {
  return (
    <section className="py-24 bg-shroom-sage/30 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative flex items-end gap-2">
              <img
                src={productPower}
                alt="Shroom Power"
                className="h-72 md:h-96 w-auto object-contain drop-shadow-2xl"
              />
              <img
                src={productRelax}
                alt="Shroom Relax"
                className="h-72 md:h-96 w-auto object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="inline-block font-body text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Napoje funkcjonalne
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Zasługujesz na wsparcie.{" "}
              <span className="text-accent">Codziennie.</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-6">
              Shroom to napoje funkcjonalne z soplówką jeżowatą, które{" "}
              <strong>wspierają Twoje funkcje poznawcze i odporność</strong>. 
              Bez dodanego cukru, bez sztucznych słodzików, bez kompromisów.
            </p>
            <p className="font-body text-muted-foreground mb-8">
              Wszystko w jednej butelce. W formie, którą pokochasz.
            </p>

            <a
              href="#produkty"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full font-display font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Wybierz Shroom
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
