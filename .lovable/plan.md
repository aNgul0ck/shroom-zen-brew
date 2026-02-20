

# Product Quiz - "Znajdz swojego Shrooma"

## Overview
A dedicated, full-screen, immersive product recommendation quiz at `/quiz` with seamless mobile and desktop UX. Think Typeform meets Apple -- one question at a time, full viewport, smooth transitions, progress visualization, and a rewarding result reveal.

## Key UX Principles
- One question per screen (full viewport height) -- zero clutter
- Swipe/tap answers on mobile, click on desktop
- Instant visual feedback on selection (color flash + auto-advance after 600ms)
- Animated progress ring instead of a boring progress bar
- Result screen with confetti-like particle animation and product image reveal
- CTA to product page directly from result

## Quiz Flow

```text
[Intro Screen] --> [Q1] --> [Q2] --> [Q3] --> [Q4] --> [Q5] --> [Result Screen]
     |                                                              |
     |  "Znajdz swojego Shrooma"                                   |  Product image
     |  "5 pytan, 30 sekund"                                       |  + adaptogens
     |  [Start button]                                              |  + CTA "Zobacz produkt"
                                                                    |  + "Zagraj ponownie"
```

## Screen Designs

### 1. Intro Screen
- Full viewport, centered content
- Large headline: "Znajdz swojego Shrooma" in Afronaut font
- Subtext: "5 pytan. 30 sekund. Zero bullshitu."
- Animated product bottles floating in background (subtle, blurred)
- Big rounded CTA: "Zaczynamy" with arrow icon
- Minimal header with back-to-home link

### 2. Question Screens
- Full viewport height per question
- Top: circular progress ring (SVG) showing step X/5
- Center: emoji (large, 80px) + question text
- Bottom: 3 answer cards stacked vertically
- Answer cards: rounded-2xl, border, on tap/click they flash the brand color, scale slightly, then auto-advance to next question
- Keyboard support: 1/2/3 keys to select answer on desktop
- Swipe-up gesture hint on mobile (subtle arrow)

### 3. Result Screen
- Animated reveal: product image scales in from 0.5 to 1.0 with spring physics
- Product name in brand color with result emoji
- "Twoj adaptogen to..." label
- Adaptogen pills (rounded tags)
- Description text
- Two CTAs: "Zobacz produkt" (primary, links to `/produkt/:slug`) and "Zagraj ponownie" (ghost)
- Score breakdown as small horizontal bars showing Power/Relax/Diva percentages

## Questions (reusing existing data, refined copy)
Same 5 questions from Brief.tsx quiz data but with edgier tone matching the brand voice.

## Technical Plan

### New Files
- **`src/pages/QuizPage.tsx`** -- Full quiz experience, standalone page
  - Uses `useState` for quiz state (currentStep, scores, showResult)
  - Uses `framer-motion` AnimatePresence for screen transitions
  - Circular SVG progress ring component
  - Keyboard event listener (`useEffect`) for 1/2/3 key shortcuts
  - Auto-advance with 600ms delay after selection
  - `getResult()` logic same as existing quiz
  - Links to `/produkt/:slug` from result CTA

### Files to Edit
- **`src/App.tsx`** -- Add route `/quiz`
- **`src/components/Header.tsx`** -- Add "Quiz" link to navigation
- **`src/components/IntroSection.tsx`** -- Add a CTA button/link to the quiz ("Znajdz swojego Shrooma") below the pillars section

### Component Structure (all in QuizPage.tsx)
- `QuizIntro` -- intro screen with floating bottles
- `QuizQuestion` -- single question view with progress ring
- `QuizResult` -- result reveal with animations
- Main `QuizPage` orchestrates flow with AnimatePresence

### Animations
- Page transitions: `opacity + y` slide (framer-motion)
- Answer selection: `scale(1.02)` + background color flash + checkmark icon
- Progress ring: animated `strokeDashoffset` via framer-motion
- Result reveal: `spring` animation on product image, staggered children for pills/text
- Floating bottles on intro: existing `animate-float` class

### Mobile Optimizations
- Full viewport height (`min-h-[100dvh]`) for proper mobile browser handling
- Large touch targets (min 48px height on answer cards)
- Bottom-aligned answers for thumb reach
- No horizontal scrolling
- Safe area insets for notch devices

### Desktop Enhancements
- Keyboard shortcuts (1/2/3 to answer, Enter to start)
- Max-width container (640px) centered for readability
- Subtle hover states on answer cards

