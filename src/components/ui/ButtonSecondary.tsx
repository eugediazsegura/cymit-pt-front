import API from "@/api/services";
import { useCategoriesStore } from "@/store/CategoriesStore";
import { useProductStore } from "@/store/ProductStore";

type ButtonSecondaryProps = {
    data: string
}

export const ButtonSecondary = ({ data }: ButtonSecondaryProps) => {
    const { products,
        page,
        setProducts,
        setLoading,
        setPage,
        setVisibleProducts } = useProductStore();
    const { selectedCategory } = useCategoriesStore();
    const handleLoadMore = async () => {
        setLoading(true);
        const nextPage = page + 1;
        const response = await API.Product.paginated(nextPage, 16, selectedCategory?.url);
        setProducts([...products, ...response.products]);
        setVisibleProducts(nextPage * 16);
        setPage(nextPage);
        setLoading(false);
    };
    return (
        <button type="button" className="border-2 border-pink-light hover:border-pink-dark text-pink-light hover:text-pink-dark rounded-full  lg:ml-96 py-2 px-4 lg:px-1 lg:w-1/5 cursor-pointer" onClick={handleLoadMore}>{data}</button>
    )
}
