import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import PlayPause from "./PlayPause"
import { playPause, setActiveEpisode } from "../../redux/features/playerSlice"


export default function ShowContainer( {podcast, currentSeason, i, isPlaying, activeShow} ){
    const dummyActivePod = 'Test'

    const handlePauseClick = () =>{
        
    }
    const handlePlayClick = () =>{
        
    }
    // should show list on shows. on clicking, they will pay they're associated mp3 file from an api endpoint
    return (
        <div className="flex flex-col w-[250px] p-4 bg-blue-700 bg-opacity-80 backdrop-blur-sm animate rounded-lg cursor-pointer">
            <div className="relative w-full h-56 group">
                <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-45 group-hover:flex ${dummyActivePod?.title === podcast.title? 'flex bg-black bg-opacity-70': 'hidden'}`}>
                    <PlayPause
                        episode = {podcast}
                        handlePause = {handlePauseClick}
                        handlePlay = {handlePlayClick}
                        isPlaying = {isPlaying}
                        activeShow = {activeShow}
                    />   
                </div>
                <img src={podcast.image} alt="pod_img" />  
            </div>
            <div className="mt-4 flex flex-col">
                <p className="font-semibold text-lg ">
                    <Link to={`./shows/${podcast?.key}`}>
                        {podcast.title}
                    </Link>
                </p>
                <p className="font-semibold text-lg ">
                <Link to={podcast.id ? `id/${podcast.id}`: '/'}>
                        {///////////////// add number of seasons check
                        podcast.seasons} Seasons
                    </Link>
                </p>
            </div>

            <div className="flex flex-col space-y-4">
                {podcast.shows && podcast.shows[currentSeason]?.map((episode, index) => (
                    <div key={index} onClick={() => handlePlayClick(episode)}>
                        <p className="text-white font-medium">{episode.title}</p>
                        {/* Placeholder for showing episode description or other details */}
                        <p className="text-gray-300 text-sm">{episode.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}