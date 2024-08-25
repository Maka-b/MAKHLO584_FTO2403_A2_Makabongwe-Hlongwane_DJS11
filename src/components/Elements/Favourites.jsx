import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";


import 'swiper/css'
import 'swiper/css/free-mode'
import ShowContainer from "./ShowContainer";



const FavouritesCard =({podcast, i})=>(
    <div className="w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
      <div className="flex-1 flex flex-row justify-between items-center">
        <img className="w-20 h-20 rounded-lg" src={podcast.image} alt={podcast.title} />
        <div className="flex flex-1 flex-col justify-center mx-3">
            <Link to='page-detail'>
                <p className="text-xl font-bold">{podcast.title}</p>
            </Link>
        </div>
      </div>
    </div>
)


export default function Favourites(){
    const dispatch = useDispatch()
    const [favouritePods, setFavouritePods] =useState([])
    const isClicked = useSelector((state)=> state.click.isClicked)

    useEffect(()=> {
        const savedFavorites = localStorage.getItem('favourites')
        if (savedFavorites){
            setFavouritePods(JSON.parse(savedFavorites))
            console.log('changed')
        }
    },[isClicked])
    
    return(
        <div className="xl:ml-6 ml-0 xl:mb-0 mb-6  xl:max-w-[500px] max-w-full w-full flex flex-col  bg-blue-400">
            <div className="w-full flex flex-col">
                <div className="flex flex-row justify-between items-center">
                    <h2 className="hidden sm:block font-bold text-2xl">Favourites</h2>
                    <Link to='/your-favourites'> 
                        <p className=" text-gray-600 text-base cursor-pointer">See More</p> 
                    </Link>
                </div>
                <div className="mt-4 flex flex-col gap-1">
                    {favouritePods.length >0 ?(
                    favouritePods?.map( (podcast, i)=> (
                        <FavouritesCard
                        key = {podcast.id}
                        podcast={podcast}
                        i={i} />
                    ))
                ):(
                    <p className="text-gray-500">No favorites yet. Add some podcasts to your favorites!</p>
                )
                }
                </div>
            </div>

            <div className="w-full flex flex-col mt-8">
                <div className="w-full flex flex-col">
                    <div className="flex flex-row justify-between items-center">
                        <h2 className="font-bold text-2xl">Seasons</h2>
                        <Link to='/your-favourites'> 
                            <p className=" text-gray-600 text-base cursor-pointer">Episode List</p> 
                        </Link>
                    </div>
                    <Swiper
                    slidesPerView='auto'
                    spaceBetween={15}
                    freeMode
                    centeredSlides
                    centeredSlidesBounds
                    modules={[FreeMode]}
                    className="mt-4">
                        {favouritePods?.map((season,i) =>(
                            <SwiperSlide
                            key={season.id}
                            style={{ width: '25%' , height: 'auto' }}
                            className="shadow-lg rounded-full animate-slide-right">
                            <Link>
                              <img src={season.image} alt='Show'
                              className="rounded-full w-full object-cover"/>  
                            </Link>
                                
                            </SwiperSlide>
                        ) )}
                    
                        
                    </Swiper>
                </div>
            </div>

        </div>
    )

}