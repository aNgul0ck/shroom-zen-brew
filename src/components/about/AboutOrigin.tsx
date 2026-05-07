const AboutOrigin = () => {
  return (
    <section className="bg-shroom-cream">
      <div className="grid md:grid-cols-2">
        {/* Image */}
        <div className="relative bg-foreground/5 min-h-[420px] md:min-h-[640px] overflow-hidden">
          <img
            src="/lovable-uploads/placeholder-founders.jpg"
            alt="Założycielki Shroom — Aga i Kamila w barze"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-foreground/30 font-display text-sm">
            Foto: Aga & Kamila
          </div>
        </div>

        {/* Text */}
        <div className="bg-background p-8 md:p-16 lg:p-20 flex flex-col justify-center">
          <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.25em] mb-4">
            Jak to się zaczęło
          </p>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] mb-8">
            Z osobistego poszukiwania równowagi.
          </h2>
          <div className="space-y-5 font-body text-base md:text-lg text-foreground/70 leading-relaxed">
            <p>
              Pomysł na Shroom Drink narodził się z prostej frustracji. Po latach
              życia w warunkach pełnych stresu, wśród rutyn towarzyskich opartych
              na alkoholu i stylu życia, który częściej odbierał energię niż
              dodawał — zadałyśmy sobie proste pytanie:
            </p>
            <p className="font-display text-xl md:text-2xl font-bold text-foreground italic">
              „A gdyby tak istniał napój, który naprawdę wspiera ciało i umysł?"
            </p>
            <p>
              Chciałyśmy czegoś, co podnosi nastrój, wzmacnia koncentrację i
              pozwala ludziom być razem — bez alkoholu, bez nadmiaru cukru i bez
              sztucznego „haju". Odpowiedź znalazłyśmy w tajnych sprzymierzeńcach
              natury — adaptogenach.
            </p>
            <p>
              Tak powstał Shroom: marka napojów funkcjonalnych z soplówką
              jeżowatą, żeń-szeniem i botanicznymi ekstraktami, które wspierają
              klarowność, spokój i dobry nastrój — bez spadku formy następnego
              dnia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOrigin;
