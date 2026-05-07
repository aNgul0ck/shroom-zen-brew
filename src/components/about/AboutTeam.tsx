import { Linkedin } from "lucide-react";
import { teamMembers } from "@/data/about";

const AboutTeam = () => {
  return (
    <section id="zespol" className="bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-20 md:py-28">
        <div className="max-w-3xl mb-14 md:mb-20">
          <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.25em] mb-4">
            Nasz zespół
          </p>
          <h2 className="ed-heading text-foreground">
            Ludzie, którzy{" "}
            <span className="text-foreground/40">stoją za marką.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t-[3px] border-l-[3px] border-foreground">
          {teamMembers.map((m) => (
            <article
              key={m.name}
              className="border-r-[3px] border-b-[3px] border-foreground bg-shroom-cream"
            >
              <div className="aspect-square bg-foreground/10 flex items-center justify-center text-foreground/30 font-display text-sm border-b-[3px] border-foreground">
                {m.name}
              </div>
              <div className="p-5 md:p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-1">
                  {m.name}
                </h3>
                <p className="font-body text-xs uppercase tracking-wider text-foreground/60 mb-3">
                  {m.role}
                </p>
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mb-4 text-foreground hover:text-foreground/60 transition-colors"
                  aria-label={`LinkedIn — ${m.name}`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <p className="font-body text-sm text-foreground/70 leading-relaxed">
                  {m.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
