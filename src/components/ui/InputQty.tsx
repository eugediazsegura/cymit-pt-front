import { useCart } from '@/hooks/useCart';
import React from 'react'

type InputQtyProps = {
    quantity: number;
    productId: number;
}

export const InputQty = ({ quantity, productId }: InputQtyProps) => {
    const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

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
        <input min={0} type="number" name="quantity" id="quantity" value={quantity} className="w-12" onChange={(e) => onQtyChange(e, quantity, productId)} />
    )
}
