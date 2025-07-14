import { useState, useEffect, useMemo } from 'react'
import type { Product } from '@/types'

export type Favs = {
    favs: Product[],
    addToFavs: (item: Product) => void,
    removeFromFavs: (id: Product['id']) => void,
}
export const useFavs = (): Favs => {
    const initialFavs = () => {
        const localStorageFavs = localStorage.getItem('favs')
        return localStorageFavs ? JSON.parse(localStorageFavs) : []
    }

    const [favs, setFavs] = useState(initialFavs)

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(favs))
    }, [favs])

    function addToFavs(item: Product) {
        const itemExists = favs.findIndex((Product: Product) => Product.id === item.id)
        if (itemExists != 0) {
            const newItem: Product = { ...item }
            setFavs([...favs, newItem])
        }
    }

    function removeFromFavs(id: Product['id']) {
        setFavs((prevFavs: Product[]) => prevFavs.filter(Product => Product.id !== id))
    }

    return {
        favs,
        addToFavs,
        removeFromFavs,
    }

}