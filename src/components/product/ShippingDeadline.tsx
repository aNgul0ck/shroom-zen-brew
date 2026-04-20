import { useEffect, useState } from "react";
import { Truck } from "lucide-react";

// TODO(backend): Replace hardcoded 14:00 cutoff with config from API/env (e.g. SHIPPING_CUTOFF_HOUR).
// Should also account for weekends, holidays, and warehouse timezone.
const CUTOFF_HOUR = 14;

interface Props {
  isDiva?: boolean;
}

function getCountdown() {
  const now = new Date();
  const cutoff = new Date(now);
  cutoff.setHours(CUTOFF_HOUR, 0, 0, 0);

  let diffMs = cutoff.getTime() - now.getTime();
  if (diffMs <= 0) {
    // Past cutoff — show "tomorrow"
    return { expired: true, hours: 0, minutes: 0, seconds: 0 };
  }

  const totalSeconds = Math.floor(diffMs / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { expired: false, hours, minutes, seconds };
}

const ShippingDeadline = ({ isDiva }: Props) => {
  const [c, setC] = useState(getCountdown());

  useEffect(() => {
    const id = setInterval(() => setC(getCountdown()), 1000);
    return () => clearInterval(id);
  }, []);

  const accent = isDiva ? "text-diva-pink" : "text-shroom-green";
  const bg = isDiva ? "bg-white/[0.04] border-white/15" : "bg-foreground/[0.03] border-foreground/15";
  const text = isDiva ? "text-white" : "text-foreground";
  const muted = isDiva ? "text-white/60" : "text-foreground/65";

  return (
    <div className={`flex items-center gap-3 border ${bg} px-4 py-3 mb-6`}>
      <Truck className={`w-5 h-5 shrink-0 ${accent}`} />
      <div className="min-w-0 flex-1">
        {c.expired ? (
          <>
            <p className={`font-display text-sm font-bold ${text}`}>Wysyłka jutro rano</p>
            <p className={`font-body text-[11px] ${muted}`}>
              Dzisiejszy cutoff minął — Twoje zamówienie wyjdzie z magazynu jutro
            </p>
          </>
        ) : (
          <>
            <p className={`font-display text-sm font-bold ${text}`}>
              Wysyłka <span className={accent}>jeszcze dziś</span>
            </p>
            <p className={`font-body text-[11px] ${muted}`}>
              Zamów w ciągu{" "}
              <span className={`font-display font-bold ${text}`}>
                {c.hours}h {String(c.minutes).padStart(2, "0")}m {String(c.seconds).padStart(2, "0")}s
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ShippingDeadline;
