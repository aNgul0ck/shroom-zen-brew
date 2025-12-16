import { ArrowRight } from "lucide-react";
import productPower from "@/assets/product-power.png";
import productRelax from "@/assets/product-relax.png";

const products = [
  {
    id: 1,
    name: "Shroom Power",
    version: "v1.1",
    tagline: "Energia & Koncentracja",
    description: "Napój wellness z adaptogenami dla pełnej energii i skupienia. Soplówka jeżowata + żeń-szeń wspierają funkcje kognitywne.",
    price: "79 zł",
    priceNote: "6 sztuk",
    image: productPower,
    color: "bg-shroom-peach/30",
    flavors: ["Ginger", "Exotic fruits", "Green Tea"],
    features: ["Soplówka jeżowata", "Żeń-szeń", "Witaminy B"],
  },
  {
    id: 2,
    name: "Shroom Relax",
    version: "v2.1",
    tagline: "Spokój & Równowaga",
    description: "Napój wellness wspierający relaksację i regenerację. Naturalny sposób na radzenie sobie ze stresem.",
    price: "79 zł",
    priceNote: "6 sztuk",
    image: productRelax,
    color: "bg-shroom-sky/30",
    flavors: ["Aronia berry", "Bergamot", "Hops"],
    features: ["L-theanina", "Chmiel", "Bergamotka"],
  },
];

const Products = () => {
  return (
    <section id="produkty" className="section-padding bg-shroom-sage/20">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-body text-sm font-semibold text-shroom-coral uppercase tracking-wider mb-4">
            Mushrooms & Botanicals
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-6">
            Napoje Shroom
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Dwie formuły, jeden cel — wspierać Twoje ciało i umysł naturalnie. 
            Wybierz Power do pobudzenia lub Relax do wyciszenia.
          </p>
        </div>

        {/* Products Grid - Side by Side */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <article
              key={product.id}
              className={`group relative bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 animate-fade-up`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background accent */}
              <div className={`absolute top-0 right-0 w-64 h-64 ${product.color} rounded-full blur-3xl -z-10 opacity-80`} />
              
              {/* Product Image */}
              <div className="relative h-80 md:h-96 flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-auto object-contain drop-shadow-2xl"
                />
              </div>

              {/* Content */}
              <div className="p-6 pt-0">
                {/* Version Badge */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-body text-xs font-semibold text-shroom-coral uppercase tracking-wider">
                    {product.tagline}
                  </span>
                  <span className="text-xs text-muted-foreground font-body">
                    {product.version}
                  </span>
                </div>
                
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {product.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  {product.description}
                </p>

                {/* Flavors */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.flavors.map((flavor) => (
                    <span
                      key={flavor}
                      className="bg-shroom-blush/50 px-3 py-1 rounded-full font-body text-xs font-medium text-shroom-purple"
                    >
                      {flavor}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="bg-secondary px-3 py-1 rounded-full font-body text-xs font-medium text-secondary-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div>
                    <p className="font-display text-2xl font-bold text-primary">
                      {product.price}
                    </p>
                    <p className="font-body text-xs text-muted-foreground">
                      {product.priceNote}
                    </p>
                  </div>
                  <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full font-display font-semibold text-sm hover:scale-105 transition-transform duration-200">
                    Zamów
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pack Options */}
        <div className="mt-12 text-center">
          <p className="font-body text-muted-foreground mb-4">
            Dostępne również w paczkach 12 i 18 sztuk
          </p>
          <div className="inline-flex gap-4">
            <span className="bg-card px-4 py-2 rounded-full font-body text-sm shadow-soft">
              6 szt. — <strong>79 zł</strong>
            </span>
            <span className="bg-card px-4 py-2 rounded-full font-body text-sm shadow-soft">
              12 szt. — <strong>148 zł</strong>
            </span>
            <span className="bg-card px-4 py-2 rounded-full font-body text-sm shadow-soft">
              18 szt. — <strong>216 zł</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
