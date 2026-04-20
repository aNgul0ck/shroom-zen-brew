import type { Product } from "@/data/products";

interface Props {
  product: Product;
}

const ProductIngredients = ({ product }: Props) => {
  const isDiva = product.isDiva;

  return (
    <>
      <div className={`h-[3px] w-full ${isDiva ? "bg-white" : "bg-foreground"}`} />
      <section className={`py-16 md:py-24 ${isDiva ? "bg-diva-darker" : "ed-bg-cream"}`}>
        <div className="container mx-auto px-5 md:px-12">
          <div className="mb-10 md:mb-16">
            <p className={`font-body text-xs font-medium uppercase tracking-[0.25em] mb-3 ${isDiva ? "text-diva-pink" : "text-foreground/60"}`}>
              Skład
            </p>
            <h2 className={`font-headline text-3xl md:text-5xl uppercase ${isDiva ? "text-white" : "text-foreground"}`}>
              Co jest w środku
            </h2>
          </div>

          <div className={`max-w-3xl border-t-2 ${isDiva ? "border-white/20" : "border-foreground/20"}`}>
            {product.ingredients.map((ingredient, index) => (
              <div
                key={ingredient.name}
                className={`grid grid-cols-[auto_1fr_auto] md:grid-cols-[80px_1fr_auto] gap-4 md:gap-6 items-start py-6 md:py-8 border-b ${isDiva ? "border-white/15 hover:bg-white/[0.02]" : "border-foreground/15 hover:bg-foreground/[0.02]"} transition-colors duration-200 px-2 group`}
              >
                <div className={`font-headline text-2xl md:text-3xl ${isDiva ? "text-diva-pink/70" : "text-foreground/40"}`}>
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <ingredient.icon className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${isDiva ? "text-diva-pink" : "text-foreground"}`} />
                    <h3 className={`font-display text-base md:text-lg font-bold uppercase tracking-wide ${isDiva ? "text-white" : "text-foreground"}`}>
                      {ingredient.name}
                    </h3>
                  </div>
                  <p className={`font-body text-sm leading-relaxed ${isDiva ? "text-white/60" : "text-foreground/70"}`}>
                    {ingredient.benefit}
                  </p>
                </div>
                <div className={`font-display text-xs md:text-sm font-bold px-3 py-1.5 border-2 whitespace-nowrap ${
                  isDiva ? "border-diva-pink text-diva-pink" : "border-foreground text-foreground"
                }`}>
                  {ingredient.dosage}
                </div>
              </div>
            ))}
          </div>

          {/* EFSA disclaimer */}
          <p className={`mt-8 font-body text-xs max-w-2xl ${isDiva ? "text-white/35" : "text-foreground/50"}`}>
            * Oświadczenia zdrowotne zatwierdzone przez EFSA zgodnie z rozporządzeniem (UE) nr 432/2012.
          </p>
        </div>
      </section>
    </>
  );
};

export default ProductIngredients;
