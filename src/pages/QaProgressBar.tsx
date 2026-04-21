import ShippingProgressBar from "@/components/ShippingProgressBar";
import { useSearchParams } from "react-router-dom";

/**
 * Internal QA-only route. Renders ShippingProgressBar at an arbitrary amount
 * via `?amount=199` so we can capture boundary screenshots (199 vs 200 zł)
 * without having to build cart combinations that match exactly.
 *
 * Not linked from anywhere. Safe to leave in tree — pure visual harness.
 */
const QaProgressBar = () => {
  const [params] = useSearchParams();
  const amount = Number(params.get("amount") ?? "0");
  const variant = (params.get("variant") ?? "default") as
    | "default"
    | "compact"
    | "sticky";

  return (
    <div className="min-h-screen bg-background p-8 space-y-10">
      <header className="border-b-2 border-foreground pb-4">
        <h1 className="font-headline text-3xl uppercase">QA · ShippingProgressBar</h1>
        <p className="font-body text-sm text-foreground/60 mt-1">
          amount = <strong>{amount} zł</strong> · variant = <strong>{variant}</strong>
        </p>
      </header>

      <section className="max-w-md p-4 bg-shroom-cream border border-foreground/10">
        <p className="font-body text-xs uppercase tracking-wider text-foreground/60 mb-3">
          {variant} variant
        </p>
        <ShippingProgressBar amount={amount} variant={variant} />
      </section>
    </div>
  );
};

export default QaProgressBar;
