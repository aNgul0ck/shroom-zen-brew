import { ArrowRight } from "lucide-react";
import productPower from "@/assets/product-power.png";
import productRelax from "@/assets/product-relax.png";
import productDiva from "@/assets/product-diva.png";

const products = [
  {
    id: 1,
    name: "Shroom Power",
    tagline: "Energia & Koncentracja",
    description: "Napój wellness z adaptogenami dla pełnej energii i skupienia. Idealna alternatywa dla kawy i energetyków.",
    price: "79 zł",
    priceNote: "6 sztuk",
    image: productPower,
    color: "bg-shroom-sage/20",
    features: ["Soplówka jeżowata", "Żeń-szeń", "Witaminy B"],
  },
  {
    id: 2,
    name: "Shroom Relax",
    tagline: "Spokój & Równowaga",
    description: "Napój wellness wspierający relaksację i regenerację. Naturalny sposób na radzenie sobie ze stresem.",
    price: "79 zł",
    priceNote: "6 sztuk",
    image: productRelax,
    color: "bg-shroom-blush/30",
    features: ["L-theanina", "Chmiel", "Aronia"],
  },
  {
    id: 3,
    name: "Diva Social Elixir",
    tagline: "Celebruj & Baw się",
    description: "Bezalkoholowe aperitivo z 13 składnikami botanicznymi. Idealne na spotkania bez kompromisów.",
    price: "112 zł",
    priceNote: "500ml",
    image: productDiva,
    color: "bg-shroom-peach/30",
    features: ["13 ziół", "Cordyceps", "Jadalny brokat"],
  },
];

const Products = () => {
  return (
    <section id="produkty" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-body text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Nasze napoje
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Odkryj moc adaptogenów
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Każdy napój to starannie skomponowana receptura z naturalnych składników o potwierdzonej skuteczności.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <article
              key={product.id}
              className={`group relative bg-card rounded-3xl p-6 shadow-soft hover:shadow-elevated transition-all duration-500 overflow-hidden animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background accent */}
              <div className={`absolute top-0 right-0 w-48 h-48 ${product.color} rounded-full blur-3xl -z-10 opacity-60`} />

              {/* Product Image */}
              <div className="relative h-64 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-500">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-auto object-contain drop-shadow-lg"
                />
              </div>

              {/* Content */}
              <div>
                <span className="font-body text-xs font-semibold text-accent uppercase tracking-wider">
                  {product.tagline}
                </span>
                <h3 className="font-display text-2xl font-bold text-foreground mt-2 mb-3">
                  {product.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>

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
      </div>
    </section>
  );
};

export default Products;
