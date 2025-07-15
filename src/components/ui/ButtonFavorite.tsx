import emptyHeart from "@/assets/icons/heart-wishlist.svg"
import fillHeart from "@/assets/icons/heart-wishlist-fill.svg"
import type { Product } from "@/types"
import { useFavs } from "@/hooks/useFavs"
type ButtonFavoriteProps = {
    product: Product

}
export const ButtonFavorite = ({ product }: ButtonFavoriteProps) => {
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
        <button className="favorite-button cursor-pointer"><img src={product.favorite ? fillHeart : emptyHeart} data-favorite={product.favorite} alt="wishlist icon" onClick={handleFavorite} /></button>
    )
}
