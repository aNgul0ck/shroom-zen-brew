import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const QuizCTA = () => {
  return (
    <section className="py-20 md:py-24 bg-accent/10">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto"
        >
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nie wiesz od czego zacząć?
          </h2>
          <p className="font-body text-muted-foreground mb-8">
            Zrób quiz — 4 pytania, dopasujemy Shrooma do Ciebie.
          </p>
          <Link
            to="/quiz"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-display font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Znajdź swojego Shrooma
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default QuizCTA;
