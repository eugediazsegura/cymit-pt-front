import { formarDate, renderStars } from "@/common/utils"
import type { Review } from "@/types"


type ReviewsProps = {
    reviews: Review[]
}

export const Reviews = ({ reviews }: ReviewsProps) => {
    return (
        <div className="flex flex-col py-6">
            {reviews.map((review, index) => (
                <div key={index} className="my-3">
                    <div className="mr-2">{renderStars(review.rating)}</div>
                    <p className="text-sm py-4">{review.comment}</p>
                    <p className="text-sm font-bold">{review.reviewerName}</p>
                    <p className="text-sm text-gray-500">{formarDate(review.date)}</p>
                </div>
            ))}
        </div>
    )
}

