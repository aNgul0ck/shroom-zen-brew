# Popup ciekawostka: Aronia vs Acai

## Cel
Edukacyjny, lekko grywalny widget na stronie głównej, który komunikuje przewagę aronii (lokalny superfood, używany w Relax i Diva) nad popularną acai. Zwiększa zaufanie do składu i podkreśla lokalność.

## UX — dwa stany

**1. Stan zwinięty (mała "pigułka")**
- Pozycja: fixed, lewy dolny róg, nad obszarem StickyCTA (np. `bottom: 96px` na mobile, `bottom: 24px` na desktopie po lewej), z-index niższy niż CartDrawer i StickyCTA.
- Wygląd: małe okrągłe/owalne okienko w stylu editorial (kremowe tło `#FAF7F2`, cienki czarny border, sharp edges zgodnie z DS — bez rounded). Ikona małej żarówki / iskry + tekst:
  - „Czy wiesz? Aronia > Acai"
- Subtelna animacja wejścia po ~6s scrollu (jednorazowo per sesja, `sessionStorage`).
- Krzyżyk do zamknięcia (zapamiętujemy w `sessionStorage`, żeby nie wracał).
- Hover: lekkie podniesienie / podkreślenie.

**2. Stan rozwinięty (modal/dialog)**
- Klik w pigułkę otwiera modal (shadcn `Dialog`) — szerokość ~720px desktop, full-width mobile.
- Tło kremowe, akcent czarny, akcent brand `#B8742A`.
- Zawartość:
  - Eyebrow: "CIEKAWOSTKA"
  - H2 (Cormorant italic): „Potęga antyoksydacyjna: Aronia > Acai"
  - Krótki lead: lokalny superfood, którego używamy w **Relax** i **Diva**, ma wyższy wskaźnik ORAC niż egzotyczne acai.
  - **Wykres porównawczy ORAC** — dwa poziome paski (CSS, bez biblioteki):
    - Acai: ~102 700 µmol TE/100 g
    - Aronia: ~160 600 µmol TE/100 g (~+56%) — pasek w kolorze brand, z animacją wjazdu szerokości.
  - Mini tabela 2-kolumnowa (Acai vs Aronia): Pochodzenie, Profil smaku, Główny atut, Antocyjany/rutyna, Witamina C.
  - Sekcja „Gdzie ją znajdziesz" — dwa małe kafelki produktów (Relax, Diva) z miniaturką i CTA „Zobacz produkt" (linki do `/produkt/shroom-relax` i `/produkt/diva`).
  - Stopka: „Lokalnie. Lepiej. Bez 8 000 km transportu." + przypis o ORAC.

## Komponenty / pliki

**Nowe:**
- `src/components/CuriosityPopup.tsx` — zawiera oba stany (pigułka + Dialog), własna logika `sessionStorage` (`shroom_curiosity_seen`, `shroom_curiosity_dismissed`).
- (opcjonalnie) `src/components/curiosity/OracBarChart.tsx` — wydzielony wykres jeśli rozrośnie się logika.

**Edytowane:**
- `src/App.tsx` — montujemy `<CuriosityPopup />` raz, obok `<CartDrawer />`, żeby pojawiało się globalnie (lub tylko na `/` — patrz pytanie poniżej).

## Szczegóły techniczne
- Użyć `Dialog` z `@/components/ui/dialog` (już w projekcie).
- Wykres: dwa `<div>` z `style={{ width: '64%' }}` / `100%` + `transition: width 800ms ease-out`, animacja triggerowana po otwarciu modalu (useEffect + small setTimeout dla efektu).
- Brak nowych zależności.
- Sharp edges, brak `rounded-*` (zgodnie z core memory).
- Typografia: Cormorant Garamond italic dla H2, Inter dla body — spójne z `ComparisonSection`.
- Brak `whileInView` (zgodnie z constraint memory) — animacje tylko na mount/state change.
- A11y: `aria-label` na pigułce, focus trap z Radix Dialog automatycznie, Escape zamyka.

## Logika widoczności
- Pojawia się raz na sesję po 6s.
- Zamknięcie krzyżykiem = ukryte do końca sesji.
- Kliknięcie i zamknięcie modalu = pigułka zostaje, ale bez auto-otwierania.

## Dane (do umieszczenia w pliku komponentu)
```
ORAC: Acai 102 700, Aronia 160 600 µmol TE/100g
Aronia: antocyjany + rutyna, wit. C/B/E/PP, miedź, żelazo, jod
Lokalna (PL) vs importowana (Amazonia)
Produkty: Shroom Relax, Diva
```

## Pytanie otwarte (decyzja przed implementacją)
Czy popup ma być widoczny:
- (a) tylko na stronie głównej `/`, czy
- (b) na wszystkich podstronach (poza `/quiz` i `/koszyk`)?

Domyślnie zaproponuję **(b) z wykluczeniem quiz/koszyk/checkout**, ale potwierdź jeśli wolisz (a).
