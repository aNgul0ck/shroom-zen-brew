import { ArrowRight, Mail } from "lucide-react";
import { SALES_EMAIL, presenceCountries } from "@/data/b2b";

const B2bHero = () => {
  return (
    <section className="relative bg-shroom-cream pt-28 md:pt-32 overflow-hidden">
      {/* Oversized faded brand mark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 -right-10 md:-right-20 font-headline font-bold text-foreground/[0.04] leading-none select-none"
        style={{ fontSize: "clamp(12rem, 28vw, 32rem)" }}
      >
        B2B
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-20 md:py-32 relative">
        <p className="font-body text-xs font-medium text-foreground/60 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
          <span className="inline-block w-8 h-px bg-foreground/40" />
          Shroom for Business
        </p>

        <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95] mb-10 max-w-5xl">
          Zostań partnerem.{" "}
          <span className="text-foreground/35 italic">Sprzedawaj
          inaczej.</span>
        </h1>

        <p className="font-body text-lg md:text-2xl text-foreground/70 leading-snug max-w-2xl mb-12">
          Adaptogeny w designerskiej butelce. Już w 7 krajach Europy —
          od Reykjavíku po Budapeszt.
        </p>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href={`mailto:${SALES_EMAIL}`}
            className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-5 font-display font-bold text-base hover:gap-5 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            Napisz do nas
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${SALES_EMAIL}`}
            className="font-body text-sm text-foreground/70 underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors"
          >
            {SALES_EMAIL}
          </a>
        </div>

        {/* Quick stats strip */}
        <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 max-w-4xl">
          {[
            { stat: presenceCountries.length, label: "krajów Europy" },
            { stat: "100+", label: "lokali HoReCa" },
            { stat: "25%", label: "marży partnerskiej" },
            { stat: "6", label: "modeli współpracy" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-headline font-bold text-4xl md:text-5xl text-foreground leading-none mb-2">
                {s.stat}
              </div>
              <div className="font-body text-xs md:text-sm text-foreground/60 uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default B2bHero;
