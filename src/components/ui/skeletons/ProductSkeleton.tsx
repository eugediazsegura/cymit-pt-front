
export const ProductSkeleton = () => {
    return (
        <div className="relative w-52 p-6 m-2 bg-white rounded-xl border border-violet-200 shadow-sm flex flex-col gap-1 animate-pulse">
            <div className="absolute -top-3 -left-3">
                <div className="bg-pink-300 w-9 h-9 rounded-full flex items-center justify-center">
                    <div className="w-7 h-4 bg-pink-200 rounded" />
                </div>
            </div>
            <div className="flex items-center justify-center min-h-[140px]">
                <div className="w-28 h-28 bg-gray-200 rounded-md mx-2" />
            </div>
            <div className="h-4 w-14 bg-gray-200 rounded"></div>
            <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-yellow-100 rounded-full" />
                <div className="h-4 w-8 bg-gray-200 rounded"></div>
            </div>
            <div className="h-4 w-3/4 bg-gray-200 rounded my-1"></div>
            <div className="h-4 w-2/5 bg-gray-200 rounded"></div>
            <div className="h-5 w-16 bg-pink-100 rounded"></div>
        </div>
    )
}
