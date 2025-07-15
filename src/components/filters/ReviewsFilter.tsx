import API from "@/api/services";
import { useModalStore } from "@/store/ModalStore";
import { useProductStore } from "@/store/ProductStore";
import type { Product } from "@/types";

export const ReviewsFilter = () => {
    const { closeModal } = useModalStore();
    const { page, setProducts, setProductTotal, setPage, setVisibleProducts } = useProductStore();

    const handleReviewsChange = async (e: React.ChangeEvent<HTMLInputElement>) => {

        const selectedOption = e.target.value;
        const response = await API.Product.all();
        const productsFiltered = response.products.filter((product: Product) => Math.floor(product.rating) === (Number(selectedOption)));

        setPage(page);
        setVisibleProducts(productsFiltered.length);
        setProductTotal(productsFiltered.length);
        setProducts(productsFiltered);
        closeModal();
    };

    return (
        <div>
            <div className="ratings py-2">
                <h3 className="text-md font-bold py-3">By Review</h3>
                <div className="rating-5 pl-4 text-gray-500">
                    <input
                        type="radio"
                        name="rating"
                        id="rating-5"
                        value="5"
                        onChange={(e) => handleReviewsChange(e)}
                        className="mr-2 accent-purple-dark " />
                    <label htmlFor="rating">
                        <span className="before:content-['⭐⭐⭐⭐⭐']"></span>
                    </label>
                </div>
                <div className="rating-4 pl-4 text-gray-500">
                    <input
                        type="radio"
                        name="rating"
                        id="rating-4"
                        value="4"
                        onChange={(e) => handleReviewsChange(e)}
                        className="mr-2 accent-purple-dark " />
                    <label htmlFor="rating">
                        <span className="before:content-['⭐⭐⭐⭐']"></span>
                    </label>
                </div>
                <div className="rating-3 pl-4 text-gray-500">
                    <input
                        type="radio"
                        name="rating"
                        id="rating-3"
                        value="3"
                        onChange={(e) => handleReviewsChange(e)}
                        className="mr-2 accent-purple-dark " />
                    <label htmlFor="rating">
                        <span className="before:content-['⭐⭐⭐']"></span>
                    </label>
                </div>
                <div className="rating-2 pl-4 text-gray-500">
                    <input
                        type="radio"
                        name="rating"
                        id="rating-2"
                        value="2"
                        onChange={(e) => handleReviewsChange(e)}
                        className="mr-2 accent-purple-dark " />
                    <label htmlFor="rating">
                        <span className="before:content-['⭐⭐']"></span>
                    </label>
                </div>
                <div className="rating-1 pl-4 text-gray-500">
                    <input
                        type="radio"
                        name="rating"
                        id="rating-1"
                        value="1"
                        onChange={(e) => handleReviewsChange(e)}
                        className="mr-2 accent-purple-dark " />
                    <label htmlFor="rating">
                        <span className="before:content-['⭐']"></span>
                    </label>
                </div>
            </div>
        </div>
    )
}
