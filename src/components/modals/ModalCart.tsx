import TrashBinIcon from "@/assets/icons/trashbin.svg";
import { IconButton } from "@/components/ui/IconButton";
import { useCart } from "@/hooks/useCart";
interface ModalCartProps {
    onClose: () => void
}
export default function ModalCart({ onClose }: ModalCartProps) {
    const { removeFromCart, cart, cartTotal, increaseQuantity, decreaseQuantity } = useCart();
    const onQtyChange = (e: React.ChangeEvent<HTMLInputElement>, currentQty: number, productId: number) => {
        const value = parseInt(e.target.value) || 0;
        if (value == 0) {
            removeFromCart(currentQty);
        }
        if (value > currentQty) {
            increaseQuantity(productId);
        }
        if (value < currentQty) {
            decreaseQuantity(productId);
        }
    }
    return (
        <div className="bg-white p-6  rounded-md shadow-md w-[100vw] md:w-[400px] max-h-[90vh] overflow-y-auto z-60">
            {cart.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <>
                    <ul className="space-y-3">
                        {cart.map((product) => (
                            <li key={product.id} className="border-b border-purple-dark pb-2 flex items-center justify-between">
                                <div className="product-image border-2 border-purple-light rounded-2xl bg-white w-12 h-12 md:w-20 md:h-20">
                                    <img src={product.thumbnail} alt="image product" />
                                </div>
                                <input min={0} type="number" name="quantity" id="quantity" value={product.quantity} className="w-12" onChange={(e) => onQtyChange(e, product.quantity, product.id)} />
                                <p className=" text-xs md:text-sm w-28 font-normal ">{product.title}</p>
                                <p className="text-sm  font-bold">€{product.price}</p>
                                <IconButton onClick={() => removeFromCart(product.id)} icon={TrashBinIcon} ariaLabel="Remove product from cart"></IconButton>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-between mt-4 font-bold">
                        <span>Total a Pagar</span>
                        <span>€{cartTotal}</span>
                    </div>
                    <div className="flex justify-center mt-4 flex-col gap-2 px-6">
                        <button className="bg-pink-light text-white py-2 px-4 rounded-full w-full hover:bg-pink-dark">Buy Now</button>
                        <button className="bg-white border border-pink-light text-pink-light py-2 px-4 rounded-full w-full hover:bg-pink-dark">Remove all items</button>
                    </div>
                </>
            )}
        </div>
    )
}