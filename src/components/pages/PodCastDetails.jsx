import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import DetailsHeader from "../Elements/DetailsHeader"
import Error from "../Elements/Error"
import Loader from "../Elements/Loader"
import RelatedEpisodes from "../Elements/RelatedEpisodes"
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";


import { setActiveEpisode, playPause } from "../../redux/features/playerSlice"
import { useGetShowInfoQuery } from "../../redux/services/podcastsCore"
import { Link } from "react-router-dom"
import EpisodeDetails from "./EpisodeDetails"

export default function PodCastDetails(){
    
    const dispatch= useDispatch()
    const {id} = useParams()
    const { activeEpisode, isPlaying } = useSelector(state=> state.player)
    const { data: podData, isFetching: isFetchingPodDetails } = useGetShowInfoQuery( id )

    console.log(`podId: ${id}`)
    console.log(`pod: ${podData}`)
    const dummySeason = 1
    const filteredEpisodes = podData?.seasons.filter( ses=>ses.season === dummySeason)

    return(
        <div className=" flex flex-col">
            
            
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
                        {podData?.seasons.map((season, i) => (
                            <SwiperSlide
                                key={season.id}
                                style={{ width: '25%', height: 'auto' }}
                                className="shadow-lg rounded-full animate-slide-right"
                            >
                                <Link>
                                    <img src={season.image} alt='Show' className="rounded-full w-full object-cover" />
                                    <h3> Season {season.season} </h3>
                                </Link>
                            </SwiperSlide>
                        ))}   
                    </Swiper>
                   
                   
                   
                </div>
            </div>

           
        </div>
    )
}

