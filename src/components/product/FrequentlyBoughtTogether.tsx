import { Check, Plus } from "lucide-react";
import { getProductBySlug, type Product } from "@/data/products";

interface Props {
  product: Product;
  selected: boolean;
  onToggle: (selected: boolean) => void;
}

const BUNDLE_DISCOUNT = 9; // PLN saved when buying both

const FrequentlyBoughtTogether = ({ product, selected, onToggle }: Props) => {
  if (!product.bundleWith) return null;
  const partner = getProductBySlug(product.bundleWith);
  if (!partner) return null;

  const isDiva = product.isDiva;
  const combinedPrice = product.price + partner.price - BUNDLE_DISCOUNT;

  return (
    <button
      type="button"
      onClick={() => onToggle(!selected)}
      className={`w-full text-left border-2 p-4 transition-all duration-150 mb-6 ${
        selected
          ? isDiva
            ? "border-diva-pink bg-diva-pink/10"
            : "border-foreground bg-foreground/[0.03]"
          : isDiva
            ? "border-white/15 hover:border-white/40"
            : "border-foreground/15 hover:border-foreground/40"
      }`}
    >
      <div className="flex items-center gap-3">
        {/* Checkbox */}
        <div
          className={`w-5 h-5 border-2 flex items-center justify-center shrink-0 ${
            selected
              ? isDiva
                ? "bg-diva-pink border-diva-pink"
                : "bg-foreground border-foreground"
              : isDiva
                ? "border-white/40"
                : "border-foreground/40"
          }`}
        >
          {selected && (
            <Check className={`w-3 h-3 ${isDiva ? "text-diva-dark" : "text-background"}`} />
          )}
        </div>

        {/* Partner image */}
        <img src={partner.image} alt={partner.name} className="w-12 h-12 object-contain shrink-0" />

        {/* Bundle info */}
        <div className="flex-1 min-w-0">
          <p
            className={`font-body text-[10px] uppercase tracking-[0.15em] ${
              isDiva ? "text-white/50" : "text-foreground/60"
            }`}
          >
            Często kupowane razem
          </p>
          <p
            className={`font-display text-sm font-bold leading-tight mt-0.5 ${
              isDiva ? "text-white" : "text-foreground"
            }`}
          >
            Dodaj {partner.name} <Plus className="inline w-3 h-3 -mt-0.5" /> oszczędź {BUNDLE_DISCOUNT} zł
          </p>
          <p
            className={`font-body text-[11px] mt-0.5 ${
              isDiva ? "text-white/50" : "text-foreground/60"
            }`}
          >
            Pełny rytm dnia · razem {combinedPrice} zł
          </p>
        </div>
      </div>
    </button>
  );
};

export default FrequentlyBoughtTogether;
