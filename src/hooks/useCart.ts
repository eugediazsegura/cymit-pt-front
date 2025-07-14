import { useState, useEffect, useMemo } from 'react'
import type { Product } from '@/types'
interface CartItem extends Product {
    quantity: number
}

export type Cart = {
    cart: CartItem[],
    addToCart: (item: Product) => void,
    removeFromCart: (id: Product['id']) => void,
    decreaseQuantity: (id: Product['id']) => void,
    increaseQuantity: (id: Product['id']) => void,
    clearCart: () => void,
    isEmpty: boolean,
    cartTotal: number
}
export const useCart = (): Cart => {
    const initialCart = () => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }

    const [cart, setCart] = useState(initialCart)

    const MIN_ITEMS = 1

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
            const newItem: CartItem = { ...item, quantity: 1 }
            //item.quantity = 1
            setCart([...cart, newItem])
        }
    }

    function removeFromCart(id: Product['id']) {
        setCart((prevCart: CartItem[]) => prevCart.filter(Product => Product.id !== id))
    }

    function decreaseQuantity(id: Product['id']) {
        const updatedCart = cart.map((item: CartItem) => {
            if (item.id === id && item.quantity > MIN_ITEMS) {
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

    function clearCart() {
        setCart([])
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