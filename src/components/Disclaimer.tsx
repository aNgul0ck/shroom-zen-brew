import { Info, ExternalLink } from "lucide-react";

const studies = [
  {
    id: 1,
    title: "Mori et al. (2009)",
    description: "Badanie kliniczne wykazało pozytywne efekty soplówki jeżowatej po 16 tygodniach przyjmowania.",
    url: "https://pubmed.ncbi.nlm.nih.gov/18844328/",
  },
  {
    id: 2,
    title: "Nagano et al. (2010)",
    description: "Badanie na temat wpływu Lion's Mane na nastrój w grupie kobiet.",
    url: "https://pubmed.ncbi.nlm.nih.gov/20834180/",
  },
  {
    id: 3,
    title: "EFSA Journal - Cynk",
    description: "Zatwierdzone oświadczenia zdrowotne dla cynku w UE.",
    url: "https://www.efsa.europa.eu/en/efsajournal/pub/1819",
  },
];

const Disclaimer = () => {
  return (
    <section id="disclaimer" className="bg-secondary/50 py-12">
      <div className="container mx-auto px-6">
        {/* Health Claims Disclaimer */}
        <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft mb-8">
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-lg font-bold text-foreground mb-3">
                Informacja o oświadczeniach zdrowotnych
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground font-body">
                <p>
                  <strong className="text-foreground">*</strong> Oświadczenia zdrowotne dotyczące cynku i witaminy C 
                  są zatwierdzone przez Europejski Urząd ds. Bezpieczeństwa Żywności (EFSA) i figurują w rejestrze 
                  dozwolonych oświadczeń zdrowotnych UE (Rozporządzenie WE nr 1924/2006).
                </p>
                <p>
                  <strong className="text-foreground">Cynk</strong> przyczynia się do prawidłowych funkcji poznawczych, 
                  prawidłowej syntezy DNA, ochrony komórek przed stresem oksydacyjnym oraz utrzymania prawidłowego 
                  stanu włosów, skóry i paznokci.
                </p>
                <p>
                  <strong className="text-foreground">Witamina C</strong> przyczynia się do prawidłowego funkcjonowania 
                  układu nerwowego oraz ochrony komórek przed stresem oksydacyjnym.
                </p>
                <p className="text-xs text-muted-foreground/70 pt-2 border-t border-border">
                  Suplement diety nie może być stosowany jako substytut zróżnicowanej diety. 
                  Zalecane dzienne spożycie nie powinno być przekraczane.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scientific Studies */}
        <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft">
          <h3 className="font-display text-lg font-bold text-foreground mb-4">
            Badania naukowe dot. soplówki jeżowatej
          </h3>
          <p className="text-sm text-muted-foreground font-body mb-6">
            Poniższe badania dotyczą soplówki jeżowatej (Lion's Mane) jako składnika. 
            Nie stanowią one oświadczeń zdrowotnych dla naszych produktów.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            {studies.map((study) => (
              <a
                key={study.id}
                href={study.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-secondary/50 rounded-xl p-4 hover:bg-secondary transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-display font-bold text-sm text-foreground">
                    {study.title}
                  </span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="font-body text-xs text-muted-foreground">
                  {study.description}
                </p>
              </a>
            ))}
          </div>
          
          <p className="text-xs text-muted-foreground/60 font-body mt-6">
            Źródła: PubMed (National Library of Medicine), EFSA Journal. 
            Badania prezentują wyniki dla izolowanych składników, nie dla konkretnych produktów.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
