import { create } from 'zustand';
import { Product } from '../types';

interface WishlistStore {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
}

export const useWishlist = create<WishlistStore>((set, get) => ({
  items: [],
  addItem: (product) =>
    set((state) => {
      if (!state.items.some((item) => item.id === product.id)) {
        return { items: [...state.items, product] };
      }
      return state;
    }),
  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    })),
  isInWishlist: (productId) =>
    get().items.some((item) => item.id === productId),
}));