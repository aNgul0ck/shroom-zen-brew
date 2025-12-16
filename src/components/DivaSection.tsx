import { ArrowRight, Sparkles, Wine, Star } from "lucide-react";
import productDiva from "@/assets/product-diva.png";

const DivaSection = () => {
  const features = [
    "13 składników botanicznych",
    "Bezalkoholowe aperitivo",
    "Jadalny brokat",
    "Cordyceps militaris",
    "Żeń-szeń syberyjski",
    "Lokalne superfoods",
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-diva-dark via-shroom-wine to-diva-dark" />
      
      {/* Pink glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-diva-pink/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-diva-red/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              {/* Glow effect behind bottle */}
              <div className="absolute inset-0 bg-diva-pink/30 rounded-full blur-3xl scale-75" />
              
              <img
                src={productDiva}
                alt="Diva Social Elixir"
                className="relative h-[500px] w-auto object-contain drop-shadow-2xl animate-float"
              />
              
              {/* Floating badges */}
              <div className="absolute -right-4 top-1/4 bg-diva-pink text-diva-dark px-4 py-2 rounded-full shadow-lg animate-float-delayed">
                <span className="font-display font-bold text-sm">Est. 2024</span>
              </div>
              
              <div className="absolute -left-4 bottom-1/3 bg-diva-foreground/10 backdrop-blur-sm text-diva-foreground px-4 py-2 rounded-full animate-float">
                <span className="font-body text-sm">500ml</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-diva-foreground">
            {/* Brand Badge */}
            <div className="inline-flex items-center gap-2 bg-diva-pink/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-diva-pink" />
              <span className="font-body text-sm font-medium text-diva-pink">
                Social Elixir
              </span>
            </div>

            <h2 className="font-headline text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-diva-pink">diva</span>
              <br />
              <span className="text-diva-foreground/90">Celebruj każdą chwilę</span>
            </h2>

            <p className="font-body text-lg text-diva-foreground/70 mb-6 max-w-md">
              Bezalkoholowe aperitivo z 13 składnikami botanicznymi. Diva łączy przyjemność 
              ze świadomym wyborem — spektakularne koktajle bez kompromisów.
            </p>

            {/* Unique Selling Points */}
            <div className="flex flex-wrap gap-3 mb-8">
              {features.map((feature) => (
                <span
                  key={feature}
                  className="bg-diva-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full font-body text-sm text-diva-foreground/80 border border-diva-foreground/10"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Key Ingredients */}
            <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-diva-foreground/5 rounded-2xl backdrop-blur-sm">
              <div className="text-center">
                <Wine className="w-6 h-6 mx-auto mb-2 text-diva-pink" />
                <p className="font-body text-xs text-diva-foreground/60">Rokitnik</p>
                <p className="font-display font-bold text-diva-foreground text-sm">NFC</p>
              </div>
              <div className="text-center">
                <Star className="w-6 h-6 mx-auto mb-2 text-diva-pink" />
                <p className="font-body text-xs text-diva-foreground/60">Dereń</p>
                <p className="font-display font-bold text-diva-foreground text-sm">NFC</p>
              </div>
              <div className="text-center">
                <Sparkles className="w-6 h-6 mx-auto mb-2 text-diva-pink" />
                <p className="font-body text-xs text-diva-foreground/60">Aronia</p>
                <p className="font-display font-bold text-diva-foreground text-sm">NFC</p>
              </div>
            </div>

            {/* Price & CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div>
                <p className="font-display text-4xl font-bold text-diva-foreground">112 zł</p>
                <p className="font-body text-sm text-diva-foreground/60">500ml / 10 porcji</p>
              </div>
              
              <button className="inline-flex items-center gap-2 bg-diva-pink text-diva-dark px-8 py-4 rounded-full font-display font-bold text-base hover:scale-105 hover:bg-shroom-cream transition-all duration-300 shadow-elevated">
                Zamów Divę
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Trust Note */}
            <p className="font-body text-xs text-diva-foreground/40 mt-6">
              Wegańska • Bez alkoholu • Produkowana w Polsce
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DivaSection;
