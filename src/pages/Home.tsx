import { Sidebar } from "@/components/layout/Sidebar";
import { ProductList } from "@/components/product/ProductList";
import { BannerParallax } from "@/components/ui/BannerParallax";
import { ButtonSecondary } from "@/components/ui/ButtonSecondary";


const Home = () => {
    return (
        <div className="home">
            <BannerParallax />
            <div className="products-container  flex flex-col items-center">
                <div className=" flex justify-between my-14">
                    <Sidebar />
                    <ProductList />
                </div>
                <ButtonSecondary onClick={() => { }} data="View more products" />
            </div>

        </div>
    )
}

export default Home;