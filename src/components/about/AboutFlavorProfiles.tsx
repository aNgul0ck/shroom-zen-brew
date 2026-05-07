import { flavorProfiles } from "@/data/about";

const AboutFlavorProfiles = () => {
  return (
    <section className="bg-shroom-cream">
      <div className="container mx-auto px-6 lg:px-12 py-20 md:py-28">
        <div className="max-w-3xl mb-14">
          <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.25em] mb-4">
            Profile smakowe
          </p>
          <h2 className="ed-heading text-foreground">
            Smakuje lepiej{" "}
            <span className="text-foreground/40">niż myślisz.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 border-[3px] border-foreground">
          {flavorProfiles.map((p, idx) => (
            <article
              key={p.name}
              className={`bg-background p-8 md:p-10 ${
                idx === 0 ? "md:border-r-[3px] border-foreground border-b-[3px] md:border-b-0" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                    {p.name}
                  </h3>
                  <p className="font-body text-sm text-foreground/60">{p.note}</p>
                </div>
                <div className={`w-14 h-14 ${p.accent} border-[3px] border-foreground shrink-0`} />
              </div>
              <div className="space-y-4">
                {p.bars.map((b) => (
                  <div key={b.label}>
                    <div className="flex justify-between font-body text-xs text-foreground/70 mb-1.5">
                      <span>{b.label}</span>
                      <span className="font-bold">{b.value}</span>
                    </div>
                    <div className="h-3 bg-foreground/10 border border-foreground/20 relative">
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
