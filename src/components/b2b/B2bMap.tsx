/**
 * Mapa Europy z zaznaczonymi krajami obecności Shrooma.
 * Używa realnego (uproszczonego) outline'u Europy z TopoJSON-style współrzędnych.
 * Pinezki rysowane na podstawie rzeczywistych lon/lat, projekcja equirectangular.
 */

import { useState } from "react";

type Country = {
  code: string;
  name: string;
  lon: number;
  lat: number;
};

const COUNTRIES: Country[] = [
  { code: "IS", name: "Islandia", lon: -19.0, lat: 64.9 },
  { code: "FR", name: "Francja", lon: 2.35, lat: 47.0 },
  { code: "DE", name: "Niemcy", lon: 10.45, lat: 51.2 },
  { code: "DK", name: "Dania", lon: 9.5, lat: 56.0 },
  { code: "PL", name: "Polska", lon: 19.5, lat: 52.0 },
  { code: "CZ", name: "Czechy", lon: 15.5, lat: 49.8 },
  { code: "HU", name: "Węgry", lon: 19.5, lat: 47.2 },
];

const VIEW_W = 800;
const VIEW_H = 620;
const LON_MIN = -28;
const LON_MAX = 32;
const LAT_MIN = 35;
const LAT_MAX = 71;

const projX = (lon: number) =>
  ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * VIEW_W;
const projY = (lat: number) =>
  ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * VIEW_H;

// Uproszczony, ale rozpoznawalny outline kontynentalnej Europy (lon, lat)
// Trasa: Portugalia → Hiszpania → płd. Francja → Włochy → Bałkany → Grecja →
// Bułgaria → Rumunia → Ukraina → Białoruś → kraje bałtyckie → Skandynawia
// (Norwegia, Szwecja, Finlandia) → z powrotem przez Danię, Niemcy, Holandię,
// Belgię, Francję atlantycką → Półwysep Iberyjski.
const EUROPE_OUTLINE: [number, number][] = [
  [-9.5, 38.7],   // Lizbona
  [-9.0, 41.2],   // Porto
  [-8.7, 43.4],   // Galicja
  [-3.7, 43.5],   // Santander
  [-1.5, 43.4],   // Bask
  [-1.2, 46.2],   // Wybrzeże Francji
  [-2.0, 48.6],   // Bretania
  [0.3, 49.8],    // Normandia
  [2.5, 51.0],    // Calais
  [4.4, 52.0],    // Holandia
  [8.1, 53.5],    // płn. Niemcy
  [8.5, 55.0],    // Jutlandia płd
  [9.5, 57.7],    // Skagen
  [5.7, 58.9],    // Stavanger
  [5.3, 60.4],    // Bergen
  [7.5, 63.4],    // Trondheim
  [14.4, 67.3],   // Bodø
  [18.0, 69.6],   // Tromsø
  [25.7, 71.0],   // Nordkapp
  [28.5, 70.0],   // Kirkenes
  [29.7, 62.6],   // wschodnia Finlandia
  [27.7, 60.2],   // Zatoka Fińska
  [24.1, 59.4],   // Tallin
  [24.1, 56.9],   // Ryga
  [21.1, 55.9],   // Kłajpeda
  [19.9, 54.4],   // Mierzeja
  [19.0, 49.5],   // Tatry
  [22.3, 48.4],   // Karpaty
  [28.6, 45.4],   // Delta Dunaju
  [27.5, 42.5],   // Burgas
  [26.1, 40.0],   // Dardanele
  [23.7, 37.9],   // Ateny
  [21.7, 38.4],   // Patras
  [19.5, 40.0],   // Albania
  [18.5, 42.4],   // Czarnogóra
  [13.5, 45.5],   // Triest
  [12.3, 44.5],   // Rawenna
  [12.5, 41.9],   // Rzym
  [14.3, 40.8],   // Neapol
  [15.6, 38.1],   // Sycylia
  [12.5, 37.8],   // płd. Sycylia
  [9.2, 39.2],    // Sardynia
  [9.5, 41.0],    // Korsyka
  [5.4, 43.3],    // Marsylia
  [3.0, 42.3],    // Perpignan
  [2.2, 41.4],    // Barcelona
  [-0.4, 39.5],   // Walencja
  [-2.8, 36.7],   // Almería
  [-5.3, 36.1],   // Tarifa
  [-6.3, 36.5],   // Kadyks
  [-9.5, 38.7],   // back to Lizbona
];

const polygonPath = (points: [number, number][]) =>
  points
    .map(([lon, lat], i) => `${i === 0 ? "M" : "L"} ${projX(lon).toFixed(1)} ${projY(lat).toFixed(1)}`)
    .join(" ") + " Z";

// Wielka Brytania (uproszczony outline)
const UK_OUTLINE: [number, number][] = [
  [-5.0, 50.1], [-3.0, 50.7], [0.5, 51.0], [1.4, 52.9], [-0.2, 53.7],
  [-3.0, 54.0], [-1.5, 55.8], [-2.0, 57.7], [-3.5, 58.6], [-5.5, 58.5],
  [-5.7, 56.5], [-4.5, 55.0], [-5.0, 53.4], [-4.5, 52.0], [-5.2, 51.7],
  [-5.0, 50.1],
];

// Irlandia
const IE_OUTLINE: [number, number][] = [
  [-10.5, 51.6], [-6.0, 52.2], [-6.0, 54.5], [-9.9, 54.3], [-10.5, 51.6],
];

// Islandia (mała plama)
const IS_OUTLINE: [number, number][] = [
  [-24.5, 65.6], [-22.0, 66.5], [-15.5, 66.4], [-13.5, 65.4], [-15.0, 63.4],
  [-19.5, 63.4], [-22.5, 63.8], [-24.5, 65.6],
];

const B2bMap = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const sortedNames = [...COUNTRIES].sort((a, b) =>
    a.name.localeCompare(b.name, "pl")
  );

  return (
    <section className="bg-shroom-peach">
      <div className="container mx-auto px-6 lg:px-12 py-20 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-4">
            <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-foreground/30" />
              02 — Mapa obecności
            </p>
            <h2 className="font-headline text-4xl md:text-6xl font-bold text-foreground leading-[1.02] mb-6">
              7 krajów. <br />
              <span className="text-foreground/40 italic">Jeden napój.</span>
            </h2>
            <p className="font-body text-base md:text-lg text-foreground/70 leading-relaxed mb-8">
              Od Reykjavíku po Budapeszt. Shroom dotarł już do siedmiu
              europejskich rynków — i szukamy kolejnych partnerów.
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {sortedNames.map((c) => (
                <li
                  key={c.code}
                  onMouseEnter={() => setHovered(c.code)}
                  onMouseLeave={() => setHovered(null)}
                  className={`flex items-center gap-3 font-display font-bold text-foreground transition-opacity cursor-default ${
                    hovered && hovered !== c.code ? "opacity-40" : "opacity-100"
                  }`}
                >
                  <span className="w-2 h-2 bg-foreground" />
                  {c.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-8">
            <div className="relative w-full bg-shroom-cream border-2 border-foreground p-4 md:p-6">
              <svg
                viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
                className="w-full h-auto"
                role="img"
                aria-label="Mapa Europy z zaznaczonymi krajami dystrybucji Shrooma"
              >
                <defs>
                  <pattern id="dotgrid-map" width="14" height="14" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" fill="hsl(var(--foreground) / 0.10)" />
                  </pattern>
                </defs>
                <rect width={VIEW_W} height={VIEW_H} fill="url(#dotgrid-map)" />

                {/* Land masses */}
                {[EUROPE_OUTLINE, UK_OUTLINE, IE_OUTLINE, IS_OUTLINE].map((shape, i) => (
                  <path
                    key={i}
                    d={polygonPath(shape)}
                    fill="hsl(var(--foreground) / 0.08)"
                    stroke="hsl(var(--foreground) / 0.35)"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                ))}

                {/* Country pins */}
                {COUNTRIES.map((c) => {
                  const cx = projX(c.lon);
                  const cy = projY(c.lat);
                  const isHover = hovered === c.code;
                  return (
                    <g
                      key={c.code}
                      onMouseEnter={() => setHovered(c.code)}
                      onMouseLeave={() => setHovered(null)}
                      className="cursor-pointer"
                    >
                      {isHover && (
                        <circle
                          cx={cx}
                          cy={cy}
                          r="22"
                          fill="hsl(var(--foreground) / 0.12)"
                        />
                      )}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isHover ? 9 : 7}
                        fill="hsl(var(--foreground))"
                        stroke="hsl(var(--shroom-cream))"
                        strokeWidth="2.5"
                        className="transition-all"
                      />
                      <text
                        x={cx}
                        y={cy - 14}
                        textAnchor="middle"
                        style={{
                          fontFamily: "Archivo, sans-serif",
                          fontWeight: 700,
                          fontSize: 13,
                          letterSpacing: "0.04em",
                        }}
                        fill="hsl(var(--foreground))"
                      >
                        {c.name.toUpperCase()}
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
