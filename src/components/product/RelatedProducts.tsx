import { useProductStore } from "@/store/ProductStore"
import { ProductCard } from "./ProductCard"
import API from "@/api/services";
import { useEffect } from "react";


export const RelatedProducts = () => {
    const { productComplete, products, setProducts } = useProductStore();

    const fetchRelatedProducts = async () => {
        if (!productComplete) return;
        const response = await API.Product.relatedProducts(productComplete.category);
        setProducts(response.products.slice(0, 4));
    }

    useEffect(() => {
        fetchRelatedProducts();

    }, []);

    return (
        <div className="related-products mt-8 flex flex-col">
            <h2 className="text-2xl font-bold mb-8 self-center">Related Products</h2>
            <div className="flex flex-row flex-wrap justify-between">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

        </div>
    )
}
