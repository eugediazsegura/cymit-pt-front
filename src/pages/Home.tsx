import { BannerParallax } from "@/components/ui/BannerParallax";
import { ProductListContainer } from "@/features/ProductListContainer";

const Home = () => {
    return (
        <div className="home">
            <BannerParallax />
            <ProductListContainer />
        </div>
    )
}

export default Home;