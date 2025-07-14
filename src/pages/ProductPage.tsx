import { ProductPageContent } from "@/components/product/ProductPageContent";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import API from '@/api/services'
import { useProductStore } from '@/store/ProductStore'

const ProductPage = () => {
    const { productComplete, setProductComplete } = useProductStore();
    const { id } = useParams() as { id: string };

    const fetchProduct = async (id: string) => {
        const response = await API.Product.single(id.toString());
        setProductComplete(response);
    }
    useEffect(() => {
        fetchProduct(id);
    })
    return (
        productComplete &&
        <ProductPageContent />
    )
}

export default ProductPage;