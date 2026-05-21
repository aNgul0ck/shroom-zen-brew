import { useState } from "react";
import { Check, X, Minus } from "lucide-react";

type Cell = "check" | "x" | "dash" | string;

type Competitor = {
  key: string;
  label: string;
  sub: string;
  icon: "bottle" | "can" | "cup" | "kombucha" | "wine" | "tea" | "glass";
  isShroom: boolean;
};

type Row = {
  label: string;
  values: Record<string, Cell>;
};

type Dataset = {
  productKey: "power" | "relax" | "diva";
  productLabel: string;
  headline: { line1: string; line2: string };
  intro: React.ReactNode;
  competitors: Competitor[];
  rows: Row[];
  footer: { italic: string; body: string };
};

const datasets: Dataset[] = [
  {
    productKey: "power",
    productLabel: "Shroom Power",
    headline: { line1: "Czyste składniki.", line2: "Żadnych skrótów." },
    intro: (
      <>
        Shroom Power to <strong style={{ color: "#1C0A12", fontWeight: 600 }}>orzeźwiający napój funkcjonalny</strong> —
        nie energetyk, nie kawa, nie fermentowany kwas. Grzyby, adaptogeny i naturalne soki w czystej formule.
      </>
    ),
    competitors: [
      { key: "shroom", label: ":shroom Power", sub: "RTD", icon: "bottle", isShroom: true },
      { key: "energy", label: "Energetyki", sub: "puszka", icon: "can", isShroom: false },
      { key: "coffee", label: "Kawa", sub: "kubek", icon: "cup", isShroom: false },
      { key: "kombucha", label: "Kombucha", sub: "butelka", icon: "kombucha", isShroom: false },
    ],
    rows: [
      { label: "Dodany cukier", values: { shroom: "0 g", energy: "25–40 g", coffee: "0 g", kombucha: "2–8 g" } },
      { label: "Profil smaku", values: { shroom: "orzeźwiający", energy: "słodki", coffee: "gorzki", kombucha: "octowy" } },
      { label: "Sztuczne słodziki", values: { shroom: "check", energy: "x", coffee: "check", kombucha: "check" } },
      { label: "Sztuczne barwniki", values: { shroom: "check", energy: "x", coffee: "check", kombucha: "check" } },
      { label: "Adaptogeny", values: { shroom: "Lion's Mane + żeń-szeń", energy: "dash", coffee: "dash", kombucha: "dash" } },
      { label: "Fermentowane", values: { shroom: "Nie", energy: "Nie", coffee: "Nie", kombucha: "Tak" } },
      { label: "Źródło cynku", values: { shroom: "check", energy: "x", coffee: "x", kombucha: "x" } },
      { label: "Źródło witaminy C", values: { shroom: "check", energy: "x", coffee: "x", kombucha: "x" } },
    ],
    footer: {
      italic: "660 mg soplówki jeżowatej w każdej butelce.",
      body: "To grzyb funkcjonalny stosowany w suplementacji — i jeden z powodów, dla których skład Shroom Power czyta się jak lista składników, nie jak lista kodów E.",
    },
  },
  {
    productKey: "relax",
    productLabel: "Shroom Relax",
    headline: { line1: "Wieczorne wyciszenie.", line2: "Bez alkoholu, bez kompromisów." },
    intro: (
      <>
        Shroom Relax to <strong style={{ color: "#1C0A12", fontWeight: 600 }}>funkcjonalny napój wieczorny</strong> —
        L-teanina, chmiel i adaptogeny. Pomaga zwolnić obroty bez piwa, bez nudnej herbaty, bez octowej kombuchy.
      </>
    ),
    competitors: [
      { key: "shroom", label: ":shroom Relax", sub: "RTD", icon: "bottle", isShroom: true },
      { key: "beer", label: "Piwo 0%", sub: "puszka", icon: "can", isShroom: false },
      { key: "tea", label: "Herbata ziołowa", sub: "kubek", icon: "tea", isShroom: false },
      { key: "kombucha", label: "Kombucha", sub: "butelka", icon: "kombucha", isShroom: false },
    ],
    rows: [
      { label: "Dodany cukier", values: { shroom: "0 g", beer: "3–5 g / 100ml", tea: "0 g", kombucha: "2–8 g" } },
      { label: "L-teanina", values: { shroom: "200 mg", beer: "dash", tea: "dash", kombucha: "dash" } },
      { label: "Adaptogeny", values: { shroom: "Lion's Mane + chmiel", beer: "dash", tea: "dash", kombucha: "dash" } },
      { label: "Gluten", values: { shroom: "check", beer: "x", tea: "check", kombucha: "check" } },
      { label: "Probiotyk / Prebiotyk", values: { shroom: "Prebiotyk", beer: "dash", tea: "dash", kombucha: "Probiotyk" } },
      { label: "Fermentowane", values: { shroom: "Nie", beer: "Tak", tea: "Nie", kombucha: "Tak" } },
      { label: "Źródło cynku", values: { shroom: "check", beer: "x", tea: "x", kombucha: "x" } },
      { label: "Gotowy do picia (RTD)", values: { shroom: "check", beer: "check", tea: "x", kombucha: "check" } },
    ],
    footer: {
      italic: "200 mg L-teaniny + 500 mg Lion's Mane w każdej butelce.",
      body: "Wieczorny rytuał, który nie zostawia kaca następnego dnia. Spokój bez senności, regeneracja bez alkoholu.",
    },
  },
  {
    productKey: "diva",
    productLabel: "Diva",
    headline: { line1: "Aperitivo bez kaca.", line2: "Cała celebracja, zero alkoholu." },
    intro: (
      <>
        Diva to <strong style={{ color: "#1C0A12", fontWeight: 600 }}>bezalkoholowe aperitivo</strong> —
        13 botaników, żeń-szeń i jadalny brokat. To samo doświadczenie co kieliszek wina,
        bez alkoholu i bez nudnych opcji 0%.
      </>
    ),
    competitors: [
      { key: "shroom", label: "Diva", sub: "500 ml", icon: "bottle", isShroom: true },
      { key: "wine", label: "Kieliszek wina", sub: "~150 ml", icon: "wine", isShroom: false },
      { key: "beer", label: "Piwo 0%", sub: "puszka", icon: "can", isShroom: false },
      { key: "gin", label: "Gin & Tonic 0%", sub: "drink", icon: "glass", isShroom: false },
    ],
    rows: [
      { label: "Alkohol", values: { shroom: "0%", wine: "~12%", beer: "0%", gin: "0%" } },
      { label: "Kalorie", values: { shroom: "~35 kcal / 50ml", wine: "~120 kcal / 150ml", beer: "~30 kcal / 100ml", gin: "~50 kcal / drink" } },
      { label: "13 składników botanicznych", values: { shroom: "check", wine: "x", beer: "x", gin: "x" } },
      { label: "Adaptogeny", values: { shroom: "żeń-szeń", wine: "dash", beer: "dash", gin: "dash" } },
      { label: "Jadalny brokat", values: { shroom: "check", wine: "x", beer: "x", gin: "x" } },
      { label: "Źródło cynku", values: { shroom: "check", wine: "x", beer: "x", gin: "x" } },
      { label: "Nadaje się jako mixer", values: { shroom: "check", wine: "x", beer: "x", gin: "check" } },
      { label: "Kac następnego dnia", values: { shroom: "Nie", wine: "Tak", beer: "Nie", gin: "Nie" } },
    ],
    footer: {
      italic: "13 botaników i żeń-szeń w każdej butelce.",
      body: "To samo doświadczenie, ten sam rytuał — bez alkoholu i bez kaca. Idealna baza do mocktaili lub samodzielne aperitivo.",
    },
  },
];

const CompetitorIcon = ({ type, className }: { type: Competitor["icon"]; className?: string }) => {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinejoin: "round" as const, strokeLinecap: "round" as const };
  switch (type) {
    case "bottle":
      return (
        <svg viewBox="0 0 24 32" className={className} aria-hidden="true">
          <path {...common} d="M10 2h4v4l2 3v19a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V9l2-3V2z" />
          <line {...common} x1="8" y1="14" x2="16" y2="14" />
        </svg>
      );
    case "can":
      return (
        <svg viewBox="0 0 24 32" className={className} aria-hidden="true">
          <rect {...common} x="6" y="3" width="12" height="26" rx="1.5" />
          <line {...common} x1="6" y1="8" x2="18" y2="8" />
        </svg>
      );
    case "cup":
      return (
        <svg viewBox="0 0 28 28" className={className} aria-hidden="true">
          <path {...common} d="M5 8h14v10a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6V8z" />
          <path {...common} d="M19 11h2a3 3 0 0 1 0 6h-2" />
          <path {...common} d="M9 3c0 1.5-1 1.5-1 3M13 3c0 1.5-1 1.5-1 3" />
        </svg>
      );
    case "kombucha":
      return (
        <svg viewBox="0 0 24 32" className={className} aria-hidden="true">
          <path {...common} d="M9 2h6v3h-1v3l2 4v17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V12l2-4V5H9V2z" />
          <line {...common} x1="8" y1="18" x2="16" y2="18" />
        </svg>
      );
    case "wine":
      return (
        <svg viewBox="0 0 24 32" className={className} aria-hidden="true">
          <path {...common} d="M7 3h10l-1 9a4 4 0 0 1-4 4 4 4 0 0 1-4-4L7 3z" />
          <line {...common} x1="12" y1="16" x2="12" y2="27" />
          <line {...common} x1="8" y1="29" x2="16" y2="29" />
        </svg>
      );
    case "tea":
      return (
        <svg viewBox="0 0 28 28" className={className} aria-hidden="true">
          <path {...common} d="M5 10h14v8a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6v-8z" />
          <path {...common} d="M19 13h2a3 3 0 0 1 0 6h-2" />
          <path {...common} d="M10 4c0 2 2 2 2 4M14 4c0 2 2 2 2 4" />
        </svg>
      );
    case "glass":
      return (
        <svg viewBox="0 0 24 32" className={className} aria-hidden="true">
          <path {...common} d="M6 4h12v6a6 6 0 0 1-6 6 6 6 0 0 1-6-6V4z" />
          <line {...common} x1="12" y1="16" x2="12" y2="28" />
          <line {...common} x1="8" y1="29" x2="16" y2="29" />
        </svg>
      );
  }
};

const CellContent = ({ value, isShroom }: { value: Cell; isShroom: boolean }) => {
  if (value === "check") {
    return <Check className="w-5 h-5 mx-auto" strokeWidth={2.5} style={{ color: isShroom ? "#B8742A" : "#7A6055" }} aria-label="tak" />;
  }
  if (value === "x") {
    return <X className="w-5 h-5 mx-auto" strokeWidth={2} style={{ color: "#B85C45" }} aria-label="nie" />;
  }
  if (value === "dash") {
    return <Minus className="w-4 h-4 mx-auto" style={{ color: "#C4B5A8" }} aria-label="nie dotyczy" />;
  }
  return (
    <span
      className="font-body font-semibold text-[12px] md:text-[14px] leading-tight block break-words hyphens-auto px-1"
      style={{ color: isShroom ? "#FAF7F2" : "#1C0A12" }}
    >
      {value}
    </span>
  );
};

const ComparisonSection = () => {
  const [activeKey, setActiveKey] = useState<Dataset["productKey"]>("power");
  const active = datasets.find((d) => d.productKey === activeKey)!;

  return (
    <section style={{ backgroundColor: "#FAF7F2" }}>
      <div className="container mx-auto px-6 lg:px-12 py-16 md:py-24">
        {/* Eyebrow + headline */}
        <div className="text-center max-w-[640px] mx-auto mb-10 md:mb-12">
          <p
            className="font-body mb-5"
            style={{
              color: "#B8742A",
              letterSpacing: "0.15em",
              fontSize: "11px",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Porównanie
          </p>
          <h2
            className="mb-5"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontStyle: "italic",
              fontWeight: 500,
              color: "#1C0A12",
              fontSize: "clamp(32px, 5vw, 48px)",
              lineHeight: 1.1,
            }}
          >
            {active.headline.line1}
            <br />
            {active.headline.line2}
          </h2>
          <p
            className="font-body mx-auto"
            style={{ color: "#7A6055", fontSize: "17px", lineHeight: 1.55, maxWidth: "540px" }}
          >
            {active.intro}
          </p>
        </div>

        {/* Product tabs */}
        <div className="flex justify-center mb-10 md:mb-12">
          <div
            role="tablist"
            aria-label="Wybierz produkt do porównania"
            className="inline-flex gap-[2px] p-[2px]"
            style={{ border: "1px solid #1C0A12", backgroundColor: "#1C0A12" }}
          >
            {datasets.map((d) => {
              const isActive = d.productKey === activeKey;
              return (
                <button
                  key={d.productKey}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveKey(d.productKey)}
                  className="font-body font-semibold uppercase tracking-[0.12em] text-[11px] md:text-[12px] px-4 md:px-6 py-2.5 md:py-3 transition-colors"
                  style={{
                    backgroundColor: isActive ? "#FAF7F2" : "#1C0A12",
                    color: isActive ? "#1C0A12" : "#FAF7F2",
                  }}
                >
                  {d.productLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Table */}
        <div className="max-w-[1000px] mx-auto">
          <div className="overflow-x-auto md:overflow-visible -mx-6 md:mx-0 px-6 md:px-0">
            <table className="w-full border-collapse table-fixed" style={{ minWidth: "640px" }}>
              <caption className="sr-only">
                {active.productLabel} w porównaniu z konkurencją
              </caption>
              <colgroup>
                <col style={{ width: "22%" }} />
                <col style={{ width: "19.5%" }} />
                <col style={{ width: "19.5%" }} />
                <col style={{ width: "19.5%" }} />
                <col style={{ width: "19.5%" }} />
              </colgroup>
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="sticky left-0 z-10 text-left align-bottom p-3 md:p-4"
                    style={{ backgroundColor: "#FAF7F2" }}
                  >
                    <span className="sr-only">Kryterium</span>
                  </th>
                  {active.competitors.map((c) => (
                    <th
                      key={c.key}
                      scope="col"
                      className="text-center align-bottom p-3 md:p-5"
                      style={{
                        backgroundColor: c.isShroom ? "#1C0A12" : "#F0EAE0",
                        color: c.isShroom ? "#FAF7F2" : "#1C0A12",
                        borderTopLeftRadius: c.isShroom ? "12px" : "0",
                        borderTopRightRadius: c.isShroom ? "12px" : "0",
                      }}
                    >
                      <div className="flex flex-col items-center gap-2">
                        {c.isShroom && (
                          <span
                            className="font-body text-[9px] tracking-[0.2em] uppercase px-2 py-0.5"
                            style={{ color: "#B8742A", border: "1px solid #B8742A", borderRadius: "999px" }}
                          >
                            :shroom
                          </span>
                        )}
                        <CompetitorIcon type={c.icon} className="w-7 h-9 md:w-8 md:h-10" />
                        <span
                          className="font-body font-semibold text-[12px] md:text-[14px] mt-1"
                          style={{ color: c.isShroom ? "#FAF7F2" : "#1C0A12" }}
                        >
                          {c.label}
                        </span>
                        <span
                          className="font-body text-[10px] md:text-[11px]"
                          style={{ color: c.isShroom ? "#B8742A" : "#7A6055" }}
                        >
                          {c.sub}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {active.rows.map((row, idx) => {
                  const isLast = idx === active.rows.length - 1;
                  return (
                    <tr key={row.label}>
                      <th
                        scope="row"
                        className="sticky left-0 z-10 text-left font-body font-medium text-[12px] md:text-[14px] p-3 md:p-4"
                        style={{
                          backgroundColor: "#FAF7F2",
                          color: "#1C0A12",
                          borderBottom: "1px solid #E8DFD2",
                          height: "56px",
                        }}
                      >
                        {row.label}
                      </th>
                      {active.competitors.map((c) => {
                        const value = row.values[c.key];
                        const bg = c.isShroom
                          ? "#1C0A12"
                          : idx % 2 === 0
                          ? "#F0EAE0"
                          : "#F6EFE4";
                        return (
                          <td
                            key={c.key}
                            className="text-center p-3 md:p-4"
                            style={{
                              backgroundColor: bg,
                              height: "56px",
                              borderBottomLeftRadius: isLast && c.isShroom ? "12px" : 0,
                              borderBottomRightRadius: isLast && c.isShroom ? "12px" : 0,
                            }}
                          >
                            <CellContent value={value} isShroom={c.isShroom} />
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Footnote */}
          <p
            className="font-body italic mt-6 text-center"
            style={{ color: "#7A6055", fontSize: "11px", lineHeight: 1.6 }}
          >
            * Wartości dla typowych produktów kategorii. Dane aktualne na 2025.
            <br />
            Shroom to suplement diety, nie lek.
          </p>

          {/* Soft follow-up */}
          <div className="text-center max-w-[600px] mx-auto mt-14 md:mt-20">
            <p
              className="mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: "italic",
                color: "#1C0A12",
                fontSize: "22px",
                lineHeight: 1.3,
              }}
            >
              {active.footer.italic}
            </p>
            <p className="font-body" style={{ color: "#7A6055", fontSize: "16px", lineHeight: 1.6 }}>
              {active.footer.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
