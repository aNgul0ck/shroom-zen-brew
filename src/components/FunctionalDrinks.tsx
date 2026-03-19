import { ArrowRight, Sun, Moon, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import productPower from "@/assets/product-power.png";
import productRelax from "@/assets/product-relax.png";
import productDiva from "@/assets/product-diva.png";

const products = [
  {
    id: 1,
    name: "Shroom Power",
    tagline: "Energia bez bullshitu.",
    image: productPower,
    icon: Sun,
    benefits: ["Lion's Mane", "Żeń-szeń", "Wit. C"],
    time: "Rano",
    description:
      "Aktywuj umysł i ciało. Bez crashu kofeinowego, bez jitterów. Czysta, stabilna energia na cały dzień.",
    color: "bg-shroom-gold/20",
    slug: "shroom-power",
    price: "79 zł",
  },
  {
    id: 2,
    name: "Shroom Relax",
    tagline: "Wyluzuj bez wina.",
    image: productRelax,
    icon: Moon,
    benefits: ["Lion's Mane", "L-Teanina", "Chmiel"],
    time: "Wieczór",
    description:
      "Wycisz się po intensywnym dniu. Regeneracja zaczyna się od odpuszczenia — nie od kolejnego scrollowania.",
    color: "bg-shroom-lavender/20",
    slug: "shroom-relax",
    price: "79 zł",
  },
  {
    id: 3,
    name: "Diva",
    tagline: "Celebruj każdą chwilę.",
    image: productDiva,
    icon: Sparkles,
    benefits: ["13 botaników", "Jadalny brokat", "Żeń-szeń"],
    time: "Social",
    description:
      "Bezalkoholowe aperitivo stworzone do wyjątkowych momentów. Spektakularny smak, zero kompromisów.",
    color: "bg-diva-pink/15",
    slug: "diva",
    price: "112 zł",
  },
];

const FunctionalDrinks = () => {
  return (
    <section className="py-28 md:py-36 bg-background" id="produkty">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-6 md:mb-8"
        >
          <p className="font-body text-sm font-medium text-accent uppercase tracking-[0.2em] mb-6">
            Shroom Drinks
          </p>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]">
            Rytm dnia{" "}
            <span className="text-muted-foreground/40">i nocy.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-body text-lg text-muted-foreground max-w-xl mb-16 md:mb-20"
        >
          Trzy napoje zaprojektowane do naturalnego rytmu Twojego życia. Energia, spokój, celebracja.
        </motion.p>

        {/* Products */}
        <div className="grid lg:grid-cols-3 gap-5">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className={`${product.color} rounded-3xl p-8 md:p-10 group flex flex-col`}
            >
              {/* Time badge */}
              <div className="flex items-center gap-2 mb-8">
                <span className="bg-background/70 backdrop-blur-sm px-3 py-1 rounded-full font-display text-xs font-semibold text-foreground flex items-center gap-1.5">
                  <product.icon className="w-3.5 h-3.5" />
                  {product.time}
                </span>
              </div>

              {/* Product image — centered */}
              <div className="flex justify-center mb-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 md:h-56 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                {product.name}
              </h3>
              <p className="font-body text-lg text-foreground/70 mb-4">
                {product.tagline}
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {product.description}
              </p>

              {/* Benefits pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {product.benefits.map((b) => (
                  <span
                    key={b}
                    className="bg-background/60 backdrop-blur-sm px-3 py-1.5 rounded-full font-body text-xs text-foreground"
                  >
                    {b}
                  </span>
                ))}
              </div>

              {/* CTA with price */}
              <Link
                to={`/produkt/${product.slug}`}
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-display font-semibold text-sm hover:opacity-90 transition-opacity self-start"
              >
                Kup teraz — {product.price}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunctionalDrinks;
