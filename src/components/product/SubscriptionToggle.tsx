import { Repeat, Package } from "lucide-react";
import { SUBSCRIPTION_DISCOUNT, SUBSCRIPTION_CADENCE_WEEKS } from "@/data/products";

interface Props {
  isSubscription: boolean;
  onChange: (isSubscription: boolean) => void;
  basePrice: number;
  isDiva?: boolean;
}

const SubscriptionToggle = ({ isSubscription, onChange, basePrice, isDiva }: Props) => {
  const subPrice = Math.round(basePrice * (1 - SUBSCRIPTION_DISCOUNT));
  const savings = basePrice - subPrice;

  const baseBtn = "relative text-left p-4 border-2 transition-all duration-150 cursor-pointer";
  const activeStyle = isDiva
    ? "border-diva-pink bg-diva-pink/10"
    : "border-foreground bg-foreground/[0.03]";
  const inactiveStyle = isDiva
    ? "border-white/15 hover:border-white/40"
    : "border-foreground/15 hover:border-foreground/40";

  return (
    <div className="mb-6">
      <p
        className={`font-body text-xs uppercase tracking-[0.2em] mb-3 ${
          isDiva ? "text-white/50" : "text-foreground/60"
        }`}
      >
        Wybierz typ zakupu
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {/* Subscription — pre-selected */}
        <button
          type="button"
          onClick={() => onChange(true)}
          className={`${baseBtn} ${isSubscription ? activeStyle : inactiveStyle}`}
        >
          <span
            className={`absolute -top-2.5 left-3 px-2 py-0.5 font-display font-bold text-[10px] uppercase tracking-wider ${
              isDiva ? "bg-diva-pink text-diva-dark" : "bg-shroom-green text-foreground"
            }`}
          >
            Oszczędź {savings} zł
          </span>
          <div className="flex items-start gap-2.5">
            <Repeat
              className={`w-4 h-4 mt-0.5 shrink-0 ${
                isSubscription
                  ? isDiva
                    ? "text-diva-pink"
                    : "text-foreground"
                  : isDiva
                    ? "text-white/50"
                    : "text-foreground/50"
              }`}
            />
            <div className="min-w-0">
              <p
                className={`font-display text-sm font-bold ${
                  isDiva ? "text-white" : "text-foreground"
                }`}
              >
                Subskrypcja −15%
              </p>
              <p
                className={`font-body text-[11px] mt-0.5 ${
                  isDiva ? "text-white/50" : "text-foreground/60"
                }`}
              >
                Co {SUBSCRIPTION_CADENCE_WEEKS} tyg · pomiń lub anuluj kiedy chcesz
              </p>
            </div>
          </div>
        </button>

        {/* One-time */}
        <button
          type="button"
          onClick={() => onChange(false)}
          className={`${baseBtn} ${!isSubscription ? activeStyle : inactiveStyle}`}
        >
          <div className="flex items-start gap-2.5">
            <Package
              className={`w-4 h-4 mt-0.5 shrink-0 ${
                !isSubscription
                  ? isDiva
                    ? "text-diva-pink"
                    : "text-foreground"
                  : isDiva
                    ? "text-white/50"
                    : "text-foreground/50"
              }`}
            />
            <div className="min-w-0">
              <p
                className={`font-display text-sm font-bold ${
                  isDiva ? "text-white" : "text-foreground"
                }`}
              >
                Jednorazowo
              </p>
              <p
                className={`font-body text-[11px] mt-0.5 ${
                  isDiva ? "text-white/50" : "text-foreground/60"
                }`}
              >
                Bez zobowiązań
              </p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SubscriptionToggle;
