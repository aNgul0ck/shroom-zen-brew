import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const QuizCTA = () => {
  return (
    <section className="bg-shroom-peach">
      <div className="container mx-auto px-6 lg:px-12 py-12 md:py-16">
        <div className="text-center max-w-md mx-auto">
          <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.2em] mb-3">
            Quiz
          </p>
          <h2 className="ed-heading text-foreground mb-3">
            Nie wiesz od czego zacząć?
          </h2>
          <p className="font-body text-sm text-foreground/50 mb-6">
            4 pytania — dopasujemy Shrooma do Ciebie.
          </p>
          <Link
            to="/quiz"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 font-display font-semibold text-sm hover:opacity-90 transition-opacity"
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
