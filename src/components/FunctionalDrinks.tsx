import { ArrowRight, Sun, Moon, PartyPopper, Brain } from "lucide-react";
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
    description: "Aktywuj umysł i ciało. Czysta, stabilna energia na cały dzień.",
    bg: "bg-[hsl(45,90%,78%)]",
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
    description: "Wycisz się po intensywnym dniu. Regeneracja zaczyna się od odpuszczenia.",
    bg: "bg-[hsl(150,50%,78%)]",
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
    benefits: ["Adaptogeny", "Bez alkoholu"],
    time: "Impreza",
    description: "Bezalkoholowy aperitivo z adaptogenami. Na każde wyjście.",
    bg: "bg-[hsl(204,55%,80%)]",
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
    benefits: ["Lion's Mane 500mg", "30 porcji"],
    time: "Codziennie",
    description: "Soplówka jeżowata w czystej formie. Więcej z każdego dnia.",
    bg: "bg-[hsl(100,35%,82%)]",
    slug: "brainbliss",
    price: "47 zł",
  },
];

const FunctionalDrinks = () => {
  return (
    <section className="bg-[hsl(43,38%,97%)]" id="produkty">
      <div className="container mx-auto px-6 lg:px-12 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="font-body text-xs font-medium text-accent uppercase tracking-[0.2em] mb-3">
              Shroom Drinks
            </p>
            <h2 className="ed-heading text-foreground leading-tight">
              Rytm dnia <span className="text-foreground/30">i nocy.</span>
            </h2>
          </div>
          <p className="font-body text-sm text-foreground/50 max-w-xs">
            Cztery produkty do naturalnego rytmu Twojego życia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[3px]">
          {products.map((product) => (
            <div
              key={product.id}
              className={`${product.bg} p-6 group flex flex-col`}
            >
              <span className="bg-background/70 self-start px-2.5 py-1 font-display text-[11px] font-semibold text-foreground flex items-center gap-1.5 mb-4">
                <product.icon className="w-3 h-3" />
                {product.time}
              </span>

              <div className="flex justify-center mb-5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-36 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="font-display text-lg font-bold text-foreground mb-0.5">
                {product.name}
              </h3>
              <p className="font-body text-sm text-foreground/60 mb-3">
                {product.tagline}
              </p>
              <p className="font-body text-xs text-foreground/50 leading-relaxed mb-4 flex-1">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {product.benefits.map((b) => (
                  <span key={b} className="bg-background/50 px-2 py-0.5 font-body text-[11px] text-foreground">
                    {b}
                  </span>
                ))}
              </div>

              <Link
                to={`/produkt/${product.slug}`}
                className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2.5 font-display font-semibold text-xs hover:opacity-90 transition-opacity self-start"
              >
                {product.price}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunctionalDrinks;
