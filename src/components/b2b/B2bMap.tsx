/**
 * Mapa Europy z zaznaczonymi krajami obecności Shrooma.
 * Stylizowana, editorialowa — uproszczone outline'y krajów na dotted grid.
 * TODO: gdy Aga prześle finalny SVG/asset, podmienić blok <svg> poniżej.
 */

type Country = {
  code: string;
  name: string;
  // Approximate centroid in lon/lat
  lon: number;
  lat: number;
  // Optional callout offset
  align?: "left" | "right";
};

const COUNTRIES: Country[] = [
  { code: "IS", name: "Islandia", lon: -19, lat: 64.5, align: "right" },
  { code: "FR", name: "Francja", lon: 2.3, lat: 47, align: "left" },
  { code: "DE", name: "Niemcy", lon: 10.5, lat: 51.2, align: "left" },
  { code: "DK", name: "Dania", lon: 10, lat: 56, align: "right" },
  { code: "PL", name: "Polska", lon: 19.5, lat: 52, align: "right" },
  { code: "CZ", name: "Czechy", lon: 15.5, lat: 49.7, align: "left" },
  { code: "HU", name: "Węgry", lon: 19, lat: 47.2, align: "right" },
];

const VIEW_W = 800;
const VIEW_H = 560;
const LON_MIN = -25;
const LON_MAX = 35;
const LAT_MIN = 35;
const LAT_MAX = 72;

const projX = (lon: number) => ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * VIEW_W;
const projY = (lat: number) => ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * VIEW_H;

const B2bMap = () => {
  return (
    <section className="bg-shroom-peach">
      <div className="container mx-auto px-6 lg:px-12 py-24 md:py-36">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-4">
            <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-foreground/30" />
              02 — Mapa obecności
            </p>
            <h2 className="font-headline text-4xl md:text-6xl font-bold text-foreground leading-[1.02] mb-6">
              7 krajów. <br />
              <span className="text-foreground/40 italic">Jeden napój.</span>
            </h2>
            <p className="font-body text-lg text-foreground/70 leading-relaxed mb-8">
              Od Reykjavíku po Budapeszt. Shroom dotarł już do siedmiu europejskich
              rynków — i szukamy kolejnych partnerów.
            </p>
            <ul className="space-y-2">
              {COUNTRIES.sort((a, b) => a.name.localeCompare(b.name, "pl")).map((c) => (
                <li
                  key={c.code}
                  className="flex items-center gap-3 font-display font-bold text-foreground"
                >
                  <span className="w-2 h-2 bg-foreground rounded-none" />
                  {c.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-8">
            <div className="relative w-full">
              <svg
                viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
                className="w-full h-auto"
                role="img"
                aria-label="Mapa krajów, w których dostępny jest Shroom"
              >
                {/* Subtle dot grid background */}
                <defs>
                  <pattern id="dotgrid" width="16" height="16" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" fill="hsl(var(--foreground) / 0.10)" />
                  </pattern>
                </defs>
                <rect width={VIEW_W} height={VIEW_H} fill="url(#dotgrid)" />

                {/* Simplified Europe silhouette (stylized, editorial) */}
                <path
                  d="M 60 100 L 90 80 L 130 90 L 160 75 L 180 95 L 210 85 L 240 100 L 260 90 L 290 105 L 310 95 L 340 110 L 370 100 L 400 115 L 430 105 L 460 120 L 490 110 L 520 125 L 550 115 L 580 130 L 610 125 L 640 140 L 660 160 L 670 190 L 660 220 L 640 245 L 615 265 L 590 280 L 565 295 L 540 305 L 515 315 L 490 320 L 465 315 L 440 320 L 415 325 L 390 340 L 365 350 L 340 360 L 315 370 L 290 380 L 270 395 L 250 410 L 235 430 L 225 450 L 220 470 L 220 490 L 235 505 L 260 510 L 285 505 L 305 495 L 320 480 L 330 460 L 330 440 L 325 420 L 320 400 L 330 385 L 350 380 L 370 385 L 385 395 L 395 410 L 400 430 L 395 450 L 385 465 L 370 475 L 350 480 L 330 478 L 245 470 L 225 460 L 210 440 L 200 415 L 195 390 L 195 365 L 200 340 L 210 315 L 220 290 L 225 265 L 220 240 L 210 215 L 195 195 L 175 180 L 150 170 L 125 160 L 100 150 L 80 135 L 65 120 Z"
                  fill="hsl(var(--foreground) / 0.06)"
                  stroke="hsl(var(--foreground) / 0.18)"
                  strokeWidth="1"
                />

                {/* Iceland separate blob */}
                <ellipse
                  cx={projX(-19)}
                  cy={projY(64.5)}
                  rx="34"
                  ry="18"
                  fill="hsl(var(--foreground) / 0.06)"
                  stroke="hsl(var(--foreground) / 0.18)"
                  strokeWidth="1"
                />

                {/* Country dots + labels */}
                {COUNTRIES.map((c) => {
                  const cx = projX(c.lon);
                  const cy = projY(c.lat);
                  const labelDx = c.align === "left" ? -14 : 14;
                  const anchor = c.align === "left" ? "end" : "start";
                  return (
                    <g key={c.code}>
                      {/* Halo */}
                      <circle cx={cx} cy={cy} r="14" fill="hsl(var(--foreground) / 0.08)" />
                      {/* Pin */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r="6"
                        fill="hsl(var(--foreground))"
                        stroke="hsl(var(--shroom-peach))"
                        strokeWidth="2"
                      />
                      {/* Connector */}
                      <line
                        x1={cx}
                        y1={cy}
                        x2={cx + labelDx}
                        y2={cy}
                        stroke="hsl(var(--foreground) / 0.45)"
                        strokeWidth="1"
                      />
                      {/* Label */}
                      <text
                        x={cx + labelDx + (c.align === "left" ? -4 : 4)}
                        y={cy + 4}
                        textAnchor={anchor}
                        className="font-display"
                        style={{ fontFamily: "Archivo, sans-serif", fontWeight: 700, fontSize: 15 }}
                        fill="hsl(var(--foreground))"
                      >
                        {c.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
            <p className="font-body text-xs text-foreground/45 mt-4 italic">
              Stylizowana wizualizacja. Pełna mapa zostanie podmieniona na finalny asset.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2bMap;
