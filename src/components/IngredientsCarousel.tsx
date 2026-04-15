import { Brain, Zap, Moon, Leaf, Heart, Shield } from "lucide-react";

const ingredients = [
  { name: "Lion's Mane", icon: Brain, benefit: "Supports brain function, boosts immune system" },
  { name: "L-Teanina", icon: Moon, benefit: "Promotes relaxation and calm alertness" },
  { name: "Żeń-szeń", icon: Zap, benefit: "Stamina and vitality boost" },
  { name: "Chmiel", icon: Leaf, benefit: "Wsparcie regeneracji i snu" },
  { name: "Witamina C", icon: Shield, benefit: "Ochrona organizmu i odporność" },
  { name: "Cynk", icon: Heart, benefit: "Prawidłowe funkcjonowanie metabolizmu" },
];

const IngredientsCarousel = () => {
  return (
    <section className="bg-[hsl(45,90%,80%)]">
      <div className="container mx-auto px-6 lg:px-12 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.2em] mb-3">
              Składniki
            </p>
            <h2 className="ed-heading text-foreground leading-tight">Adaptogens</h2>
          </div>
          <p className="font-body text-sm text-foreground/50 max-w-xs">
            Natural botanicals and fungal extracts for homeostasis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-[3px] mb-[3px]">
          {ingredients.slice(0, 3).map((ing) => (
            <div key={ing.name} className="bg-[hsl(204,55%,85%)] p-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-1">{ing.name}</h3>
              <p className="font-body text-xs text-foreground/50">{ing.benefit}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-[3px]">
          {ingredients.slice(3).map((ing) => (
            <div key={ing.name} className="bg-[hsl(150,50%,82%)] p-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-1">{ing.name}</h3>
              <p className="font-body text-xs text-foreground/50">{ing.benefit}</p>
            </div>
          ))}
        </div>

        <p className="font-body text-[10px] text-foreground/30 max-w-xl mt-6">
          * Oświadczenia zdrowotne zgodne z rozporządzeniem EFSA.
        </p>
      </div>
    </section>
  );
};

export default IngredientsCarousel;
