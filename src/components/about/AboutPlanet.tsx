import { planetCommitments } from "@/data/about";

const AboutPlanet = () => {
  return (
    <section className="bg-shroom-sage">
      <div className="container mx-auto px-6 lg:px-12 py-20 md:py-28">
        {/* Asymmetric header */}
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-7">
            <p className="font-body text-xs font-medium text-foreground/60 uppercase tracking-[0.25em] mb-4">
              Nasza planeta
            </p>
            <h2 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05]">
              Wellness nie kończy się na{" "}
              <span className="italic text-foreground/40">ciele i umyśle.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:pt-4">
            <p className="font-body text-base text-foreground/70 leading-relaxed border-l-2 border-foreground pl-5">
              Obejmuje też Ziemię. Każdy składnik i każda butelka to świadomy
              krok ku bardziej zrównoważonej przyszłości. Nie jesteśmy idealni —
              ale jesteśmy zaangażowani.
            </p>
          </div>
        </div>

        {/* Commitments — staggered offset list, no boxes */}
        <div className="max-w-5xl mx-auto space-y-10 md:space-y-12">
          {planetCommitments.map((c, i) => (
            <article
              key={c.n}
              className={`grid grid-cols-12 gap-4 md:gap-6 items-start pb-10 md:pb-12 border-b border-foreground/20 last:border-0 ${
                i % 2 === 1 ? "md:pl-[10%]" : ""
              }`}
            >
              <div className="col-span-2 md:col-span-1">
                <p className="font-headline text-3xl md:text-5xl font-bold text-foreground/40">
                  {c.n}
                </p>
              </div>
              <div className="col-span-10 md:col-span-6">
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                  {c.title}
                </h3>
              </div>
              <div className="col-span-12 md:col-span-5">
                <p className="font-body text-base text-foreground/70 leading-relaxed">
                  {c.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPlanet;
