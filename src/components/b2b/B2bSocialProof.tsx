import { trustedLogos } from "@/data/b2b";

const B2bSocialProof = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-20 md:py-28">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.3em] mb-4">
            03 — Zaufali nam
          </p>
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-foreground/80 max-w-2xl mx-auto leading-snug">
            Pojawiamy się na półkach najbardziej rozpoznawalnych marek w Polsce.
          </h2>
        </div>

        {/* Logo strip — flowing line, no boxes */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 md:gap-x-20 gap-y-8 py-10 border-y border-foreground/15">
          {trustedLogos.map((logo) => (
            <div
              key={logo}
              className="font-headline text-3xl md:text-4xl font-bold text-foreground/40 hover:text-foreground transition-colors duration-300"
              title={`${logo} — partner Shroom`}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default B2bSocialProof;
