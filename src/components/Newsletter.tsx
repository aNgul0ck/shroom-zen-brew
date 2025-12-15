import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate submission
    setIsSubmitted(true);
    toast.success("Dziękujemy za zapis! 🍄");
    setEmail("");
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="kontakt" className="section-padding bg-secondary/40">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          {/* Decorative elements */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="text-4xl">🍄</span>
            <span className="text-4xl">✨</span>
            <span className="text-4xl">🌿</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Dołącz do świadomych
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-8">
            Zapisz się na newsletter i otrzymuj informacje o nowościach, 
            promocjach oraz porady dotyczące adaptogenów.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Twój adres email"
                className="w-full px-6 py-4 rounded-full bg-card border border-border font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                required
              />
            </div>
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

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-6 mt-8 text-muted-foreground">
            <span className="font-body text-sm">✓ Bez spamu</span>
            <span className="font-body text-sm">✓ Możesz zrezygnować w każdej chwili</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
