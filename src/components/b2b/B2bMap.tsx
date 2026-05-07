import { presenceCountries } from "@/data/b2b";

/**
 * TODO: Aga dostarczy finalny SVG mapy Europy (z podświetlonymi krajami).
 * Tymczasowy placeholder: stylizowana siatka krajów + lista.
 */
const B2bMap = () => {
  return (
    <section className="bg-shroom-peach border-b-[3px] border-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-5">
            <p className="font-body text-xs font-medium text-foreground/60 uppercase tracking-[0.25em] mb-4">
              02 — Mapa obecności
            </p>
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-foreground leading-[1.05] mb-6">
              {presenceCountries.length} kraje.{" "}
              <span className="text-foreground/40">Jeden napój.</span>
            </h2>
            <p className="font-body text-base md:text-lg text-foreground/70 leading-relaxed">
              Od Warszawy po Reykjavik. Shroom dotarł już do siedmiu europejskich
              rynków przez sieć dystrybutorów i partnerów HoReCa.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="bg-background border-[3px] border-foreground aspect-[4/3] flex items-center justify-center relative overflow-hidden">
              {/* Placeholder map: replace with SVG asset from Aga */}
              <div className="absolute inset-0 grid grid-cols-3 gap-px bg-foreground/10 p-px">
                {presenceCountries.map((country) => (
                  <div
                    key={country}
                    className="bg-shroom-sage flex items-center justify-center p-2"
                  >
                    <span className="font-display font-bold text-foreground text-sm md:text-lg text-center">
                      {country}
                    </span>
                  </div>
                ))}
                {/* Filler tiles to complete the grid */}
                {Array.from({ length: 9 - presenceCountries.length }).map((_, i) => (
                  <div key={`f-${i}`} className="bg-shroom-cream/40" />
                ))}
              </div>
            </div>
            <p className="font-body text-xs text-foreground/50 mt-3 italic">
              Mapa zostanie zastąpiona finalnym assetem od Shrooma.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2bMap;
