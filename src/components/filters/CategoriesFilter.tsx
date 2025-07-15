import { useEffect } from "react";
import { useProductStore } from "@/store/ProductStore";
import { useCategoriesStore } from "@/store/CategoriesStore";
import API from "@/api/services";
import type { Category } from "@/types";
import { useModalStore } from "@/store/ModalStore";

export const CategoriesFilter = () => {
    const { closeModal } = useModalStore();
    const { setProducts, setProductTotal, setPage, setVisibleProducts } = useProductStore();
    const { categories, setCategories, setSelectedCategory } = useCategoriesStore();

    const fetchCategories = async () => {
        const response = await API.Category.all();
        setCategories(response);

    };

    const handleCategoryFilter = async (e: React.ChangeEvent<HTMLInputElement>, categorySelected: Category) => {
        const url = e.target.value;
        setSelectedCategory(categorySelected);
        const response = await API.Product.paginated(1, 16, url);
        setPage(1);
        setVisibleProducts(16);
        setProducts(response.products);
        setProductTotal(response.total);
        closeModal();
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div>
            <div className="border-b-4 border-purple-dark px-2 py-3">
                <h3 className="text-xl font-bold">Filter Options</h3>
            </div>
            <div className="categories py-4">
                <h3 className="text-md font-bold py-3">By Categories</h3>
                {categories &&
                    categories.map((category) => (
                        <div className="category pl-4 text-gray-500" key={category.slug}>
                            <input type="radio"
                                name="category"
                                id={category.id}
                                value={category.url}
                                role="radio"
                                onChange={(e) => handleCategoryFilter(e, category)}
                                className="mr-2 accent-purple-dark " />
                            <label htmlFor="category">{category.name}</label>
                        </div>
                    ))}
            </div>
        </div>
    )
}
