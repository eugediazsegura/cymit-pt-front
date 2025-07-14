import type { Product, ProductComplete } from '@/types';
import { create } from 'zustand';
export type ProductStore = {
    products: Product[];
    loading: boolean;
    page: number;
    visibleProducts: number;
    productComplete: ProductComplete | null;
    productTotal: number;
    setProducts: (products: Product[]) => void;
    setLoading: (loading: boolean) => void;
    setPage: (page: number) => void;
    setProductTotal: (productTotal: number) => void;
    setVisibleProducts: (visibleProducts: number) => void;
    setProductComplete: (productComplete: ProductComplete | null) => void
}

export const useProductStore = create<ProductStore>((set) => ({
    products: [],
    loading: false,
    page: 1,
    productTotal: 0,
    visibleProducts: 0,
    productComplete: null,
    setProducts: ( products: Product[]) => set({ products }),
    setLoading: (loading: boolean) => set({ loading: loading }),
    setPage: (page: number) => set({ page: page }),
    setProductTotal: (productTotal: number) => set({ productTotal }),
    setVisibleProducts: (visibleProducts: number) => set({ visibleProducts }),
    setProductComplete: (productComplete: ProductComplete | null) => set({ productComplete }),
}));