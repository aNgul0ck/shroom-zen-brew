import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FREE_SHIPPING_THRESHOLD, SUBSCRIPTION_CADENCE_WEEKS } from "@/data/products";

// Frontend-only cart store (Zustand). Backend-ready: every mutation has a
// corresponding TODO(backend) endpoint comment so a backend dev can swap
// the in-memory logic for real API calls without changing the UI.

export interface CartItem {
  // Stable id so quantity-only changes update existing rows instead of duplicating.
  id: string;
  productId: string;
  productName: string;
  productImage: string;
  isDiva?: boolean;
  // Bottles per unit (1 / 3 / 6 — the "tier")
  bottlesPerUnit: number;
  // How many of this exact tier the user has
  quantity: number;
  // Price for ONE unit of this tier (already discounted for subscription if applicable)
  unitPrice: number;
  // Original (non-subscription) price for strikethrough display
  originalUnitPrice: number;
  isSubscription: boolean;
  cadenceWeeks?: number;
  bundleWith?: string;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  // Adds (or increments quantity if a row with same id already exists)
  addItem: (item: Omit<CartItem, "id" | "quantity"> & { quantity?: number }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clear: () => void;
  // Derived totals
  getSubtotal: () => number;
  getItemCount: () => number;
  getRemainingForFreeShipping: () => number;
  qualifiesForFreeShipping: () => boolean;
}

const buildItemId = (
  productId: string,
  bottlesPerUnit: number,
  isSubscription: boolean,
  bundleWith?: string,
) =>
  `${productId}__${bottlesPerUnit}__${isSubscription ? "sub" : "one"}${
    bundleWith ? `__b:${bundleWith}` : ""
  }`;

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      addItem: (input) => {
        // TODO(backend): POST /api/cart/items with payload:
        // { productId, bottlesPerUnit, quantity, isSubscription, cadenceWeeks, bundleWith }
        const id = buildItemId(
          input.productId,
          input.bottlesPerUnit,
          input.isSubscription,
          input.bundleWith,
        );
        const qtyToAdd = input.quantity ?? 1;
        set((state) => {
          const existing = state.items.find((it) => it.id === id);
          if (existing) {
            return {
              items: state.items.map((it) =>
                it.id === id ? { ...it, quantity: it.quantity + qtyToAdd } : it,
              ),
              isOpen: true,
            };
          }
          const newItem: CartItem = {
            id,
            productId: input.productId,
            productName: input.productName,
            productImage: input.productImage,
            isDiva: input.isDiva,
            bottlesPerUnit: input.bottlesPerUnit,
            quantity: qtyToAdd,
            unitPrice: input.unitPrice,
            originalUnitPrice: input.originalUnitPrice,
            isSubscription: input.isSubscription,
            cadenceWeeks: input.isSubscription
              ? input.cadenceWeeks ?? SUBSCRIPTION_CADENCE_WEEKS
              : undefined,
            bundleWith: input.bundleWith,
          };
          return { items: [...state.items, newItem], isOpen: true };
        });
      },

      removeItem: (id) => {
        // TODO(backend): DELETE /api/cart/items/:id
        set((state) => ({ items: state.items.filter((it) => it.id !== id) }));
      },

      updateQuantity: (id, quantity) => {
        // TODO(backend): PATCH /api/cart/items/:id { quantity }
        if (quantity <= 0) {
          set((state) => ({ items: state.items.filter((it) => it.id !== id) }));
          return;
        }
        set((state) => ({
          items: state.items.map((it) =>
            it.id === id ? { ...it, quantity } : it,
          ),
        }));
      },

      clear: () => {
        // TODO(backend): DELETE /api/cart
        set({ items: [] });
      },

      getSubtotal: () =>
        get().items.reduce((sum, it) => sum + it.unitPrice * it.quantity, 0),

      getItemCount: () =>
        get().items.reduce((sum, it) => sum + it.quantity, 0),

      getRemainingForFreeShipping: () => {
        const subtotal = get().getSubtotal();
        return Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
      },

      qualifiesForFreeShipping: () =>
        get().getSubtotal() >= FREE_SHIPPING_THRESHOLD,
    }),
    {
      name: "shroom-cart-v1",
      partialize: (state) => ({ items: state.items }), // don't persist isOpen
    },
  ),
);
