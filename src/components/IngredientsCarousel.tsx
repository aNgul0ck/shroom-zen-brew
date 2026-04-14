import { Brain, Zap, Moon, Leaf, Heart, Shield } from "lucide-react";

const ingredients = [
  { name: "Lion's Mane", icon: Brain, benefit: "Supports brain function, boosts the immune system" },
  { name: "L-Teanina", icon: Moon, benefit: "Promotes relaxation and calm alertness" },
  { name: "Żeń-szeń", icon: Zap, benefit: "Stamina and vitality boost" },
  { name: "Chmiel", icon: Leaf, benefit: "Wsparcie regeneracji i snu" },
  { name: "Witamina C", icon: Shield, benefit: "Ochrona organizmu i odporność" },
  { name: "Cynk", icon: Heart, benefit: "Prawidłowe funkcjonowanie metabolizmu" },
];

const IngredientsCarousel = () => {
  return (
    <section className="ed-section ed-bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-4">
          <h2 className="ed-heading text-foreground">Adaptogens</h2>
        </div>
        <div className="ed-divider mb-8" />
        <p className="font-body text-foreground/80 max-w-2xl mb-12 text-base md:text-lg leading-relaxed">
          Adaptogens are natural botanicals and fungal extracts that help our bodies achieve homeostasis — the balance we all seek.
        </p>

        <div className="grid md:grid-cols-3 gap-1">
          {ingredients.slice(0, 3).map((ingredient) => (
            <div key={ingredient.name} className="ed-bg-sky p-8 md:p-10">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                {ingredient.name}
              </h3>
              <p className="font-body text-sm text-foreground/70 leading-relaxed">
                {ingredient.benefit}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-1 mt-1">
          {ingredients.slice(3).map((ingredient) => (
            <div key={ingredient.name} className="ed-bg-mint p-8 md:p-10">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                {ingredient.name}
              </h3>
              <p className="font-body text-sm text-foreground/70 leading-relaxed">
                {ingredient.benefit}
              </p>
            </div>
          ))}
        </div>

        <p className="font-body text-xs text-muted-foreground max-w-2xl mt-8">
          * Oświadczenia zdrowotne zgodne z rozporządzeniem EFSA. 
          Cynk przyczynia się do prawidłowego funkcjonowania układu odpornościowego. 
          Witamina C wspomaga prawidłowe funkcjonowanie układu nerwowego.
        </p>
      </div>
    </section>
  );
};

export default IngredientsCarousel;
