import { ProductCard } from "./ProductCard"

export const ProductList = () => {
    return (
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 place-items-center items-start gap-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )
}
