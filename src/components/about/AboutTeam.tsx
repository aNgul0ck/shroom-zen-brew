import { Linkedin } from "lucide-react";
import { teamMembers } from "@/data/about";

const AboutTeam = () => {
  return (
    <section id="zespol" className="bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 py-20 md:py-28">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-8">
            <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.25em] mb-4">
              Nasz zespół
            </p>
            <h2 className="ed-heading text-foreground">
              Ludzie, którzy{" "}
              <span className="italic text-foreground/40">stoją za marką.</span>
            </h2>
          </div>
        </div>

        {/* Asymmetric team grid — varied sizes & vertical offsets */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 md:gap-y-16">
          {teamMembers.map((m, i) => {
            // varied placements: 4-4-4 / 5-3-4 mix with offsets
            const layouts = [
              { col: "md:col-span-5", offset: "" },
              { col: "md:col-span-4", offset: "md:mt-20" },
              { col: "md:col-span-3", offset: "md:mt-8" },
              { col: "md:col-span-4 md:col-start-2", offset: "" },
              { col: "md:col-span-5", offset: "md:mt-12" },
            ];
            const layout = layouts[i] || layouts[0];

            return (
              <article
                key={m.name}
                className={`col-span-6 ${layout.col} ${layout.offset}`}
              >
                <div className="aspect-[3/4] bg-foreground/5 mb-5 flex items-center justify-center text-foreground/30 font-display text-sm">
                  {m.name}
                </div>
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-headline text-2xl md:text-3xl font-bold text-foreground">
                    {m.name}
                  </h3>
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/50 hover:text-foreground transition-colors"
                    aria-label={`LinkedIn — ${m.name}`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <p className="font-body text-xs uppercase tracking-wider text-foreground/60 mb-4">
                  {m.role}
                </p>
                <p className="font-body text-sm text-foreground/70 leading-relaxed">
                  {m.bio}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
