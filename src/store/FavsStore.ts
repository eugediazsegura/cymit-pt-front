import type { Product } from '@/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type FavsStore = {
    favs: Product[]
    setFavs: (item: Product[]) => void
    clearFavs: () => void
}

export const useFavsStore = create<FavsStore>()(
    persist(
        (set) => ({
            favs: [],
            setFavs: (favs) => set({ favs }),
            clearFavs: () => set({ favs: [] }),
        }),
        { name: 'favs-store' }
    )
)