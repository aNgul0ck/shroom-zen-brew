import { Star, Quote, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";

interface Props {
  product: Product;
}

const ProductReviews = ({ product }: Props) => {
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
            Opinie
          </p>
          <h2 className={`font-headline text-3xl md:text-4xl font-bold mb-4 ${isDiva ? "text-white" : "text-foreground"}`}>
            Co mówią klienci
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${isDiva ? "fill-diva-pink text-diva-pink" : "fill-shroom-gold text-shroom-gold"}`} />
              ))}
            </div>
            <span className={`font-display text-lg font-semibold ${isDiva ? "text-white" : "text-foreground"}`}>4.9</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {product.reviews.map((review, index) => (
            <motion.div
              key={review.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-6 ${isDiva ? "bg-white/5" : "bg-card border border-border"}`}
            >
              <Quote className={`w-8 h-8 mb-4 ${isDiva ? "text-diva-pink/20" : "text-muted-foreground/30"}`} />
              <p className={`font-body leading-relaxed mb-6 ${isDiva ? "text-white/80" : "text-foreground"}`}>
                "{review.text}"
              </p>
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${isDiva ? "fill-diva-pink text-diva-pink" : "fill-shroom-gold text-shroom-gold"}`} />
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`font-display text-sm font-semibold ${isDiva ? "text-white" : "text-foreground"}`}>
                    {review.author}
                  </p>
                  <p className={`font-body text-xs ${isDiva ? "text-white/40" : "text-muted-foreground"}`}>
                    {review.role}
                  </p>
                </div>
                {review.verified && (
                  <div className={`flex items-center gap-1 ${isDiva ? "text-diva-pink/60" : "text-shroom-green"}`}>
                    <BadgeCheck className="w-4 h-4" />
                    <span className="font-body text-[10px] uppercase tracking-wider">Verified</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductReviews;
