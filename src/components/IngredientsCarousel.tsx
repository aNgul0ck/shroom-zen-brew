import { Brain, Zap, Moon, Leaf, Heart, Shield } from "lucide-react";
import { useState } from "react";

const ingredients = [
  { name: "Lion's Mane", icon: Brain, benefit: "Soplówka jeżowata. Grzyb funkcjonalny z tradycji azjatyckiej. 500 mg w butelce.", color: "bg-shroom-gold", textColor: "text-shroom-gold" },
  { name: "L-Teanina", icon: Moon, benefit: "Aminokwas naturalnie obecny w liściach zielonej herbaty.", color: "bg-shroom-sky", textColor: "text-shroom-sky" },
  { name: "Żeń-szeń", icon: Zap, benefit: "Roślina o wielowiekowej tradycji w kulturze koreańskiej.", color: "bg-shroom-green", textColor: "text-shroom-green" },
  { name: "Chmiel", icon: Leaf, benefit: "Tradycyjny składnik wieczornych naparów.", color: "bg-shroom-sage", textColor: "text-shroom-sage" },
  { name: "Witamina C", icon: Shield, benefit: "Przyczynia się do prawidłowego funkcjonowania układu odpornościowego (EFSA).", color: "bg-shroom-peach", textColor: "text-shroom-peach" },
  { name: "Cynk", icon: Heart, benefit: "Przyczynia się do prawidłowej funkcji poznawczej (EFSA).", color: "bg-shroom-green", textColor: "text-shroom-green" },
];

const IngredientsCarousel = () => {
  const [active, setActive] = useState(0);
  const activeIng = ingredients[active];
  const ActiveIcon = activeIng.icon;

  return (
    <section className="bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-12 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.2em] mb-3">
              Składniki
            </p>
            <h2 className="ed-heading text-foreground leading-tight">Składniki</h2>
          </div>
          <p className="font-body text-sm lg:text-base text-foreground/50 max-w-xs">
            Naturalne składniki botaniczne i ekstrakty z grzybów. Pełen skład znajdziesz na etykiecie.
          </p>
        </div>

        {/* Mobile: interactive pill selector + detail card */}
        <div className="md:hidden">
          {/* Pill row - horizontally scrollable */}
          <div className="flex gap-2 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
            {ingredients.map((ing, i) => {
              const Icon = ing.icon;
              const isActive = i === active;
              return (
                <button
                  key={ing.name}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-2 px-4 py-2.5 shrink-0 border transition-all duration-200 ${
                    isActive
                      ? `${ing.color} border-foreground/20`
                      : "bg-foreground/5 border-transparent"
                  }`}
                >
                  <Icon className="w-4 h-4 text-foreground" />
                  <span className="font-display text-sm font-semibold text-foreground whitespace-nowrap">
                    {ing.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active detail card */}
          <div className={`${activeIng.color}/10 border-l-[3px] border-l-foreground/30 p-6 mt-2`}>
            <div className="flex items-center gap-3 mb-3">
              <div className={`${activeIng.color} w-12 h-12 flex items-center justify-center`}>
                <ActiveIcon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">{activeIng.name}</h3>
            </div>
            <p className="font-body text-sm text-foreground/60 leading-relaxed">
              {activeIng.benefit}
            </p>
          </div>
        </div>

        {/* Desktop: 3-col grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-[3px]">
          {ingredients.map((ing) => {
            const Icon = ing.icon;
            return (
              <div
                key={ing.name}
                className="group bg-background border border-foreground/8 p-6 lg:p-8 flex items-start gap-4 hover:border-foreground/15 transition-all duration-300 cursor-default"
              >
                <div className={`${ing.color} w-10 h-10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-base lg:text-lg font-bold text-foreground mb-1">{ing.name}</h3>
                  <p className="font-body text-xs lg:text-sm text-foreground/50">{ing.benefit}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="font-body text-[10px] text-foreground/30 max-w-xl mt-6">
          * Oświadczenia zdrowotne zgodne z rozporządzeniem EFSA.
        </p>
      </div>
    </section>
  );
};

export default IngredientsCarousel;
