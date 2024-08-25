import { useState } from "react"
import { FiSearch } from "react-icons/fi"

export default function Searchbar({ onSearch }){
    const [searchTerm, setSearchTerm] = useState('')

    const handleSubmit= (e)=>{
        e.preventDefault()
        setSearchTerm(e.target.value);
        onSearch(e.target.value);

        
    }

    return(
    <form onSubmit={handleSubmit} autoComplete="off" className="p-4 text-gray-500 focus-within:text-gray-800">
        <label htmlFor="search-field" className="sr-only"> 
            Search All Podcasts 
        </label>
        <div className="flex flex-row justify-start items-center rounded-md">
            <FiSearch className="w-5 h-5 ml-4" />
            <input
            name="search-field"
            autoComplete="off"
            id="search-field"
            placeholder="Search"
            type="search"
            value={searchTerm}
            onChange={handleSubmit}
            className=" flex-1 bg-transparent border-none
            outline-none placeholder:bg-gray-700 text-base text-gray-900 p-4"
            />

        </div>
    </form>
    )
}