import { useState } from "react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { b2bOffers, SALES_EMAIL } from "@/data/b2b";

const B2bOffers = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="bg-shroom-cream">
      <div className="container mx-auto px-6 lg:px-12 py-24 md:py-36">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 mb-12 md:mb-16">
          <div className="md:col-span-3">
            <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.3em] flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-foreground/30" />
              04 — Oferta
            </p>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-headline text-4xl md:text-6xl font-bold text-foreground leading-[1.02] mb-6">
              Sześć sposobów,{" "}
              <span className="text-foreground/40 italic">żeby pracować razem.</span>
            </h2>
            <p className="font-body text-lg text-foreground/65 max-w-2xl">
              Rozwiń interesującą Cię ofertę, żeby zobaczyć szczegóły i napisać do
              nas z gotowym tematem maila.
            </p>
          </div>
        </div>

        {/* Accordion */}
        <div className="border-t border-foreground/20">
          {b2bOffers.map((offer, i) => {
            const Icon = offer.icon;
            const isOpen = openIdx === i;
            const href = `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(offer.subject)}`;
            return (
              <div key={offer.title} className="border-b border-foreground/20">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center gap-4 md:gap-8 py-6 md:py-8 text-left hover:bg-background/50 transition-colors px-2 md:px-4 -mx-2 md:-mx-4"
                >
                  <Icon className="w-7 h-7 md:w-9 md:h-9 text-foreground flex-shrink-0" strokeWidth={1.5} />
                  <span className="font-display font-bold text-foreground/30 text-sm md:text-base tabular-nums w-8 md:w-12 flex-shrink-0">
                    0{i + 1}
                  </span>
                  <h3 className="flex-1 font-headline text-xl md:text-3xl font-bold text-foreground leading-tight">
                    {offer.title}
                  </h3>
                  <span className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 border-2 border-foreground flex items-center justify-center">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-10 md:pb-12 pt-2 pl-13 md:pl-32 pr-2 md:pr-16">
                    <p className="font-body text-base md:text-lg text-foreground/70 leading-relaxed max-w-2xl mb-6">
                      {offer.desc}
                    </p>
                    <a
                      href={href}
                      className="group inline-flex items-center gap-3 bg-foreground text-background px-6 py-3 font-display font-bold text-sm md:text-base hover:gap-5 transition-all duration-300"
                    >
                      Napisz do nas
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default B2bOffers;
