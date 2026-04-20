import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCartStore } from "@/stores/cartStore";
import { SUBSCRIPTION_DISCOUNT, SUBSCRIPTION_CADENCE_WEEKS, FREE_SHIPPING_THRESHOLD, products } from "@/data/products";
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
    // Read any cached selection (in case ProductHero already dispatched before mount)
    const cached = (window as unknown as { __pdpSelection?: PdpSelection }).__pdpSelection;
    if (cached) setPdpSelection(cached);

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
      const product = products.find((p) => p.slug === pdpSelection.productId);
      const tier = product?.pricing.find((t) => t.quantity === pdpSelection.quantity);
      const baseUnit = tier?.totalPrice ?? pdpSelection.total;
      const subDiscountedUnit = pdpSelection.isSubscription
        ? Math.round(baseUnit * (1 - SUBSCRIPTION_DISCOUNT))
        : baseUnit;

      useCartStore.getState().addItem({
        productId: pdpSelection.productId,
        productName: pdpSelection.productName,
        productImage: pdpSelection.productImage,
        isDiva: pdpSelection.isDiva,
        bottlesPerUnit: pdpSelection.quantity,
        unitPrice: subDiscountedUnit,
        originalUnitPrice: baseUnit,
        isSubscription: pdpSelection.isSubscription,
        cadenceWeeks: pdpSelection.isSubscription ? SUBSCRIPTION_CADENCE_WEEKS : undefined,
        bundleWith: pdpSelection.bundleWith,
      });

      // Add bundle partner as separate line if selected (matches PDP behavior)
      if (pdpSelection.bundleWith) {
        const partner = products.find((p) => p.slug === pdpSelection.bundleWith);
        if (partner) {
          const partnerOriginal = 89;
          const partnerDiscounted = pdpSelection.isSubscription
            ? Math.round(partnerOriginal * (1 - SUBSCRIPTION_DISCOUNT))
            : partnerOriginal;
          useCartStore.getState().addItem({
            productId: partner.slug,
            productName: partner.name,
            productImage: partner.image,
            isDiva: partner.isDiva,
            bottlesPerUnit: 1,
            unitPrice: partnerDiscounted - 9,
            originalUnitPrice: partnerOriginal,
            isSubscription: pdpSelection.isSubscription,
            cadenceWeeks: pdpSelection.isSubscription ? SUBSCRIPTION_CADENCE_WEEKS : undefined,
            bundleWith: pdpSelection.productId,
          });
        }
      }
    };

    const qualifiesShipping = pdpSelection.total >= FREE_SHIPPING_THRESHOLD;
    const remainingForShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - pdpSelection.total);
    const shippingPct = qualifiesShipping
      ? 100
      : Math.min(100, (pdpSelection.total / FREE_SHIPPING_THRESHOLD) * 100);

    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-background/95 backdrop-blur-md border-t border-foreground/10">
          {/* Free shipping progress bar */}
          <div className="px-4 pt-2 pb-1.5">
            <div className="flex items-center justify-between gap-2 mb-1">
              {qualifiesShipping ? (
                <p className="font-body text-[10px] uppercase tracking-wider text-foreground font-bold">
                  ✓ Darmowa dostawa odblokowana
                </p>
              ) : (
                <p className="font-body text-[10px] text-foreground/70">
                  Dodaj{" "}
                  <span className="font-display font-bold text-foreground">
                    {remainingForShipping} zł
                  </span>{" "}
                  do darmowej dostawy
                </p>
              )}
            </div>
            <div className="h-1 bg-foreground/10 overflow-hidden">
              <div
                className={`h-full transition-all duration-300 ${
                  qualifiesShipping ? "bg-shroom-green-dark" : "bg-foreground"
                }`}
                style={{ width: `${shippingPct}%` }}
              />
            </div>
          </div>

          <div className="px-4 pb-3 pt-2 flex items-center gap-3">
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
