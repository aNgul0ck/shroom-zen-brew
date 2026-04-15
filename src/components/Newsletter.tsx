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
    <section className="bg-shroom-gold">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <Mail className="w-6 h-6 text-foreground mb-4" />
          <h2 className="ed-heading text-foreground mb-3 text-2xl md:text-3xl">
            Bądź na bieżąco
          </h2>
          <p className="font-body text-sm text-foreground/50 mb-4 max-w-sm">
            Newsletter z przepisami, promocjami i nowościami ze świata Shroom.
          </p>
          <div className="bg-background/50 inline-flex items-center gap-2 px-3 py-1.5 self-start">
            <Gift className="w-3.5 h-3.5 text-foreground" />
            <span className="font-body text-xs text-foreground">-10% na pierwsze zamówienie</span>
          </div>
        </div>

        {/* Right */}
        <div className="bg-shroom-peach p-8 md:p-12 flex items-center">
          <form onSubmit={handleSubmit} className="space-y-3 w-full max-w-sm">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Twój adres email"
              className="w-full px-4 py-3 bg-background border border-foreground/10 font-body text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground/20 transition-all"
              required
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 font-display font-semibold text-xs hover:opacity-90 transition-opacity"
            >
              Zapisz się
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <p className="font-body text-[10px] text-foreground/30">
              Szanujemy Twoją prywatność. Wypisz się w dowolnym momencie.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
