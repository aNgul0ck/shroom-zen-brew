import { flavorProfiles } from "@/data/about";

const AboutFlavorProfiles = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-20 md:py-28">
        {/* Header — right-aligned variation */}
        <div className="grid grid-cols-12 gap-6 mb-14 md:mb-20">
          <div className="col-span-12 md:col-span-6 md:col-start-7 md:text-right">
            <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.25em] mb-4">
              Profile smakowe
            </p>
            <h2 className="ed-heading text-foreground">
              Smakuje lepiej{" "}
              <span className="text-foreground/40">niż myślisz.</span>
            </h2>
          </div>
        </div>

        {/* Two profiles — overlapping color blocks instead of grid */}
        <div className="grid grid-cols-12 gap-6 md:gap-0">
          {flavorProfiles.map((p, idx) => (
            <article
              key={p.name}
              className={`col-span-12 md:col-span-7 ${
                idx === 1 ? "md:col-start-6 md:-mt-12" : ""
              } ${p.accent}/20 p-8 md:p-12 relative`}
            >
              <div className="flex items-start justify-between gap-6 mb-8">
                <div>
                  <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-wider mb-1">
                    {idx === 0 ? "Wariant 01" : "Wariant 02"}
                  </p>
                  <h3 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
                    {p.name}
                  </h3>
                  <p className="font-body text-sm text-foreground/60 mt-2">
                    {p.note}
                  </p>
                </div>
                <div className={`w-16 h-16 md:w-20 md:h-20 ${p.accent} shrink-0`} />
              </div>
              <div className="space-y-3 max-w-md">
                {p.bars.map((b) => (
                  <div key={b.label}>
                    <div className="flex justify-between font-body text-xs text-foreground/70 mb-1">
                      <span className="uppercase tracking-wider">{b.label}</span>
                      <span className="font-bold">{b.value}</span>
                    </div>
                    <div className="h-2 bg-foreground/10 relative">
                      <div
                        className={`h-full ${p.accent} transition-all duration-700`}
                        style={{ width: `${b.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutFlavorProfiles;
