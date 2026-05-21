import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import productRelax from "@/assets/product-relax.png";
import productDiva from "@/assets/product-diva.png";

const SEEN_KEY = "shroom_curiosity_seen";
const DISMISSED_KEY = "shroom_curiosity_dismissed";
const EXCLUDED_PATHS = ["/quiz", "/koszyk", "/_qa"];

const ACAI_ORAC = 102700;
const ARONIA_ORAC = 160600;
const ARONIA_PCT = Math.round(((ARONIA_ORAC - ACAI_ORAC) / ACAI_ORAC) * 100);

const tableRows: { label: string; acai: string; aronia: string }[] = [
  { label: "Pochodzenie", acai: "Amazonia (~8 000 km)", aronia: "Polska, lokalnie" },
  { label: "ORAC (µmol TE/100g)", acai: "~102 700", aronia: "~160 600" },
  { label: "Profil smaku", acai: "Czekoladowo-jagodowy", aronia: "Cierpki, kwaśny, ściągający" },
  { label: "Antocyjany + rutyna", acai: "Średnio", aronia: "Bardzo wysoko" },
  { label: "Witaminy", acai: "B1, B2, B3", aronia: "C, B, E, PP" },
  { label: "Dostępność", acai: "Wyłącznie przetworzona", aronia: "Świeża, w sezonie" },
];

const CuriosityPopup = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [animateBars, setAnimateBars] = useState(false);

  const isExcluded = EXCLUDED_PATHS.some((p) => location.pathname.startsWith(p));

  useEffect(() => {
    if (isExcluded) return;
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem(DISMISSED_KEY)) return;
    } catch {}
    const delay = sessionStorage.getItem(SEEN_KEY) ? 1500 : 6000;
    const t = setTimeout(() => {
      setVisible(true);
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {}
    }, delay);
    return () => clearTimeout(t);
  }, [isExcluded]);

  useEffect(() => {
    if (open) {
      setAnimateBars(false);
      const t = setTimeout(() => setAnimateBars(true), 80);
      return () => clearTimeout(t);
    }
  }, [open]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setVisible(false);
    try {
      sessionStorage.setItem(DISMISSED_KEY, "1");
    } catch {}
  };

  if (isExcluded) return null;

  const aroniaWidthPct = 100;
  const acaiWidthPct = Math.round((ACAI_ORAC / ARONIA_ORAC) * 100);

  return (
    <>
      {/* Pill — collapsed state */}
      <div
        className={`fixed left-4 md:left-6 z-40 transition-all duration-500 ${
          visible && !open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
        style={{ bottom: "96px" }}
      >
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Otwórz ciekawostkę: Aronia vs Acai"
          className="group flex items-center gap-2.5 pl-3 pr-2 py-2 font-body text-[12px] md:text-[13px] transition-transform hover:-translate-y-0.5"
          style={{
            backgroundColor: "#FAF7F2",
            color: "#1C0A12",
            border: "1.5px solid #1C0A12",
            boxShadow: "4px 4px 0 0 #1C0A12",
          }}
        >
          <span
            className="flex items-center justify-center w-6 h-6 shrink-0"
            style={{ backgroundColor: "#1C0A12", color: "#B8742A" }}
          >
            <Sparkles className="w-3.5 h-3.5" strokeWidth={2} />
          </span>
          <span className="flex flex-col items-start leading-tight pr-1">
            <span
              className="uppercase tracking-[0.15em] text-[9px] font-semibold"
              style={{ color: "#B8742A" }}
            >
              Czy wiesz?
            </span>
            <span className="font-medium">Aronia &gt; Acai</span>
          </span>
          <span
            onClick={handleDismiss}
            role="button"
            tabIndex={0}
            aria-label="Zamknij"
            className="flex items-center justify-center w-5 h-5 ml-1 transition-colors hover:bg-[#1C0A12] hover:text-[#FAF7F2]"
            style={{ color: "#7A6055" }}
          >
            <X className="w-3 h-3" strokeWidth={2} />
          </span>
        </button>
      </div>

      {/* Expanded modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="max-w-[760px] w-[calc(100%-2rem)] p-0 gap-0 border-2 rounded-none overflow-hidden max-h-[90vh] overflow-y-auto"
          style={{ backgroundColor: "#FAF7F2", borderColor: "#1C0A12" }}
        >
          <div className="p-6 md:p-10">
            <p
              className="font-body mb-4"
              style={{
                color: "#B8742A",
                letterSpacing: "0.18em",
                fontSize: "10px",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Ciekawostka · Lokalne superfoods
            </p>
            <DialogTitle
              className="mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: "italic",
                fontWeight: 500,
                color: "#1C0A12",
                fontSize: "clamp(26px, 4vw, 38px)",
                lineHeight: 1.1,
              }}
            >
              Potęga antyoksydacyjna:
              <br />
              Aronia &gt; Acai
            </DialogTitle>
            <p
              className="font-body mb-8"
              style={{ color: "#7A6055", fontSize: "15px", lineHeight: 1.55 }}
            >
              Acai zdobyło globalną sławę jako król antyoksydantów. Ale to{" "}
              <strong style={{ color: "#1C0A12", fontWeight: 600 }}>aronia — polski superfood</strong>{" "}
              — ma o {ARONIA_PCT}% wyższy wskaźnik ORAC. Używamy jej w{" "}
              <strong style={{ color: "#1C0A12", fontWeight: 600 }}>:shroom Relax</strong> i{" "}
              <strong style={{ color: "#1C0A12", fontWeight: 600 }}>Diva</strong>. Lokalnie. Lepiej.
            </p>

            {/* ORAC chart */}
            <div className="mb-8" style={{ border: "1.5px solid #1C0A12", padding: "20px 18px" }}>
              <p
                className="font-body uppercase tracking-[0.15em] text-[10px] mb-5 font-semibold"
                style={{ color: "#1C0A12" }}
              >
                Wskaźnik ORAC (µmol TE / 100 g)
              </p>

              {/* Acai bar */}
              <div className="mb-5">
                <div className="flex justify-between items-baseline mb-1.5">
                  <span className="font-body text-[13px]" style={{ color: "#7A6055" }}>
                    Acai (importowane)
                  </span>
                  <span
                    className="font-body font-semibold text-[13px]"
                    style={{ color: "#1C0A12" }}
                  >
                    {ACAI_ORAC.toLocaleString("pl-PL")}
                  </span>
                </div>
                <div className="h-5" style={{ backgroundColor: "#F0EAE0" }}>
                  <div
                    className="h-full"
                    style={{
                      width: animateBars ? `${acaiWidthPct}%` : "0%",
                      backgroundColor: "#C4B5A8",
                      transition: "width 900ms cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  />
                </div>
              </div>

              {/* Aronia bar */}
              <div>
                <div className="flex justify-between items-baseline mb-1.5">
                  <span
                    className="font-body text-[13px] font-medium"
                    style={{ color: "#1C0A12" }}
                  >
                    Aronia (PL, w naszych napojach)
                  </span>
                  <span
                    className="font-body font-semibold text-[13px]"
                    style={{ color: "#B8742A" }}
                  >
                    {ARONIA_ORAC.toLocaleString("pl-PL")} · +{ARONIA_PCT}%
                  </span>
                </div>
                <div className="h-5" style={{ backgroundColor: "#F0EAE0" }}>
                  <div
                    className="h-full"
                    style={{
                      width: animateBars ? "100%" : "0%",
                      backgroundColor: "#B8742A",
                      transition: "width 1100ms cubic-bezier(0.22, 1, 0.36, 1) 150ms",
                    }}
                  />
                </div>
              </div>

              <p
                className="font-body italic mt-4"
                style={{ color: "#7A6055", fontSize: "11px", lineHeight: 1.5 }}
              >
                ORAC mierzy zdolność pochłaniania wolnych rodników. Im wyższy, tym silniejsze
                działanie ochronne dla komórek.
              </p>
            </div>

            {/* Comparison table */}
            <div className="mb-8 overflow-x-auto">
              <table className="w-full border-collapse" style={{ minWidth: "480px" }}>
                <thead>
                  <tr>
                    <th className="text-left p-2.5 font-body text-[10px] uppercase tracking-[0.15em] font-semibold" style={{ color: "#7A6055" }}>
                      &nbsp;
                    </th>
                    <th
                      className="text-left p-2.5 font-body text-[11px] uppercase tracking-[0.15em] font-semibold"
                      style={{ color: "#1C0A12", borderBottom: "1.5px solid #1C0A12" }}
                    >
                      Acai
                    </th>
                    <th
                      className="text-left p-2.5 font-body text-[11px] uppercase tracking-[0.15em] font-semibold"
                      style={{ color: "#B8742A", borderBottom: "1.5px solid #B8742A" }}
                    >
                      Aronia
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((r) => (
                    <tr key={r.label}>
                      <th
                        scope="row"
                        className="text-left p-2.5 font-body font-medium text-[12px]"
                        style={{ color: "#1C0A12", borderBottom: "1px solid #E8DFD2", width: "32%" }}
                      >
                        {r.label}
                      </th>
                      <td
                        className="p-2.5 font-body text-[12px]"
                        style={{ color: "#7A6055", borderBottom: "1px solid #E8DFD2" }}
                      >
                        {r.acai}
                      </td>
                      <td
                        className="p-2.5 font-body text-[12px] font-medium"
                        style={{ color: "#1C0A12", borderBottom: "1px solid #E8DFD2" }}
                      >
                        {r.aronia}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Products */}
            <p
              className="font-body uppercase tracking-[0.15em] text-[10px] mb-4 font-semibold"
              style={{ color: "#1C0A12" }}
            >
              Gdzie znajdziesz aronię
            </p>
            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6">
              {[
                { name: "Shroom Relax", slug: "shroom-relax", img: productRelax, tag: "Wieczorne wyciszenie" },
                { name: "Diva", slug: "diva", img: productDiva, tag: "Bezalkoholowe aperitivo" },
              ].map((p) => (
                <Link
                  key={p.slug}
                  to={`/produkt/${p.slug}`}
                  onClick={() => setOpen(false)}
                  className="group flex items-center gap-3 p-3 transition-colors hover:bg-[#F0EAE0]"
                  style={{ border: "1.5px solid #1C0A12" }}
                >
                  <div
                    className="shrink-0 w-14 h-14 flex items-center justify-center"
                    style={{ backgroundColor: "#F0EAE0" }}
                  >
                    <img src={p.img} alt={p.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-body font-semibold text-[13px] md:text-[14px]"
                      style={{ color: "#1C0A12" }}
                    >
                      {p.name}
                    </p>
                    <p
                      className="font-body text-[11px] truncate"
                      style={{ color: "#7A6055" }}
                    >
                      {p.tag} →
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Footer line */}
            <div
              className="text-center pt-5"
              style={{ borderTop: "1px solid #E8DFD2" }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontStyle: "italic",
                  color: "#1C0A12",
                  fontSize: "18px",
                  lineHeight: 1.3,
                }}
              >
                Lokalnie. Lepiej. Bez 8 000 km transportu.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CuriosityPopup;
