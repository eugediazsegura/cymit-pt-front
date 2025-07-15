import {  useEffect } from 'react'
import type { Product } from '@/types'
import { useFavsStore } from '@/store/FavsStore'

export const useFavs = () => {
    const { favs, setFavs, clearFavs} = useFavsStore()

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
        setFavs(favs.filter(product => product.id !== id))
    }

    return {
        favs,
        addToFavs,
        removeFromFavs,
        clearFavs
    }

}