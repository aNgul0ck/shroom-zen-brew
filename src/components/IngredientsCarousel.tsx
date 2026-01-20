import { motion } from "framer-motion";
import { Leaf, Brain, Zap, Moon, Heart, Shield } from "lucide-react";

const ingredients = [
  { 
    name: "Lion's Mane", 
    icon: Brain,
    benefit: "Funkcje poznawcze",
    description: "Wspiera koncentrację i pamięć"
  },
  { 
    name: "L-Teanina", 
    icon: Moon,
    benefit: "Relaksacja",
    description: "Spokój bez senności"
  },
  { 
    name: "Żeń-szeń", 
    icon: Zap,
    benefit: "Energia",
    description: "Naturalna witalność"
  },
  { 
    name: "Chmiel", 
    icon: Leaf,
    benefit: "Sen",
    description: "Wsparcie regeneracji"
  },
  { 
    name: "Witamina C", 
    icon: Shield,
    benefit: "Odporność",
    description: "Ochrona organizmu"
  },
  { 
    name: "Cynk", 
    icon: Heart,
    benefit: "Metabolizm",
    description: "Prawidłowe funkcjonowanie"
  },
];

const IngredientsCarousel = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] mb-4">
            Składniki
          </p>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tylko to, co działa
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Starannie dobrane składniki o udowodnionym działaniu.
            Bez sztucznych dodatków. Bez kompromisów.
          </p>
        </motion.div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={ingredient.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-5 text-center group hover:bg-card/80 transition-colors duration-300 border border-border"
            >
              {/* Icon */}
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ingredient.icon className="w-6 h-6 text-foreground" />
              </div>

              {/* Name */}
              <h3 className="font-display text-sm font-semibold text-foreground mb-1">
                {ingredient.name}
              </h3>

              {/* Benefit Badge */}
              <span className="inline-block bg-secondary/50 px-2 py-0.5 rounded text-xs font-body text-muted-foreground mb-2">
                {ingredient.benefit}
              </span>

              {/* Description */}
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                {ingredient.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* EFSA Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 font-body text-xs text-muted-foreground max-w-2xl mx-auto"
        >
          * Oświadczenia zdrowotne zgodne z rozporządzeniem EFSA. 
          Cynk przyczynia się do prawidłowego funkcjonowania układu odpornościowego. 
          Witamina C wspomaga prawidłowe funkcjonowanie układu nerwowego.
        </motion.p>
      </div>
    </section>
  );
};

export default IngredientsCarousel;
