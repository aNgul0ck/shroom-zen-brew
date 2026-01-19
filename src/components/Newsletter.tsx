import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitted(true);
    toast.success("Dziękujemy za zapis! 🍄");
    setEmail("");
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="font-body text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-6">
            Newsletter
          </p>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-6">
            Dołącz do świadomych
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-10">
            Zapisz się na newsletter i otrzymuj informacje o nowościach, 
            promocjach oraz porady dotyczące adaptogenów.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Twój adres email"
              className="flex-1 px-6 py-4 rounded-full bg-card border border-border font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200"
              required
            />
            <button
              type="submit"
              disabled={isSubmitted}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-display font-semibold text-base hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:scale-100"
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Zapisano!
                </>
              ) : (
                <>
                  Zapisz się
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <p className="font-body text-xs text-muted-foreground mt-6">
            Bez spamu. Możesz zrezygnować w każdej chwili.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
