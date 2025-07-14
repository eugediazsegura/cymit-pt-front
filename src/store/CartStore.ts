import type { CartItem } from '@/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type CartStore = {
    cart: CartItem[],
    setCart: (cart: CartItem[]) => void
    clearCart: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],
      setCart: (cart) => set({ cart }),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: 'cart-storage',
    }
  )
)