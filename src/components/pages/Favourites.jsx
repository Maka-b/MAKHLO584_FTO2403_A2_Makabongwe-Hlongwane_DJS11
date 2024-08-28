import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux";


const FavouritesCard =({podcast, i})=>(
    <div className="w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
      <div className="flex-1 flex flex-row justify-between items-center">
        <img className="w-20 h-20 rounded-lg" src={podcast.image} alt={podcast.title} />
        <div className="flex flex-1 flex-col justify-center mx-3">  
                <p className="text-xl font-bold">{podcast.title}</p>
        </div>
      </div>
    </div>
)


export default function Favourites( {viewType} ){
    const location = useLocation()
    const [favouritePods, setFavouritePods] =useState([])
    const isClicked = useSelector((state)=> state.click.isClicked)

    useEffect(()=> {
        const savedFavorites = localStorage.getItem('favourites')
        if (savedFavorites){
            setFavouritePods(JSON.parse(savedFavorites))
            console.log('changed')
        }
    },[isClicked, location])
    
    return(
        <div className={`${viewType? viewType: null} xl:ml-6 ml-0 xl:mb-0 mb-6  xl:max-w-[500px] max-w-full w-full flex flex-col   bg-black bg-opacity-80`}>
            <div className="w-full flex flex-col">
                <div className="flex flex-row justify-between items-center">
                    <h2 className="hidden sm:block font-bold text-2xl">Favourites</h2>
                </div>
                <div className="mt-4 flex flex-col gap-1">
                    {favouritePods.length >0 ?(
                    favouritePods?.map( (podcast, i)=> (
                        <Link to={`/podcast/${podcast.id}`}>
                            <FavouritesCard
                            key = {podcast.id}
                            podcast={podcast}
                            i={i} />
                        </Link>
                    ))
                ):(
                    <p className="text-gray-500">No favorites yet. Add some podcasts to your favorites!</p>
                )
                }
                </div>
            </div>

        </div>
    )

}