import { ArrowRight, Mail } from "lucide-react";
import { SALES_EMAIL } from "@/data/b2b";

const B2bHero = () => {
  return (
    <section className="relative bg-shroom-cream pt-28 md:pt-32 border-b-[3px] border-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-20 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
          <div className="md:col-span-8">
            <p className="font-body text-xs font-medium text-foreground/60 uppercase tracking-[0.25em] mb-6">
              Shroom for Business
            </p>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.02] mb-8">
              Zostań partnerem{" "}
              <span className="text-foreground/40">Shrooma.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl">
              Adaptogeny, soplówka jeżowata i designerska butelka. Dostarczamy do
              kawiarni, sklepów i biur w 7 krajach. Otwieramy się na nowe lokale,
              eventy i partnerstwa.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <a
              href={`mailto:${SALES_EMAIL}`}
              className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-5 font-display font-bold text-base hover:gap-5 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Napisz do nas
              <ArrowRight className="w-5 h-5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2bHero;
