import { ArrowUpRight } from "lucide-react";
import { b2bOffers, SALES_EMAIL } from "@/data/b2b";

const B2bOffers = () => {
  return (
    <section className="bg-shroom-cream">
      <div className="container mx-auto px-6 lg:px-12 py-24 md:py-36">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 mb-16 md:mb-20">
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
              Niezależnie od tego, czy prowadzisz sieć kawiarni, biuro, agencję
              eventową czy markę osobistą — mamy model współpracy dla Ciebie.
            </p>
          </div>
        </div>

        {/* Asymmetric editorial grid */}
        <div className="grid md:grid-cols-3 gap-px bg-foreground/15">
          {b2bOffers.map((offer, i) => {
            const Icon = offer.icon;
            const href = `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(offer.subject)}`;
            return (
              <a
                key={offer.title}
                href={href}
                className="group bg-shroom-cream p-8 md:p-10 hover:bg-background transition-colors duration-300 flex flex-col min-h-[280px]"
              >
                <div className="flex items-start justify-between mb-8">
                  <Icon className="w-9 h-9 text-foreground" strokeWidth={1.5} />
                  <span className="font-display font-bold text-foreground/25 tabular-nums text-sm">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-headline text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                  {offer.title}
                </h3>
                <p className="font-body text-base text-foreground/65 leading-relaxed mb-8 flex-1">
                  {offer.desc}
                </p>
                <div className="inline-flex items-center gap-2 font-display font-bold text-sm text-foreground group-hover:gap-4 transition-all">
                  <span className="border-b-2 border-foreground pb-0.5">
                    Porozmawiajmy
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default B2bOffers;
