import { Sidebar } from "@/components/layout/Sidebar";
import { ProductCard } from "@/components/product/ProductCard";
import { ButtonSecondary } from "@/components/ui/ButtonSecondary";
import { useProductStore } from "./productStore.";
import API from "@/api/services";
import { useEffect } from "react";

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
                <Sidebar />
                <div className="w-full grid grid-cols-2 lg:grid-cols-4 place-items-center gap-4">
                    {loading ? (
                        Array(products ? products.length : 16).fill(null).map((_, index) => (
                            <div className="product-skeleton" key={index}>

                            </div>
                        ))
                    ) : (
                        products.map((product) => (
                            <div key={product.id} className="w-full">
                                <ProductCard product={product} addToCart={() => { }} />
                            </div>
                        ))
                    )}
                </div>
            </div>
            { }
            <ButtonSecondary onClick={handleLoadMore} data="View more products" />
        </div>
    )
}
