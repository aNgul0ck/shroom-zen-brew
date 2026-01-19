import { useState } from "react";
import { ArrowRight } from "lucide-react";
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
    <section className="py-20 bg-shroom-peach">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's connect!
          </h2>
          <p className="font-body text-muted-foreground mb-8">
            Subscribe to our newsletter for updates, recipes, and exclusive offers.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-6 py-4 rounded-full bg-background border border-border font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
              required
            />
            <button
              type="submit"
              className="w-full bg-foreground text-background py-4 rounded-full font-display font-semibold text-sm hover:bg-foreground/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
