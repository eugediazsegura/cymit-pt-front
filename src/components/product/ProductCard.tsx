import img from "@/assets/image-product.png"
import heart from "@/assets/icons/heart-wishlist.svg"
export const ProductCard = () => {
    return (
        <div className="product-card relative hover:bg-purple-ultralight rounded-2xl p-3 group">
            <div className="wishlist-icon opacity-0 group-hover:opacity-100 absolute top-5 right-5">
                <button><img src={heart} alt="wishlist icon" /></button>
            </div>
            <div className="float-discount bg-pink-light rounded-full w-8 h-8 flex items-center justify-center absolute top-px left-px">
                <span className="text-sm font-bold text-white">50%</span>
            </div>
            <div className="product-image border-2 border-purple-light rounded-2xl w-fit bg-white">
                <img src={img} alt="image product" />
            </div>
            <div className="product-info mt-4 w-56">
                <div className="extra-info flex justify-between">
                    <span className="category text-stone-400"> Categoria</span>
                    <span className="rating font-bold before:content-['⭐']">3.8</span>
                </div>
                <p className="text-base/4 py-4">Nombre Super Largo de Un Producto</p>
                <p className="text-xl font-bold text-pink-light py-2">€ 999</p>
            </div>

        </div>
    )
}
