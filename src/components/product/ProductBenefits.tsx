import { motion } from "framer-motion";
import type { Product } from "@/data/products";

interface Props {
  product: Product;
}

const ProductBenefits = ({ product }: Props) => {
  const isDiva = product.isDiva;

  return (
    <section className={`py-16 ${isDiva ? "bg-[#1a0a12] border-t border-white/5" : "bg-secondary/30"}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {product.benefits.map((benefit, index) => (
            <motion.div
              key={benefit.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-6 text-center ${
                isDiva ? "bg-white/5 backdrop-blur-sm" : "bg-card border border-border"
              }`}
            >
              <div className={`w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center ${
                isDiva ? "bg-diva-pink/10" : "bg-secondary"
              }`}>
                <benefit.icon className={`w-6 h-6 ${isDiva ? "text-diva-pink" : "text-foreground"}`} />
              </div>
              <h3 className={`font-display text-sm font-semibold mb-1 ${isDiva ? "text-white" : "text-foreground"}`}>
                {benefit.label}
              </h3>
              <p className={`font-body text-xs ${isDiva ? "text-white/50" : "text-muted-foreground"}`}>
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductBenefits;
