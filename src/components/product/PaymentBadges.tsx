import { Lock } from "lucide-react";

interface Props {
  isDiva?: boolean;
}

// Static visual trust signal — no real payment integration yet.
// TODO(backend): Render dynamically from supported payment methods returned by checkout API.
const METHODS = ["Visa", "Mastercard", "BLIK", "Apple Pay", "Google Pay"];

const PaymentBadges = ({ isDiva }: Props) => {
  const text = isDiva ? "text-white/60" : "text-foreground/65";
  const border = isDiva ? "border-white/15" : "border-foreground/15";
  const pill = isDiva
    ? "border-white/20 text-white/80"
    : "border-foreground/20 text-foreground/80";

  return (
    <div className={`flex flex-col items-center gap-2.5 mt-4 pt-4 border-t ${border}`}>
      <div className={`flex items-center gap-1.5 font-body text-[10px] uppercase tracking-[0.2em] ${text}`}>
        <Lock className="w-3 h-3" />
        Bezpieczna płatność
      </div>
      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {METHODS.map((m) => (
          <span
            key={m}
            className={`font-display text-[10px] font-bold uppercase tracking-wider px-2 py-1 border ${pill}`}
          >
            {m}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PaymentBadges;
