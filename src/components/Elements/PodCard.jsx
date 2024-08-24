import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import PlayPause from "./PlayPause"
import { playPause, setActiveEpisode } from "../../redux/features/playerSlice"
import { useGetShowInfoQuery } from "../../redux/services/podcastsCore"

//when clicked, make call to show address, save data in showInfo Array

//const { data, error, isFetching } = useGetShowInfoQuery(podcast.id)
export default function PodCard( {podcast, i, isPlaying, activePod} ){
    //const { data, error, isFetching } = useGetShowInfoQuery(podcast.id)
    const dummyActivePod = 'Test'

    const handlePauseClick = () =>{
        
    }
    const handlePlayClick = () =>{
        
    }
    return (
        <div className="flex flex-col w-[250px] p-4 bg-blue-700 bg-opacity-80 backdrop-blur-sm animate rounded-lg cursor-pointer">
            <div className="relative w-full h-56 group">
                <Link to={`<PodDetail>  ./shows/${podcast?.key}`}>
                    <img src={podcast.image} alt="pod_img" /> 
                </Link> 
            </div>
            <div className="mt-4 flex flex-col">
                <p className="font-semibold text-lg ">
                    <Link to={`./shows/${podcast?.key}`}>
                        {podcast.title}
                    </Link>
                </p>
                <p className="font-semibold text-lg ">
                <Link to={podcast.id ? `id/${podcast.id}`: '/'}>
                        {podcast.seasons} {podcast.seasons === 1 ? 'Season' : 'Seasons'}
                    </Link>
                </p>
            </div>
        </div>
    )
}