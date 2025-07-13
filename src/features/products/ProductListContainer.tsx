import { Sidebar } from "@/components/layout/Sidebar";
import { ProductCard } from "@/components/product/ProductCard";
import { ButtonSecondary } from "@/components/ui/ButtonSecondary";
import { useProductStore } from "./productStore.";
import API from "@/api/services";
import { useEffect } from "react";
import { ProductSkeleton } from "@/components/ui/skeletons/ProductSkeleton";
import { FilterSkeleton } from "@/components/ui/skeletons/FilterSkeleton";

export const ProductListContainer = () => {
    const { products,
        loading,
        page,
        setProducts,
        setLoading,
        setPage } = useProductStore();

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const response = await API.Product.paginated(page, 16);
            console.log(response);
            setProducts(response);
            setLoading(false);
        };
        fetchProducts();
    }, []);

    const handleLoadMore = async () => {
        setLoading(true);
        const nextPage = page + 1;
        const response = await API.Product.paginated(nextPage, 16);
        setProducts([...products, ...response]);
        setPage(nextPage);
        setLoading(false);

    };

    return (
        <div className="products-container  flex flex-col items-center">
            <div className=" flex justify-between my-14">
                {!products || loading
                    ? <FilterSkeleton />
                    : <Sidebar />
                }
                <div className="w-full grid grid-cols-2 lg:grid-cols-4 place-items-center gap-4">
                    {!products || loading ? (
                        Array(products?.length || 16).fill(null).map((_, index) => (
                            <div className="product-skeleton" key={index}>
                                <ProductSkeleton />
                            </div>
                        ))
                    ) : (
                        products.map((product) => (
                            <div key={product.id} className="w-full m-4">
                                <ProductCard product={product} addToCart={() => { }} />
                            </div>
                        ))
                    )}
                </div>
            </div>
            {products?.length > 0 && <ButtonSecondary onClick={handleLoadMore} data="View more products" />}
        </div>
    )
}
