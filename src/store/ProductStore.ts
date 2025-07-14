import type { Product } from '@/types';
import { create } from 'zustand';
export type ProductStore = {
    products: Product[];
    loading: boolean;
    page: number;
    visibleProducts: number;
    productTotal: number;
    setProducts: (products: Product[]) => void;
    setLoading: (loading: boolean) => void;
    setPage: (page: number) => void;
    setProductTotal: (productTotal: number) => void;
    setVisibleProducts: (visibleProducts: number) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
    products: [],
    loading: false,
    page: 1,
    productTotal: 0,
    visibleProducts: 0,
    setProducts: ( products: Product[]) => set({ products }),
    setLoading: (loading: boolean) => set({ loading: loading }),
    setPage: (page: number) => set({ page: page }),
    setProductTotal: (productTotal: number) => set({ productTotal }),
    setVisibleProducts: (visibleProducts: number) => set({ visibleProducts }),

}));