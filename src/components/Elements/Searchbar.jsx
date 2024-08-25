import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FiSearch } from "react-icons/fi"

export default function Searchbar(){

    return(
    <form autoComplete="off" className="p-4 text-gray-500 focus-within:text-gray-800">
        <label htmlFor="search-field" className="sr-only"> 
            Search All Podcasts 
        </label>
        <div className="flex flex-row justify-start items-center ">
            <FiSearch className="w-5 h-5 ml-4" />
            <input
            name="search-field"
            autoComplete="off"
            id="search-field"
            placeholder="Search"
            type="search"
            value=''
            onChange={()=>{}}
            className=" flex-1 bg-transparent border-none
            outline-none placeholder:bg-gray-700 text-base text-white p-4"
            />

        </div>
    </form>
    )
}