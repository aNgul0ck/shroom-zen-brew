
## Analiza briefa

Brief od Agi + prompt Claude jest spójny i kompletny. Pokrywa się z notatkami z calla (PDF: Antoni odpowiada za technikę, Michalina dorzuci stylizację, sales@shroom4you.com jako single point of contact, kanał IG dla influencerów).

**Drobne rozbieżności prompt vs brief.md** — w głównej części briefa jest więcej szczegółów niż w skróconym prompcie na końcu. Pójdę po pełnej wersji:
- Merynos: Praga Południe, Truskawa, **Vintage Collective** (prompt pomija ostatnie)
- Dania ma podpis dystrybutora: **Real Drinks**
- Węgry: kawiarnia specialty (via Coffee Desk)
- Trójmiasto **pending → nie pokazujemy** (zgodnie z briefem)
- Farutex: regiony "do uzupełnienia" — placeholder
- Influencerzy → IG `@shroom.drink` (taki jest faktyczny handle w Footerze, nie `@shroomdrink` z prompta)

**Świadome odstępstwo od prompta — design**

Prompt podaje paletę "ciemna #1C0A12 / złota #B8742A / kremowa #FAF7F2". To NIE jest paleta z istniejącego design systemu shroom (cream / peach / sage / coral, Afronaut + Switzer + Inter, sharp edges, czarne diviery). Brief w pkt. 139–145 mówi wyraźnie: "Proporcje i rozmieszczenie sekcji trzymać spójne z homepage i stroną produktową, designerski nie korporacyjny, inspiracja Hype/Oatly". → trzymam editorial design system shroom (zgodny z core memory), nie wprowadzam nowej palety. Michalina i tak dorzuci finalną stylizację.

## Co buduję

Nowa podstrona `/b2b` (route w `App.tsx`), wpięta jako `B2B` w `Header.tsx` (już jest link, tylko podmienię `#` na `/b2b`).

### Sekcje (kolejność z briefa)

1. **B2bHero** — H1 do partnerów (np. „Zostań partnerem Shrooma"), 1–2 zdania podtytułu, jeden CTA `mailto:sales@shroom4you.com`. Editorial layout, lifestyle/produktowe tło z istniejących assetów.
2. **B2bDistributors** — 4 grupy (HoReCa PL, Sklepy/Hurtownia PL, B2B/biura PL, Zagranica). Karty editorial (sharp edges, cream/peach bloki), nazwy + obszar/regiony. Trójmiasto i nieoficjalne pomijam.
3. **B2bMap** — mapa Europy (slot na SVG od Agi). Tymczasowo: prosty SVG outline Europy z highlightowanymi krajami: PL, CZ, DE, FR, IS, DK, HU. Komponent przyjmie później finalny asset bez zmiany layoutu.
4. **B2bSocialProof** — „Zaufali nam" — 4 logo placeholdery (Żabka, Organik, Frisco, Coffee Desk) jako neutralne ramki z nazwą, gotowe do podmiany na PNG/SVG.
5. **B2bOffers** — 6 kart (Dystrybucja, Zamówienie do lokalu, Event/pop-up, Bar bezalkoholowy, Warsztaty, Personalizowane etykiety). Każda: ikona Lucide, tytuł, 1 zdanie, CTA `mailto:sales@shroom4you.com?subject=...` z dopasowanym tematem.
6. **B2bCollab** — 2 bloki side-by-side (desktop) / stack (mobile):
   - **Influencerzy/UGC** → CTA „Napisz na Instagramie" → `https://instagram.com/shroom.drink`
   - **Media Pack** → CTA „Pobierz Media Pack" → `href="#"` placeholder + komentarz TODO

Stopka i Header reused.

### Routing i nawigacja

- `App.tsx`: dodanie `<Route path="/b2b" element={<B2bPage />} />`
- `Header.tsx`: link „B2B" zmiana z `href: "#"` na `href: "/b2b"` (Link, nie `<a>`)

### Czego nie robię (zgodnie z briefem)

- Brak formularza kontaktowego — tylko `mailto:`
- Brak listy kawiarni / lokali
- Brak logowania, portalu B2B, integracji z WooCommerce (to robi Jorgos po stronie WP)
- Nie ruszam homepage'a ani PDP

## Pliki

**Nowe:**
- `src/pages/B2bPage.tsx`
- `src/components/b2b/B2bHero.tsx`
- `src/components/b2b/B2bDistributors.tsx`
- `src/components/b2b/B2bMap.tsx` (z prostym tymczasowym SVG Europy)
- `src/components/b2b/B2bSocialProof.tsx`
- `src/components/b2b/B2bOffers.tsx`
- `src/components/b2b/B2bCollab.tsx`
- `src/data/b2b.ts` (dystrybutorzy, oferty, kraje — łatwa edycja)

**Edycja:**
- `src/App.tsx` — dodanie route
- `src/components/Header.tsx` — link B2B → `/b2b`

## Otwarte pytania (mogę dowieźć z domyślnymi i poprawić później)

1. Email `sales@shroom4you.com` — w briefie jest „do skonfigurowania" (action item Antka). Wpinam `mailto:` już teraz, działać zacznie po konfiguracji.
2. IG handle: w Footerze jest `@shroom.drink`, w prompcie `@shroomdrink`. Idę po Footer (`shroom.drink`) — daj znać jeśli to ma być inny.
3. Media Pack URL — placeholder `#` z TODO; podmienię gdy Aga dostarczy ZIP / Drive link.
