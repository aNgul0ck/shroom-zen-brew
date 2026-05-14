/**
 * Mapa Europy z zaznaczonymi krajami obecności Shrooma.
 * Używa react-simple-maps + topojson world-atlas (filtrowane do Europy).
 */

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

type Country = {
  code: string; // ISO A2
  iso3: string; // ISO A3 (matches topojson properties)
  name: string;
  coordinates: [number, number]; // [lon, lat]
};

const COUNTRIES: Country[] = [
  { code: "IS", iso3: "ISL", name: "Islandia", coordinates: [-19.0, 64.9] },
  { code: "FR", iso3: "FRA", name: "Francja", coordinates: [2.35, 47.0] },
  { code: "DE", iso3: "DEU", name: "Niemcy", coordinates: [10.45, 51.2] },
  { code: "DK", iso3: "DNK", name: "Dania", coordinates: [9.5, 56.0] },
  { code: "PL", iso3: "POL", name: "Polska", coordinates: [19.5, 52.0] },
  { code: "CZ", iso3: "CZE", name: "Czechy", coordinates: [15.5, 49.8] },
  { code: "HU", iso3: "HUN", name: "Węgry", coordinates: [19.5, 47.2] },
];

const ACTIVE_ISO3 = new Set(COUNTRIES.map((c) => c.iso3));

// World countries topojson (110m)
const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

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
                  onMouseEnter={() => setHovered(c.iso3)}
                  onMouseLeave={() => setHovered(null)}
                  className={`flex items-center gap-3 font-display font-bold text-foreground transition-opacity cursor-default ${
                    hovered && hovered !== c.iso3 ? "opacity-40" : "opacity-100"
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
              <ComposableMap
                projection="geoAzimuthalEqualArea"
                projectionConfig={{
                  rotate: [-10, -52, 0],
                  scale: 800,
                }}
                width={800}
                height={620}
                style={{ width: "100%", height: "auto" }}
              >
                <Geographies geography={GEO_URL}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const iso3 = geo.id as string;
                      const isActive = ACTIVE_ISO3.has(iso3);
                      const isHover = hovered === iso3;
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          onMouseEnter={() => isActive && setHovered(iso3)}
                          onMouseLeave={() => setHovered(null)}
                          style={{
                            default: {
                              fill: isActive
                                ? "hsl(var(--foreground) / 0.85)"
                                : "hsl(var(--foreground) / 0.06)",
                              stroke: "hsl(var(--foreground))",
                              strokeWidth: 0.5,
                              outline: "none",
                            },
                            hover: {
                              fill: isActive
                                ? "hsl(var(--foreground))"
                                : "hsl(var(--foreground) / 0.06)",
                              stroke: "hsl(var(--foreground))",
                              strokeWidth: 0.5,
                              outline: "none",
                              cursor: isActive ? "pointer" : "default",
                            },
                            pressed: { outline: "none" },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>

                {COUNTRIES.map((c) => {
                  const isHover = hovered === c.iso3;
                  return (
                    <Marker
                      key={c.code}
                      coordinates={c.coordinates}
                      onMouseEnter={() => setHovered(c.iso3)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <circle
                        r={isHover ? 7 : 5}
                        fill="hsl(var(--shroom-cream))"
                        stroke="hsl(var(--foreground))"
                        strokeWidth={2}
                      />
                      <text
                        textAnchor="middle"
                        y={-12}
                        style={{
                          fontFamily: "Archivo, sans-serif",
                          fontWeight: 700,
                          fontSize: 11,
                          letterSpacing: "0.06em",
                          fill: "hsl(var(--foreground))",
                          paintOrder: "stroke",
                          stroke: "hsl(var(--shroom-cream))",
                          strokeWidth: 3,
                        }}
                      >
                        {c.name.toUpperCase()}
                      </text>
                    </Marker>
                  );
                })}
              </ComposableMap>
            </div>
            <p className="font-body text-xs text-foreground/45 mt-4 italic">
              Dane geograficzne: world-atlas (Natural Earth).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2bMap;
