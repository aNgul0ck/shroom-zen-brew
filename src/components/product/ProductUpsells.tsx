import { ArrowRight } from "lucide-react";
import { upsellMap, type Accessory } from "@/data/accessories";
import type { Product } from "@/data/products";

interface Props {
  product: Product;
}

/**
 * Lightweight "explore more" strip. The featured upsell already lives inline
 * next to ATC (AddonPicker), so this section only surfaces the secondary picks
 * to avoid visual density.
 */
const ProductUpsells = ({ product }: Props) => {
  const config = upsellMap[product.slug];
  if (!config || config.secondary.length === 0) return null;

  const isDiva = product.isDiva;
  const border = isDiva ? "border-white/15" : "border-foreground/15";
  const textMain = isDiva ? "text-white" : "text-foreground";
  const textMuted = isDiva ? "text-white/60" : "text-foreground/65";
  const accentText = isDiva ? "text-diva-pink" : "text-foreground";

  return (
    <>
      <div className={`h-[3px] w-full ${isDiva ? "bg-white" : "bg-foreground"}`} />
      <section className={`py-14 md:py-20 ${isDiva ? "bg-diva-dark" : "ed-bg-cream"}`}>
        <div className="container mx-auto px-5 md:px-12">
          <div className="mb-8 md:mb-10 flex items-end justify-between gap-6">
            <div>
              <p className={`font-body text-xs font-medium uppercase tracking-[0.25em] mb-2 ${accentText}`}>
                Akcesoria
              </p>
              <h2 className={`font-headline text-2xl md:text-4xl uppercase ${textMain}`}>
                Domknij rytuał
              </h2>
            </div>
            <p className={`hidden md:block max-w-[260px] font-body text-sm ${textMuted}`}>
              Drobiazgi, które robią różnicę. Dorzuć w jednej dostawie.
            </p>
          </div>

          <div className={`grid sm:grid-cols-2 border-t border-l ${border}`}>
            {config.secondary.map((acc) => (
              <SecondaryCard key={acc.slug} accessory={acc} isDiva={isDiva} border={border} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const SecondaryCard = ({
  accessory,
  isDiva,
  border,
}: {
  accessory: Accessory;
  isDiva: boolean;
  border: string;
}) => {
  const textMain = isDiva ? "text-white" : "text-foreground";
  const textMuted = isDiva ? "text-white/55" : "text-foreground/60";
  const hoverBg = isDiva ? "hover:bg-white/[0.04]" : "hover:bg-foreground/[0.04]";
  const accent = isDiva ? "text-diva-pink" : "text-foreground/55";

  return (
    <a
      href={`#${accessory.slug}`}
      className={`flex items-center gap-5 p-5 md:p-6 border-b border-r ${border} ${hoverBg} group transition-colors`}
    >
      <img
        src={accessory.image}
        alt={accessory.name}
        className="h-24 md:h-28 w-auto object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
      />
      <div className="flex-1 min-w-0">
        <p className={`font-body text-[10px] uppercase tracking-[0.18em] mb-1 ${accent}`}>
          {accessory.tagline}
        </p>
        <h4 className={`font-headline text-xl md:text-2xl uppercase leading-tight mb-1.5 ${textMain}`}>
          {accessory.name}
        </h4>
        <p className={`font-body text-xs leading-snug line-clamp-2 mb-3 ${textMuted}`}>
          {accessory.pairsCopy}
        </p>
        <span className={`inline-flex items-center gap-1.5 font-display text-[11px] font-bold uppercase tracking-[0.18em] ${textMain}`}>
          {accessory.price} zł
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </a>
  );
};

export default ProductUpsells;
