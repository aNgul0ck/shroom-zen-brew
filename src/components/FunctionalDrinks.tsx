import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import productPower from "@/assets/product-power.png";
import productRelax from "@/assets/product-relax.png";
import productDiva from "@/assets/product-diva.png";

const products = [
  {
    id: 1,
    name: "Shroom Relax",
    image: productRelax,
  },
  {
    id: 2,
    name: "Shroom Power",
    image: productPower,
  },
  {
    id: 3,
    name: "Diva Social Elixir",
    image: productDiva,
  },
];

const FunctionalDrinks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
            Functional drinks
          </h2>
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
            <span className="text-xs">🍄</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card p-8 flex flex-col items-center group cursor-pointer hover:bg-secondary/20 transition-colors duration-300"
            >
              <div className="h-48 md:h-56 flex items-center justify-center mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="font-display text-lg font-semibold text-foreground text-center">
                {product.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Shop Button */}
        <div className="text-center mt-10">
          <a
            href="#produkty"
            className="inline-flex items-center gap-2 border border-foreground text-foreground px-8 py-3 rounded-full font-display font-medium text-sm hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Shop
          </a>
        </div>
      </div>
    </section>
  );
};

export default FunctionalDrinks;
