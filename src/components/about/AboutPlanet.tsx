import { planetCommitments } from "@/data/about";

const AboutPlanet = () => {
  return (
    <section className="bg-shroom-sage">
      <div className="container mx-auto px-6 lg:px-12 py-20 md:py-28">
        <div className="max-w-3xl mb-14 md:mb-20">
          <p className="font-body text-xs font-medium text-foreground/60 uppercase tracking-[0.25em] mb-4">
            Nasza planeta
          </p>
          <h2 className="ed-heading text-foreground">
            Wellness nie kończy się{" "}
            <span className="text-foreground/40">na ciele i umyśle.</span>
          </h2>
          <p className="font-body text-base md:text-lg text-foreground/70 leading-relaxed mt-6 max-w-2xl">
            Obejmuje też Ziemię, na której żyjemy. Każdy składnik i każda butelka
            to świadomy krok ku bardziej zrównoważonej i różnorodnej przyszłości.
            Nie jesteśmy idealni — ale jesteśmy zaangażowani.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t-[3px] border-l-[3px] border-foreground">
          {planetCommitments.map((c) => (
            <article
              key={c.n}
              className="bg-background border-r-[3px] border-b-[3px] border-foreground p-7 md:p-8"
            >
              <p className="font-display text-3xl font-bold text-foreground/30 mb-4">
                {c.n}
              </p>
              <h3 className="font-display text-lg font-bold text-foreground mb-3">
                {c.title}
              </h3>
              <p className="font-body text-sm text-foreground/70 leading-relaxed">
                {c.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPlanet;
