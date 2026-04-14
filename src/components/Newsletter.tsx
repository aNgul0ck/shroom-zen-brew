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
    <section className="ed-section ed-bg-gold">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left - CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Mail className="w-8 h-8 text-foreground mb-6" />
            <h2 className="ed-heading text-foreground mb-4">
              Bądź na bieżąco
            </h2>
            <p className="font-body text-foreground/70 mb-6">
              Newsletter z przepisami, promocjami i nowościami ze świata Shroom.
            </p>
            <div className="ed-overlay-card inline-flex items-center gap-2 px-4 py-2">
              <Gift className="w-4 h-4 text-foreground" />
              <span className="font-body text-sm text-foreground">
                -10% na pierwsze zamówienie
              </span>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Twój adres email"
                className="w-full px-6 py-4 bg-background border border-foreground/10 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                required
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 font-display font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Zapisz się
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="font-body text-xs text-foreground/50">
                Szanujemy Twoją prywatność. Wypisz się w dowolnym momencie.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
