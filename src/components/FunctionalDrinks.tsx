import { ArrowRight, Sun, Moon, PartyPopper, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import productPower from "@/assets/product-power.png";
import productRelax from "@/assets/product-relax.png";
import productDiva from "@/assets/product-diva.png";
import productBrainbliss from "@/assets/product-brainbliss.png";

const products = [
  {
    id: 1,
    name: "Shroom Power",
    tagline: "Energia bez bullshitu.",
    volume: "330ml",
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
    volume: "330ml",
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
    name: "Diva Social Elixir",
    tagline: "Imprezuj bez alkoholu.",
    volume: "500ml",
    image: productDiva,
    icon: PartyPopper,
    benefits: ["Glitter botanics", "Adaptogeny", "Bez alkoholu"],
    time: "Wieczór/Impreza",
    description:
      "Bezalkoholowy aperitivo z adaptogenami. Na każde wyjście, które chcesz zapamiętać.",
    color: "bg-diva-pink/15",
    slug: "diva-social-elixir",
    price: "112 zł",
  },
  {
    id: 4,
    name: "BrainBliss",
    tagline: "Lion's Mane w tabletce.",
    volume: "30 tabletek",
    image: productBrainbliss,
    icon: Brain,
    benefits: ["Lion's Mane 500mg", "Tabletki", "30 porcji"],
    time: "Codziennie",
    description:
      "Soplówka jeżowata w czystej formie. Dla tych, którzy chcą więcej z każdego dnia.",
    color: "bg-shroom-sage/20",
    slug: "brainbliss",
    price: "47 zł",
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
          Cztery produkty zaprojektowane do naturalnego rytmu Twojego życia. Energia, spokój, celebracja, fokus.
        </motion.p>

        {/* Products */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`${product.color} rounded-3xl p-7 md:p-8 group flex flex-col`}
            >
              {/* Time badge */}
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-background/70 backdrop-blur-sm px-3 py-1 rounded-full font-display text-xs font-semibold text-foreground flex items-center gap-1.5">
                  <product.icon className="w-3.5 h-3.5" />
                  {product.time}
                </span>
              </div>

              {/* Product image */}
              <div className="flex justify-center mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 md:h-48 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
                {product.name}
              </h3>
              <p className="font-body text-base text-foreground/70 mb-1">
                {product.tagline}
              </p>
              <p className="font-body text-xs text-muted-foreground mb-4">
                {product.price} / {product.volume}
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                {product.description}
              </p>

              {/* Benefits pills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {product.benefits.map((b) => (
                  <span
                    key={b}
                    className="bg-background/60 backdrop-blur-sm px-2.5 py-1 rounded-full font-body text-xs text-foreground"
                  >
                    {b}
                  </span>
                ))}
              </div>

              {/* CTA with price */}
              <Link
                to={`/produkt/${product.slug}`}
                className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-full font-display font-semibold text-sm hover:opacity-90 transition-opacity self-start"
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
