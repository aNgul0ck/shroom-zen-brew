import { ArrowUpRight } from "lucide-react";
import { b2bOffers, SALES_EMAIL } from "@/data/b2b";

const B2bOffers = () => {
  return (
    <section className="bg-background border-b-[3px] border-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-16 md:py-24">
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="font-body text-xs font-medium text-foreground/60 uppercase tracking-[0.25em] mb-4">
            04 — Co możemy dla Ciebie zrobić
          </p>
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-foreground leading-[1.05]">
            Sześć sposobów,{" "}
            <span className="text-foreground/40">żeby pracować razem.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t-[3px] border-l-[3px] border-foreground">
          {b2bOffers.map((offer) => {
            const Icon = offer.icon;
            const href = `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(offer.subject)}`;
            return (
              <a
                key={offer.title}
                href={href}
                className="group border-r-[3px] border-b-[3px] border-foreground p-8 md:p-10 bg-background hover:bg-shroom-cream transition-colors flex flex-col"
              >
                <div className="w-14 h-14 bg-foreground text-background flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-headline text-2xl font-bold text-foreground mb-3">
                  {offer.title}
                </h3>
                <p className="font-body text-base text-foreground/70 leading-relaxed mb-8 flex-1">
                  {offer.desc}
                </p>
                <div className="flex items-center gap-2 font-display font-bold text-sm text-foreground border-t border-foreground/20 pt-4 group-hover:gap-4 transition-all">
                  Napisz na sales@
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
