import { Brain, Zap, Moon, Leaf, Heart, Shield } from "lucide-react";

const ingredients = [
  { name: "Lion's Mane", icon: Brain, benefit: "Supports brain function, boosts immune system", color: "bg-shroom-gold" },
  { name: "L-Teanina", icon: Moon, benefit: "Promotes relaxation and calm alertness", color: "bg-shroom-sky" },
  { name: "Żeń-szeń", icon: Zap, benefit: "Stamina and vitality boost", color: "bg-shroom-green" },
  { name: "Chmiel", icon: Leaf, benefit: "Wsparcie regeneracji i snu", color: "bg-shroom-sage" },
  { name: "Witamina C", icon: Shield, benefit: "Ochrona organizmu i odporność", color: "bg-shroom-peach" },
  { name: "Cynk", icon: Heart, benefit: "Prawidłowe funkcjonowanie metabolizmu", color: "bg-shroom-green" },
];

const IngredientsCarousel = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-12 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.2em] mb-3">
              Składniki
            </p>
            <h2 className="ed-heading text-foreground leading-tight">Adaptogens</h2>
          </div>
          <p className="font-body text-sm lg:text-base text-foreground/50 max-w-xs">
            Natural botanicals and fungal extracts for homeostasis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-[3px]">
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
