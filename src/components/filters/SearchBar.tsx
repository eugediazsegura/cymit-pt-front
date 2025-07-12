import SearchIcon from '@/assets/icons/search.svg'

export const SearchBar = () => {
    return (
        <div className="search-container relative w-1/2">
            <input type="text" placeholder="Search Products" id="search" className="bg-purple-light placeholder:text-purple-dark placeholder:text-lg placeholder:font-medium py-3 px-5 rounded-4xl w-full  focus:outline-none focus:ring-2 focus:ring-purple-dark " />
            <img src={SearchIcon} className="absolute top-1/2 right-3 transform -translate-y-1/2" alt="Search Icon" />
        </div>
    )
}
