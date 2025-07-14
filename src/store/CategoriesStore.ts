import type { Category } from '@/types';
import { create } from 'zustand';

export type CategoriesStore = {
    categories: Category[];
    selectedCategory: Category | null;
    loadingCategories: boolean;
    setCategories: (categories: Category[]) => void;
    setSelectedCategory: (selectedCategory: Category) => void;
    setLoadingCategories: (loadingCategories: boolean) => void;
}


export const useCategoriesStore = create<CategoriesStore>((set) => ({
    categories: [],
    selectedCategory: null,
    setCategories: (categories) => set({ categories }),
    setSelectedCategory: (selectedCategory) => set({ selectedCategory }),
    loadingCategories: false,
    setLoadingCategories: (loadingCategories) => set({ loadingCategories }),
}))