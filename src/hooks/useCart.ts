import { useEffect, useMemo } from 'react'
import type { CartItem, Product } from '@/types'
import { useCartStore } from '@/store/CartStore';

export const useCart = () => {
    const { cart, setCart, clearCart } = useCartStore();

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    function addToCart(item: Product) {
        const itemExists = cart.findIndex((Product: Product) => Product.id === item.id)
        if (itemExists >= 0) { // existe en el carrito
            const updatedCart = [...cart]
            updatedCart[itemExists].quantity++
            setCart(updatedCart)
        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    }

    function removeFromCart(id: Product['id']) {
        setCart(cart.filter(product => product.id !== id))
    }

    function decreaseQuantity(id: Product['id']) {
        const updatedCart = cart.map((item: CartItem) => {
            if (item.id === id && item.quantity > 1 ) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        })
        setCart(updatedCart)
    }

    function increaseQuantity(id: Product['id']) {
        const updatedCart = cart.map((item: CartItem) => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })
        setCart(updatedCart)
    }


    // State Derivado
    const isEmpty = useMemo(() => cart.length === 0, [cart])
    const cartTotal = useMemo(() => cart.reduce((total: number, item: { quantity: number; price: number }) => total + (item.quantity * item.price), 0).toFixed(2), [cart])

    return {
        cart,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        clearCart,
        isEmpty,
        cartTotal
    }
}