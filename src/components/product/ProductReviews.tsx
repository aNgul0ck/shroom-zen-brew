import { Star, BadgeCheck } from "lucide-react";
import type { Product } from "@/data/products";

interface Props {
  product: Product;
}

const ProductReviews = ({ product }: Props) => {
  const isDiva = product.isDiva;

  return (
    <>
      <div className={`h-[3px] w-full ${isDiva ? "bg-white" : "bg-foreground"}`} />
      <section className={`py-16 md:py-24 ${isDiva ? "bg-diva-darker" : "ed-bg-cream"}`}>
        <div className="container mx-auto px-5 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-16">
            <div>
              <p className={`font-body text-xs font-medium uppercase tracking-[0.25em] mb-3 ${isDiva ? "text-diva-pink" : "text-foreground/60"}`}>
                Opinie
              </p>
              <h2 className={`font-headline text-3xl md:text-5xl uppercase ${isDiva ? "text-white" : "text-foreground"}`}>
                Co mówią klienci
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${isDiva ? "fill-diva-pink text-diva-pink" : "fill-shroom-gold text-shroom-gold"}`} />
                ))}
              </div>
              <span className={`font-headline text-3xl ${isDiva ? "text-white" : "text-foreground"}`}>4.9</span>
              <span className={`font-body text-xs uppercase tracking-wider ${isDiva ? "text-white/50" : "text-foreground/60"}`}>/5</span>
            </div>
          </div>

          <div className={`grid md:grid-cols-3 border-t border-l ${isDiva ? "border-white/15" : "border-foreground/15"}`}>
            {product.reviews.map((review) => (
              <div
                key={review.author}
                className={`p-6 md:p-8 border-b border-r ${isDiva ? "border-white/15 hover:bg-white/[0.03]" : "border-foreground/15 hover:bg-foreground/[0.03]"} transition-colors duration-200`}
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${isDiva ? "fill-diva-pink text-diva-pink" : "fill-shroom-gold text-shroom-gold"}`} />
                  ))}
                </div>
                <p className={`font-body text-base leading-relaxed mb-6 ${isDiva ? "text-white/85" : "text-foreground"}`}>
                  "{review.text}"
                </p>
                <div className={`flex items-center justify-between pt-4 border-t ${isDiva ? "border-white/10" : "border-foreground/10"}`}>
                  <div>
                    <p className={`font-display text-sm font-bold uppercase tracking-wide ${isDiva ? "text-white" : "text-foreground"}`}>
                      {review.author}
                    </p>
                    <p className={`font-body text-xs ${isDiva ? "text-white/40" : "text-foreground/55"}`}>
                      {review.role}
                    </p>
                  </div>
                  {review.verified && (
                    <div className={`flex items-center gap-1 ${isDiva ? "text-diva-pink/70" : "text-shroom-green"}`}>
                      <BadgeCheck className="w-4 h-4" />
                      <span className="font-body text-[10px] uppercase tracking-wider font-semibold">Verified</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductReviews;
