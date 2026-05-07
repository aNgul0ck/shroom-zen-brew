import { Instagram, Download, ArrowRight } from "lucide-react";
import { INSTAGRAM_URL, MEDIA_PACK_URL } from "@/data/b2b";

const B2bCollab = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-24 md:py-36">
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.3em] mb-4">
            05 — Współpraca
          </p>
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-foreground leading-[1.02]">
            Tworzysz coś z nami?{" "}
            <span className="text-foreground/40 italic">Mamy dla Ciebie wszystko.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 max-w-6xl mx-auto">
          {/* A — Influencerzy / UGC */}
          <div className="flex flex-col">
            <div className="aspect-[4/3] bg-shroom-sage flex items-center justify-center mb-8 overflow-hidden">
              <Instagram className="w-24 h-24 md:w-32 md:h-32 text-foreground/80" strokeWidth={1.2} />
            </div>
            <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.2em] mb-3">
              Dla twórców
            </p>
            <h3 className="font-headline text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              Influencerzy & UGC
            </h3>
            <p className="font-body text-base md:text-lg text-foreground/65 leading-relaxed mb-8 flex-1">
              Współprace ambasadorskie, UGC i barterowe procesujemy bezpośrednio
              przez Instagram. Bez formularzy, bez agencji. Po prostu DM.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 font-display font-bold text-base text-foreground self-start"
            >
              <span className="border-b-2 border-foreground pb-1">
                @shroom.drink
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* B — Media Pack */}
          <div className="flex flex-col">
            <div className="aspect-[4/3] bg-shroom-peach flex items-center justify-center mb-8 overflow-hidden">
              <Download className="w-24 h-24 md:w-32 md:h-32 text-foreground/80" strokeWidth={1.2} />
            </div>
            <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.2em] mb-3">
              Dla mediów i partnerów
            </p>
            <h3 className="font-headline text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              Media Pack
            </h3>
            <p className="font-body text-base md:text-lg text-foreground/65 leading-relaxed mb-8 flex-1">
              Wektorowe loga, zdjęcia produktowe, paleta, fonty i brand
              guidelines — wszystko w jednym pliku. Bierz i twórz.
            </p>
            <a
              href={MEDIA_PACK_URL}
              className="group inline-flex items-center gap-3 font-display font-bold text-base text-foreground self-start"
            >
              <span className="border-b-2 border-foreground pb-1">
                Pobierz Media Pack
              </span>
              <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bottom CTA band */}
        <div className="mt-24 md:mt-32 pt-12 border-t border-foreground/15 text-center">
          <p className="font-headline text-2xl md:text-3xl font-bold text-foreground mb-6 max-w-2xl mx-auto leading-tight">
            Inny pomysł na współpracę?
          </p>
          <a
            href="mailto:sales@shroom4you.com"
            className="font-display font-bold text-lg text-foreground underline underline-offset-8 decoration-2 decoration-foreground/40 hover:decoration-foreground transition-colors"
          >
            sales@shroom4you.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default B2bCollab;
