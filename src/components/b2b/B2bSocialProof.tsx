import { trustedLogos } from "@/data/b2b";

const B2bSocialProof = () => {
  return (
    <section className="bg-foreground text-background border-b-[3px] border-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="font-body text-xs font-medium text-background/60 uppercase tracking-[0.25em] mb-3">
              03 — Social proof
            </p>
            <h2 className="font-headline text-3xl md:text-5xl font-bold leading-[1.05]">
              Zaufali nam.
            </h2>
          </div>
          <p className="font-body text-sm text-background/60 max-w-md">
            Sieci handlowe, e-commerce i biura, które już wprowadziły Shrooma do
            swojej oferty.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border-t-[3px] border-l-[3px] border-background/20">
          {trustedLogos.map((logo) => (
            <div
              key={logo}
              className="border-r-[3px] border-b-[3px] border-background/20 aspect-[2/1] flex items-center justify-center p-6 hover:bg-background/5 transition-colors"
            >
              {/* TODO: zastąpić logotypem PNG/SVG od partnera */}
              <span className="font-headline text-2xl md:text-3xl font-bold text-background/80">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default B2bSocialProof;
