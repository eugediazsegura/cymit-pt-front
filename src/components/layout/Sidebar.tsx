import { CategoriesFilter } from "../filters/CategoriesFilter"
import { ReviewsFilter } from "../filters/ReviewsFilter"
import { useCategoriesStore } from "@/store/CategoriesStore";
import { FilterSkeleton } from "../ui/skeletons/FilterSkeleton";


export const Sidebar = () => {
    const { categories, loadingCategories } = useCategoriesStore();

    return (
        <div className="hidden lg:block sidebar w-xl pl-4 pr-20">
            {!categories || loadingCategories ?
                <FilterSkeleton /> :
                <CategoriesFilter />
            }
            <ReviewsFilter />
        </div>

    )
}
