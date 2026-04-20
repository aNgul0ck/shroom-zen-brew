import { useState } from "react";
import { Star, ShoppingBag, Truck, Leaf, MapPin } from "lucide-react";
import type { Product } from "@/data/products";

interface Props {
  product: Product;
}

const ProductHero = ({ product }: Props) => {
  const [selectedTier, setSelectedTier] = useState(0);
  const tier = product.pricing[selectedTier];

  const isDiva = product.isDiva;

  return (
    <section className={`pt-28 pb-12 md:pt-32 md:pb-20 ${isDiva ? "bg-diva-dark" : "ed-bg-cream"}`}>
      <div className="container mx-auto px-5 md:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Product Image */}
          <div className="flex justify-center order-1">
            <div className="relative">
              {isDiva && (
                <div className="absolute inset-0 bg-diva-pink/20 blur-3xl scale-75" />
              )}
              <img
                src={product.image}
                alt={product.name}
                className="relative h-[320px] md:h-[500px] w-auto object-contain"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="order-2">
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${isDiva ? "fill-diva-pink text-diva-pink" : "fill-shroom-gold text-shroom-gold"}`} />
                ))}
              </div>
              <span className={`font-display text-sm font-bold ${isDiva ? "text-white" : "text-foreground"}`}>4.9</span>
              <span className={`font-body text-xs ${isDiva ? "text-white/50" : "text-foreground/60"}`}>(200+ recenzji)</span>
            </div>

            {/* Name & Tagline */}
            <h1 className={`font-headline text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.9] mb-3 ${isDiva ? "text-diva-pink" : "text-foreground"}`}>
              {product.name}
            </h1>
            <p className={`font-display text-lg md:text-xl uppercase tracking-wide mb-6 ${isDiva ? "text-white/70" : "text-foreground/70"}`}>
              {product.tagline}
            </p>

            {/* Description */}
            <p className={`font-body text-base leading-relaxed mb-8 ${isDiva ? "text-white/60" : "text-foreground/70"}`}>
              {product.description}
            </p>

            <div className={`h-px w-full mb-8 ${isDiva ? "bg-white/15" : "bg-foreground/15"}`} />

            {/* Quantity Selector */}
            <p className={`font-body text-xs uppercase tracking-[0.2em] mb-3 ${isDiva ? "text-white/50" : "text-foreground/60"}`}>
              Wybierz ilość
            </p>
            <div className="grid grid-cols-3 gap-2 mb-6">
              {product.pricing.map((t, i) => (
                <button
                  key={t.quantity}
                  onClick={() => setSelectedTier(i)}
                  className={`relative px-3 py-3 border-2 font-display text-sm font-bold transition-all duration-150 ${
                    selectedTier === i
                      ? isDiva
                        ? "border-diva-pink bg-diva-pink text-diva-dark"
                        : "border-foreground bg-foreground text-background"
                      : isDiva
                        ? "border-white/20 text-white/70 hover:border-white"
                        : "border-foreground/20 text-foreground/70 hover:border-foreground"
                  }`}
                >
                  <span className="block">{t.label}</span>
                  <span className="block text-[10px] font-body font-normal mt-0.5 opacity-80">{t.pricePerUnit} zł/szt.</span>
                  {t.savings && (
                    <span className={`absolute -top-2.5 left-1/2 -translate-x-1/2 text-[10px] px-2 py-0.5 font-display font-bold uppercase tracking-wider ${
                      isDiva ? "bg-diva-pink text-diva-dark" : "bg-shroom-green text-foreground"
                    }`}>
                      {t.savings}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Price & CTA */}
            <div className={`flex flex-wrap items-end justify-between gap-4 mb-6 pb-6 border-b ${isDiva ? "border-white/15" : "border-foreground/15"}`}>
              <div>
                <p className={`font-headline text-4xl md:text-5xl ${isDiva ? "text-white" : "text-foreground"}`}>
                  {tier.totalPrice} zł
                </p>
                <p className={`font-body text-xs mt-1 ${isDiva ? "text-white/40" : "text-foreground/60"}`}>
                  {tier.quantity > 1 ? `${tier.quantity} × ${tier.pricePerUnit} zł` : product.volume}
                </p>
              </div>
            </div>

            <button className={`w-full inline-flex items-center justify-center gap-2 px-8 py-4 font-display font-bold text-sm uppercase tracking-wider transition-all duration-200 ${
              isDiva
                ? "bg-diva-pink text-diva-dark hover:bg-white"
                : "bg-foreground text-background hover:bg-foreground/85"
            }`}>
              <ShoppingBag className="w-4 h-4" />
              Dodaj do koszyka — {tier.totalPrice} zł
            </button>

            {/* Trust Badges */}
            <div className={`grid grid-cols-3 gap-2 mt-6 pt-6 border-t ${isDiva ? "border-white/15" : "border-foreground/15"}`}>
              {[
                { icon: Truck, label: product.trustBadges[0] },
                { icon: Leaf, label: product.trustBadges[1] },
                { icon: MapPin, label: product.trustBadges[2] },
              ].map((badge) => (
                <div key={badge.label} className="flex flex-col items-center text-center gap-1.5">
                  <badge.icon className={`w-4 h-4 ${isDiva ? "text-diva-pink" : "text-foreground"}`} />
                  <span className={`font-body text-[10px] uppercase tracking-wider leading-tight ${isDiva ? "text-white/60" : "text-foreground/70"}`}>
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
