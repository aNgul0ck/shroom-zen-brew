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
    <>
      <div className={`h-[3px] w-full ${isDiva ? "bg-white" : "bg-foreground"}`} />
      <section className={`py-16 md:py-24 ${isDiva ? "bg-diva-dark" : "bg-background"}`}>
        <div className="container mx-auto px-5 md:px-12">
          <div className="mb-10 md:mb-16">
            <p className={`font-body text-xs font-medium uppercase tracking-[0.25em] mb-3 ${isDiva ? "text-diva-pink" : "text-foreground/60"}`}>
              Rytuał
            </p>
            <h2 className={`font-headline text-3xl md:text-5xl uppercase ${isDiva ? "text-white" : "text-foreground"}`}>
              {title}
            </h2>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-4 border-t border-l ${isDiva ? "border-white/15" : "border-foreground/15"}`}>
            {product.routine.map((step, index) => (
              <div
                key={step.time}
                className={`relative p-6 md:p-8 border-b border-r ${isDiva ? "border-white/15 hover:bg-white/[0.03]" : "border-foreground/15 hover:bg-foreground/[0.03]"} transition-colors duration-200`}
              >
                <div className={`font-headline text-5xl md:text-6xl mb-3 ${isDiva ? "text-diva-pink/70" : "text-foreground/30"}`}>
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className={`font-display text-xs uppercase tracking-[0.2em] mb-2 ${isDiva ? "text-diva-pink" : "text-foreground/60"}`}>
                  {step.time}
                </p>
                <h3 className={`font-display text-base font-bold uppercase tracking-wide mb-2 ${isDiva ? "text-white" : "text-foreground"}`}>
                  {step.label}
                </h3>
                <p className={`font-body text-xs leading-relaxed ${isDiva ? "text-white/55" : "text-foreground/65"}`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductRoutine;
