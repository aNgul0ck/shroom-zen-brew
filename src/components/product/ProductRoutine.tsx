import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import type { Product } from "@/data/products";

interface Props {
  product: Product;
}

const ProductRoutine = ({ product }: Props) => {
  const isDiva = product.isDiva;

  const title = isDiva
    ? "Twój wieczór z Divą"
    : product.slug === "shroom-power"
      ? "Twój dzień z Power"
      : "Twój wieczór z Relax";

  return (
    <section className={`py-24 ${isDiva ? "bg-[#1a0a12]" : "bg-secondary/20"}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className={`font-body text-sm font-medium uppercase tracking-[0.2em] mb-4 ${isDiva ? "text-diva-pink" : "text-muted-foreground"}`}>
            Rytuał
          </p>
          <h2 className={`font-headline text-3xl md:text-4xl font-bold ${isDiva ? "text-white" : "text-foreground"}`}>
            {title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto">
          {product.routine.map((step, index) => (
            <motion.div
              key={step.time}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-6 text-center relative ${
                isDiva ? "bg-white/5" : "bg-card border border-border"
              }`}
            >
              {/* Connector arrow (not on last) */}
              {index < product.routine.length - 1 && (
                <div className={`hidden lg:block absolute top-1/2 -right-3 w-6 h-px ${isDiva ? "bg-diva-pink/20" : "bg-border"}`} />
              )}

              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-3 ${
                isDiva ? "bg-diva-pink/10" : "bg-secondary/50"
              }`}>
                <Clock className={`w-3 h-3 ${isDiva ? "text-diva-pink" : "text-muted-foreground"}`} />
                <span className={`font-display text-xs font-semibold ${isDiva ? "text-diva-pink" : "text-foreground"}`}>
                  {step.time}
                </span>
              </div>

              <h3 className={`font-display text-sm font-semibold mb-1 ${isDiva ? "text-white" : "text-foreground"}`}>
                {step.label}
              </h3>
              <p className={`font-body text-xs leading-relaxed ${isDiva ? "text-white/50" : "text-muted-foreground"}`}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductRoutine;
