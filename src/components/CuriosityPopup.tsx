import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import productRelax from "@/assets/product-relax.png";
import productDiva from "@/assets/product-diva.png";
import productPower from "@/assets/product-power.png";

const SEEN_KEY = "shroom_curiosity_seen_v2"; // map of seen curiosity ids -> count
const CONSUMED_KEY = "shroom_curiosity_consumed_v2"; // array of curiosity ids the user closed/opened
const EXCLUDED_PATHS = ["/quiz", "/koszyk", "/_qa"];

const FIRST_DELAY_MS = 6000;
const REPEAT_DELAY_MS = 1500;
const NEXT_AFTER_CONSUME_MS = 45000; // wait before showing the next curiosity

type ProductLink = { name: string; slug: string; img: string; tag: string };

type Curiosity = {
  id: string;
  pillEyebrow: string;
  pillTitle: string;
  pillAriaLabel: string;
  modalEyebrow: string;
  modalTitleLines: string[];
  lead: React.ReactNode;
  chart: {
    label: string;
    unit: string;
    left: { name: string; value: number; display: string; muted?: boolean };
    right: { name: string; value: number; display: string; highlight?: boolean; deltaLabel?: string };
    footnote: string;
  };
  table: {
    colA: string;
    colB: string;
    rows: { label: string; a: string; b: string }[];
  };
  productsHeading: string;
  products: ProductLink[];
  footerLine: string;
};

const curiosities: Curiosity[] = [
  {
    id: "aronia-vs-acai",
    pillEyebrow: "Czy wiesz?",
    pillTitle: "Aronia > Acai",
    pillAriaLabel: "Otwórz ciekawostkę: Aronia vs Acai",
    modalEyebrow: "Ciekawostka . Lokalne superfoods",
    modalTitleLines: ["Wskaźnik ORAC:", "Aronia > Acai"],
    lead: (
      <>
        Acai zdobyło globalną sławę dzięki marketingowi. Tymczasem{" "}
        <strong style={{ color: "#1C0A12", fontWeight: 600 }}>aronia, polski owoc</strong>, ma o 56% wyższy
        wskaźnik ORAC w testach laboratoryjnych. Używamy jej w sokach NFC w{" "}
        <strong style={{ color: "#1C0A12", fontWeight: 600 }}>:shroom Relax</strong> i{" "}
        <strong style={{ color: "#1C0A12", fontWeight: 600 }}>Diva</strong>. Lokalnie. Z polskich plantacji.
      </>
    ),
    chart: {
      label: "Wskaźnik ORAC (µmol TE / 100 g)",
      unit: "",
      left: { name: "Acai (importowane)", value: 102700, display: "102 700", muted: true },
      right: {
        name: "Aronia (PL, w naszych napojach)",
        value: 160600,
        display: "160 600",
        highlight: true,
        deltaLabel: "+56%",
      },
      footnote:
        "ORAC to laboratoryjny wskaźnik pojemności antyoksydacyjnej żywności. Pokazuje skład owocu, nie obietnicę działania na zdrowie.",
    },
    table: {
      colA: "Acai",
      colB: "Aronia",
      rows: [
        { label: "Pochodzenie", a: "Amazonia (~8 000 km)", b: "Polska, lokalnie" },
        { label: "ORAC (µmol TE/100g)", a: "~102 700", b: "~160 600" },
        { label: "Profil smaku", a: "Czekoladowo-jagodowy", b: "Cierpki, kwaśny, ściągający" },
        { label: "Antocyjany + rutyna", a: "Średnio", b: "Bardzo wysoko" },
        { label: "Witaminy w owocu", a: "B1, B2, B3", b: "C, B, E, PP" },
        { label: "Dostępność", a: "Wyłącznie przetworzona", b: "Świeża, w sezonie" },
      ],
    },
    productsHeading: "Gdzie znajdziesz aronię",
    products: [
      { name: "Shroom Relax", slug: "shroom-relax", img: productRelax, tag: "Wieczorny rytuał" },
      { name: "Diva", slug: "diva", img: productDiva, tag: "Bezalkoholowe aperitivo" },
    ],
    footerLine: "Lokalnie. Bez 8 000 km transportu.",
  },
  {
    id: "ginseng-tradition",
    pillEyebrow: "Czy wiesz?",
    pillTitle: "Żeń-szeń rośnie 6 lat",
    pillAriaLabel: "Otwórz ciekawostkę: Żeń-szeń koreański",
    modalEyebrow: "Ciekawostka . Tradycja botaniczna",
    modalTitleLines: ["Sześć lat w ziemi:", "korzeń żeń-szenia"],
    lead: (
      <>
        Panax ginseng to roślina z wielowiekową tradycją w kulturze koreańskiej. Najwyżej cenione korzenie{" "}
        <strong style={{ color: "#1C0A12", fontWeight: 600 }}>rosną w ziemi przez 6 lat</strong>, zanim
        zostaną zebrane. Używamy ekstraktu z koreańskiego żeń-szenia w{" "}
        <strong style={{ color: "#1C0A12", fontWeight: 600 }}>:shroom Power</strong>.
      </>
    ),
    chart: {
      label: "Czas dojrzewania korzenia (lata)",
      unit: "lat",
      left: { name: "Roślina jednoroczna (typowa uprawa)", value: 1, display: "1 rok", muted: true },
      right: {
        name: "Panax ginseng (klasa premium)",
        value: 6,
        display: "6 lat",
        highlight: true,
        deltaLabel: "tradycja koreańska",
      },
      footnote:
        "Korzeń żeń-szenia koreańskiego dojrzewa w ziemi 4 do 6 lat. To informacja botaniczna i agrotechniczna, nie obietnica działania produktu.",
    },
    table: {
      colA: "Typowa uprawa",
      colB: "Panax ginseng (Korea)",
      rows: [
        { label: "Czas dojrzewania", a: "1 sezon", b: "4 do 6 lat" },
        { label: "Pochodzenie", a: "Globalnie", b: "Korea, Chiny, Syberia" },
        { label: "Cześć rośliny", a: "Liść lub owoc", b: "Korzeń" },
        { label: "Tradycja", a: "Krótka", b: "Ponad 2 000 lat w kulturze azjatyckiej" },
        { label: "Substancje botaniczne", a: "Różne", b: "Ginsenozydy (saponiny)" },
        { label: "Forma w Shroom", a: ".", b: "Ekstrakt 200 mg" },
      ],
    },
    productsHeading: "Gdzie znajdziesz żeń-szeń",
    products: [
      { name: "Shroom Power", slug: "shroom-power", img: productPower, tag: "Poranny rytuał" },
      { name: "Diva", slug: "diva", img: productDiva, tag: "13 botaników i żeń-szeń" },
    ],
    footerLine: "Sześć lat w ziemi. Wielowiekowa tradycja.",
  },
];

const getSeenMap = (): Record<string, number> => {
  try {
    return JSON.parse(sessionStorage.getItem(SEEN_KEY) || "{}");
  } catch {
    return {};
  }
};

const getConsumed = (): string[] => {
  try {
    const v = JSON.parse(sessionStorage.getItem(CONSUMED_KEY) || "[]");
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
};

const markConsumed = (id: string) => {
  try {
    const arr = getConsumed();
    if (!arr.includes(id)) {
      arr.push(id);
      sessionStorage.setItem(CONSUMED_KEY, JSON.stringify(arr));
    }
  } catch {}
};

const pickNextCuriosity = (): Curiosity | null => {
  const consumed = new Set(getConsumed());
  const unseen = curiosities.filter((c) => !consumed.has(c.id));
  if (unseen.length === 0) return null;
  // pick the first unseen in definition order
  return unseen[0];
};

const CuriosityPopup = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [animateBars, setAnimateBars] = useState(false);
  const [curiosity, setCuriosity] = useState<Curiosity | null>(null);
  const [scheduleTick, setScheduleTick] = useState(0);

  const isExcluded = EXCLUDED_PATHS.some((p) => location.pathname.startsWith(p));

  // Schedule showing the next unseen curiosity
  useEffect(() => {
    if (isExcluded) return;
    if (typeof window === "undefined") return;
    if (visible || open) return;

    const picked = pickNextCuriosity();
    if (!picked) return;

    const consumed = getConsumed();
    const isFirstEver = consumed.length === 0;
    const delay = isFirstEver ? FIRST_DELAY_MS : scheduleTick === 0 ? REPEAT_DELAY_MS : NEXT_AFTER_CONSUME_MS;

    const t = setTimeout(() => {
      setCuriosity(picked);
      setVisible(true);
      try {
        const seen = getSeenMap();
        seen[picked.id] = (seen[picked.id] ?? 0) + 1;
        sessionStorage.setItem(SEEN_KEY, JSON.stringify(seen));
      } catch {}
    }, delay);
    return () => clearTimeout(t);
  }, [isExcluded, scheduleTick, visible, open]);

  useEffect(() => {
    if (open) {
      setAnimateBars(false);
      const t = setTimeout(() => setAnimateBars(true), 80);
      return () => clearTimeout(t);
    }
  }, [open]);

  // When user closes the modal, consume current and queue the next
  useEffect(() => {
    if (!open && curiosity && visible === false) return;
    // no-op placeholder; actual consume happens via handlers below
  }, [open, curiosity, visible]);

  const consumeAndQueueNext = (id: string) => {
    markConsumed(id);
    setVisible(false);
    setCuriosity(null);
    // bump tick to re-run scheduler with NEXT_AFTER_CONSUME_MS delay
    setScheduleTick((n) => n + 1);
  };

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (curiosity) consumeAndQueueNext(curiosity.id);
  };

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next && curiosity) {
      // closing modal counts as consuming
      consumeAndQueueNext(curiosity.id);
    }
  };

  const widths = useMemo(() => {
    if (!curiosity) return { left: 0, right: 100 };
    const max = Math.max(curiosity.chart.left.value, curiosity.chart.right.value);
    return {
      left: Math.round((curiosity.chart.left.value / max) * 100),
      right: Math.round((curiosity.chart.right.value / max) * 100),
    };
  }, [curiosity]);

  if (isExcluded || !curiosity) return null;

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
          aria-label={curiosity.pillAriaLabel}
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
              {curiosity.pillEyebrow}
            </span>
            <span className="font-medium">{curiosity.pillTitle}</span>
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
      <Dialog open={open} onOpenChange={handleOpenChange}>
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
              {curiosity.modalEyebrow}
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
              {curiosity.modalTitleLines.map((l, i) => (
                <span key={i}>
                  {l}
                  {i < curiosity.modalTitleLines.length - 1 && <br />}
                </span>
              ))}
            </DialogTitle>
            <p
              className="font-body mb-8"
              style={{ color: "#7A6055", fontSize: "15px", lineHeight: 1.55 }}
            >
              {curiosity.lead}
            </p>

            {/* Chart */}
            <div className="mb-8" style={{ border: "1.5px solid #1C0A12", padding: "20px 18px" }}>
              <p
                className="font-body uppercase tracking-[0.15em] text-[10px] mb-5 font-semibold"
                style={{ color: "#1C0A12" }}
              >
                {curiosity.chart.label}
              </p>

              {/* Left bar */}
              <div className="mb-5">
                <div className="flex justify-between items-baseline mb-1.5">
                  <span className="font-body text-[13px]" style={{ color: "#7A6055" }}>
                    {curiosity.chart.left.name}
                  </span>
                  <span
                    className="font-body font-semibold text-[13px]"
                    style={{ color: "#1C0A12" }}
                  >
                    {curiosity.chart.left.display}
                  </span>
                </div>
                <div className="h-5" style={{ backgroundColor: "#F0EAE0" }}>
                  <div
                    className="h-full"
                    style={{
                      width: animateBars ? `${widths.left}%` : "0%",
                      backgroundColor: "#C4B5A8",
                      transition: "width 900ms cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  />
                </div>
              </div>

              {/* Right bar */}
              <div>
                <div className="flex justify-between items-baseline mb-1.5">
                  <span
                    className="font-body text-[13px] font-medium"
                    style={{ color: "#1C0A12" }}
                  >
                    {curiosity.chart.right.name}
                  </span>
                  <span
                    className="font-body font-semibold text-[13px]"
                    style={{ color: "#B8742A" }}
                  >
                    {curiosity.chart.right.display}
                    {curiosity.chart.right.deltaLabel ? ` · ${curiosity.chart.right.deltaLabel}` : ""}
                  </span>
                </div>
                <div className="h-5" style={{ backgroundColor: "#F0EAE0" }}>
                  <div
                    className="h-full"
                    style={{
                      width: animateBars ? `${widths.right}%` : "0%",
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
                {curiosity.chart.footnote}
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
                      {curiosity.table.colA}
                    </th>
                    <th
                      className="text-left p-2.5 font-body text-[11px] uppercase tracking-[0.15em] font-semibold"
                      style={{ color: "#B8742A", borderBottom: "1.5px solid #B8742A" }}
                    >
                      {curiosity.table.colB}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {curiosity.table.rows.map((r) => (
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
                        {r.a}
                      </td>
                      <td
                        className="p-2.5 font-body text-[12px] font-medium"
                        style={{ color: "#1C0A12", borderBottom: "1px solid #E8DFD2" }}
                      >
                        {r.b}
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
              {curiosity.productsHeading}
            </p>
            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6">
              {curiosity.products.map((p) => (
                <Link
                  key={p.slug}
                  to={`/produkt/${p.slug}`}
                  onClick={() => handleOpenChange(false)}
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
                {curiosity.footerLine}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CuriosityPopup;
