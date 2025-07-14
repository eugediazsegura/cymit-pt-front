import SearchIcon from '@/assets/icons/search.svg'
import { useProductStore } from '@/store/ProductStore'
import API from "@/api/services";
import { useState } from 'react';



export const SearchBar = () => {
    const { setProducts, setProductTotal } = useProductStore();
    const [query, setQuery] = useState('');

    const handleSearch = async () => {
        if (!query.trim()) return;
        const response = await API.Product.search(query);
        setProducts(response.products);
        console.log(response.products);
        setProductTotal(response.productTotal);
    }

    return (
        <div className="search-container relative w-2/3 lg:w-1/2">
            <input
                type="text"
                placeholder="Search Products"
                id="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') handleSearch(); }}
                className="bg-purple-light placeholder:text-purple-dark placeholder:text-lg placeholder:font-medium py-4 px-4 rounded-4xl w-full  focus:outline-none focus:ring-2 focus:ring-purple-dark" />
            <button className='cursor-pointer group' onClick={handleSearch}>
                <img src={SearchIcon} className="absolute top-1/2 right-2 transform -translate-y-1/2 transition-all group-hover:border-purple-dark group-hover:bg-white rounded-full p-2" alt="Search Icon" /></button>
        </div>
    )
}
