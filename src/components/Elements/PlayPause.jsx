
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa"

const PlayPause =( {isPlaying, activePod, episode, handlePause, handlePlay})=>
{(isPlaying && activePod?.title === episode.title? (
    <FaPauseCircle
    size = {35}
    className="text-blue-500"
    onClick={handlePause}
    />) 
    :
(
    <FaPlayCircle 
    size = {35}
    className="text-blue-500"
    onClick={handlePlay}
    />
))

}

export default PlayPause
