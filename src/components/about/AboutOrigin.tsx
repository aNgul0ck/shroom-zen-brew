import foundersPhoto from "@/assets/shroom-founders.jpg";

const AboutOrigin = () => {
  return (
    <section className="bg-shroom-cream overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 py-20 md:py-28">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          {/* Image — taller, off-grid */}
          <div className="col-span-12 md:col-span-7 lg:col-span-6 relative">
            <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden">
              <img
                src={foundersPhoto}
                alt="Założycielki Shroom — Aga i Kamila w barze z butelkami Shroom Power i Relax"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 font-body text-xs text-foreground/50 italic">
              Aga & Kamila — założycielki Shroom
            </p>
          </div>

          {/* Text — offset down on desktop */}
          <div className="col-span-12 md:col-span-5 lg:col-span-5 lg:col-start-8 md:pt-16 lg:pt-24">
            <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.25em] mb-4">
              Jak to się zaczęło
            </p>
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] mb-8">
              Z osobistego poszukiwania{" "}
              <span className="text-foreground/40">równowagi.</span>
            </h2>
            <p className="font-body text-base md:text-lg text-foreground/70 leading-relaxed mb-6">
              Pomysł na Shroom Drink narodził się z prostej frustracji. Po
              latach życia w warunkach pełnych stresu, wśród rutyn towarzyskich
              opartych na alkoholu i stylu życia, który częściej odbierał
              energię niż dodawał — zadałyśmy sobie proste pytanie:
            </p>
          </div>
        </div>

        {/* Pull quote — full width, oversized */}
        <div className="mt-16 md:mt-24 max-w-5xl">
          <p className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]">
            <span className="text-foreground/30">„</span>A gdyby tak istniał
            napój, który naprawdę wspiera ciało i umysł?
            <span className="text-foreground/30">"</span>
          </p>
        </div>

        {/* Closing paragraph — narrow column, right-aligned on desktop */}
        <div className="mt-16 md:mt-20 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <p className="font-body text-base md:text-lg text-foreground/70 leading-relaxed">
              Chciałyśmy czegoś, co podnosi nastrój i pozwala ludziom być razem
              — bez alkoholu, bez nadmiaru cukru i bez sztucznego „haju".
              Odpowiedź znalazłyśmy w adaptogenach. Tak powstał Shroom: marka
              napojów funkcjonalnych z soplówką jeżowatą, żeń-szeniem i
              botanicznymi ekstraktami.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOrigin;
