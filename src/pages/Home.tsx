import { BannerParallax } from "@/components/ui/BannerParallax";
import { ProductListContainer } from "@/components/product/ProductListContainer";

const Home = () => {
    return (
        <div className="home">
            <BannerParallax />
            <ProductListContainer />
        </div>
    )
}

export default Home;