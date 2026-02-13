import { useState } from "react";
import { Star, ShoppingBag, Truck, Leaf, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";

interface Props {
  product: Product;
}

const ProductHero = ({ product }: Props) => {
  const [selectedTier, setSelectedTier] = useState(0);
  const tier = product.pricing[selectedTier];

  const isDiva = product.isDiva;

  return (
    <section className={`pt-24 pb-16 ${isDiva ? "bg-[#1a0a12]" : "bg-background"}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              {isDiva && (
                <div className="absolute inset-0 bg-diva-pink/20 rounded-full blur-3xl scale-75" />
              )}
              <img
                src={product.image}
                alt={product.name}
                className="relative h-[350px] md:h-[500px] w-auto object-contain animate-float"
              />
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${isDiva ? "fill-diva-pink text-diva-pink" : "fill-shroom-gold text-shroom-gold"}`} />
                ))}
              </div>
              <span className={`font-display text-sm font-semibold ${isDiva ? "text-white" : "text-foreground"}`}>4.9</span>
              <span className={`font-body text-xs ${isDiva ? "text-white/50" : "text-muted-foreground"}`}>(200+ recenzji)</span>
            </div>

            {/* Name & Tagline */}
            <h1 className={`font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-2 ${isDiva ? "text-diva-pink" : "text-foreground"}`}>
              {product.name}
            </h1>
            <p className={`font-body text-xl mb-6 ${isDiva ? "text-white/70" : "text-muted-foreground"}`}>
              {product.tagline}
            </p>

            {/* Description */}
            <p className={`font-body leading-relaxed mb-8 ${isDiva ? "text-white/60" : "text-muted-foreground"}`}>
              {product.description}
            </p>

            {/* Quantity Selector */}
            <div className="flex gap-3 mb-6">
              {product.pricing.map((t, i) => (
                <button
                  key={t.quantity}
                  onClick={() => setSelectedTier(i)}
                  className={`relative px-5 py-3 rounded-xl border-2 font-display text-sm font-semibold transition-all duration-200 ${
                    selectedTier === i
                      ? isDiva
                        ? "border-diva-pink bg-diva-pink/10 text-white"
                        : "border-foreground bg-foreground/5 text-foreground"
                      : isDiva
                        ? "border-white/10 text-white/50 hover:border-white/30"
                        : "border-border text-muted-foreground hover:border-foreground/30"
                  }`}
                >
                  <span className="block">{t.label}</span>
                  <span className="block text-xs font-body mt-0.5">{t.pricePerUnit} zł/szt.</span>
                  {t.savings && (
                    <span className={`absolute -top-2 -right-2 text-[10px] px-1.5 py-0.5 rounded-full font-body font-semibold ${
                      isDiva ? "bg-diva-pink text-[#1a0a12]" : "bg-shroom-green text-foreground"
                    }`}>
                      {t.savings}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Price & CTA */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div>
                <p className={`font-display text-3xl font-bold ${isDiva ? "text-white" : "text-foreground"}`}>
                  {tier.totalPrice} zł
                </p>
                <p className={`font-body text-xs ${isDiva ? "text-white/40" : "text-muted-foreground"}`}>
                  {tier.quantity > 1 ? `${tier.quantity} × ${tier.pricePerUnit} zł` : product.volume}
                </p>
              </div>

              <button className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-semibold text-sm transition-all duration-300 hover:scale-105 ${
                isDiva
                  ? "bg-diva-pink text-[#1a0a12] hover:bg-white"
                  : "bg-foreground text-background hover:bg-foreground/90"
              }`}>
                <ShoppingBag className="w-4 h-4" />
                Dodaj do koszyka
              </button>
            </div>

            {/* Trust Badges */}
            <div className={`flex flex-wrap gap-4 pt-6 border-t ${isDiva ? "border-white/10" : "border-border"}`}>
              {[
                { icon: Truck, label: product.trustBadges[0] },
                { icon: Leaf, label: product.trustBadges[1] },
                { icon: MapPin, label: product.trustBadges[2] },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-2">
                  <badge.icon className={`w-4 h-4 ${isDiva ? "text-diva-pink/60" : "text-muted-foreground"}`} />
                  <span className={`font-body text-xs ${isDiva ? "text-white/50" : "text-muted-foreground"}`}>
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
