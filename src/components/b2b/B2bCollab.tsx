import { Instagram, Download, ArrowRight } from "lucide-react";
import { INSTAGRAM_URL, MEDIA_PACK_URL } from "@/data/b2b";

const B2bCollab = () => {
  return (
    <section className="border-b-[3px] border-foreground">
      <div className="container mx-auto px-0 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 border-t-[3px] border-foreground">
          {/* A — Influencerzy / UGC */}
          <div className="bg-shroom-sage border-r-0 md:border-r-[3px] border-b-[3px] md:border-b-0 border-foreground p-10 md:p-16 flex flex-col">
            <p className="font-body text-xs font-medium text-foreground/60 uppercase tracking-[0.25em] mb-4">
              05A — Influencerzy & UGC
            </p>
            <h3 className="font-headline text-3xl md:text-5xl font-bold text-foreground leading-[1.05] mb-6">
              Tworzysz content?{" "}
              <span className="text-foreground/40">Pogadajmy.</span>
            </h3>
            <p className="font-body text-base md:text-lg text-foreground/70 leading-relaxed mb-10 flex-1">
              Współprace ambasadorskie, UGC i barterowe procesujemy bezpośrednio
              przez Instagram. Bez formularzy, bez agencji.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 font-display font-bold text-base hover:gap-5 transition-all duration-300 self-start"
            >
              <Instagram className="w-5 h-5" />
              Napisz na Instagramie
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* B — Media Pack */}
          <div className="bg-shroom-cream p-10 md:p-16 flex flex-col">
            <p className="font-body text-xs font-medium text-foreground/60 uppercase tracking-[0.25em] mb-4">
              05B — Media Pack
            </p>
            <h3 className="font-headline text-3xl md:text-5xl font-bold text-foreground leading-[1.05] mb-6">
              Loga, zdjęcia,{" "}
              <span className="text-foreground/40">brand guidelines.</span>
            </h3>
            <p className="font-body text-base md:text-lg text-foreground/70 leading-relaxed mb-10 flex-1">
              Wszystko co potrzebne do publikacji o Shroomie — w jednym pliku.
              Wektory, zdjęcia produktowe, paleta i fonty.
            </p>
            <a
              href={MEDIA_PACK_URL}
              className="group inline-flex items-center gap-3 bg-background border-2 border-foreground text-foreground px-7 py-4 font-display font-bold text-base hover:bg-foreground hover:text-background transition-colors self-start"
            >
              <Download className="w-5 h-5" />
              Pobierz Media Pack
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2bCollab;
