import { useState } from "react";
import { ArrowRight, Gift, Mail } from "lucide-react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Dziękujemy za zapis! 🍄");
    setEmail("");
  };

  return (
    <section className="bg-[hsl(45,90%,78%)]">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
        {/* Left - info */}
        <div className="p-10 md:p-16 flex flex-col justify-center">
          <Mail className="w-8 h-8 text-foreground mb-6" />
          <h2 className="ed-heading text-foreground mb-4">
            Bądź na bieżąco
          </h2>
          <p className="font-body text-foreground/60 mb-6 max-w-md">
            Newsletter z przepisami, promocjami i nowościami ze świata Shroom.
          </p>
          <div className="bg-background/60 inline-flex items-center gap-2 px-4 py-2 self-start">
            <Gift className="w-4 h-4 text-foreground" />
            <span className="font-body text-sm text-foreground">
              -10% na pierwsze zamówienie
            </span>
          </div>
        </div>

        {/* Right - form */}
        <div className="bg-[hsl(45,85%,85%)] p-10 md:p-16 flex items-center">
          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Twój adres email"
              className="w-full px-6 py-4 bg-background border-2 border-foreground/10 font-body text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground/30 transition-all"
              required
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 font-display font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Zapisz się
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="font-body text-xs text-foreground/40">
              Szanujemy Twoją prywatność. Wypisz się w dowolnym momencie.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
