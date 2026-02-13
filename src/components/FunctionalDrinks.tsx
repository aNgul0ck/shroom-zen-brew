import { ArrowRight, Sun, Moon, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import productPower from "@/assets/product-power.png";
import productRelax from "@/assets/product-relax.png";

const products = [
  {
    id: 1,
    name: "Shroom Power",
    tagline: "Energia na cały dzień",
    image: productPower,
    icon: Sun,
    color: "shroom-gold",
    bgColor: "bg-amber-50 dark:bg-amber-950/20",
    benefits: ["Lion's Mane", "Żeń-szeń", "Witamina C"],
    time: "Rano",
    description: "Aktywuj umysł i ciało naturalną energią bez crashu kofeinowego.",
  },
  {
    id: 2,
    name: "Shroom Relax",
    tagline: "Spokój i regeneracja",
    image: productRelax,
    icon: Moon,
    color: "shroom-lavender",
    bgColor: "bg-violet-50 dark:bg-violet-950/20",
    benefits: ["Lion's Mane", "L-Teanina", "Chmiel"],
    time: "Wieczór",
    description: "Wycisz się po intensywnym dniu i przygotuj organizm do regeneracji.",
  },
];

const FunctionalDrinks = () => {
  return (
    <section className="py-24 bg-background" id="produkty">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] mb-4">
            Shroom Drinks
          </p>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            Rytm dnia i nocy
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Dwa napoje zaprojektowane do naturalnego rytmu Twojego ciała — 
            energia rano, spokój wieczorem.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className={`${product.bgColor} rounded-3xl p-8 lg:p-10 group`}
            >
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* Product Image */}
                <div className="flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-48 lg:h-64 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="text-center lg:text-left flex-1">
                  {/* Time Badge */}
                  <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
                    <product.icon className={`w-4 h-4 text-${product.color}`} />
                    <span className="font-body text-xs font-medium text-foreground uppercase tracking-wide">
                      {product.time}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-2">
                    {product.name}
                  </h3>
                  
                  <p className="font-body text-lg text-muted-foreground mb-4">
                    {product.tagline}
                  </p>

                  <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Benefits Pills */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                    {product.benefits.map((benefit) => (
                      <span
                        key={benefit}
                        className="bg-background/60 backdrop-blur-sm px-3 py-1.5 rounded-full font-body text-xs text-foreground"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to={`/produkt/${product.id === 1 ? "shroom-power" : "shroom-relax"}`}
                    className="inline-flex items-center gap-2 font-display font-semibold text-sm text-foreground hover:gap-3 transition-all duration-300"
                  >
                    Zobacz produkt
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunctionalDrinks;
