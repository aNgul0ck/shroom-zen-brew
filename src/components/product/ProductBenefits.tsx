import type { Product } from "@/data/products";

interface Props {
  product: Product;
}

const ProductBenefits = ({ product }: Props) => {
  const isDiva = product.isDiva;

  return (
    <>
      <div className={`h-[3px] w-full ${isDiva ? "bg-white" : "bg-foreground"}`} />
      <section className={`py-16 md:py-20 ${isDiva ? "bg-diva-dark" : "bg-background"}`}>
        <div className="container mx-auto px-5 md:px-12">
          <div className="mb-10 md:mb-14">
            <p className={`font-body text-xs font-medium uppercase tracking-[0.25em] mb-3 ${isDiva ? "text-diva-pink" : "text-foreground/60"}`}>
              Korzyści
            </p>
            <h2 className={`font-headline text-3xl md:text-5xl uppercase ${isDiva ? "text-white" : "text-foreground"}`}>
              Co dostajesz
            </h2>
          </div>

          <div className={`grid grid-cols-2 lg:grid-cols-4 border-t border-l ${isDiva ? "border-white/15" : "border-foreground/15"}`}>
            {product.benefits.map((benefit) => (
              <div
                key={benefit.label}
                className={`p-6 md:p-8 border-b border-r ${isDiva ? "border-white/15 bg-diva-dark hover:bg-white/[0.03]" : "border-foreground/15 hover:bg-foreground/[0.03]"} transition-colors duration-200 group`}
              >
                <benefit.icon className={`w-7 h-7 md:w-8 md:h-8 mb-4 transition-transform duration-300 group-hover:scale-110 ${isDiva ? "text-diva-pink" : "text-foreground"}`} />
                <h3 className={`font-display text-base font-bold uppercase tracking-wide mb-2 ${isDiva ? "text-white" : "text-foreground"}`}>
                  {benefit.label}
                </h3>
                <p className={`font-body text-xs leading-relaxed ${isDiva ? "text-white/55" : "text-foreground/65"}`}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductBenefits;
