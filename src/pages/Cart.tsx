import { Link } from "react-router-dom";
import { Minus, Plus, X, ShoppingBag, Lock, ArrowLeft, Tag, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCartStore } from "@/stores/cartStore";
import { FREE_SHIPPING_THRESHOLD } from "@/data/products";
import ShippingProgressBar from "@/components/ShippingProgressBar";

// Frontend-only Cart page. Backend integration TODOs are inline. Reuses the
// same Zustand store as the drawer so state stays in sync across the app.

const SHIPPING_FEE = 12; // PLN — flat-rate fallback when subtotal < FREE_SHIPPING_THRESHOLD
const VAT_RATE = 0.23;   // For display only; backend will recompute at checkout.

const CartPage = () => {
  const items = useCartStore((s) => s.items);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const clear = useCartStore((s) => s.clear);
  const subtotal = useCartStore((s) => s.getSubtotal());
  const itemCount = useCartStore((s) => s.getItemCount());

  // Single source of truth: free shipping ONLY when subtotal ≥ 200 zł.
  // Derived locally from the threshold constant so the page can never show
  // 0 zł delivery with a sub-threshold cart, even if the store helper drifts.
  const qualifiesShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shipping = qualifiesShipping ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;
  const vatPortion = Math.round((total * VAT_RATE) / (1 + VAT_RATE));

  const handleCheckout = () => {
    // TODO(backend): POST /api/checkout/create-session and redirect to provider.
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
      shipping,
      total,
    });
    toast.success("Przekierowanie do kasy…", {
      description: "Backend stub — checkout flow wymaga podpięcia API",
    });
  };

  const handlePromo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO(backend): POST /api/cart/promo { code } → returns updated totals
    toast("Kod rabatowy", {
      description: "Walidacja kodu wymaga backendu (stub).",
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-6xl">
          {/* Page header */}
          <div className="mb-8 md:mb-10 border-b-2 border-foreground pb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-wider text-foreground/60 hover:text-foreground transition-colors mb-4"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Wróć do sklepu
            </Link>
            <h1 className="font-headline text-4xl md:text-6xl uppercase tracking-tight text-foreground">
              Koszyk
              {itemCount > 0 && (
                <span className="text-foreground/40 ml-3">({itemCount})</span>
              )}
            </h1>
          </div>

          {items.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-12">
              {/* LEFT: items list */}
              <section aria-label="Pozycje w koszyku">
                {/* Free shipping progress */}
                <div className="mb-6 p-4 bg-shroom-cream border border-foreground/10">
                  <ShippingProgressBar amount={subtotal} variant="default" />
                </div>

                <ul className="border-t-2 border-foreground divide-y divide-foreground/10">
                  {items.map((it) => {
                    const lineTotal = it.unitPrice * it.quantity;
                    const lineOriginal = it.originalUnitPrice * it.quantity;
                    return (
                      <li key={it.id} className="py-5 flex gap-4">
                        <Link
                          to={`/produkt/${it.productId}`}
                          className="w-24 h-32 md:w-28 md:h-36 shrink-0 bg-shroom-cream flex items-center justify-center hover:opacity-90 transition-opacity"
                        >
                          <img
                            src={it.productImage}
                            alt={it.productName}
                            className="h-full w-auto object-contain p-2"
                          />
                        </Link>
                        <div className="flex-1 min-w-0 flex flex-col">
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <Link
                                to={`/produkt/${it.productId}`}
                                className="font-display text-base md:text-lg font-bold uppercase text-foreground hover:underline"
                              >
                                {it.productName}
                              </Link>
                              <p className="font-body text-xs md:text-sm text-foreground/60 mt-1">
                                {it.bottlesPerUnit > 1
                                  ? `Pakiet ${it.bottlesPerUnit} szt.`
                                  : "1 szt."}
                                {it.isSubscription &&
                                  ` · subskrypcja co ${it.cadenceWeeks} tyg`}
                              </p>
                              {it.bundleWith && (
                                <p className="font-body text-[10px] uppercase tracking-wider text-shroom-green-dark mt-1.5">
                                  + dodano w duecie
                                </p>
                              )}
                              {it.isSubscription && (
                                <p className="font-body text-[11px] text-foreground/50 mt-1">
                                  Anulujesz w każdej chwili.
                                </p>
                              )}
                            </div>
                            <button
                              type="button"
                              onClick={() => removeItem(it.id)}
                              className="p-1.5 -mr-1.5 text-foreground/40 hover:text-foreground transition-colors"
                              aria-label={`Usuń ${it.productName}`}
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>

                          <div className="mt-auto pt-4 flex items-end justify-between gap-3">
                            <div className="inline-flex items-center border border-foreground/20">
                              <button
                                type="button"
                                onClick={() => updateQuantity(it.id, it.quantity - 1)}
                                className="px-3 py-2 text-foreground hover:bg-foreground/5 transition-colors"
                                aria-label="Zmniejsz ilość"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="font-display text-sm font-bold w-10 text-center">
                                {it.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => updateQuantity(it.id, it.quantity + 1)}
                                className="px-3 py-2 text-foreground hover:bg-foreground/5 transition-colors"
                                aria-label="Zwiększ ilość"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            <div className="text-right">
                              <p className="font-display text-base md:text-lg font-bold text-foreground">
                                {lineTotal} zł
                              </p>
                              {it.isSubscription && lineOriginal > lineTotal && (
                                <p className="font-body text-xs line-through text-foreground/40">
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

                <div className="mt-6 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => clear()}
                    className="font-body text-xs uppercase tracking-wider text-foreground/50 hover:text-foreground transition-colors"
                  >
                    Wyczyść koszyk
                  </button>
                  <Link
                    to="/"
                    className="font-body text-xs uppercase tracking-wider text-foreground/60 hover:text-foreground transition-colors"
                  >
                    Kontynuuj zakupy →
                  </Link>
                </div>
              </section>

              {/* RIGHT: order summary */}
              <aside aria-label="Podsumowanie zamówienia" className="lg:sticky lg:top-24 lg:self-start">
                <div className="border-2 border-foreground bg-background">
                  <div className="px-5 py-4 border-b-2 border-foreground">
                    <h2 className="font-headline text-2xl uppercase tracking-tight text-foreground">
                      Podsumowanie
                    </h2>
                  </div>

                  <div className="px-5 py-4 space-y-3 border-b border-foreground/10">
                    <Row label={`Suma częściowa (${itemCount})`} value={`${subtotal} zł`} />
                    <Row
                      label="Dostawa"
                      value={
                        qualifiesShipping ? (
                          <span className="text-shroom-green-dark font-bold">Darmowa</span>
                        ) : (
                          `${shipping} zł`
                        )
                      }
                    />
                    <p className="font-body text-[11px] text-foreground/50 leading-snug">
                      W tym VAT (23%): {vatPortion} zł
                    </p>
                  </div>

                  <div className="px-5 py-4 flex items-center justify-between border-b-2 border-foreground">
                    <span className="font-display text-sm uppercase tracking-wider text-foreground">
                      Razem
                    </span>
                    <span className="font-headline text-3xl text-foreground">
                      {total} zł
                    </span>
                  </div>

                  {/* Promo code */}
                  <form onSubmit={handlePromo} className="px-5 py-4 border-b border-foreground/10">
                    <label
                      htmlFor="promo"
                      className="flex items-center gap-2 font-body text-xs uppercase tracking-wider text-foreground/70 mb-2"
                    >
                      <Tag className="w-3.5 h-3.5" />
                      Kod rabatowy
                    </label>
                    <div className="flex gap-2">
                      <input
                        id="promo"
                        type="text"
                        placeholder="np. WELCOME10"
                        className="flex-1 px-3 py-2.5 border border-foreground/20 bg-background font-body text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2.5 border border-foreground bg-background text-foreground font-display font-bold text-xs uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors"
                      >
                        Zastosuj
                      </button>
                    </div>
                  </form>

                  {/* Checkout */}
                  <div className="px-5 py-4 space-y-3">
                    <button
                      type="button"
                      onClick={handleCheckout}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-foreground text-background font-display font-bold text-sm uppercase tracking-wider hover:bg-foreground/85 transition-colors"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      Przejdź do kasy
                    </button>
                    <div className="flex items-center justify-center gap-2 font-body text-[11px] text-foreground/50">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Bezpieczna płatność · SSL · 14 dni na zwrot
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Row = ({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) => (
  <div className="flex items-center justify-between font-body text-sm text-foreground">
    <span className="text-foreground/70">{label}</span>
    <span className="font-display font-bold">{value}</span>
  </div>
);

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center py-16 md:py-24 text-center border-2 border-dashed border-foreground/20">
    <div className="w-20 h-20 border-2 border-foreground/20 flex items-center justify-center mb-6">
      <ShoppingBag className="w-9 h-9 text-foreground/30" />
    </div>
    <p className="font-headline text-3xl md:text-4xl uppercase text-foreground mb-3">
      Twój koszyk jest pusty
    </p>
    <p className="font-body text-sm text-foreground/60 mb-8 max-w-sm px-6">
      Wygląda na to, że jeszcze nic nie dodałeś. Sprawdź nasze napoje funkcjonalne i kapsułki.
    </p>
    <Link
      to="/"
      className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-display font-bold text-sm uppercase tracking-wider hover:bg-foreground/85 transition-colors"
    >
      Przeglądaj sklep
    </Link>
  </div>
);

export default CartPage;
