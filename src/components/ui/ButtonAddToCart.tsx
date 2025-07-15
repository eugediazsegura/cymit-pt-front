import { useCart } from "@/hooks/useCart";
import type { Product } from "@/types";

type ButtonAddToCartProps = {
    product: Product
}

export const
    ButtonAddToCart = ({ product }: ButtonAddToCartProps) => {
        const { addToCart } = useCart();
        return (
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product)
                }}
                className="bg-pink-light text-white self-center  rounded-full w-fit py-2 px-4 lg:px-6 cursor-pointer hover:bg-pink-dark group-[.product-add-to-cart]:text-lg  group-[.product-add-to-cart]:px-10">Add to cart</button>
        )
    }
