import { useEffect } from "react";
import API from "@/api/services";
import { useProductStore } from "@/store/ProductStore";
import { useCategoriesStore } from "@/store/CategoriesStore";
import { Sidebar } from "@/components/layout/Sidebar";
import { ProductCard } from "@/components/product/ProductCard";
import { ButtonSecondary } from "@/components/ui/ButtonSecondary";
import { ProductSkeleton } from "@/components/ui/skeletons/ProductSkeleton";
import { FilterSkeleton } from "@/components/ui/skeletons/FilterSkeleton";
import { FilterButton } from "@/components/filters/FilterButton";

export const ProductListContainer = () => {
    const { products,
        loading,
        page,
        productTotal,
        visibleProducts,
        setProducts,
        setLoading,
        setPage,
        setProductTotal,
        setVisibleProducts } = useProductStore();

    const { selectedCategory } = useCategoriesStore();

    const fetchProducts = async () => {
        setLoading(true);
        const response = await API.Product.paginated(page, 16);
        setProducts(response.products);
        setProductTotal(response.total);
        setLoading(false);

    };

    useEffect(() => {
        fetchProducts();
    }, []);

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
        <div className="flex flex-col ">
            <FilterButton />
            <div className="products-container  flex flex-col items-center">
                <div className=" flex justify-between my-14">
                    {!products || loading ? (
                        <FilterSkeleton />) : (
                        <Sidebar />
                    )
                    }
                    <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4">
                        {!products || loading ? (
                            Array(products?.length || 16).fill(null).map((_, index) => (
                                <div className="product-skeleton" key={index}>
                                    <ProductSkeleton />
                                </div>
                            ))
                        ) : (
                            products.map((product) => (
                                <div key={product.id} className="w-full m-4">
                                    <ProductCard product={product} />
                                </div>
                            ))
                        )}
                    </div>
                </div>
                {products.length > 0 && visibleProducts < productTotal && (
                    <ButtonSecondary onClick={handleLoadMore} data="View more products" />
                )}
            </div>
        </div>
    )
}
