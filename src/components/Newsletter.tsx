import { useState } from "react";
import { ArrowRight, Gift, Mail } from "lucide-react";
import { motion } from "framer-motion";
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
    <section className="py-24 bg-shroom-peach">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-background/50 flex items-center justify-center">
            <Mail className="w-7 h-7 text-foreground" />
          </div>

          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            Bądź na bieżąco
          </h2>
          
          <p className="font-body text-muted-foreground mb-8">
            Newsletter z przepisami, promocjami i nowościami ze świata Shroom.
          </p>

          {/* Benefit */}
          <div className="inline-flex items-center gap-2 bg-background/50 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <Gift className="w-4 h-4 text-shroom-gold" />
            <span className="font-body text-sm text-foreground">
              -10% na pierwsze zamówienie
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Twój adres email"
              className="w-full px-6 py-4 rounded-full bg-background border border-border font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-display font-semibold text-sm hover:bg-foreground/90 transition-colors"
            >
              Zapisz się
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="font-body text-xs text-muted-foreground mt-6">
            Szanujemy Twoją prywatność. Wypisz się w dowolnym momencie.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
