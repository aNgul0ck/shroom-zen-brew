import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import productPower from "@/assets/product-power.png";
import productRelax from "@/assets/product-relax.png";

const products = [
  {
    id: 1,
    name: "Shroom Power",
    tagline: "Moc & Skupienie",
    description: "Ekstrakt z soplówki jeżowatej i żeń-szeń. Źródło cynku, który przyczynia się do prawidłowych funkcji poznawczych.",
    price: "79 zł",
    priceNote: "6 × 330ml",
    image: productPower,
    bgColor: "bg-shroom-peach/20",
    ingredients: ["Soplówka jeżowata", "Żeń-szeń", "Cynk", "Wit. C"],
  },
  {
    id: 2,
    name: "Shroom Relax",
    tagline: "Spokój & Równowaga",
    description: "L-theanina i chmiel dla naturalnego wyciszenia. Witamina C wspiera prawidłowe funkcjonowanie układu nerwowego.",
    price: "79 zł",
    priceNote: "6 × 330ml",
    image: productRelax,
    bgColor: "bg-shroom-sky/20",
    ingredients: ["L-theanina", "Chmiel", "Bergamotka", "Wit. C"],
  },
];

const Products = () => {
  return (
    <section id="produkty" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-4">
            Napoje funkcjonalne
          </p>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-6">
            Wybierz swój Shroom
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            Dwa smaki, jeden cel — wspierać Twoje ciało i umysł naturalnie.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className={`group relative ${product.bgColor} rounded-3xl p-8 lg:p-10 overflow-hidden`}
            >
              {/* Product Image */}
              <div className="relative h-64 md:h-80 flex items-center justify-center mb-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div>
                <p className="font-body text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                  {product.tagline}
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {product.name}
                </h3>
                <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Ingredients */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.ingredients.map((ingredient) => (
                    <span
                      key={ingredient}
                      className="bg-background/60 backdrop-blur-sm px-4 py-2 rounded-full font-body text-xs font-medium text-foreground"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-foreground/10">
                  <div>
                    <p className="font-display text-3xl font-bold text-primary">{product.price}</p>
                    <p className="font-body text-sm text-muted-foreground">{product.priceNote}</p>
                  </div>
                  <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-display font-semibold text-sm hover:scale-105 transition-transform duration-200">
                    Zamów
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pack Options */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="font-body text-sm text-muted-foreground mb-4">
            Dostępne również w większych paczkach
          </p>
          <div className="inline-flex flex-wrap justify-center gap-4">
            {[
              { qty: "6 szt.", price: "79 zł" },
              { qty: "12 szt.", price: "148 zł" },
              { qty: "18 szt.", price: "216 zł" },
            ].map((pack) => (
              <span
                key={pack.qty}
                className="bg-card px-5 py-2.5 rounded-full font-body text-sm shadow-soft"
              >
                {pack.qty} — <strong>{pack.price}</strong>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
