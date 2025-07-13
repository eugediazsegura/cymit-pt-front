import type { Product } from '@/types';
import { create } from 'zustand';
export type ProductStore = {
    products: Product[];
    loading: boolean;
    page: number;
    setProducts: (products: Product[]) => void;
    setLoading: (loading: boolean) => void;
    setPage: (page: number) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
    products: [],
    loading: false,
    page: 1,
    setProducts: ( products: Product[]) => set({ products }),
    setLoading: (loading: boolean) => set({ loading: loading }),
    setPage: (page: number) => set({ page: page }),
    addProducts: (products: Product[]) => set((state) => ({ products: [...state.products, ...products] }))
}));