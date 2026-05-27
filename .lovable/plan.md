# Plan: Pełna integracja angielskiej wersji (PL/EN)

## Cel
Wprowadzić wielojęzyczność opartą o `react-i18next` z polskim jako domyślnym językiem i angielskim jako alternatywą. Routing `/en/*` dla wersji angielskiej, przełącznik w headerze, pełna refaktoryzacja tekstów.

## Zakres techniczny

### 1. Infrastruktura (Etap A — fundament)
- Instalacja: `react-i18next`, `i18next`, `i18next-browser-languagedetector`
- Utworzyć katalog `src/i18n/`:
  - `src/i18n/index.ts` — konfiguracja i18next z dwoma językami
  - `src/i18n/locales/pl.json` — wyekstraktowane teksty PL (na bazie obecnego copy)
  - `src/i18n/locales/en.json` — załadowane z pliku użytkownika (1736 linii)
- Import inicjalizacji w `src/main.tsx`

### 2. Routing językowy
- `BrowserRouter` w `App.tsx` zmodyfikowany: dodać prefix `/en` dla wszystkich tras
- Wrapper component `LanguageRoute` który:
  - Wykrywa prefix `/en` z `useLocation`
  - Wywołuje `i18n.changeLanguage('en' | 'pl')`
- Wszystkie istniejące trasy (`/`, `/produkt/:slug`, `/o-shroomie`, `/b2b`, `/blog`, `/blog/:slug`, `/badania`, `/brief`, `/quiz`, `/cart`) dostają lustrzane angielskie odpowiedniki pod `/en/*`
- Helper `useLocalizedPath(path)` zwracający ścieżkę z prefixem zgodnie z bieżącym językiem — wszystkie `<Link to=...>` przechodzą przez niego
- Aktualizacja meta tagów: `<html lang>`, `hreflang` alternates w `<Helmet>` każdej strony

### 3. Przełącznik PL/EN
- Nowy komponent `src/components/LanguageSwitcher.tsx`:
  - Przyciski "PL" / "EN" w stylu editorial (sharp edges, no rounded)
  - Klik zmienia ścieżkę: `/produkt/x` ↔ `/en/product/x` (lub trzymamy te same slugi — patrz Decyzje poniżej)
  - Wstawiony w `Header.tsx` desktop nav i w menu mobilnym
- Persist wybór w `localStorage` (przez language-detector)

### 4. Refaktoryzacja komponentów (Etap B — najdłuższy)
Każdy komponent z hardkodowanym polskim tekstem zostaje przepisany na `const { t } = useTranslation()` + `t('namespace.key')`.

Plan kolejnościowy (z monitorowaniem builda po każdej fazie):
- **Faza 1 — globalne**: `Header`, `Footer`, `TrustBar`, `StickyCTA`, `Newsletter`, `MarqueeBanner`, `CuriosityPopup`, `ShippingProgressBar`, `CartDrawer`
- **Faza 2 — homepage**: `Hero`, `IntroSection`, `FunctionalDrinks`, `DivaSection`, `BrainBlissSection`, `Benefits`, `IngredientsCarousel`, `HowItWorks`, `DrinkingOccasions`, `DayCycleClock`, `MocktailRecipes`, `ComparisonSection`, `Reviews`, `CreatorReels`, `Subscriptions`, `QuizCTA`, `RecentPurchases`
- **Faza 3 — strony**: `Index`, `AboutPage` + 8 sekcji w `components/about/*`, `B2bPage` + 7 sekcji `components/b2b/*`, `Blog`, `BlogPost`, `Brief`, `Cart`, `NotFound`, `ProductPage`, `QaProgressBar`, `QuizPage`, `Research`
- **Faza 4 — sekcje produktowe**: 14 komponentów w `components/product/*`
- **Faza 5 — dane**: `src/data/about.ts`, `src/data/b2b.ts`, `src/data/products.ts`, `src/data/accessories.ts` — przeniesione do JSON-ów tłumaczeń lub przekształcone w funkcje przyjmujące `t`

### 5. SEO i meta
- `<Helmet>` każdej strony: title, description, keywords, og:* tłumaczone przez `t()`
- `<link rel="alternate" hreflang="pl" href="..." />` i `hreflang="en"` na każdej stronie
- `<html lang={i18n.language}>` ustawiane w `useEffect` w `App.tsx`
- Aktualizacja `index.html` z fallback meta + JSON-LD pozostaje (lokalizacja na poziomie strony)
- Aktualizacja `public/sitemap.xml`: dodać `/en/*` warianty

## Decyzje wymagające potwierdzenia

1. **Slugi w URL**: Czy ścieżki angielskie tłumaczyć (`/en/product/shroom-power`, `/en/about`, `/en/research`) czy zachować polskie (`/en/produkt/shroom-power`, `/en/o-shroomie`)? Tłumaczenie = lepsze SEO ENG, ale dwa razy więcej routingu.
   - **Propozycja**: tłumaczyć (lepsze SEO).

2. **Język domyślny dla nowego użytkownika**: zawsze PL, czy auto-detect z przeglądarki (`navigator.language`)?
   - **Propozycja**: auto-detect, fallback PL.

3. **Waluta**: JSON ma `€`. Aktualnie strona pokazuje PLN (`zł`). Czy w wersji EN wyświetlać € (wymaga konwersji cen — np. inne ceny w `products.ts` per locale) czy zostawić zł?
   - **Propozycja**: dodać `formatPrice(price, locale)` z mapowaniem walutowym (PLN dla PL, EUR dla EN, ze stałym kursem zdefiniowanym w configu — do potwierdzenia kurs).

## Strategia wdrożenia
Z uwagi na rozmiar (≈70 komponentów do refaktoru, 1700+ kluczy), proponuję podzielić na **2 osobne loopy**:
- **Ten loop**: Etap A (infrastruktura, routing, switcher, Faza 1 — globalne + Faza 2 część kluczowa: Hero, FunctionalDrinks, IntroSection). Strona będzie w pełni przełączalna w sekcjach kluczowych dla pierwszego wrażenia.
- **Kolejny loop**: pozostałe fazy (2-5), SEO, sitemap.

## Pytania do Ciebie
1. Tłumaczone slugi w `/en/*`? (rekomendacja: tak)
2. Auto-detect języka czy zawsze PL na start? (rekomendacja: auto-detect)
3. EUR czy PLN w wersji EN? Jeśli EUR — jaki kurs konwersji? (np. 4.30)
4. Czy OK, że dziś dowieziemy infrastrukturę + przełącznik + ~15 komponentów, a resztę w kolejnym kroku?
