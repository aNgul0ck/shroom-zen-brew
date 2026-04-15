import { ArrowRight, Sun, Moon, PartyPopper, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import productPower from "@/assets/product-power.png";
import productRelax from "@/assets/product-relax.png";
import productDiva from "@/assets/product-diva.png";
import productBrainbliss from "@/assets/product-brainbliss.png";

const FunctionalDrinks = () => {
  return (
    <section className="bg-background" id="produkty">
      <div className="container mx-auto px-6 lg:px-12 py-12 md:py-16">
        {/* Header */}
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

        {/* Duo: Power + Relax — side by side even on mobile */}
        <div className="grid grid-cols-2 gap-[3px] mb-[3px]">
          {/* Power */}
          <div className="bg-background border-t-[3px] border-t-shroom-gold p-4 md:p-6 group flex flex-col">
            <span className="bg-shroom-gold self-start px-2 py-1 font-display text-[10px] md:text-[11px] font-semibold text-foreground flex items-center gap-1 mb-3">
              <Sun className="w-3 h-3" />
              Rano
            </span>
            <div className="flex justify-center mb-4">
              <img src={productPower} alt="Shroom Power" className="h-28 md:h-36 w-auto object-contain group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="font-display text-base md:text-lg font-bold text-foreground mb-0.5">Shroom Power</h3>
            <p className="font-body text-xs text-foreground/60 mb-2">Energia bez bullshitu.</p>
            <p className="font-body text-[11px] text-foreground/40 leading-relaxed mb-3 flex-1 hidden md:block">
              Aktywuj umysł i ciało. Czysta, stabilna energia na cały dzień.
            </p>
            <div className="flex flex-wrap gap-1 mb-3">
              {["Lion's Mane", "Żeń-szeń"].map((b) => (
                <span key={b} className="bg-foreground/5 px-1.5 py-0.5 font-body text-[10px] text-foreground/50">{b}</span>
              ))}
            </div>
            <Link to="/produkt/shroom-power" className="inline-flex items-center gap-1.5 bg-foreground text-background px-3 py-2 md:px-4 md:py-2.5 font-display font-semibold text-[11px] md:text-xs hover:opacity-90 transition-opacity self-start">
              79 zł <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Relax */}
          <div className="bg-background border-t-[3px] border-t-shroom-green p-4 md:p-6 group flex flex-col">
            <span className="bg-shroom-green self-start px-2 py-1 font-display text-[10px] md:text-[11px] font-semibold text-foreground flex items-center gap-1 mb-3">
              <Moon className="w-3 h-3" />
              Wieczór
            </span>
            <div className="flex justify-center mb-4">
              <img src={productRelax} alt="Shroom Relax" className="h-28 md:h-36 w-auto object-contain group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="font-display text-base md:text-lg font-bold text-foreground mb-0.5">Shroom Relax</h3>
            <p className="font-body text-xs text-foreground/60 mb-2">Wyluzuj bez wina.</p>
            <p className="font-body text-[11px] text-foreground/40 leading-relaxed mb-3 flex-1 hidden md:block">
              Wycisz się po intensywnym dniu. Regeneracja zaczyna się od odpuszczenia.
            </p>
            <div className="flex flex-wrap gap-1 mb-3">
              {["Lion's Mane", "L-Teanina"].map((b) => (
                <span key={b} className="bg-foreground/5 px-1.5 py-0.5 font-body text-[10px] text-foreground/50">{b}</span>
              ))}
            </div>
            <Link to="/produkt/shroom-relax" className="inline-flex items-center gap-1.5 bg-foreground text-background px-3 py-2 md:px-4 md:py-2.5 font-display font-semibold text-[11px] md:text-xs hover:opacity-90 transition-opacity self-start">
              79 zł <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Diva — full width featured card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px] mb-[3px]">
          <div className="bg-background border-t-[3px] border-t-shroom-sky p-5 md:p-8 group flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="flex justify-center md:justify-start flex-shrink-0">
              <img src={productDiva} alt="Diva Social Elixir" className="h-32 md:h-44 w-auto object-contain group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex-1">
              <span className="bg-shroom-sky inline-flex items-center gap-1 px-2 py-1 font-display text-[11px] font-semibold text-foreground mb-3">
                <PartyPopper className="w-3 h-3" />
                Impreza
              </span>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">Diva Social Elixir</h3>
              <p className="font-body text-sm text-foreground/60 mb-2">Imprezuj bez alkoholu.</p>
              <p className="font-body text-xs text-foreground/40 leading-relaxed mb-4">
                Bezalkoholowy aperitivo z adaptogenami. Na każde wyjście.
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                {["Adaptogeny", "Bez alkoholu", "500ml"].map((b) => (
                  <span key={b} className="bg-foreground/5 px-2 py-0.5 font-body text-[11px] text-foreground/50">{b}</span>
                ))}
              </div>
              <Link to="/produkt/diva-social-elixir" className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 font-display font-semibold text-xs hover:opacity-90 transition-opacity">
                112 zł <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* BrainBliss — compact */}
          <div className="bg-background border-t-[3px] border-t-shroom-sage p-5 md:p-8 group flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="flex justify-center md:justify-start flex-shrink-0">
              <img src={productBrainbliss} alt="BrainBliss" className="h-32 md:h-44 w-auto object-contain group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex-1">
              <span className="bg-shroom-sage inline-flex items-center gap-1 px-2 py-1 font-display text-[11px] font-semibold text-foreground mb-3">
                <Brain className="w-3 h-3" />
                Codziennie
              </span>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">BrainBliss</h3>
              <p className="font-body text-sm text-foreground/60 mb-2">Lion's Mane w tabletce.</p>
              <p className="font-body text-xs text-foreground/40 leading-relaxed mb-4">
                Soplówka jeżowata w czystej formie. Więcej z każdego dnia.
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                {["Lion's Mane 500mg", "30 porcji"].map((b) => (
                  <span key={b} className="bg-foreground/5 px-2 py-0.5 font-body text-[11px] text-foreground/50">{b}</span>
                ))}
              </div>
              <Link to="/produkt/brainbliss" className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 font-display font-semibold text-xs hover:opacity-90 transition-opacity">
                47 zł <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunctionalDrinks;
