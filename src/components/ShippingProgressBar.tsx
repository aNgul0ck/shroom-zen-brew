import { FREE_SHIPPING_THRESHOLD } from "@/data/products";
import { Truck } from "lucide-react";

interface Props {
  /** Current cart/selection amount in PLN */
  amount: number;
  /** Visual variant — controls bar height and label sizing */
  variant?: "compact" | "default" | "sticky";
  /** Diva PDP uses dark background — adjust contrast */
  isDiva?: boolean;
  /** Hide leading truck icon (e.g. when used in StickyCTA where space is tight) */
  hideIcon?: boolean;
}

/**
 * Shipping progress bar — single source of truth for free-shipping copy + bar.
 * Used on PDP, CartDrawer, /koszyk page, and mobile StickyCTA.
 *
 * Copy states (per brief):
 *  - 0 zł              → "Zamów za 200 zł i skorzystaj z darmowej dostawy"
 *  - 1–99 zł           → "Jeszcze {X} zł do darmowej dostawy"
 *  - 100–199 zł        → "Prawie! Brakuje tylko {X} zł do darmowej dostawy"
 *  - ≥200 zł           → "✓ Masz darmową dostawę! Wysyłka gratis."
 */
const ShippingProgressBar = ({
  amount,
  variant = "default",
  isDiva = false,
  hideIcon = false,
}: Props) => {
  const qualifies = amount >= FREE_SHIPPING_THRESHOLD;
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - amount);
  const pct = qualifies
    ? 100
    : Math.min(100, (amount / FREE_SHIPPING_THRESHOLD) * 100);

  // Copy state machine
  let label: React.ReactNode;
  if (qualifies) {
    label = (
      <>
        <span className="font-display font-bold uppercase tracking-wider">
          ✓ Masz darmową dostawę!
        </span>{" "}
        Wysyłka gratis.
      </>
    );
  } else if (amount === 0) {
    label = (
      <>
        Zamów za{" "}
        <span className="font-display font-bold">{FREE_SHIPPING_THRESHOLD} zł</span>{" "}
        i skorzystaj z darmowej dostawy
      </>
    );
  } else if (amount < 100) {
    label = (
      <>
        Jeszcze{" "}
        <span className="font-display font-bold">{remaining} zł</span> do
        darmowej dostawy
      </>
    );
  } else {
    label = (
      <>
        <span className="font-display font-bold uppercase tracking-wider">
          Prawie!
        </span>{" "}
        Brakuje tylko{" "}
        <span className="font-display font-bold">{remaining} zł</span> do
        darmowej dostawy
      </>
    );
  }

  // Per-variant sizing
  const barHeight =
    variant === "sticky" ? "h-1" : variant === "compact" ? "h-1.5" : "h-2";
  const labelSize =
    variant === "sticky"
      ? "text-[10px]"
      : variant === "compact"
        ? "text-xs"
        : "text-sm";
  const iconSize = variant === "sticky" ? "w-3 h-3" : "w-3.5 h-3.5";
  const wrapperSpacing = variant === "sticky" ? "gap-1" : "gap-2";

  // Color tokens. NOTE: use `bg-shroom-green` (defined in tailwind.config.ts) —
  // there is no `shroom-green-dark` token, and an undefined class silently
  // renders no background, leaving the qualified state looking gray.
  const trackBg = isDiva ? "bg-white/15" : "bg-foreground/10";
  const fillBg = qualifies ? "bg-shroom-green" : "bg-shroom-gold";
  const labelColor = isDiva ? "text-white/80" : "text-foreground/75";

  // Tick positions for visual milestones (33% / 66%) — only on default/compact
  const showTicks = variant !== "sticky";

  return (
    <div className="w-full">
      <div className={`flex items-center ${wrapperSpacing} mb-1.5`}>
        {!hideIcon && (
          <Truck className={`${iconSize} ${isDiva ? "text-white/70" : "text-foreground/70"} shrink-0`} />
        )}
        <p className={`font-body ${labelSize} ${labelColor} leading-snug`}>
          {label}
        </p>
      </div>
      <div className={`relative ${barHeight} ${trackBg} overflow-hidden`}>
        <div
          className={`h-full ${fillBg} transition-all duration-300 ease-out`}
          style={{ width: `${pct}%` }}
        />
        {showTicks && (
          <>
            <span
              className={`absolute top-0 bottom-0 w-px ${isDiva ? "bg-white/20" : "bg-foreground/15"}`}
              style={{ left: "33%" }}
              aria-hidden
            />
            <span
              className={`absolute top-0 bottom-0 w-px ${isDiva ? "bg-white/20" : "bg-foreground/15"}`}
              style={{ left: "66%" }}
              aria-hidden
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ShippingProgressBar;
