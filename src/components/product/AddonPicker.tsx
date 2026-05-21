import { Check, Plus } from "lucide-react";
import type { Accessory } from "@/data/accessories";

interface Props {
  accessory: Accessory;
  selected: boolean;
  onToggle: (selected: boolean) => void;
  isDiva: boolean;
}

/**
 * Compact, single-row addon picker shown inside the PDP ATC area.
 * Lighter visual weight than FBT (1px border, smaller image) to avoid density.
 */
const AddonPicker = ({ accessory, selected, onToggle, isDiva }: Props) => {
  return (
    <button
      type="button"
      onClick={() => onToggle(!selected)}
      className={`w-full text-left border p-3 transition-all duration-150 mb-6 ${
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

        {/* Image */}
        <div className={`w-10 h-10 flex items-center justify-center shrink-0 ${isDiva ? "bg-white/5" : "bg-foreground/[0.04]"}`}>
          <img src={accessory.image} alt={accessory.name} className="max-w-[36px] max-h-[36px] object-contain" />
        </div>

        {/* Copy */}
        <div className="flex-1 min-w-0">
          <p className={`font-body text-[10px] uppercase tracking-[0.15em] ${isDiva ? "text-white/50" : "text-foreground/60"}`}>
            Dorzuć do koszyka
          </p>
          <p className={`font-display text-sm font-bold leading-tight mt-0.5 truncate ${isDiva ? "text-white" : "text-foreground"}`}>
            {accessory.name} <Plus className="inline w-3 h-3 -mt-0.5" /> {accessory.price} zł
          </p>
          <p className={`font-body text-[11px] mt-0.5 line-clamp-1 ${isDiva ? "text-white/50" : "text-foreground/60"}`}>
            {accessory.pairsCopy}
          </p>
        </div>
      </div>
    </button>
  );
};

export default AddonPicker;
