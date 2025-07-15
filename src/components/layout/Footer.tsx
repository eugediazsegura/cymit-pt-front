import shippingImg from '@/assets/icons/shipping.svg'
import paymentImg from '@/assets/icons/payment.svg'
import supportImg from '@/assets/icons/support.svg'
const footer = {

    links: [
        {
            label: 'Free Shipping',
            description: 'Free shipping on all orders over $50',
            img: shippingImg
        },
        {
            label: 'Flexible Payment',
            description: 'Flexible payment options',
            img: paymentImg
        },
        {
            label: '24 hs Support',
            description: 'Customer support available 24 hours a day',
            img: supportImg
        }
    ]
}
export const Footer = () => {
    return (
        <div className='flex  flex-col md:flex-row justify-between items-center my-10 md:my-32'>
            {footer.links.map((link) => (
                <div key={link.label} className="flex flex-row items-center shadow-md p-6 w-full h-32 md:w-1/3">
                    <img className='mr-4' src={link.img} alt={link.label} />
                    <div>
                        <h3 className='font-bold'>{link.label}</h3>
                        <p className='text-sm text-gray-500'>{link.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
