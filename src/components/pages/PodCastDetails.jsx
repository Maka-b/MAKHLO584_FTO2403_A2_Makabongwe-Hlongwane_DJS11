
import Error from "../Elements/Error"
import Loader from "../Elements/Loader"
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import { useState } from "react"

import { useParams } from "react-router-dom"
import { useGetShowInfoQuery } from "../../redux/services/podcastsCore"
import { Link } from "react-router-dom"


export default function PodCastDetails(){
    
    const {id} = useParams()
    // id of the clicked show is used to get relavent show data through redux query 
    const { data: podData, isFetching: isFetchingPodDetails, error } = useGetShowInfoQuery( id )
    const [selectedSeason, setSelectedSeason] = useState(null);


    const handleSeasonClick = (season) => {
        //console.log('Season Clicked:', season)
        setSelectedSeason(season)
    };

    //console.log(`podId: ${id}`)
    //console.log(`pod: ${podData}`)
    //const dummySeason = 1
    
    if (isFetchingPodDetails) return <Loader />;
    if (error || !podData) return <Error message="Podcast data not found." />

    return(
        <div className=" flex flex-col">    
            <div className="w-full flex flex-col mt-8">
                <div className="w-full flex flex-col">
                    <div className="flex flex-row justify-between items-center">
                        <h2 className="font-bold text-2xl">Seasons</h2>
                    </div>
                    <Swiper
                    slidesPerView='auto'
                    spaceBetween={15}
                    freeMode
                    centeredSlides
                    centeredSlidesBounds
                    modules={[FreeMode]}
                    className="mt-4">
                        {podData?.seasons.map((season, i) => (
                            <SwiperSlide
                                key={season.id}
                                style={{ width: '25%', height: 'auto' }}
                                className="shadow-lg rounded-full animate-slide-right cursor-pointer hover:scale-105 hover:opacity-80 transition-transform duration-300"
                                onClick={()=>handleSeasonClick(season)}>
                                    <img   
                                    src={season.image} alt='Show' className="rounded-full w-full object-cover" />
                                    <h3> Season {season.season} </h3>
                    
                            </SwiperSlide>
                        ))}   
                    </Swiper>
        
                    {selectedSeason && (
                <div className="w-full flex flex-col mt-8">
                    <h3 className="font-bold text-xl mb-4">Episodes in Season {selectedSeason.season}</h3>
                    <ul className=" p-4 bg-gray-100 rounded-lg shadow">
                        {selectedSeason.episodes && selectedSeason.episodes.length > 0 ? (
                            selectedSeason.episodes.map((episode) => (
                                <li key={episode.episode} className="mb-2 p-4 bg-gray-200 rounded-lg shadow flex flex-col space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold">{episode.title}</span>
                                        <span className="text-gray-600">{episode.episode}</span>
                                    </div>
                                    <p className="text-gray-500">{episode.description}</p>
                                    
                                    <audio controls>
                                        <source src={episode.file} type="audio/mpeg" />
                                        Your browser does not support the audio element.
                                    </audio>
                                </li>
                            ))
                        ) : (
                            <p>No episodes available for this season.</p>
                        )}
                    </ul>
                </div>
            )}

                   
                   
                   
                </div>
            </div>

           
        </div>
    )
}

