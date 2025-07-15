import { ButtonBack } from '@/components/ui/ButtonBack'
import { renderStars } from '../../common/utils'
import { ButtonAddToCart } from '@/components/ui/ButtonAddToCart'
import { ButtonFavorite } from '@/components/ui/ButtonFavorite'
import { Tabs } from '@/components/ui/Tabs'
import { useProductStore } from '@/store/ProductStore'
import type { ProductComplete } from '@/types'
import { TextTab } from '../ui/TextTab'
import { Reviews } from '../ui/Reviews'
export const ProductPageContent = () => {
    const { productComplete } = useProductStore() as { productComplete: ProductComplete };
    const getDescriptionRows = () => {
        const { dimensions } = productComplete;
        return [
            { name: "Width", value: `${dimensions.width} cm` },
            { name: 'Height', value: `${dimensions.height} cm` },
            { name: 'Depth', value: `${dimensions.depth} cm` },
            { name: 'Weight', value: `${productComplete?.weight} kg` },
        ];
    }
    const getReviewsRows = () => {
        return [
            { name: 'Ratings', value: `${productComplete?.rating}` },
            { name: "Reviews", value: `${productComplete?.reviews}` },
        ];
    }

    const getAdditionalInfoRows = () => {
        return [
            { name: 'Return Policy', value: `${productComplete?.returnPolicy}` },
            { name: 'Shipping Information', value: `${productComplete?.shippingInformation}` },
            { name: 'Warranty Information', value: `${productComplete?.warrantyInformation}` },
        ];
    }
    return (
        <div className="product-page flex flex-col">
            <ButtonBack />
            <div className='product-container flex flex-col items-center w-full lg:flex-row lg:m-4'>
                <div className='image-product border-2 border-purple-light rounded-2xl lg:w-1/2 mt-4 mb-6'>
                    <img src={
                        productComplete?.images[0]
                    }></img>
                </div>
                <div className='product-info-container flex flex-col lg:w-1/2 lg:m-20'>
                    <p className='text-sm text-gray-500'>{productComplete?.category}</p>
                    <h1 className='text-4xl font-bold mt-4 my-2'>{productComplete?.title}</h1>
                    <div className='score flex items-center text-lg'>{renderStars(4)}<span className='text-md text-black mx-2'>{productComplete?.rating}</span></div>
                    <p className='text-4xl font-bold my-6 text-pink-light'>€{productComplete?.price}</p>
                    <p className='text-md text-gray-500 my-4'>{productComplete?.description}</p>
                    <div className='flex group product-add-to-cart items-center my-8 gap-4 self-center lg:self-start'>
                        <ButtonAddToCart product={productComplete} />
                        <ButtonFavorite product={productComplete} />
                    </div>
                    <div className='extra-info my-10'>
                        <div><span className='font-bold text-lg'>Brand: </span>{productComplete?.brand}</div>
                        <div><span className='font-bold text-lg'>SKU: </span>{productComplete?.sku}</div>
                        <div><span className='font-bold text-lg'>Tags: </span>{productComplete?.tags.join(", ")}</div>
                    </div>
                </div>
            </div>
            <div className='tabs'>
                <Tabs tabs={[
                    { label: 'Description', content: <TextTab row={getDescriptionRows()} /> },
                    { label: 'Reviews', content: <Reviews reviews={productComplete?.reviews} /> },
                    { label: 'Additional information', content: <TextTab row={getAdditionalInfoRows()} /> },
                ]}></Tabs>
            </div>
        </div>
    )

}
