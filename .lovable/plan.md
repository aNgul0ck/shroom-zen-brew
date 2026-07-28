Stworzymy dokument briefu w formacie .docx, który opisuje filozofię projektowania strony Shroom jako zestaw uniwersalnych wzorców do zastosowania w nowym, czysto informacyjnym projekcie (fundacja). Dokument będzie skierowany do zespołu/projektanta, z akcentem na UX/CRO, ale uwzględni też design system, architekturę informacji i strategię contentową.

## Zakres dokumentu

Sekcje briefu:

1. **Wprowadzenie i kontekst**
   - Cel dokumentu: przeniesienie sposobu rozumowania, nie literalnego layoutu.
   - Krótki opis Shroom jako case study (e-commerce funkcjonalnych napojów, editorial design, wielojęzyczność, mobile-first CRO).

2. **Warstwa 1: Strategia narracyjna i hierarchia przekazu**
   - Zasada: storytelling > długie bloki tekstu.
   - Hierarchia: dream outcome (hero) → oferta (produkty) → walidacja (opinie/badania) → szczegóły (skład, FAQ) → konwersja (CTA/subskrypcja).
   - Voice & tone: bezpośredni, edgier, ale zgodny z compliance (dla fundacji: zastąpić odpowiednim tonem).
   - Wielowarstwowość: jedna sekcja = jeden argument, a każdy argument ma warstwę wizualną, tekstową i emocjonalną.

3. **Warstwa 2: Struktura strony i UX/CRO (główny akcent)**
   - Homepage jako lejek: hero z social proof/award, sekcja oferty, walidacja, edukacja, konwersja powtarzana.
   - Mobile-first: zamiast jeden pod drugim — siatki 2-kolumnowe, karuzele snap-scroll, wizualne wyróżniki.
   - PDP (Product Detail Page): reordered sections per Thorium framework — Benefits → Cross-sell → Reviews → Ingredients → Routine → FAQ → Upsells.
   - Sticky CTA, TrustBar, Recent Purchases jako wzorce budowania trustu i redukcji tarcia.
   - Zasada: każda sekcja musi mieć jedno, mierzalne zadanie użytkownika.

4. **Warstwa 3: Design system jako język znaczników**
   - Editorial design: flat saturated colors, sharp edges (no rounded corners), thick black dividers.
   - Typografia: 3 rodziny (Afronaut dla h1/h2, Archivo/Switzer dla nadpisów, Inter dla body).
   - Brak scroll-reveal animations: stała widoczność ze względu na stabilność i accessibility.
   - Design tokens: kolory brandowe, spacing, border-t jako accent — zastosowanie uniwersalne w fundacji: zdefiniować własne tokeny, ale zachować zasadę spójnego systemu znaczników.

5. **Warstwa 4: Architektura informacji i techniczna elastyczność**
   - Data-driven components: treść w JSON/data files, UI oddzielone od copy.
   - i18n: URL-based language detection (`/en/*`), bidirectional slug map, localStorage persistence.
   - Backend-ready stubs: Zustand cart, TODO(backend) comments, frontend-first approach umożliwiający późniejszą wymianę API bez zmiany UI.
   - Dla fundacji: rekomendacja data-driven content + jasne slugi URL, nawet bez wielojęzyczności.

6. **Case study: konkretne decyzje projektowe**
   - Hero: left-aligned dream outcome, lifestyle background, gradient overlay, award badge + testimonial.
   - FunctionalDrinks: hero cards (Power/Relax) obok siebie na mobile, secondary products jako snap-scroller.
   - About page: timeline jako storytelling, manifesto jako wartości, planet jako sustainability.
   - CreatorReels: infinite center-focused carousel, lekka sekcja wizualna, autoplay video.
   - Cart: Zustand store, bundle line items, persistent state, shipping progress bar.
   - i18n routes: mirror routes + `useLocalizedPath` + `slugMap`.

7. **Wytyczne transferowe dla projektu informacyjnego/fundacji**
   - Zdefiniuj 1-2 główne przekazy strony głównej.
   - Każda sekcja ma mieć jedno zadanie (np. zrozum problem → zobacz rozwiązanie → zobacz dowód → weź działanie).
   - Użyj 3-5 design tokens (kolory, typografia, spacing) i trzymaj się ich konsekwentnie.
   - Mobile-first: na małym ekranie nie wszystko musi być pionowym stosem — użyj siatek i karuzeli.
   - Content jako data: trzymaj teksty w strukturalnych plikach, nie w komponentach.
   - Accessibility: unikaj animacji zależnych od scrolla; upewnij się, że CTA są zawsze widoczne.

## Techniczne wykonanie

- Użyję `docx` (Node.js) do wygenerowania pliku `.docx`.
- Dokument zostanie zapisany w `/mnt/documents/` jako `shroom-design-philosophy-brief.docx`.
- Po wygenerowaniu: walidacja XML, konwersja do PDF przez LibreOffice, wygenerowanie podglądowych JPEGów (`pdftoppm`) i wizualna weryfikacja każdej strony pod kątem błędów layoutu.
- Finalnie w odpowiedzi przedstawię `<presentation-artifact>` z linkiem do pobrania.

## Wykluczone

- Nie będziemy modyfikować kodu strony Shroom.
- Nie będziemy tworzyć nowych komponentów ani funkcjonalności dla fundacji — dokument ma charakter wyłącznie koncepcyjny/briefowy.