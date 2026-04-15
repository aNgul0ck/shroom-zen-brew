import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const QuizCTA = () => {
  return (
    <section className="ed-section bg-[hsl(204,55%,82%)]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-xl mx-auto">
          <p className="font-body text-sm font-medium text-foreground/60 uppercase tracking-[0.2em] mb-4">
            Quiz
          </p>
          <h2 className="ed-heading text-foreground mb-4">
            Nie wiesz od czego zacząć?
          </h2>
          <p className="font-body text-foreground/60 mb-8">
            Zrób quiz — 4 pytania, dopasujemy Shrooma do Ciebie.
          </p>
          <Link
            to="/quiz"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 font-display font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Znajdź swojego Shrooma
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuizCTA;
