import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getOtherProducts } from "@/data/products";

interface Props {
  currentSlug: string;
  isDiva: boolean;
}

const ProductCrossSell = ({ currentSlug, isDiva }: Props) => {
  const others = getOtherProducts(currentSlug);

  return (
    <>
      <div className={`h-[3px] w-full ${isDiva ? "bg-white" : "bg-foreground"}`} />
      <section className={`py-16 md:py-24 ${isDiva ? "bg-diva-darker" : "ed-bg-cream"}`}>
        <div className="container mx-auto px-5 md:px-12">
          <div className="mb-10 md:mb-14">
            <p className={`font-body text-xs font-medium uppercase tracking-[0.25em] mb-3 ${isDiva ? "text-diva-pink" : "text-foreground/60"}`}>
              Uzupełnij rytuał
            </p>
            <h2 className={`font-headline text-3xl md:text-5xl uppercase ${isDiva ? "text-white" : "text-foreground"}`}>
              Odkryj więcej
            </h2>
          </div>

          <div className={`grid md:grid-cols-2 border-t border-l ${isDiva ? "border-white/15" : "border-foreground/15"}`}>
            {others.map((product) => (
              <Link
                key={product.slug}
                to={`/produkt/${product.slug}`}
                className={`block p-6 md:p-8 border-b border-r group transition-colors duration-200 ${
                  product.isDiva
                    ? "border-white/15 bg-diva-dark hover:bg-diva-darker"
                    : isDiva
                      ? "border-white/15 hover:bg-white/[0.03]"
                      : "border-foreground/15 hover:bg-foreground/[0.03]"
                }`}
              >
                <div className="flex items-center gap-5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-32 md:h-36 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-headline text-2xl md:text-3xl uppercase mb-1 ${
                      product.isDiva ? "text-diva-pink" : isDiva ? "text-white" : "text-foreground"
                    }`}>
                      {product.name}
                    </h3>
                    <p className={`font-body text-sm mb-4 ${
                      isDiva ? "text-white/55" : "text-foreground/65"
                    }`}>
                      {product.tagline}
                    </p>
                    <span className={`inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider ${
                      product.isDiva ? "text-diva-pink" : isDiva ? "text-white" : "text-foreground"
                    }`}>
                      Zobacz produkt
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCrossSell;
