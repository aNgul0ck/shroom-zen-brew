import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCartStore } from "@/stores/cartStore";
import { Minus, Plus, X, ShoppingBag, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import ShippingProgressBar from "@/components/ShippingProgressBar";

const CartDrawer = () => {
  const isOpen = useCartStore((s) => s.isOpen);
  const closeCart = useCartStore((s) => s.closeCart);
  const items = useCartStore((s) => s.items);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const subtotal = useCartStore((s) => s.getSubtotal());
  const itemCount = useCartStore((s) => s.getItemCount());

  const handleCheckout = () => {
    // TODO(backend): redirect to /api/checkout/create-session (Stripe/Shopify)
    // and replace this toast with the real redirect.
    console.info("[Checkout payload]", {
      items: items.map((it) => ({
        productId: it.productId,
        bottlesPerUnit: it.bottlesPerUnit,
        quantity: it.quantity,
        isSubscription: it.isSubscription,
        cadenceWeeks: it.cadenceWeeks,
        bundleWith: it.bundleWith,
      })),
      subtotal,
    });
    toast.success("Przekierowanie do kasy…", {
      description: "Backend stub — checkout flow wymaga podpięcia API",
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md flex flex-col p-0 bg-background border-l-2 border-foreground"
      >
        {/* Header */}
        <SheetHeader className="px-5 py-4 border-b-2 border-foreground space-y-0">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-headline text-2xl uppercase tracking-tight text-foreground">
              Koszyk {itemCount > 0 && <span className="text-foreground/40">({itemCount})</span>}
            </SheetTitle>
          </div>
        </SheetHeader>

        {/* Free shipping progress */}
        {items.length > 0 && (
          <div className="px-5 py-3 border-b border-foreground/10 bg-shroom-cream">
            <ShippingProgressBar amount={subtotal} variant="default" />
          </div>
        )}

        {/* Items list */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6 text-center">
              <div className="w-16 h-16 border-2 border-foreground/20 flex items-center justify-center mb-5">
                <ShoppingBag className="w-7 h-7 text-foreground/30" />
              </div>
              <p className="font-headline text-2xl uppercase text-foreground mb-2">
                Koszyk jest pusty
              </p>
              <p className="font-body text-sm text-foreground/60 mb-6 max-w-xs">
                Dodaj produkty z naszego sklepu, aby rozpocząć zamówienie.
              </p>
              <button
                onClick={closeCart}
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-display font-bold text-sm uppercase tracking-wider hover:bg-foreground/85 transition-colors"
              >
                Wróć do sklepu
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-foreground/10">
              {items.map((it) => {
                const lineTotal = it.unitPrice * it.quantity;
                const lineOriginal = it.originalUnitPrice * it.quantity;
                return (
                  <li key={it.id} className="px-5 py-4 flex gap-3">
                    <div className="w-16 h-20 shrink-0 bg-shroom-cream flex items-center justify-center">
                      <img
                        src={it.productImage}
                        alt={it.productName}
                        className="h-full w-auto object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="font-display text-sm font-bold uppercase text-foreground truncate">
                            {it.productName}
                          </p>
                          <p className="font-body text-xs text-foreground/60 mt-0.5">
                            {it.bottlesPerUnit > 1
                              ? `Pakiet ${it.bottlesPerUnit} szt.`
                              : "1 szt."}
                            {it.isSubscription &&
                              ` · subskrypcja co ${it.cadenceWeeks} tyg`}
                          </p>
                          {it.bundleWith && (
                            <p className="font-body text-[10px] uppercase tracking-wider text-shroom-green-dark mt-1">
                              + duet
                            </p>
                          )}
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(it.id)}
                          className="p-1 -mr-1 text-foreground/40 hover:text-foreground transition-colors"
                          aria-label="Usuń pozycję"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-end justify-between gap-2 mt-3">
                        {/* Quantity stepper */}
                        <div className="inline-flex items-center border border-foreground/20">
                          <button
                            type="button"
                            onClick={() => updateQuantity(it.id, it.quantity - 1)}
                            className="px-2 py-1.5 text-foreground hover:bg-foreground/5 transition-colors"
                            aria-label="Zmniejsz ilość"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-display text-sm font-bold w-8 text-center">
                            {it.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(it.id, it.quantity + 1)}
                            className="px-2 py-1.5 text-foreground hover:bg-foreground/5 transition-colors"
                            aria-label="Zwiększ ilość"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="font-display text-sm font-bold text-foreground">
                            {lineTotal} zł
                          </p>
                          {it.isSubscription && lineOriginal > lineTotal && (
                            <p className="font-body text-[11px] line-through text-foreground/40">
                              {lineOriginal} zł
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer / Checkout */}
        {items.length > 0 && (
          <div className="border-t-2 border-foreground px-5 py-4 space-y-3 bg-background">
            <div className="flex items-center justify-between">
              <span className="font-display text-sm uppercase tracking-wider text-foreground/70">
                Suma
              </span>
              <span className="font-headline text-3xl text-foreground">{subtotal} zł</span>
            </div>
            <p className="font-body text-[11px] text-foreground/50">
              Dostawa i podatki obliczone w kasie.
            </p>
            <button
              type="button"
              onClick={handleCheckout}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-foreground text-background font-display font-bold text-sm uppercase tracking-wider hover:bg-foreground/85 transition-colors"
            >
              <Lock className="w-3.5 h-3.5" />
              Przejdź do kasy
            </button>
            <Link
              to="/koszyk"
              onClick={closeCart}
              className="block w-full text-center font-body text-xs uppercase tracking-wider text-foreground/70 hover:text-foreground underline underline-offset-4 transition-colors py-1"
            >
              Zobacz cały koszyk
            </Link>
            <button
              type="button"
              onClick={closeCart}
              className="w-full text-center font-body text-xs uppercase tracking-wider text-foreground/60 hover:text-foreground transition-colors py-1"
            >
              Kontynuuj zakupy
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
