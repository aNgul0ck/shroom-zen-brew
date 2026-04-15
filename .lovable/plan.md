

# Color Reset: Neutral Base + Color Accents Only

## Problem
Every section has a loud pastel background (`bg-shroom-gold`, `bg-shroom-green`, `bg-shroom-sky`, `bg-shroom-sage`, `bg-shroom-peach`). It's a rainbow wall. The Shroom bottle label is calm — warm beige with subtle botanical illustrations and color only in small details.

## Philosophy
**Cream/beige canvas** (`bg-background` = `#FCFAF6`) for 90% of the page. Brand colors appear only in:
- Buttons and CTAs
- Badges and tags (small pills)
- Icons
- Product card accents (thin top border or small color dot)
- One or two "hero" accent sections max (e.g. DayCycleClock, QuizCTA)

## Changes by Component

### 1. `FunctionalDrinks.tsx`
- Each card: `bg-background` (cream) with a **thin 3px top border** in the product's brand color instead of full colored bg
- Product color used only on the time badge pill and the top border

### 2. `Reviews.tsx`
- Section bg: `bg-background` instead of `bg-shroom-sky`
- Cards: subtle `border border-foreground/8` on cream, no colored background

### 3. `IngredientsCarousel.tsx`
- Section bg: `bg-background` instead of `bg-shroom-gold`
- Cards: `border border-foreground/8` with a small colored icon dot as the only accent

### 4. `Subscriptions.tsx`
- Section bg: `bg-background` instead of `bg-shroom-sage`
- Cards: cream bg with `border border-foreground/8`
- Badge pills keep their color (Starter=gold, Bestseller=green, Pro=sky) — these are small accents
- Featured card gets a `border-2 border-foreground` to stand out

### 5. `ComparisonSection.tsx`
- Already mostly `bg-background` — keep
- Right panel: `bg-foreground/[0.03]` (very subtle) instead of `bg-shroom-green`

### 6. `QuizCTA.tsx`
- Keep ONE colored section here as a visual break: use `bg-shroom-peach` — it's a CTA, it should pop

### 7. `Newsletter.tsx`
- Left: `bg-background`, right form area: `bg-foreground/[0.03]` (barely tinted)
- Or keep gold but very subtle — a single accent section

### 8. `DayCycleClock` wrapper (Index.tsx)
- Change from `bg-shroom-green` to `bg-background`
- Keep the clock component's internal product colors as-is (they're small accents)

### 9. `MarqueeBanner.tsx`
- Change from `ed-bg-sage` to `bg-foreground` (dark strip) or `bg-foreground/5` (light neutral)

### 10. `Footer.tsx`
- Left panel: `bg-foreground/[0.03]` instead of `bg-shroom-sage`
- Contact bands: all neutral (`bg-foreground/5`, `bg-foreground/8` alternating) — no rainbow
- Keep bottom bar dark (`bg-foreground`)

### 11. Dividers
- Keep `ed-divider-thick` but consider making some thinner (`border-t border-foreground/10`) for breathing room — not every section needs a heavy black line

## Result
A calm, label-like page where the eye isn't overwhelmed. Color pops on buttons, badges, and 1-2 accent sections (QuizCTA, maybe Newsletter). Everything else breathes on warm cream.

## Files to Edit
| File | Change |
|---|---|
| `src/pages/Index.tsx` | DayCycleClock wrapper bg, some dividers thinned |
| `src/components/FunctionalDrinks.tsx` | Cards: cream + colored top border |
| `src/components/Reviews.tsx` | Neutral bg + bordered cards |
| `src/components/IngredientsCarousel.tsx` | Neutral bg + bordered cards |
| `src/components/Subscriptions.tsx` | Neutral bg + bordered cards, featured border |
| `src/components/ComparisonSection.tsx` | Right panel neutral |
| `src/components/QuizCTA.tsx` | Keep peach (accent section) |
| `src/components/Newsletter.tsx` | Mostly neutral, subtle accent |
| `src/components/MarqueeBanner.tsx` | Neutral or dark strip |
| `src/components/Footer.tsx` | Neutral bands |

