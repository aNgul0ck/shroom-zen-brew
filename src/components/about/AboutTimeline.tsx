import { timelineMilestones } from "@/data/about";

const AboutTimeline = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-20 md:py-28">
        <div className="max-w-3xl mb-14 md:mb-20">
          <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.25em] mb-4">
            Nasza droga
          </p>
          <h2 className="ed-heading text-foreground">Od kuchni do półek.</h2>
        </div>

        {/* Desktop: horizontal */}
        <div className="hidden md:block relative">
          <div className="absolute top-[60px] left-0 right-0 h-[3px] bg-foreground" />
          <div className="grid grid-cols-4 gap-6">
            {timelineMilestones.map((m) => (
              <article key={m.year} className="relative">
                <p className="font-display text-2xl font-bold text-foreground mb-3">
                  {m.year}
                </p>
                <div
                  className={`relative z-10 w-8 h-8 ${m.color} border-[3px] border-foreground mb-8`}
                />
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {m.title}
                </h3>
                <p className="font-body text-sm text-foreground/70 leading-relaxed">
                  {m.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden relative pl-8">
          <div className="absolute top-2 bottom-2 left-3 w-[3px] bg-foreground" />
          <div className="space-y-10">
            {timelineMilestones.map((m) => (
              <article key={m.year} className="relative">
                <div
                  className={`absolute -left-[26px] top-1 w-5 h-5 ${m.color} border-[3px] border-foreground`}
                />
                <p className="font-display text-xl font-bold text-foreground mb-1">
                  {m.year}
                </p>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {m.title}
                </h3>
                <p className="font-body text-sm text-foreground/70 leading-relaxed">
                  {m.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;
