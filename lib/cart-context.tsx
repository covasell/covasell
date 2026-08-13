"use client";

import { createContext, useContext, useMemo, useState, ReactNode } from "react";
import type { CartItem, Product, ProductVariant } from "./types";

interface CartContextValue {
  items: CartItem[];
  addItem: (product: Product, variant?: ProductVariant, quantity?: number) => void;
  updateQuantity: (productId: string, variantId: string | undefined, quantity: number) => void;
  removeItem: (productId: string, variantId?: string) => void;
  clear: () => void;
  subtotal: number;
  count: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  function addItem(product: Product, variant?: ProductVariant, quantity = 1) {
    setItems((prev) => {
      const existing = prev.find(
        (it) => it.product.id === product.id && it.variant?.id === variant?.id
      );
      if (existing) {
        return prev.map((it) =>
          it === existing ? { ...it, quantity: it.quantity + quantity } : it
        );
      }
      return [...prev, { product, variant, quantity }];
    });
  }

  function updateQuantity(productId: string, variantId: string | undefined, quantity: number) {
    setItems((prev) =>
      prev
        .map((it) =>
          it.product.id === productId && it.variant?.id === variantId ? { ...it, quantity } : it
        )
        .filter((it) => it.quantity > 0)
    );
  }

  function removeItem(productId: string, variantId?: string) {
    setItems((prev) =>
      prev.filter((it) => !(it.product.id === productId && it.variant?.id === variantId))
    );
  }

  function clear() {
    setItems([]);
  }

  const subtotal = useMemo(
    () => items.reduce((sum, it) => sum + it.product.price * it.quantity, 0),
    [items]
  );
  const count = useMemo(() => items.reduce((sum, it) => sum + it.quantity, 0), [items]);

  return (
    <CartContext.Provider
      value={{ items, addItem, updateQuantity, removeItem, clear, subtotal, count }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart doit être utilisé dans un CartProvider");
  return ctx;
}
