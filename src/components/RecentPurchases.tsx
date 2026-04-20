import { useEffect, useState } from "react";
import { X, ShoppingBag } from "lucide-react";

// TODO(backend): Replace MOCK_PURCHASES with real anonymized feed from `/api/recent-purchases`.
// Should respect privacy (initials only, city only, no exact timestamps).
const MOCK_PURCHASES = [
  { name: "Anna z Warszawy", product: "Shroom Power", minutesAgo: 2 },
  { name: "Marcin z Krakowa", product: "Shroom Relax", minutesAgo: 7 },
  { name: "Zuzia z Gdańska", product: "Diva Social Elixir", minutesAgo: 12 },
  { name: "Kuba z Wrocławia", product: "Starter Pack", minutesAgo: 18 },
  { name: "Ewa z Poznania", product: "Shroom Power", minutesAgo: 25 },
];

const RecentPurchases = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    // First show after 8s
    const showTimeout = setTimeout(() => setVisible(true), 8000);

    // Rotate every 12s, hide for 4s between
    const rotate = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % MOCK_PURCHASES.length);
        setVisible(true);
      }, 4000);
    }, 12000);

    return () => {
      clearTimeout(showTimeout);
      clearInterval(rotate);
    };
  }, [dismissed]);

  if (dismissed) return null;
  const p = MOCK_PURCHASES[index];

  return (
    <div
      className={`fixed bottom-20 md:bottom-6 left-4 z-40 max-w-[280px] transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="bg-foreground text-background border border-foreground shadow-lg">
        <div className="flex items-start gap-2.5 p-3">
          <div className="w-8 h-8 bg-shroom-green text-foreground flex items-center justify-center shrink-0">
            <ShoppingBag className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0 pr-1">
            <p className="font-display text-xs font-bold leading-tight">{p.name}</p>
            <p className="font-body text-[11px] leading-tight mt-0.5 text-background/70">
              kupił(a) <span className="font-bold text-background">{p.product}</span>
            </p>
            <p className="font-body text-[10px] leading-tight mt-1 text-background/40 uppercase tracking-wider">
              {p.minutesAgo} min temu
            </p>
          </div>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Zamknij"
            className="text-background/50 hover:text-background transition-colors shrink-0"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentPurchases;
