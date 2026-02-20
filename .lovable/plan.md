

# HowItWorks -- Mobile UX Redesign

## Problem
On mobile, 4 tall stacked cards create excessive vertical scrolling. Each card is 320px+ tall, making the section ~1400px+ on mobile -- too much scrolling for what is a simple 4-step process.

## Solution: Horizontal Swipe Timeline

Replace the stacked cards on mobile with a **horizontal swipeable carousel** with a connected timeline indicator -- similar to the orbital selector pattern already used in IntroSection.

### Mobile Layout (sm:hidden)

```text
  Od lyku do efektu.

  ----[1]----[2]----[3]----[4]----   <-- horizontal timeline dots
        ^active

  +-------------------------------+
  |  Krok 1  |  0 min             |
  |                               |
  |  Wypij                        |
  |  Jeden lyk. Zero bullshitu.   |
  |                               |
  |  Bez sztucznych dodatkow...   |
  +-------------------------------+

  <  swipe to navigate  >
```

### Key UX Details

1. **Timeline bar** at the top: 4 dots connected by a line, active dot is larger with brand color accent. Tappable to jump to any step.
2. **Single card visible** at a time: full-width, pastel background, same content as desktop cards but with better proportions (~240px height).
3. **Swipe navigation**: Horizontal drag/swipe using framer-motion's `drag="x"` with snap points, or CSS scroll-snap.
4. **Auto-play**: Optionally auto-advance every 4s (same pattern as IntroSection orbital), pauses on manual interaction.
5. **Haptic feedback**: Vibration API on swipe (matching existing mobile UX patterns from memory).

### Desktop (unchanged)
Keep the existing 4-column grid -- it works great on desktop.

## Technical Details

### File to Edit
- **`src/components/HowItWorks.tsx`**

### Implementation
- Add `useState` for `activeStep` (0-3)
- Mobile: render a timeline + single animated card with `AnimatePresence`
- Swipe via `drag="x"` on the card container with `onDragEnd` to detect direction
- Timeline dots: simple `flex` row with circles and connecting lines
- Desktop: keep existing `grid` layout wrapped in `hidden sm:grid`
- Use `navigator.vibrate?.(10)` on step change for haptic feedback

### Animation
- Card transitions: slide left/right with `AnimatePresence` (direction-aware)
- Timeline dot: `scale` animation on active dot + accent color ring
- Subtle entrance animation on first view

