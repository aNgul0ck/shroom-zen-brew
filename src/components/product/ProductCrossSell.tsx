import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getOtherProducts } from "@/data/products";

interface Props {
  currentSlug: string;
  isDiva: boolean;
}

const ProductCrossSell = ({ currentSlug, isDiva }: Props) => {
  const others = getOtherProducts(currentSlug);

  return (
    <section className={`py-24 ${isDiva ? "bg-[#140810]" : "bg-background"}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className={`font-body text-sm font-medium uppercase tracking-[0.2em] mb-4 ${isDiva ? "text-diva-pink" : "text-muted-foreground"}`}>
            Uzupełnij rytuał
          </p>
          <h2 className={`font-headline text-3xl md:text-4xl font-bold ${isDiva ? "text-white" : "text-foreground"}`}>
            Odkryj więcej
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {others.map((product, index) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/produkt/${product.slug}`}
                className={`block rounded-2xl p-6 group transition-all duration-300 hover:scale-[1.02] ${
                  product.isDiva
                    ? "bg-[#1a0a12] border border-diva-pink/20"
                    : isDiva
                      ? "bg-white/5 border border-white/10"
                      : "bg-card border border-border"
                }`}
              >
                <div className="flex items-center gap-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-28 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="flex-1">
                    <h3 className={`font-display text-lg font-bold mb-1 ${
                      product.isDiva ? "text-diva-pink" : isDiva ? "text-white" : "text-foreground"
                    }`}>
                      {product.name}
                    </h3>
                    <p className={`font-body text-sm mb-3 ${
                      isDiva ? "text-white/50" : "text-muted-foreground"
                    }`}>
                      {product.tagline}
                    </p>
                    <span className={`inline-flex items-center gap-1 font-display text-xs font-semibold ${
                      product.isDiva ? "text-diva-pink" : isDiva ? "text-white" : "text-foreground"
                    }`}>
                      Zobacz produkt
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCrossSell;
