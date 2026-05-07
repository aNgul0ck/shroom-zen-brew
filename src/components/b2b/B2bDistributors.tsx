import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { distributorGroups } from "@/data/b2b";

const accentColors = ["bg-shroom-coral", "bg-shroom-sage", "bg-shroom-peach", "bg-foreground"];

const B2bDistributors = () => {
  const [openId, setOpenId] = useState<string | null>(distributorGroups[0]?.id ?? null);

  return (
    <section className="bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-24 md:py-36">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 mb-12 md:mb-16">
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
              {distributorGroups.reduce((acc, g) => acc + g.items.length, 0)} partnerów w 4 kategoriach.
              Kliknij, żeby rozwinąć szczegóły.
            </p>
          </div>
        </div>

        {/* Accordion */}
        <div className="border-t border-foreground/15">
          {distributorGroups.map((group, i) => {
            const isOpen = openId === group.id;
            return (
              <div key={group.id} className="border-b border-foreground/15">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : group.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center gap-4 md:gap-8 py-6 md:py-8 text-left hover:bg-foreground/[0.03] transition-colors px-2 md:px-4 -mx-2 md:-mx-4"
                >
                  <span className={`w-3 h-3 md:w-4 md:h-4 ${accentColors[i % accentColors.length]} flex-shrink-0`} />
                  <span className="font-display font-bold text-foreground/30 text-sm md:text-base tabular-nums w-8 md:w-12 flex-shrink-0">
                    0{i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-headline text-2xl md:text-4xl font-bold text-foreground leading-tight">
                      {group.title}
                    </h3>
                    <p className="font-body text-xs md:text-sm text-foreground/50 uppercase tracking-[0.15em] mt-1">
                      {group.subtitle} · {group.items.length} {group.items.length === 1 ? "partner" : "partnerów"}
                    </p>
                  </div>
                  <span className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 border-2 border-foreground flex items-center justify-center">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-10 md:pb-14 pt-2 pl-9 md:pl-28 pr-2 md:pr-16">
                    <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-1 max-w-3xl">
                      {group.items.map((item) => (
                        <li
                          key={item.name}
                          className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 py-3 border-b border-foreground/10 last:border-b-0 sm:last:border-b sm:[&:nth-last-child(2)]:border-b"
                        >
                          <span className="font-display font-bold text-foreground text-base md:text-lg">
                            {item.name}
                          </span>
                          {item.region && (
                            <span className="font-body text-xs md:text-sm text-foreground/55 sm:text-right">
                              {item.region}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default B2bDistributors;
