import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, BookOpen, FlaskConical, Users, Calendar, AlertCircle } from "lucide-react";

const studies = [
  {
    id: 1,
    title: "Improving effects of the mushroom Yamabushitake on mild cognitive impairment",
    authors: "Mori K, Inatomi S, Ouchi K, Azumi Y, Tuchida T",
    journal: "Phytother Res",
    year: 2009,
    pmid: "18844328",
    type: "Badanie kliniczne",
    participants: 30,
    duration: "16 tygodni",
    summary: "Randomizowane, podwójnie zaślepione badanie z grupą kontrolną placebo. Uczestnicy z łagodnymi zaburzeniami poznawczymi przyjmowali ekstrakt przez 16 tygodni.",
    methodology: "Podwójnie ślepa próba, placebo",
    url: "https://pubmed.ncbi.nlm.nih.gov/18844328/",
  },
  {
    id: 2,
    title: "Reduction of depression and anxiety by 4 weeks Hericium erinaceus intake",
    authors: "Nagano M, Shimizu K, Kondo R, et al.",
    journal: "Biomed Res",
    year: 2010,
    pmid: "20834180",
    type: "Badanie kliniczne",
    participants: 30,
    duration: "4 tygodnie",
    summary: "Badanie wpływu soplówki jeżowatej na nastrój w grupie kobiet w okresie menopauzalnym.",
    methodology: "Randomizowane, placebo",
    url: "https://pubmed.ncbi.nlm.nih.gov/20834180/",
  },
  {
    id: 3,
    title: "The Acute and Chronic Effects of Lion's Mane Mushroom Supplementation on Cognitive Function",
    authors: "Docherty S, Doughty FL, Smith EF",
    journal: "Nutrients",
    year: 2023,
    pmid: "38004235",
    type: "Przegląd systematyczny",
    participants: null,
    duration: "Różne",
    summary: "Przegląd dostępnych badań klinicznych dotyczących wpływu suplementacji soplówką jeżowatą na funkcje poznawcze.",
    methodology: "Przegląd literatury",
    url: "https://pubmed.ncbi.nlm.nih.gov/38004235/",
  },
  {
    id: 4,
    title: "Acute effects of a standardised extract of Hericium erinaceus on cognition and mood",
    authors: "Docherty S, et al.",
    journal: "Hum Psychopharmacol",
    year: 2025,
    pmid: "40276537",
    type: "Badanie kliniczne",
    participants: 40,
    duration: "Jednorazowe",
    summary: "Podwójnie zaślepione, randomizowane badanie z grupą kontrolną placebo oceniające ostre efekty standaryzowanego ekstraktu u zdrowych dorosłych.",
    methodology: "Podwójnie ślepa próba, placebo",
    url: "https://pubmed.ncbi.nlm.nih.gov/40276537/",
  },
  {
    id: 5,
    title: "A review of the effects of mushrooms on mood and neurocognitive health",
    authors: "Various authors",
    journal: "Neurosci Biobehav Rev",
    year: 2024,
    pmid: "38246232",
    type: "Przegląd",
    participants: null,
    duration: "N/A",
    summary: "Kompleksowy przegląd badań dotyczących wpływu grzybów funkcjonalnych, w tym soplówki jeżowatej, na nastrój i zdrowie neurokognitywne.",
    methodology: "Przegląd narracyjny",
    url: "https://pubmed.ncbi.nlm.nih.gov/38246232/",
  },
  {
    id: 6,
    title: "Benefits, side effects, and uses of Hericium erinaceus as a supplement: a systematic review",
    authors: "Various authors",
    journal: "Various",
    year: 2025,
    pmid: "40959699",
    type: "Przegląd systematyczny",
    participants: null,
    duration: "N/A",
    summary: "Systematyczny przegląd korzyści, skutków ubocznych i zastosowań soplówki jeżowatej jako suplementu diety.",
    methodology: "Przegląd systematyczny",
    url: "https://pubmed.ncbi.nlm.nih.gov/40959699/",
  },
  {
    id: 7,
    title: "Lion's Mane Mushroom: A Neuroprotective Fungus with Antioxidant, Anti-Inflammatory Potential",
    authors: "Various authors",
    journal: "Nutrients",
    year: 2025,
    pmid: "40284172",
    type: "Przegląd narracyjny",
    participants: null,
    duration: "N/A",
    summary: "Przegląd narracyjny omawiający potencjał neuroprotekcyjny, antyoksydacyjny i przeciwzapalny soplówki jeżowatej.",
    methodology: "Przegląd narracyjny",
    url: "https://pubmed.ncbi.nlm.nih.gov/40284172/",
  },
  {
    id: 8,
    title: "Unveiling the role of erinacines in the neuroprotective effects of Hericium erinaceus",
    authors: "Various authors",
    journal: "Various",
    year: 2025,
    pmid: "40626304",
    type: "Przegląd systematyczny",
    participants: null,
    duration: "N/A",
    summary: "Systematyczny przegląd roli erynakin (aktywnych związków z soplówki) w efektach neuroprotekcyjnych w modelach przedklinicznych.",
    methodology: "Przegląd systematyczny (modele przedkliniczne)",
    url: "https://pubmed.ncbi.nlm.nih.gov/40626304/",
  },
];

const efsaClaims = [
  {
    nutrient: "Cynk",
    claims: [
      "przyczynia się do prawidłowych funkcji poznawczych",
      "przyczynia się do prawidłowej syntezy DNA",
      "przyczynia się do ochrony komórek przed stresem oksydacyjnym",
      "przyczynia się do utrzymania prawidłowego stanu włosów, skóry i paznokci",
      "przyczynia się do prawidłowego funkcjonowania układu odpornościowego",
    ],
    url: "https://www.efsa.europa.eu/en/efsajournal/pub/1819",
  },
  {
    nutrient: "Witamina C",
    claims: [
      "przyczynia się do prawidłowego funkcjonowania układu nerwowego",
      "przyczynia się do ochrony komórek przed stresem oksydacyjnym",
      "przyczynia się do zmniejszenia uczucia zmęczenia i znużenia",
      "przyczynia się do prawidłowego funkcjonowania układu odpornościowego",
    ],
    url: "https://www.efsa.europa.eu/en/efsajournal/pub/1226",
  },
];

const Research = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Badania naukowe | Soplówka jeżowata | Shroom</title>
        <meta
          name="description"
          content="Przegląd badań naukowych dotyczących soplówki jeżowatej (Lion's Mane) oraz zatwierdzone oświadczenia zdrowotne EFSA dla cynku i witaminy C."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-card border-b border-border sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-body text-sm">Powrót do strony głównej</span>
            </Link>
          </div>
        </header>

        <main className="container mx-auto px-6 py-12">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-shroom-sage/30 px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-shroom-green" />
              <span className="font-body text-sm font-medium text-shroom-green">
                Baza wiedzy
              </span>
            </div>
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-6">
              Badania naukowe
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Przegląd opublikowanych badań dotyczących soplówki jeżowatej (Hericium erinaceus) 
              oraz zatwierdzone oświadczenia zdrowotne dla składników w naszych produktach.
            </p>
          </div>

          {/* Important Disclaimer */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-display font-bold text-foreground mb-2">
                    Ważna informacja
                  </h2>
                  <p className="font-body text-sm text-muted-foreground mb-3">
                    Poniższe badania dotyczą soplówki jeżowatej jako składnika i <strong>nie stanowią 
                    oświadczeń zdrowotnych dla produktów Shroom</strong>. Badania prezentują wyniki 
                    dla izolowanych składników w kontrolowanych warunkach laboratoryjnych.
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    Soplówka jeżowata nie posiada zatwierdzonych oświadczeń zdrowotnych w rejestrze 
                    EFSA (Europejski Urząd ds. Bezpieczeństwa Żywności). Jedyne zatwierdzone 
                    oświadczenia zdrowotne w naszych produktach dotyczą <strong>cynku</strong> i <strong>witaminy C</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* EFSA Approved Claims */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-shroom-green/20 flex items-center justify-center">
                ✓
              </span>
              Zatwierdzone oświadczenia zdrowotne EFSA
            </h2>
            <p className="font-body text-muted-foreground mb-8">
              Poniższe oświadczenia są oficjalnie zatwierdzone przez EFSA i mogą być stosowane 
              zgodnie z Rozporządzeniem WE nr 1924/2006.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {efsaClaims.map((item) => (
                <div key={item.nutrient} className="bg-card rounded-2xl p-6 shadow-soft border border-shroom-green/20">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    {item.nutrient}
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {item.claims.map((claim, idx) => (
                      <li key={idx} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                        <span className="text-shroom-green mt-0.5">•</span>
                        {claim}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-shroom-green hover:underline font-body"
                  >
                    Źródło: EFSA Journal
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Studies Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-shroom-sage/30 flex items-center justify-center">
                <FlaskConical className="w-5 h-5 text-shroom-green" />
              </span>
              Badania dot. soplówki jeżowatej (Lion's Mane)
            </h2>
            <p className="font-body text-muted-foreground mb-8">
              Poniżej znajduje się przegląd opublikowanych badań naukowych z bazy PubMed. 
              Kliknij w link, aby przejść do pełnego tekstu badania.
            </p>

            <div className="space-y-6">
              {studies.map((study) => (
                <article
                  key={study.id}
                  className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="bg-shroom-sage/30 text-shroom-green px-3 py-1 rounded-full font-body text-xs font-medium">
                      {study.type}
                    </span>
                    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-body text-xs">
                      <Calendar className="w-3 h-3 inline mr-1" />
                      {study.year}
                    </span>
                    {study.participants && (
                      <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-body text-xs">
                        <Users className="w-3 h-3 inline mr-1" />
                        n={study.participants}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {study.title}
                  </h3>

                  <p className="font-body text-sm text-muted-foreground mb-3">
                    {study.authors}
                  </p>

                  <p className="font-body text-sm text-foreground/80 mb-4">
                    {study.summary}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border">
                    <div className="font-body text-xs text-muted-foreground">
                      <span className="font-medium">{study.journal}</span>
                      {study.duration !== "N/A" && (
                        <span> • Czas trwania: {study.duration}</span>
                      )}
                      <span> • Metodologia: {study.methodology}</span>
                    </div>
                    <a
                      href={study.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full font-display text-sm font-semibold hover:scale-105 transition-transform"
                    >
                      PubMed
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="font-body text-xs text-muted-foreground/60 mt-3">
                    PMID: {study.pmid}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Footer Disclaimer */}
          <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-border">
            <p className="font-body text-xs text-muted-foreground/60 text-center">
              Informacje przedstawione na tej stronie mają charakter edukacyjny i nie stanowią 
              porady medycznej. Suplement diety nie może być stosowany jako substytut zróżnicowanej 
              diety. W przypadku wątpliwości zdrowotnych skonsultuj się z lekarzem.
            </p>
            <p className="font-body text-xs text-muted-foreground/60 text-center mt-2">
              Źródło danych: PubMed (National Library of Medicine), EFSA Journal. 
              Ostatnia aktualizacja: grudzień 2024.
            </p>
          </div>
        </main>
      </div>
    </HelmetProvider>
  );
};

export default Research;
