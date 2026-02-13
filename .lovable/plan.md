

# Product Pages - E-commerce UX

## Overview
Create dedicated product pages for each of the 3 drinks (Shroom Power, Shroom Relax, Diva) with modern wellness e-commerce UX patterns. Each page will be a conversion-optimized product detail page (PDP).

## Routes
- `/produkt/shroom-power`
- `/produkt/shroom-relax`
- `/produkt/diva`

All existing links ("Zobacz produkt", "Shop Diva", "Kup Shrooma") will be updated to point to these pages.

## Page Structure (each product page)

### 1. Hero / Above the Fold
- Large product image (left) with subtle float animation
- Right side: product name, tagline, star rating (4.9/5), short description
- Price with quantity selector (1x, 3x, 6x with progressive discounts)
- Bold "Dodaj do koszyka" CTA button
- Trust badges row: "Darmowa dostawa od 99 zl", "Naturalne skladniki", "Made in Poland"

### 2. Key Benefits Strip
- Horizontal row of 3-4 icon + label cards highlighting the product's main benefits
- e.g., for Power: "Energia bez crashu", "500mg Lion's Mane", "0g cukru", "Witamina C"
- Clean, scannable format -- icons + short text

### 3. "How It Works" / Ingredients Spotlight
- Visual breakdown of active ingredients with dosage amounts
- Each ingredient gets an icon, name, dosage, and one-line EFSA-compliant benefit
- Presented as a vertical timeline or horizontal cards

### 4. Before/After or "Your Day With Shroom"
- Visual storytelling showing how the product fits into a daily routine
- For Power: morning routine flow (wake up -> Shroom -> focus all day)
- For Relax: evening wind-down flow
- For Diva: social occasion flow

### 5. Social Proof Section
- Product-specific reviews (filtered from the review data)
- Star rating summary
- "Verified purchase" badges

### 6. FAQ Accordion
- Product-specific questions (ingredients, taste, usage, shipping)
- Using existing Radix accordion component

### 7. Cross-sell / "Complete Your Ritual"
- Cards linking to the other 2 products
- "Pair Power with Relax for the full day-night cycle"

## Diva Differentiation
Diva's page uses the dark theme (`bg-[#1a0a12]` with pink accents) consistent with its "brand within a brand" identity, while Power and Relax use the standard cream/sage Shroom theme.

## Files to Create/Edit

### New Files
- `src/pages/ProductPage.tsx` -- shared product detail page component with product data lookup by slug
- `src/components/product/ProductHero.tsx` -- above-the-fold section (image + info + CTA)
- `src/components/product/ProductBenefits.tsx` -- key benefits strip
- `src/components/product/ProductIngredients.tsx` -- ingredients spotlight
- `src/components/product/ProductRoutine.tsx` -- daily routine visual
- `src/components/product/ProductReviews.tsx` -- filtered reviews
- `src/components/product/ProductFAQ.tsx` -- FAQ accordion
- `src/components/product/ProductCrossSell.tsx` -- cross-sell cards
- `src/data/products.ts` -- centralized product data (name, slug, price, ingredients, benefits, reviews, FAQs)

### Files to Edit
- `src/App.tsx` -- add route `/produkt/:slug`
- `src/components/FunctionalDrinks.tsx` -- update "Zobacz produkt" links to `/produkt/shroom-power` and `/produkt/shroom-relax`
- `src/components/DivaSection.tsx` -- update "Shop Diva" link to `/produkt/diva`
- `src/components/Hero.tsx` -- update "Kup Shrooma" link to `/produkt/shroom-power` or keep as `#produkty`

## Technical Details

- Product data centralized in `src/data/products.ts` with full typing
- `ProductPage.tsx` uses `useParams()` to get slug, looks up product data
- Framer Motion for section entrance animations (consistent with existing patterns)
- Quantity selector uses local state with `useState`
- FAQ uses `@radix-ui/react-accordion` (already installed)
- Diva page conditionally applies dark theme classes based on product slug
- All components use existing font classes (`font-headline`, `font-display`, `font-body`)
- EFSA-compliant copy only -- ingredient-level claims, no product-level health claims
- Responsive: single column on mobile, two-column hero on desktop

