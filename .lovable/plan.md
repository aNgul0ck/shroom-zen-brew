

# Shroom Editorial Design System

## Analysis of the Style

From the 6 screenshots I can identify these consistent traits:

1. **Analog gradients**: Soft, pastel, single-hue gradients that fade from saturated to near-white. Each slide uses ONE color family (sky-blue, mint-green, gold-yellow). The gradient feels like a washed-out film photograph -- never sharp digital transitions.

2. **Two-panel / split layouts**: Content is often split 50/50 horizontally, with each half having its own gradient tone (e.g. the "Problem" slide: left panel sky-blue, right panel lighter sky).

3. **Horizontal banding**: Rows of content separated by subtle gradient strips (the stats slide, the contact slide). Each band is a slightly different opacity/shade of the same hue.

4. **Oversized typography**: Huge stat numbers (52%, 60%, €8-10B+) in bold black on pastel backgrounds. Massive contrast between type weight and soft background.

5. **Cream/off-white base**: The page background is always warm cream (#FCFAF6), never pure white.

6. **Minimal decoration**: No borders, no shadows, no icons. Content speaks through typography + color blocks only.

7. **Photo + card overlay**: Reviews slide shows a lifestyle photo as full background with semi-transparent card overlays.

## What to Build

Create a `src/styles/editorial.css` stylesheet with reusable utility classes, and extend the existing CSS variables in `src/index.css` with the editorial gradient system. Also add Tailwind config entries.

### 1. Editorial Gradient CSS Variables (in `src/index.css` `:root`)

Add these named gradients as CSS custom properties:

```css
/* Vertical fade: saturated top -> cream bottom */
--gradient-sky:   linear-gradient(180deg, hsl(206 45% 85%) 0%, hsl(206 30% 93%) 50%, hsl(43 38% 97%) 100%);
--gradient-mint:  linear-gradient(180deg, hsl(150 40% 85%) 0%, hsl(129 30% 88%) 50%, hsl(43 38% 97%) 100%);
--gradient-gold:  linear-gradient(180deg, hsl(45 80% 82%) 0%, hsl(40 60% 88%) 50%, hsl(43 38% 97%) 100%);
--gradient-sage:  linear-gradient(135deg, hsl(84 33% 80%) 0%, hsl(129 35% 70%) 100%);
--gradient-diva:  linear-gradient(135deg, hsl(336 72% 72%) 0%, hsl(330 62% 27%) 100%);

/* Horizontal split: left saturated -> right washed */
--gradient-sky-split:  linear-gradient(90deg, hsl(206 45% 85%) 0%, hsl(206 25% 92%) 50%, hsl(206 15% 95%) 100%);
--gradient-mint-split: linear-gradient(90deg, hsl(150 40% 82%) 0%, hsl(150 25% 90%) 50%, hsl(150 15% 95%) 100%);

/* Banding: horizontal stripes of alternating opacity */
--gradient-band-sky:  linear-gradient(180deg, hsl(206 45% 88%) 0%, hsl(206 35% 91%) 100%);
--gradient-band-mint: linear-gradient(180deg, hsl(150 40% 86%) 0%, hsl(150 30% 90%) 100%);
```

### 2. New `src/styles/editorial.css` -- Utility Classes

```css
/* ── Section Backgrounds ── */
.ed-bg-sky   { background: var(--gradient-sky); }
.ed-bg-mint  { background: var(--gradient-mint); }
.ed-bg-gold  { background: var(--gradient-gold); }
.ed-bg-sage  { background: var(--gradient-sage); }
.ed-bg-diva  { background: var(--gradient-diva); }

/* ── Split Panels (50/50) ── */
.ed-split { display: grid; grid-template-columns: 1fr 1fr; }
.ed-split-sky-l  { background: var(--gradient-sky-split); }

/* ── Banding Rows ── */
.ed-band { padding: 2rem 3rem; }
.ed-band-sky  { background: var(--gradient-band-sky); }
.ed-band-mint { background: var(--gradient-band-mint); }

/* ── Oversized Stat Typography ── */
.ed-stat {
  font-family: 'Archivo', sans-serif;
  font-weight: 800;
  font-size: clamp(3rem, 8vw, 7rem);
  line-height: 1;
  letter-spacing: -0.03em;
  color: hsl(180 50% 2%);
}

.ed-stat-label {
  font-family: 'Inter', sans-serif;
  font-size: clamp(0.875rem, 1.5vw, 1.125rem);
  color: hsl(180 50% 2% / 0.7);
  margin-top: 0.5rem;
}

/* ── Editorial Section ── */
.ed-section {
  padding: 4rem 3rem;
  position: relative;
}

/* ── Photo Overlay Cards (reviews style) ── */
.ed-overlay-card {
  background: hsl(43 38% 97% / 0.92);
  backdrop-filter: blur(8px);
  padding: 1.5rem;
  border-radius: 0.25rem; /* intentionally subtle, not rounded */
}

/* ── Editorial Heading (big, left-aligned, no decoration) ── */
.ed-heading {
  font-family: 'Archivo', sans-serif;
  font-weight: 700;
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
}

/* ── Thin Separator Line ── */
.ed-divider {
  height: 1px;
  background: hsl(180 50% 2% / 0.12);
  width: 100%;
}
```

### 3. Tailwind Config Additions

Add editorial background utilities to `tailwind.config.ts` via the `backgroundImage` extend:

```ts
backgroundImage: {
  'ed-sky': 'var(--gradient-sky)',
  'ed-mint': 'var(--gradient-mint)',
  'ed-gold': 'var(--gradient-gold)',
  'ed-sage': 'var(--gradient-sage)',
  'ed-diva': 'var(--gradient-diva)',
  'ed-sky-split': 'var(--gradient-sky-split)',
  'ed-mint-split': 'var(--gradient-mint-split)',
},
```

### 4. Import in `src/index.css`

Add `@import './styles/editorial.css';` after the Google Fonts import.

## Files to Create/Edit

| File | Action |
|---|---|
| `src/index.css` | Add gradient CSS variables to `:root`, add import for editorial.css |
| `src/styles/editorial.css` | **Create** -- all editorial utility classes |
| `tailwind.config.ts` | Add `backgroundImage` entries |

## Usage Examples (for future reference)

```tsx
{/* Stat section with mint gradient */}
<section className="ed-bg-mint ed-section">
  <div className="ed-split">
    <div><p className="ed-stat">90 000</p><p className="ed-stat-label">Bottles sold in 2025</p></div>
    <div><p className="ed-stat">70%</p><p className="ed-stat-label">Returning customers</p></div>
  </div>
</section>

{/* Or with Tailwind */}
<section className="bg-ed-sky py-16 px-8">
  ...
</section>
```

