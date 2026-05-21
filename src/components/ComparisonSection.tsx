import { Check, X, Minus } from "lucide-react";

type Cell = "check" | "x" | "dash" | string;

type Row = {
  label: string;
  shroom: Cell;
  energy: Cell;
  coffee: Cell;
  kombucha: Cell;
};

const rows: Row[] = [
  { label: "Dodany cukier", shroom: "0 g", energy: "25–40 g", coffee: "0 g", kombucha: "2–8 g" },
  { label: "Profil smaku", shroom: "orzeźwiający", energy: "słodki", coffee: "gorzki", kombucha: "octowy" },
  { label: "Sztuczne słodziki", shroom: "check", energy: "x", coffee: "check", kombucha: "check" },
  { label: "Sztuczne barwniki", shroom: "check", energy: "x", coffee: "check", kombucha: "check" },
  { label: "Adaptogeny", shroom: "Lion's Mane + żeń-szeń", energy: "dash", coffee: "dash", kombucha: "dash" },
  { label: "Fermentowane", shroom: "Nie", energy: "Nie", coffee: "Nie", kombucha: "Tak" },
  { label: "Źródło cynku", shroom: "check", energy: "x", coffee: "x", kombucha: "x" },
  { label: "Źródło witaminy C", shroom: "check", energy: "x", coffee: "x", kombucha: "x" },
];

const CompetitorIcon = ({ type, className }: { type: "bottle" | "can" | "cup" | "kombucha"; className?: string }) => {
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
      className="font-body font-semibold text-[13px] md:text-[15px]"
      style={{ color: isShroom ? "#FAF7F2" : "#1C0A12" }}
    >
      {value}
    </span>
  );
};

const competitors = [
  { key: "shroom", label: ":shroom Power", sub: "RTD", icon: "bottle" as const, isShroom: true },
  { key: "energy", label: "Energetyki", sub: "puszka", icon: "can" as const, isShroom: false },
  { key: "coffee", label: "Kawa", sub: "kubek", icon: "cup" as const, isShroom: false },
  { key: "kombucha", label: "Kombucha", sub: "butelka", icon: "kombucha" as const, isShroom: false },
];

const ComparisonSection = () => {
  return (
    <section style={{ backgroundColor: "#FAF7F2" }}>
      <div className="container mx-auto px-6 lg:px-12 py-16 md:py-24">
        {/* Eyebrow + headline */}
        <div className="text-center max-w-[640px] mx-auto mb-12 md:mb-16">
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
            Czyste składniki.
            <br />
            Żadnych skrótów.
          </h2>
          <p
            className="font-body mx-auto"
            style={{ color: "#7A6055", fontSize: "17px", lineHeight: 1.55, maxWidth: "540px" }}
          >
            Shroom Power to <strong style={{ color: "#1C0A12", fontWeight: 600 }}>orzeźwiający napój funkcjonalny</strong> —
            nie fermentowany kwas. Grzyby, adaptogeny i naturalne soki w czystej formule.
            Sprawdź, co masz w butelce.
          </p>

          {/* Pro vs Pre callout */}
          <div
            className="mt-8 grid grid-cols-2 gap-[2px] max-w-[520px] mx-auto"
            style={{ border: "1px solid #1C0A12" }}
          >
            <div className="p-4 text-left" style={{ backgroundColor: "#1C0A12", color: "#FAF7F2" }}>
              <p className="font-body text-[10px] uppercase tracking-[0.18em] mb-1" style={{ color: "#B8742A" }}>
                :shroom
              </p>
              <p className="font-body font-semibold text-[15px]">Probiotyk</p>
              <p className="font-body text-[12px] mt-1" style={{ color: "#C4B5A8" }}>
                żywe kultury, lekki, orzeźwiający
              </p>
            </div>
            <div className="p-4 text-left" style={{ backgroundColor: "#F0EAE0", color: "#1C0A12" }}>
              <p className="font-body text-[10px] uppercase tracking-[0.18em] mb-1" style={{ color: "#7A6055" }}>
                Kombucha
              </p>
              <p className="font-body font-semibold text-[15px]">Prebiotyk</p>
              <p className="font-body text-[12px] mt-1" style={{ color: "#7A6055" }}>
                fermentowana, octowy posmak
              </p>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="max-w-[1000px] mx-auto">
          <div className="overflow-x-auto md:overflow-visible -mx-6 md:mx-0 px-6 md:px-0">
            <table className="w-full border-collapse" style={{ minWidth: "560px" }}>
              <caption className="sr-only">
                Shroom Power w porównaniu z energetykami, kawą i kombuchą
              </caption>
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="sticky left-0 z-10 text-left align-bottom p-3 md:p-4"
                    style={{ backgroundColor: "#FAF7F2", width: "130px", minWidth: "130px" }}
                  >
                    <span className="sr-only">Kryterium</span>
                  </th>
                  {competitors.map((c) => (
                    <th
                      key={c.key}
                      scope="col"
                      className="text-center align-bottom p-3 md:p-5"
                      style={{
                        backgroundColor: c.isShroom ? "#1C0A12" : "#F0EAE0",
                        color: c.isShroom ? "#FAF7F2" : "#1C0A12",
                        minWidth: "110px",
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
                        <CompetitorIcon
                          type={c.icon}
                          className="w-7 h-9 md:w-8 md:h-10"
                        />
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
                {rows.map((row, idx) => {
                  const isLast = idx === rows.length - 1;
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
                      {competitors.map((c) => {
                        const value = row[c.key as keyof Row] as Cell;
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
            Shroom Power to suplement diety, nie lek.
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
              660 mg soplówki jeżowatej w każdej butelce.
            </p>
            <p className="font-body" style={{ color: "#7A6055", fontSize: "16px", lineHeight: 1.6 }}>
              To grzyb funkcjonalny stosowany w suplementacji — i jeden z powodów, dla których skład
              Shroom Power czyta się jak lista składników, nie jak lista kodów E.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
