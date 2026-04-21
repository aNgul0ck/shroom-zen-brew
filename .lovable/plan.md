

# Plan: Aktualizacja cen, wariantów i progu darmowej dostawy (frontend)

Na podstawie briefu PDF (analiza 559 transakcji Stripe, AOV 172 zł, 40% przychodu z subskrypcji) i danych z `unified_payments.csv`. Robimy **wyłącznie frontend** — żadnych zmian w backendzie/Woo.

## 1. Dlaczego to zmieniamy

Obecnie SKU jest skonfigurowane jako 1/3/6 butelek po 89/79/69 zł (1 szt = 89 zł). Realne dane Stripe pokazują, że klient kupuje **packi po 6 sztuk** (1×6 = 79 zł, 2×6 = 158 zł, 3×6 = 237 zł, 4×6 = 316 zł). Próg darmowej dostawy 89 zł jest fikcją — w rzeczywistości próg w Woo to 300 zł i żaden z trzech głównych wariantów go nie spełnia. Brief rekomenduje **próg 200 zł** — wtedy 12 szt (158 zł) jest „prawie tam" (upsell o 42 zł), a 18 szt (237 zł) automatycznie odblokowuje darmową dostawę.

## 2. Zmiany w `src/data/products.ts`

**Próg dostawy:**
```
FREE_SHIPPING_THRESHOLD: 89 → 200
```

**Nowe warianty cenowe (Shroom Power / Shroom Relax):**

| Label | Butelki | Cena/szt | Total | Savings |
|---|---|---|---|---|
| 1 pack | 6 | 13,17 zł | **79 zł** | — |
| 2 packi | 12 | 13,17 zł | **158 zł** | — |
| 3 packi | 18 | 13,17 zł | **237 zł** | DARMOWA DOSTAWA |
| 4 packi | 24 | 13,17 zł | **316 zł** | DARMOWA DOSTAWA |

`label` na PDP: „1 pack (6 szt.)", „2 packi (12 szt.)", „3 packi (18 szt.)", „4 packi (24 szt.)". Domyślnie zaznaczony 2 packi (mediana zamówień, naturalny upsell do 3 packów).

**Diva** (500 ml, single bottle): warianty 1 / 3 / 6 butelek po 99 / 89 / 79 zł (Total 99 / 267 / 474 zł). Diva sprzedaje się jako pojedyncze butelki, nie packi.

**BrainBliss** (kapsułki): bez zmian poza synchronizacją z nowym progiem (89 zł nadal poniżej 200 zł — info o brakującej kwocie do dostawy).

**Bundle partner price:** podbicie z 89 zł → 79 zł (1 pack Relax/Power), zniżka bundle -9 zł zostaje.

**Copy fix:** wszystkie wystąpienia „Darmowa dostawa od 89 zł" → „Darmowa dostawa od 200 zł" (FAQ × 3, `trustBadges` × 3, `TrustBar.tsx`, komentarz w `products.ts`).

## 3. Progress bar — refactor i nowe stany

Obecnie progress bar żyje w 4 miejscach (`ProductHero`, `StickyCTA`, `CartDrawer`, `Cart`). Wprowadzamy **wspólny komponent** `src/components/ShippingProgressBar.tsx` używany wszędzie.

**Props:**
```
{ amount: number; variant: "compact" | "default" | "sticky"; isDiva?: boolean }
```

**Stany copy (wg briefu, sekcja 6):**
- `0 zł`: „Zamów za 200 zł i skorzystaj z darmowej dostawy"
- `1–99 zł`: „Jeszcze {X} zł do darmowej dostawy"
- `100–199 zł`: „Prawie! Brakuje tylko {X} zł do darmowej dostawy"
- `≥200 zł`: „✓ Masz darmową dostawę! Wysyłka gratis."

**Wizualnie:**
- Wysokość paska: 6 px (default), 4 px (sticky mobile), 8 px (cart page).
- Kolor wypełnienia: `bg-shroom-gold` w trakcie, `bg-shroom-green-dark` po przekroczeniu.
- Animacja: `transition-all duration-300 ease-out` (smooth fill).
- Trzy progi wizualne: gradient sekcji bara (33% / 66% / 100%) z subtelnymi delimiterami — pokazują „droga do celu".

**Lokalizacje** (zgodnie z priorytetami briefu):
1. `ProductHero` — pod ceną/CTA, wariant `default`
2. `CartDrawer` — wariant `default`, na górze listy
3. `Cart.tsx` — wariant `default`, nad listą pozycji
4. `StickyCTA` (mobile) — wariant `sticky` (cienki pasek)

## 4. Aktualizacja `FunctionalDrinks.tsx` (homepage grid)

- Power/Relax: cena z „79 zł" zostaje (1 pack), ale link prowadzi do PDP gdzie domyślnie zaznaczone są 2 packi.
- Diva: 99 zł (1 butelka, było 112 zł).
- BrainBliss: 89 zł (było 47 zł — to było błędne, brief od osoby technicznej tu nie sprzeczy).
- Duo CTA: „Kup duet — 149 zł" → **„Kup duet — 158 zł"** (1 pack Power + 1 pack Relax = 158 zł, dokładnie próg „prawie darmowa dostawa", stymuluje upsell).

## 5. Aktualizacja `ProductHero.tsx`

- Bundle partner price: 89 → 79 zł (1 pack).
- Domyślny `selectedTier`: `0` → `1` (2 packi pre-selected zamiast 1 pack — najczęstszy zakup).
- Pole `bundlePartnerPrice` korzysta z 79 zł.
- Linijka „Dodaj X zł do darmowej dostawy" zastąpiona nowym komponentem `ShippingProgressBar`.
- Strikethrough cena uwzględnia 79 zł bundle partner zamiast 89 zł.

## 6. Aktualizacja `StickyCTA.tsx` (mobile PDP)

- Wymienić ręczny progress na `ShippingProgressBar variant="sticky"`.
- Homepage variant: cena „79 zł" zostaje, ale CTA „Zamów" prowadzi do PDP z domyślnie zaznaczonym 2 pack.

## 7. Aktualizacja `CartDrawer.tsx` i `pages/Cart.tsx`

- Wymienić ręczny progress na `ShippingProgressBar variant="default"`.
- Cart page: w podsumowaniu usunąć stałą opłatę „12 zł" jeśli `subtotal ≥ 200`, inaczej 12 zł dostawy.

## 8. Memory update

Aktualizujemy `mem://conversion/pdp-frontend-conversion-rules`:
- Nowy próg darmowej dostawy: **200 zł**.
- Warianty Power/Relax: 1/2/3/4 packi (6/12/18/24 szt) po 79/158/237/316 zł.
- Domyślny wariant pre-selected: **2 packi (158 zł)** + subskrypcja.
- Bundle partner: 1 pack za 79 zł, -9 zł rabat duet.
- ShippingProgressBar to single source of truth dla 4 stanów copy.

## 9. Czego NIE robimy

- Backend / Woo settings (Jorgos zmienia próg w panelu osobno).
- Realnego stocku, sold-out, payment integracji.
- Zmiany domyślnej długości subskrypcji (zostaje 4 tyg).
- Stripe pixel/analytics.

## 10. QA checklist (po wdrożeniu)

- `/produkt/shroom-power` desktop: domyślnie 2 packi + sub = ~134 zł; widać „brakuje 66 zł" (ze sub) lub „brakuje 42 zł" (bez sub).
- 3 packi: progress bar zielony, „Masz darmową dostawę".
- Drawer: dodanie 2 packi → bar 79% wypełniony, dodanie kolejnego → 100% zielony.
- Mobile StickyCTA: cienki pasek odpowiada totalowi PDP.
- Homepage `FunctionalDrinks`: nowe ceny zgadzają się z PDP po kliknięciu.
- TrustBar marquee: „Darmowa dostawa od 200 zł".

