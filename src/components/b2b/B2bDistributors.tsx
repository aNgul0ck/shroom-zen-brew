import { distributorGroups } from "@/data/b2b";

const B2bDistributors = () => {
  return (
    <section className="bg-background border-b-[3px] border-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-16 md:py-24">
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="font-body text-xs font-medium text-foreground/60 uppercase tracking-[0.25em] mb-4">
            01 — Dystrybutorzy
          </p>
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-foreground leading-[1.05]">
            Tu już nas{" "}
            <span className="text-foreground/40">znajdziesz.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t-[3px] border-l-[3px] border-foreground">
          {distributorGroups.map((group) => (
            <div
              key={group.id}
              className={`${group.bg} border-r-[3px] border-b-[3px] border-foreground p-8 md:p-10`}
            >
              <p className="font-body text-[11px] font-medium text-foreground/60 uppercase tracking-[0.2em] mb-2">
                {group.subtitle}
              </p>
              <h3 className="font-headline text-2xl md:text-3xl font-bold text-foreground mb-6">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-b border-foreground/15 pb-3 last:border-b-0"
                  >
                    <span className="font-display font-bold text-foreground text-lg">
                      {item.name}
                    </span>
                    {item.region && (
                      <span className="font-body text-sm text-foreground/60">
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
