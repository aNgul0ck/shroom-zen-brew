import { distributorGroups } from "@/data/b2b";

const accentColors = ["bg-shroom-coral", "bg-shroom-sage", "bg-shroom-peach", "bg-foreground"];

const B2bDistributors = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-24 md:py-36">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 mb-16 md:mb-24">
          <div className="md:col-span-3">
            <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.3em] flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-foreground/30" />
              01 — Sieć
            </p>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-headline text-4xl md:text-6xl font-bold text-foreground leading-[1.02] mb-6">
              Tu już nas znajdziesz.
            </h2>
            <p className="font-body text-lg text-foreground/65 max-w-2xl">
              Dystrybutorzy, sieci handlowe i partnerzy HoReCa — pogrupowani według
              kategorii, żebyś od razu wiedział z kim rozmawiać.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
          {distributorGroups.map((group, i) => (
            <div key={group.id} className="group">
              <div className="flex items-baseline gap-4 mb-8 pb-4 border-b border-foreground/15">
                <span className={`inline-block w-3 h-3 ${accentColors[i % accentColors.length]} flex-shrink-0`} />
                <div className="flex-1 min-w-0">
                  <p className="font-body text-[11px] font-medium text-foreground/50 uppercase tracking-[0.2em] mb-1">
                    {group.subtitle}
                  </p>
                  <h3 className="font-headline text-2xl md:text-3xl font-bold text-foreground">
                    {group.title}
                  </h3>
                </div>
                <span className="font-display font-bold text-foreground/30 text-2xl tabular-nums">
                  0{i + 1}
                </span>
              </div>
              <ul className="divide-y divide-foreground/10">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 py-4"
                  >
                    <span className="font-display font-bold text-foreground text-lg">
                      {item.name}
                    </span>
                    {item.region && (
                      <span className="font-body text-sm text-foreground/55 sm:text-right">
                        {item.region}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default B2bDistributors;
