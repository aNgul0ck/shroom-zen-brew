import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "sonner";
import productPower from "@/assets/product-power.png";

interface PdpSelection {
  productId: string;
  productName: string;
  productImage: string;
  isDiva: boolean;
  quantity: number;
  isSubscription: boolean;
  cadenceWeeks?: number;
  bundleWith?: string;
  total: number;
}

const StickyCTA = () => {
  const location = useLocation();
  const isPdp = location.pathname.startsWith("/produkt/");
  const [visible, setVisible] = useState(false);
  const [pdpSelection, setPdpSelection] = useState<PdpSelection | null>(null);

  // Listen for PDP selection updates broadcast by ProductHero
  useEffect(() => {
    if (!isPdp) {
      setPdpSelection(null);
      return;
    }
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<PdpSelection>).detail;
      setPdpSelection(detail);
    };
    window.addEventListener("pdp:selection", handler);
    return () => window.removeEventListener("pdp:selection", handler);
  }, [isPdp, location.pathname]);

  // Visibility logic: on PDP, show after scrolling past hero. On homepage, original logic.
  useEffect(() => {
    const handleScroll = () => {
      if (isPdp) {
        // Show sticky bar after scrolling past ~600px (past hero CTA)
        setVisible(window.scrollY > 600);
        return;
      }

      const heroEl = document.querySelector("section");
      const produktyEl = document.getElementById("produkty");
      const subscriptionsEl = document.getElementById("subskrypcje");
      if (!heroEl) return;

      const scrollY = window.scrollY;
      const heroBottom = heroEl.offsetTop + heroEl.offsetHeight;
      const pastHero = scrollY > heroBottom;

      let inHiddenZone = false;
      if (produktyEl) {
        const rect = produktyEl.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) inHiddenZone = true;
      }
      if (subscriptionsEl) {
        const rect = subscriptionsEl.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) inHiddenZone = true;
      }
      setVisible(pastHero && !inHiddenZone);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isPdp, location.pathname]);

  if (!visible) return null;

  // PDP variant — contextual ATC
  if (isPdp && pdpSelection) {
    const handleAtc = () => {
      // TODO(backend): POST /api/cart/items
      const payload = {
        productId: pdpSelection.productId,
        quantity: pdpSelection.quantity,
        isSubscription: pdpSelection.isSubscription,
        cadenceWeeks: pdpSelection.cadenceWeeks,
        bundleWith: pdpSelection.bundleWith,
      };
      console.info("[StickyCTA ATC payload]", payload);
      toast.success(`Dodano do koszyka — ${pdpSelection.total} zł`, {
        description: pdpSelection.isSubscription
          ? `Subskrypcja co ${pdpSelection.cadenceWeeks} tygodnie`
          : "Zamówienie jednorazowe",
      });
    };

    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-background/95 backdrop-blur-md border-t border-foreground/10 px-4 py-3 flex items-center gap-3">
          <img
            src={pdpSelection.productImage}
            alt={pdpSelection.productName}
            className="h-10 w-auto object-contain shrink-0"
          />
          <div className="flex-1 min-w-0">
            <p className="font-display text-sm font-bold text-foreground truncate">
              {pdpSelection.productName}
            </p>
            <p className="font-body text-xs text-foreground/40">
              {pdpSelection.quantity} szt · {pdpSelection.total} zł
              {pdpSelection.isSubscription && " · sub"}
            </p>
          </div>
          <button
            type="button"
            onClick={handleAtc}
            className="inline-flex items-center gap-1.5 bg-foreground text-background px-5 py-2.5 font-display font-semibold text-sm shrink-0 hover:opacity-90 transition-opacity"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Dodaj
          </button>
        </div>
      </div>
    );
  }

  // Homepage variant — original
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-background/95 backdrop-blur-md border-t border-foreground/10 px-4 py-3 flex items-center gap-3">
        <img
          src={productPower}
          alt="Shroom Power"
          className="h-10 w-auto object-contain shrink-0"
        />
        <div className="flex-1 min-w-0">
          <p className="font-display text-sm font-bold text-foreground truncate">
            Starter Pack
          </p>
          <p className="font-body text-xs text-foreground/40">79 zł</p>
        </div>
        <Link
          to="/produkt/shroom-power"
          className="inline-flex items-center gap-1.5 bg-foreground text-background px-5 py-2.5 font-display font-semibold text-sm shrink-0 hover:opacity-90 transition-opacity"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Zamów
        </Link>
      </div>
    </div>
  );
};

export default StickyCTA;
