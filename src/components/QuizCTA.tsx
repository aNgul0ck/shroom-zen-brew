import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const QuizCTA = () => {
  return (
    <section className="bg-shroom-peach">
      <div className="container mx-auto px-6 lg:px-12 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left — big headline */}
          <div>
            <div className="inline-flex items-center gap-2 bg-foreground/10 px-3 py-1.5 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-foreground" />
              <span className="font-body text-xs font-medium text-foreground uppercase tracking-wider">30 sekund</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] mb-4">
              Nie wiesz od czego zacząć?
            </h2>
            <p className="font-body text-base lg:text-lg text-foreground/60 max-w-sm">
              4 pytania — dopasujemy Shrooma do Twojego stylu życia, rytmu dnia i potrzeb.
            </p>
          </div>

          {/* Right — CTA card */}
          <div className="flex flex-col items-start md:items-end">
            <div className="space-y-4 md:text-right">
              <div className="flex flex-wrap gap-2 md:justify-end">
                {["☀️ Rano czy wieczór?", "🧠 Fokus czy relaks?", "🎉 Impreza?"].map((q) => (
                  <span key={q} className="bg-background/50 px-3 py-1.5 font-body text-sm text-foreground">
                    {q}
                  </span>
                ))}
              </div>
              <Link
                to="/quiz"
                className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 lg:px-10 lg:py-5 font-display font-bold text-base lg:text-lg hover:gap-5 transition-all duration-300"
              >
                Znajdź swojego Shrooma
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <p className="font-body text-xs text-foreground/40">
                Darmowy quiz · Bez rejestracji
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizCTA;
