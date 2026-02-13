import { motion } from "framer-motion";
import type { Product } from "@/data/products";

interface Props {
  product: Product;
}

const ProductIngredients = ({ product }: Props) => {
  const isDiva = product.isDiva;

  return (
    <section className={`py-24 ${isDiva ? "bg-[#140810]" : "bg-background"}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className={`font-body text-sm font-medium uppercase tracking-[0.2em] mb-4 ${isDiva ? "text-diva-pink" : "text-muted-foreground"}`}>
            Składniki
          </p>
          <h2 className={`font-headline text-3xl md:text-4xl font-bold ${isDiva ? "text-white" : "text-foreground"}`}>
            Co jest w środku
          </h2>
        </motion.div>

        {/* Vertical timeline */}
        <div className="max-w-2xl mx-auto relative">
          {/* Timeline line */}
          <div className={`absolute left-6 top-0 bottom-0 w-px ${isDiva ? "bg-diva-pink/20" : "bg-border"}`} />

          {product.ingredients.map((ingredient, index) => (
            <motion.div
              key={ingredient.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative pl-16 pb-10 last:pb-0"
            >
              {/* Timeline dot */}
              <div className={`absolute left-4 top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                isDiva ? "border-diva-pink bg-[#1a0a12]" : "border-foreground bg-background"
              }`}>
                <div className={`w-2 h-2 rounded-full ${isDiva ? "bg-diva-pink" : "bg-foreground"}`} />
              </div>

              {/* Content */}
              <div className={`rounded-2xl p-5 ${isDiva ? "bg-white/5" : "bg-card border border-border"}`}>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className={`font-display text-base font-semibold ${isDiva ? "text-white" : "text-foreground"}`}>
                    {ingredient.name}
                  </h3>
                  <span className={`shrink-0 font-display text-sm font-bold px-3 py-1 rounded-full ${
                    isDiva ? "bg-diva-pink/10 text-diva-pink" : "bg-secondary text-foreground"
                  }`}>
                    {ingredient.dosage}
                  </span>
                </div>
                <p className={`font-body text-sm ${isDiva ? "text-white/50" : "text-muted-foreground"}`}>
                  {ingredient.benefit}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* EFSA disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className={`text-center mt-12 font-body text-xs max-w-xl mx-auto ${isDiva ? "text-white/30" : "text-muted-foreground"}`}
        >
          * Oświadczenia zdrowotne zatwierdzone przez EFSA zgodnie z rozporządzeniem (UE) nr 432/2012.
        </motion.p>
      </div>
    </section>
  );
};

export default ProductIngredients;
