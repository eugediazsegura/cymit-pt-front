import { CategoriesFilter } from "../filters/CategoriesFilter"
import { ReviewsFilter } from "../filters/ReviewsFilter"


export const Sidebar = () => {
    return (
        <div className="hidden lg:block sidebar w-1/3 pl-4 pr-20">
            <CategoriesFilter />
            <ReviewsFilter />
        </div>

    )
}
