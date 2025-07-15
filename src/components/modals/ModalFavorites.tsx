import TrashBinIcon from "@/assets/icons/trashbin.svg";
import { IconButton } from "@/components/ui/IconButton";
import { useFavs } from "@/hooks/useFavs"
interface ModalCartProps {
    onClose: () => void
}
export default function ModalFavorites({ onClose }: ModalCartProps) {
    void onClose;
    const { favs, removeFromFavs } = useFavs()
    return (
        <div className="bg-white p-6 rounded-md shadow-md w-[100vw] md:w-[400px] max-h-[90vh] overflow-y-auto z-60">
            {favs.length === 0 ? (
                <p>There are no favorite products.</p>
            ) : (

                <ul className="space-y-3">
                    {favs.map((product) => (
                        <li key={product.id} className=" pb-2 flex items-center justify-between">
                            <div className="product-image border-2 border-purple-light rounded-2xl bg-white w-12 h-12 md:w-20 md:h-20">
                                <img src={product.thumbnail} alt="image product" />
                            </div>
                            <p className="text-xs md:text-sm w-28 font-normal">{product.title}</p>
                            <p className="text-sm  font-bold">€{product.price}</p>
                            <IconButton onClick={() => removeFromFavs(product.id)} icon={TrashBinIcon} ariaLabel="Remove product from cart"></IconButton>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}