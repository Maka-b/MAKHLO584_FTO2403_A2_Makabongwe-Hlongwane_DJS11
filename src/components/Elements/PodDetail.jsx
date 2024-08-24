import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import PlayPause from "./PlayPause"
import { playPause, setActiveEpisode } from "../../redux/features/playerSlice"
import PodCard from "./PodCard"
import { current } from "@reduxjs/toolkit"
import ShowContainer from "./ShowContainer"
import { useState } from "react"



export default function PodDetail( {podcast, episode, i, isPlaying, activePod, data} ){
    const [selectedSeason, setSelectedSeason] = useState(null)
    const dispatch = useDispatch()
    const dummyActivePod = 'Test'

    const handlePauseClick = () =>{
        dispatch(playPause(true))
        
    }
    const handlePlayClick = () =>{
        dispatch(setActiveEpisode({episode, data, i}))
        dispatch(playPause(true))
        
    }
    const handleSelectedClick =(seasonIndex)=>{
        setSelectedSeason(seasonIndex)
        //setState of selected Season. need to make season state

    }
    return (
        <div className="flex flex-col w-[250px] p-4 bg-blue-700 bg-opacity-80 backdrop-blur-sm animate rounded-lg cursor-pointer">
            <div key='container'>
                <div key= 'header'>
                    <div>
                        <img src="" alt={`podcast.title`} />
                        <h1>{`podcast.title`}</h1>
                    </div>
                    <p> podcast.description </p>
                </div>
                <div key='carosole'>
                    {Array.from({ length: podcast.seasons }, (_, i) => (
                        <div onClick={handleSelectedClick}>  
                            <PodCard
                            key={`${podcast.id}-${i}`}
                            podcast={podcast}
                            index={i}
                            activePod={activePod}
                            />
                        </div>)
                    )}
                </div>
                {selectedSeason !== null && (
                    <ShowContainer 
                        currentSeason={selectedSeason}
                    />
                )}
            </div>
        </div>
        
    )
}