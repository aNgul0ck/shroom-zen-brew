

# Apply Editorial Design System to Homepage Sections

Reviews already uses `ed-bg-sky` + `ed-overlay-card`. Now apply the system to 5 more sections, alternating gradients for visual rhythm.

## Changes by Section

### 1. DayCycleClock wrapper (Index.tsx, lines 37-49)
- Replace `bg-background` with `ed-bg-mint ed-section`
- Use `ed-heading` class on the "Kiedy pić?" heading

### 2. IngredientsCarousel.tsx
- Replace `bg-secondary/30` with `ed-bg-gold`
- Replace ingredient cards from `bg-card rounded-2xl border border-border` to `ed-overlay-card`
- Remove icon background circles -- use plain icons (minimal decoration principle)

### 3. ComparisonSection.tsx
- Replace `bg-shroom-blush/30` with `ed-bg-sage`
- Replace chart card `bg-card rounded-3xl shadow-soft` with `ed-overlay-card rounded-2xl`
- Replace stat cards (`bg-card rounded-2xl shadow-soft border-l-4`) with `ed-overlay-card` styling

### 4. QuizCTA.tsx
- Replace `bg-accent/10` with `ed-bg-sky`
- Add `ed-section` for consistent padding
- Use `ed-heading` on the heading

### 5. Newsletter.tsx
- Replace `bg-shroom-peach` with `ed-bg-gold`
- Replace icon circle and benefit pill with `ed-overlay-card` styled elements

## Gradient Flow (top to bottom)
```text
Hero          → (none - hero gradient)
TrustBar      → dark strip
MarqueeBanner → (neutral)
FunctionalDrinks → bg-background (neutral break)
DayCycleClock → ed-bg-mint  (green)
Reviews       → ed-bg-sky   (blue) ✓ done
Comparison    → ed-bg-sage  (sage)
Ingredients   → ed-bg-gold  (gold)
Subscriptions → bg-background (neutral break)
QuizCTA       → ed-bg-sky   (blue)
Newsletter    → ed-bg-gold  (gold)
```

No two adjacent sections share the same gradient. Neutral breaks at FunctionalDrinks and Subscriptions keep rhythm.

## Files to Edit
| File | Changes |
|---|---|
| `src/pages/Index.tsx` | DayCycleClock wrapper classes |
| `src/components/IngredientsCarousel.tsx` | Background + card classes |
| `src/components/ComparisonSection.tsx` | Background + card classes |
| `src/components/QuizCTA.tsx` | Background class |
| `src/components/Newsletter.tsx` | Background class |

