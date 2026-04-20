

# Plan: Frontend-only conversion improvements (PDP + checkout prep)

Skupiamy się **wyłącznie na frontendzie**. Wszystko co wymaga backendu (realny koszyk, płatności, persystencja subskrypcji, prawdziwy stock, prawdziwy social proof) zostawiamy jako **stub UI + dokumentację handoff** dla osoby technicznej.

## Zasada: frontend-first, backend-ready

Każdy nowy element interaktywny:
- Działa wizualnie i stanowo (React state, toast, localStorage gdzie sensowne)
- Ma jasno oznaczone miejsce w kodzie z komentarzem `// TODO(backend): ...` opisującym co podpiąć
- Zwraca strukturę danych gotową do wysłania do API (np. `{ productId, variant, quantity, isSubscription, cadenceWeeks }`)

## Co budujemy (Faza 1 — MVP konwersyjny)

### 1. Fix shipping threshold — `src/data/products.ts` + `TrustBar.tsx`
Zmiana komunikatu i logiki progu z 99 → **89 zł** (= 1 szt = darmowa dostawa). Czysto frontendowa zmiana copy + stałej.

### 2. Subscription toggle w `ProductHero.tsx`
Nowy komponent `SubscriptionToggle.tsx` — radio "Jednorazowo" vs "Subskrypcja −15% co 4 tyg", **pre-selected: Subskrypcja**. Aktualizuje wyświetlaną cenę i tekst CTA. Stan trzymany lokalnie w `ProductHero`. Wybór trafia do payloadu ATC (stub).

### 3. Quick Facts strip — `QuickFacts.tsx`
Pasek 4 ikon pod tytułem produktu w `ProductHero`: Smak / Pora dnia / Format 330ml / Wysyłka 24h. Dane z `products.ts` (dodajemy pole `quickFacts`).

### 4. Shipping countdown — `ShippingDeadline.tsx`
Komponent client-side liczący do dziennego cutoffu (np. 14:00) — "Zamów w ciągu 2h 14min, wysyłka dziś". Czysty `setInterval` + `Date`. Bez backendu.

### 5. Frequently Bought Together — `FrequentlyBoughtTogether.tsx`
Widget pod ATC w `ProductHero` (tylko Power i Relax) — checkbox "Dodaj drugi produkt z duetu, oszczędź 9 zł". Aktualizuje cenę i payload ATC.

### 6. Payment badges — `PaymentBadges.tsx`
Statyczny rząd ikon (Visa/MC/BLIK/Apple Pay) pod ATC. Czysto wizualne — komunikat zaufania.

### 7. StickyCTA przepisany na kontekstowy
`StickyCTA.tsx` — gdy user jest na `/produkt/:slug`, pokazuje aktualnie wybrany produkt + cenę (z stanu PDP via context lub `useLocation` + props). Klik = toast "Dodano do koszyka" + komentarz `// TODO(backend): POST /api/cart`.

## Faza 2 — UX/architektura PDP (też frontend)

### 8. Reorder sekcji w `ProductPage.tsx`
Hero → QuickFacts (już w Hero) → Benefits → **CrossSell duet** → Reviews → Ingredients → Routine → FAQ. Reviews wyżej dla validation.

### 9. Recent purchases ticker — `RecentPurchases.tsx` (opcjonalnie)
Mały dismissible toast w prawym dolnym rogu z **mockowanymi** danymi z tablicy ("Anna z Warszawy kupiła Power 2 min temu"). Komentarz `// TODO(backend): zastąp realnym feedem z API`.

## Co zostawiamy dla backendu (handoff)

Tworzymy `BACKEND_HANDOFF.md` w roocie z listą:
- **Cart API** — endpoint dodawania, struktura payloadu (z subscription/bundle flagami)
- **Subscription system** — Stripe/Recharge integration, cadence options
- **Real stock** — endpoint z dostępnością wariantów
- **Social proof feed** — endpoint /api/recent-purchases (z anonimizacją)
- **Shipping cutoff config** — godzina cutoff jako env var, nie hardcode
- **Checkout flow** — Shopify/Stripe Checkout integration

## Pliki

**Nowe (frontend):**
- `src/components/product/SubscriptionToggle.tsx`
- `src/components/product/QuickFacts.tsx`
- `src/components/product/ShippingDeadline.tsx`
- `src/components/product/FrequentlyBoughtTogether.tsx`
- `src/components/product/PaymentBadges.tsx`
- `src/components/RecentPurchases.tsx` (opcjonalnie)
- `BACKEND_HANDOFF.md` (dokumentacja dla osoby technicznej)

**Edytowane:**
- `src/data/products.ts` — próg 89 zł, pole `quickFacts`, `subscriptionDiscount`, `bundleWith`
- `src/components/product/ProductHero.tsx` — integracja 4 nowych komponentów
- `src/components/StickyCTA.tsx` — kontekstowość per-PDP + toast
- `src/components/TrustBar.tsx` — update copy
- `src/pages/ProductPage.tsx` — kolejność sekcji

## Czego nie robimy

- Realny koszyk / checkout (backend)
- Realna persystencja subskrypcji (backend)
- Realny stock / sold-out states (backend)
- Realny social proof feed (backend)
- Analytics events (wymaga konfiguracji GA4/Pixel — osobna decyzja)

## Co zapiszemy do memory

`mem://conversion/pdp-frontend-conversion-rules` — zasady: subskrypcja pre-selected, próg 89 zł, Quick Facts pod tytułem, shipping cutoff 14:00, każdy ATC ma payload-ready strukturę z komentarzem TODO(backend).

