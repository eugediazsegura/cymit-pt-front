import { Sidebar } from "@/components/layout/Sidebar";
//import { ProductCard } from "./ProductCard"
import { ButtonSecondary } from "@/components/ui/ButtonSecondary";


export const ProductListContainer = () => {
    return (
        <div className="products-container  flex flex-col items-center">
            <div className=" flex justify-between my-14">
                <Sidebar />
                <div className="w-full grid grid-cols-2 lg:grid-cols-4 place-items-center items-start gap-4">
                </div>
            </div>
            <ButtonSecondary onClick={() => { }} data="View more products" />
        </div>
    )
}
