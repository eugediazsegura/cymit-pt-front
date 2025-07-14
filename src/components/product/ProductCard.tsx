import emptyHeart from "@/assets/icons/heart-wishlist.svg"
import fillHeart from "@/assets/icons/heart-wishlist-fill.svg"
import type { Product } from '@/types'
import { formatDiscountedPrice } from "@/features/products/utils"
import { useCart } from "@/hooks/useCart"
import { useFavs } from "@/hooks/useFavs"

type ProductCardProps = {
    product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
    const { addToCart } = useCart();
    const { addToFavs, removeFromFavs, favs } = useFavs();
    const handleFavorite = () => {
        product.favorite = !product.favorite
        if (product.favorite) {
            addToFavs(product)
        } else {
            removeFromFavs(product.id)
        }
    }
    product.favorite = favs.some(fav => fav.id === product.id)
    return (
        <div className="flex flex-col items-center product-card relative lg:hover:bg-purple-ultralight rounded-2xl p-3 group">
            <div className="wishlist-icon opacity-0 group-hover:opacity-100 absolute top-5 right-5">
                <button><img src={product.favorite ? fillHeart : emptyHeart} data-favorite={product.favorite} alt="wishlist icon" onClick={handleFavorite} /></button>
            </div>
            {product.discountPercentage > 10 && (
                <div className="float-discount bg-pink-light rounded-full w-8 h-8 flex items-center justify-center absolute top-px left-px">
                    <span className="text-xs lg:text-sm font-bold text-white">{formatDiscountedPrice(product.discountPercentage)}%</span>
                </div>)}
            <div className="product-image border-2 border-purple-light rounded-2xl bg-white w-28 h-28 md:w-34 md:h-34 lg:w-48 lg:h-48 xl:w-50 xl:h-50 2xl:w-58 2xl:h-58">
                <img src={product.thumbnail} alt="image product" />
            </div>
            <div className="product-info mt-4  w-30 md:w-36 lg:w-50 xl:w-52 2xl:w-60">
                <div className="extra-info flex justify-between">
                    <span className="text-sm category text-stone-400"> {product.category}</span>
                    <span className="text-sm rating font-bold before:content-['⭐']">{product.rating}</span>
                </div>
                <p className="min-h-[4rem] text-sm/4 md:text-base/4 py-4">{product.title}</p>
                <p className="text-xl font-bold text-pink-light py-2">€{product.price}</p>
                <button onClick={() => addToCart(product)} className="bg-pink-light text-white py-2 rounded-full w-full hover:bg-pink-dark">Add to cart</button>
            </div>
        </div>
    )
}
