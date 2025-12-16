import { Info, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Disclaimer = () => {
  return (
    <section id="disclaimer" className="bg-secondary/50 py-12">
      <div className="container mx-auto px-6">
        {/* Health Claims Disclaimer */}
        <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft">
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-lg font-bold text-foreground mb-3">
                Informacja o oświadczeniach zdrowotnych
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground font-body">
                <p>
                  <strong className="text-foreground">*</strong> Oświadczenia zdrowotne dotyczące cynku i witaminy C 
                  są zatwierdzone przez Europejski Urząd ds. Bezpieczeństwa Żywności (EFSA) i figurują w rejestrze 
                  dozwolonych oświadczeń zdrowotnych UE (Rozporządzenie WE nr 1924/2006).
                </p>
                <p>
                  <strong className="text-foreground">Cynk</strong> przyczynia się do prawidłowych funkcji poznawczych. 
                  <strong className="text-foreground ml-2">Witamina C</strong> przyczynia się do prawidłowego 
                  funkcjonowania układu nerwowego.
                </p>
                <p className="text-xs text-muted-foreground/70 pt-3 border-t border-border">
                  Suplement diety nie może być stosowany jako substytut zróżnicowanej diety. 
                  Zalecane dzienne spożycie nie powinno być przekraczane.
                </p>
              </div>

              {/* Link to full research page */}
              <Link
                to="/badania"
                className="inline-flex items-center gap-2 mt-6 bg-primary text-primary-foreground px-5 py-3 rounded-full font-display font-semibold text-sm hover:scale-105 transition-transform"
              >
                Zobacz badania naukowe
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
