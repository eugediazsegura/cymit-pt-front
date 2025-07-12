
export const ReviewsFilter = () => {
    return (
        <div>
            <div className="ratings py-2">
                <h3 className="text-md font-bold py-3">By Review</h3>
                <div className="rating-5 pl-4 text-gray-500">
                    <input type="radio" name="rating" id="rating-5" className="mr-2 accent-purple-dark " />
                    <label htmlFor="rating">
                        <span className="before:content-['⭐⭐⭐⭐⭐']"></span>
                    </label>
                </div>
                <div className="rating-4 pl-4 text-gray-500">
                    <input type="radio" name="rating" id="rating-4" className="mr-2 accent-purple-dark " />
                    <label htmlFor="rating">
                        <span className="before:content-['⭐⭐⭐⭐']"></span>
                    </label>
                </div>
                <div className="rating-3 pl-4 text-gray-500">
                    <input type="radio" name="rating" id="rating-3" className="mr-2 accent-purple-dark " />
                    <label htmlFor="rating">
                        <span className="before:content-['⭐⭐⭐']"></span>
                    </label>
                </div>
                <div className="rating-2 pl-4 text-gray-500">
                    <input type="radio" name="rating" id="rating-2" className="mr-2 accent-purple-dark " />
                    <label htmlFor="rating">
                        <span className="before:content-['⭐⭐']"></span>
                    </label>
                </div>
                <div className="rating-1 pl-4 text-gray-500">
                    <input type="radio" name="rating" id="rating-1" className="mr-2 accent-purple-dark " />
                    <label htmlFor="rating">
                        <span className="before:content-['⭐']"></span>
                    </label>
                </div>
            </div>
        </div>
    )
}
