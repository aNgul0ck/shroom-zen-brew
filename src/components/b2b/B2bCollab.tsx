import { useState } from "react";
import { Instagram, Download, ArrowRight } from "lucide-react";
import { INSTAGRAM_URL, MEDIA_PACK_URL } from "@/data/b2b";

type TabKey = "creators" | "media";

const tabs: { key: TabKey; label: string; tag: string }[] = [
  { key: "creators", label: "Influencerzy & UGC", tag: "Dla twórców" },
  { key: "media", label: "Media Pack", tag: "Dla mediów i partnerów" },
];

const B2bCollab = () => {
  const [active, setActive] = useState<TabKey>("creators");

  return (
    <section className="bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-24 md:py-36">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.3em] mb-4">
            05 — Współpraca
          </p>
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-foreground leading-[1.02]">
            Tworzysz coś z nami?{" "}
            <span className="text-foreground/40 italic">Wybierz ścieżkę.</span>
          </h2>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-col sm:flex-row gap-0 max-w-3xl mx-auto mb-12 border-2 border-foreground">
          {tabs.map((t) => {
            const isActive = active === t.key;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setActive(t.key)}
                aria-pressed={isActive}
                className={`flex-1 px-6 py-4 font-display font-bold text-sm md:text-base transition-colors text-left sm:text-center ${
                  isActive
                    ? "bg-foreground text-background"
                    : "bg-background text-foreground hover:bg-foreground/5"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        <div className="max-w-4xl mx-auto">
          {active === "creators" && (
            <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
              <div className="md:col-span-2">
                <div className="aspect-square bg-shroom-sage flex items-center justify-center">
                  <Instagram className="w-24 h-24 md:w-32 md:h-32 text-foreground/80" strokeWidth={1.2} />
                </div>
              </div>
              <div className="md:col-span-3">
                <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.2em] mb-3">
                  {tabs[0].tag}
                </p>
                <h3 className="font-headline text-3xl md:text-4xl font-bold text-foreground leading-tight mb-5">
                  Współprace ambasadorskie i UGC
                </h3>
                <p className="font-body text-base md:text-lg text-foreground/70 leading-relaxed mb-8">
                  Procesujemy bezpośrednio przez Instagram. Bez formularzy, bez agencji.
                  Po prostu DM — odpowiadamy w 24h.
                </p>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 font-display font-bold text-base hover:gap-5 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                  Napisz @shroom.drink
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          )}

          {active === "media" && (
            <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
              <div className="md:col-span-2">
                <div className="aspect-square bg-shroom-peach flex items-center justify-center">
                  <Download className="w-24 h-24 md:w-32 md:h-32 text-foreground/80" strokeWidth={1.2} />
                </div>
              </div>
              <div className="md:col-span-3">
                <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.2em] mb-3">
                  {tabs[1].tag}
                </p>
                <h3 className="font-headline text-3xl md:text-4xl font-bold text-foreground leading-tight mb-5">
                  Loga, zdjęcia, brand guidelines
                </h3>
                <p className="font-body text-base md:text-lg text-foreground/70 leading-relaxed mb-8">
                  Wektorowe loga, zdjęcia produktowe, paleta kolorów, fonty i pełne
                  brand guidelines — wszystko w jednym pliku.
                </p>
                <a
                  href={MEDIA_PACK_URL}
                  className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 font-display font-bold text-base hover:gap-5 transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  Pobierz Media Pack
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 md:mt-28 pt-10 border-t border-foreground/15 text-center">
          <p className="font-headline text-xl md:text-2xl font-bold text-foreground mb-4">
            Inny pomysł na współpracę?
          </p>
          <a
            href="mailto:sales@shroom4you.com"
            className="font-display font-bold text-base md:text-lg text-foreground underline underline-offset-8 decoration-2 decoration-foreground/40 hover:decoration-foreground transition-colors"
          >
            sales@shroom4you.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default B2bCollab;
