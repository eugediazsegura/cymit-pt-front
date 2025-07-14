import { ButtonBack } from '@/components/ui/ButtonBack'
import image from '@/assets/1.webp'
import { renderStars } from '../../features/products/utils'
import { ButtonAddToCart } from '@/components/ui/ButtonAddToCart'
import { ButtonFavorite } from '@/components/ui/ButtonFavorite'
import { Tabs } from '@/components/ui/Tabs'
import { useProductStore } from '@/store/ProductStore'
export const ProductPageContent = ({ id_product }: { id_product?: number }) => {
    // const { products } = useProductStore();
    // const { product } = products.find(product => product.id === id_product);
    return (
        <div className="product-page flex flex-col">
            <ButtonBack />
            <div className='product-container flex flex-row m-4'>
                <div className='image-product border-2 border-purple-light rounded-2xl w-1/2 mt-4 mb-6'>
                    <img src={image}></img>
                </div>
                <div className='product-info-container flex flex-col w-1/2 m-20'>
                    <p className='text-sm text-gray-500'>Category</p>
                    <h1 className='text-4xl font-bold mt-4 my-2'>Product Name</h1>
                    <div className='score flex items-center text-lg'>{renderStars(4)}<span className='text-md text-black mx-2'>4.8</span></div>
                    <p className='text-4xl font-bold my-6 text-pink-light'>€24.99</p>
                    <p className='text-md text-gray-500 my-4'>Nutritious cat food formulated to meet the dietary needs of your feline friend.</p>
                    <div className='flex group product-add-to-cart items-center my-8 gap-4 self-start'>
                        <ButtonAddToCart product={{
                            id: 1,
                            title: "string",
                            category: "string",
                            price: 1,
                            discountPercentage: 1,
                            thumbnail: "string",
                            rating: 4,
                        }} />
                        <ButtonFavorite product={{
                            id: 1,
                            title: "string",
                            category: "string",
                            price: 1,
                            discountPercentage: 1,
                            thumbnail: "string",
                            rating: 4,
                        }} />
                    </div>
                    <div className='extra-info my-10'>
                        <div><span className='font-bold text-lg'>Brand: </span>La marca</div>
                        <div><span className='font-bold text-lg'>SKU: </span>La marca</div>
                        <div><span className='font-bold text-lg'>Tags: </span>La marca</div>
                    </div>
                </div>
            </div>
            <div className='tabs'>
                <Tabs tabs={[
                    { label: 'Description', content: " product.description" },
                    { label: 'Reviews', content: <p>Las reseñas</p> },
                    { label: 'Additional information', content: <p>Información adicional</p> },
                ]}></Tabs>
            </div>
        </div>
    )
}
