# Backend Handoff — Shroom Frontend Conversion Layer

This document lists everything the frontend currently **fakes/stubs** and what the backend needs to provide for a fully functional ecommerce experience. Search the codebase for `TODO(backend)` to find every integration point.

## 1. Cart API

**Where:** `src/components/StickyCTA.tsx`, `src/components/product/ProductHero.tsx` (Add to Cart button)

**What's stubbed:** Click on "Dodaj do koszyka" shows a `sonner` toast. No persistence, no cart state.

**What's needed:**
- Endpoint: `POST /api/cart/items`
- Payload (already shaped in frontend):
  ```ts
  {
    productId: string,        // e.g. "shroom-power"
    quantity: number,         // 1 | 3 | 6
    isSubscription: boolean,  // pre-selected true
    cadenceWeeks?: number,    // 4 by default when isSubscription
    bundleWith?: string,      // partner productId when "Frequently bought together" is checked
  }
  ```
- Response: cart summary `{ items, subtotal, shipping, total, freeShippingProgress }`
- Persist server-side, sync to a cart drawer/page (also missing — see `/koszyk` route TBD).

## 2. Subscription system

**Where:** `src/components/product/SubscriptionToggle.tsx`, `src/data/products.ts` (`SUBSCRIPTION_DISCOUNT`, `SUBSCRIPTION_CADENCE_WEEKS`)

**What's stubbed:** Frontend computes price as `basePrice * 0.85`. No actual subscription is created.

**What's needed:**
- Provider: Stripe Subscriptions, Recharge, or custom.
- User flow: selectable cadences (2 / 4 / 8 weeks), skip next, pause, cancel.
- Account area for managing subscriptions (NOT YET BUILT on frontend).
- Webhooks for renewals, failed charges, cancellations.

## 3. Real stock & availability

**Where:** All product cards & PDPs.

**What's stubbed:** Everything always "in stock".

**What's needed:**
- Endpoint: `GET /api/products/:slug/stock` returning `{ inStock: boolean, lowStock?: number }`.
- Frontend should disable variants when out of stock and show "Mało sztuk" badge for `lowStock < 10`.

## 4. Social proof feed

**Where:** `src/components/RecentPurchases.tsx`

**What's stubbed:** Hardcoded `MOCK_PURCHASES` array.

**What's needed:**
- Endpoint: `GET /api/recent-purchases?limit=5` returning anonymized recent orders:
  ```ts
  { initials: string, city: string, productName: string, minutesAgo: number }[]
  ```
- **Privacy**: Initials only, city only, rounded time buckets. GDPR-safe.

## 5. Shipping cutoff config

**Where:** `src/components/product/ShippingDeadline.tsx`

**What's stubbed:** Hardcoded `CUTOFF_HOUR = 14`.

**What's needed:**
- Backend should expose cutoff via env var or config endpoint (`GET /api/shipping/cutoff`).
- Should account for weekends, public holidays, warehouse timezone.
- Frontend should also receive `nextDispatchAt` ISO timestamp for accurate countdown.

## 6. Free shipping threshold

**Where:** `src/data/products.ts` → `FREE_SHIPPING_THRESHOLD`

**Currently:** Hardcoded to `89` PLN. Single bottle qualifies.

**What's needed:** Should come from backend config so marketing can change without redeploy.

## 7. Checkout flow

**Where:** Not yet implemented on frontend (no `/checkout` route).

**What's needed:**
- Decision: Shopify Checkout, Stripe Checkout, or custom multi-step?
- Frontend will need: address form, shipping methods, payment, order summary, confirmation page.
- The `PaymentBadges.tsx` component currently shows static method names (Visa/MC/BLIK/Apple Pay/Google Pay) — these need to be backed by real provider integration.

## 8. Analytics events

**Currently:** Zero events fired.

**What's needed (recommended):**
- GA4 + Meta Pixel (Conversion API server-side preferred).
- Events: `view_item`, `add_to_cart`, `begin_checkout`, `purchase`, `subscription_start`.
- Frontend has the data shapes ready — just needs an event bus wired to providers.

## 9. Search the code

```bash
grep -rn "TODO(backend)" src/
```
