

# Hero Section Rebuild

## Concept
Rebuild the hero into a high-converting, "dream outcome" hero inspired by the reference screenshot. The uploaded lifestyle photo will be used as the background. Text will be left-aligned (not centered), overlaying the image with a gradient for readability. A review badge and mini testimonial will add social proof directly in the hero.

## Layout (Desktop)
- Full-screen background: the uploaded lifestyle photo (girls drinking Shroom)
- Dark gradient overlay from left side for text readability
- Content left-aligned (or slightly left-of-center), vertically centered
- Top: Star rating badge (e.g., "4.9/5 - 200+ reviews")
- Main headline: "Dream outcome" style -- something like "Poczuj sie swietnie bez alkoholu" with the key benefit phrase highlighted in accent color
- Subtitle: Short supporting line about what Shroom delivers
- Trust pills: "0g cukru", "100% natural", "Lion's Mane"
- CTA buttons
- Bottom: A mini review quote from a real person

## Layout (Mobile)
- Same concept but stacked, smaller text
- Photo still covers full screen, gradient adjusted for mobile readability

## Key Changes
1. Copy the uploaded photo to `src/assets/hero-lifestyle.jpg`
2. Rewrite `src/components/Hero.tsx`:
   - Background: lifestyle photo with left-to-right dark gradient overlay
   - Left-aligned text block with:
     - Review badge (stars + count)
     - "Dream outcome" headline with accent-colored key phrase
     - Supporting subtitle
     - Trust checkmarks (no sugar, natural, functional)
     - CTA buttons
     - Mini testimonial quote at bottom
3. Remove the old centered layout, scroll indicator stays

## Technical Details
- Import the new image from `@/assets/hero-lifestyle.jpg`
- Use `framer-motion` for entrance animations (staggered fade-in from left)
- Gradient overlay: `bg-gradient-to-r from-black/80 via-black/50 to-transparent`
- Headline: Afronaut font, with a `<span>` in accent/gold color for the dream outcome phrase
- Star rating: inline flex with `lucide-react` Star icons filled in gold
- Trust items: checkmark icons + text in small pills
- Responsive: on mobile, gradient covers more of the image, text takes full width

