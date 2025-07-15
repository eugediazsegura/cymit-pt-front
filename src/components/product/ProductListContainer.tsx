import { useEffect } from "react";
import API from "@/api/services";
import { useProductStore } from "@/store/ProductStore";
import { Sidebar } from "@/components/layout/Sidebar";
import { ProductCard } from "@/components/product/ProductCard";
import { ButtonSecondary } from "@/components/ui/ButtonSecondary";
import { ProductSkeleton } from "@/components/ui/skeletons/ProductSkeleton";
import { FilterSkeleton } from "@/components/ui/skeletons/FilterSkeleton";
import { FilterButton } from "@/components/filters/FilterButton";
import { ProductsNotFound } from "@/components/product/ProductsNotFound";

export const ProductListContainer = () => {
    const { products,
        loading,
        page,
        productTotal,
        visibleProducts,
        setProducts,
        setLoading,
        setProductTotal,
        setVisibleProducts } = useProductStore();

    const fetchProducts = async () => {
        setLoading(true);
        const response = await API.Product.paginated(page, 16);
        setProducts(response.products);
        setVisibleProducts(page * 16);
        setProductTotal(response.total);
        setLoading(false);

    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="flex flex-col ">
            <FilterButton />
            <div className="products-container  flex flex-col items-center">
                <div className=" flex w-full justify-between my-14">
                    {!products || loading ? (
                        <FilterSkeleton />) : (
                        <Sidebar />
                    )
                    }
                    <div className="w-full">
                        {loading ? (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4">
                                {Array(16).fill(null).map((_, index) => (
                                    <div className="product-skeleton" key={index}>
                                        <ProductSkeleton />
                                    </div>
                                ))}
                            </div>
                        ) : products && products.length === 0 && !loading ? (
                            <div className="flex justify-center items-center w-full py-20">
                                <ProductsNotFound />
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4">
                                {products.map((product) => (
                                    <div key={product.id} className="w-40 md:w-40 lg:w-54 xl:w-56 2xl:w-62">
                                        <ProductCard product={product} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                {products.length > 0 && visibleProducts < productTotal && (
                    <ButtonSecondary data="View more products" />
                )}
            </div>
        </div>
    )
}
