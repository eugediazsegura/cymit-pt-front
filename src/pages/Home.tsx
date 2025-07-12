import { Sidebar } from "@/components/layout/Sidebar";
import { ProductList } from "@/components/product/ProductList";
import { BannerParallax } from "@/components/ui/BannerParallax";


const Home = () => {
    return (
        <div className="height-simulate">
            <BannerParallax />
            <div className=" flex justify-between my-14">
                <Sidebar />
                <ProductList />
            </div>

        </div>
    )
}

export default Home;