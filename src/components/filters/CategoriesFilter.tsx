
export const CategoriesFilter = () => {
    return (
        <div>
            <div className="border-b-4 border-purple-dark px-2 py-3">
                <h3 className="text-xl font-bold">Filter Options</h3>
            </div>
            <div className="categories py-4">
                <h3 className="text-md font-bold py-3">By Categories</h3>
                <div className="category pl-4 text-gray-500">
                    <input type="radio" name="category" id="category" className="mr-2 accent-purple-dark " />
                    <label htmlFor="category">Category</label>
                </div>
            </div>
        </div>
    )
}
