import { Info, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Disclaimer = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl p-8 md:p-10 shadow-soft max-w-4xl mx-auto"
        >
          <div className="flex items-start gap-5">
            <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
              <Info className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                Informacja o oświadczeniach zdrowotnych
              </h3>
              <div className="space-y-4 font-body text-muted-foreground">
                <p>
                  <strong className="text-foreground">*</strong> Oświadczenia zdrowotne dotyczące cynku i witaminy C 
                  są zatwierdzone przez Europejski Urząd ds. Bezpieczeństwa Żywności (EFSA).
                </p>
                <p className="text-sm">
                  <strong className="text-foreground">Cynk</strong> przyczynia się do prawidłowych funkcji poznawczych. 
                  <strong className="text-foreground ml-2">Witamina C</strong> przyczynia się do prawidłowego 
                  funkcjonowania układu nerwowego.
                </p>
                <p className="text-xs text-muted-foreground/70 pt-4 border-t border-border">
                  Suplement diety nie może być stosowany jako substytut zróżnicowanej diety.
                </p>
              </div>

              <Link
                to="/badania"
                className="inline-flex items-center gap-2 mt-6 text-accent font-display font-semibold text-sm hover:gap-3 transition-all"
              >
                Zobacz badania naukowe
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Disclaimer;
