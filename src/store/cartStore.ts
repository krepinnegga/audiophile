import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from '../types';

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (product: Product, quantity: number) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
  clearCart: () => void;
  getCartCount: () => number;
  getTotal: () => number;
  getVat: () => number;
  getGrandTotal: () => number;
}

const SHIPPING_COST = 50;

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, quantity) =>
        set(state => {
          const existingItem = state.items.find(item => item.id === product.id);
          if (existingItem) {
            const updatedItems = state.items.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            );
            return { items: updatedItems };
          } else {
            const newItem: CartItem = { ...product, quantity };
            return { items: [...state.items, newItem] };
          }
        }),
      removeItem: productId =>
        set(state => ({
          items: state.items.filter(item => item.id !== productId),
        })),
      updateQuantity: (productId, newQuantity) =>
        set(state => {
          if (newQuantity < 1) {
            return { items: state.items.filter(item => item.id !== productId) };
          }
          return {
            items: state.items.map(item =>
              item.id === productId ? { ...item, quantity: newQuantity } : item
            ),
          };
        }),
      clearCart: () => set({ items: [] }),
      getCartCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      getTotal: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
      getVat: () => {
        return get().getTotal() * 0.2;
      },
      getGrandTotal: () => {
        const total = get().getTotal();
        if (total === 0) return 0;
        const vat = get().getVat();
        return total + SHIPPING_COST + vat;
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);
