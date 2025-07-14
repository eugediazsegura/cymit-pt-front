
export const FilterSkeleton = () => {
    return (
        <>
            <div className="hidden lg:block sidebar w-1/3 rounded-xl bordershadow-sm animate-pulse">
                <div className="h-6 w-32 bg-gray-200 rounded mb-6"></div>
                <div className="h-1 w-64 bg-violet-100 rounded mb-4"></div>
                <div className="h-4 w-20 bg-gray-200 rounded mb-3"></div>
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-4 h-4 bg-gray-200 rounded-full" />
                    <div className="h-4 w-20 bg-gray-100 rounded" />
                </div>
                <div className="h-4 w-20 bg-gray-200 rounded mb-3"></div>
            </div>
        </>
    );
}
