import { json, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import PlayPause from "./PlayPause"
import { playPause, setActiveEpisode } from "./playerSlice"
import { useGetShowInfoQuery } from "../services/podcastsCore"

import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa"
import { toggleClick } from "./isClickedSlice"
//when clicked, make call to show address, save data in showInfo Array

//const { data, error, isFetching } = useGetShowInfoQuery(podcast.id)
export default function PodCard( {podcast, i, isPlaying, activePod} ){
    //const { data, error, isFetching } = useGetShowInfoQuery(podcast.id)
    const dummyActivePod = 'Test'

    const handlePauseClick = () =>{
        
    }
    const handlePlayClick = () =>{
        
    }

    const [favourites, setFavourites] = useState( ()=>{
        const savedFavorites = localStorage.getItem('favourites')
        return savedFavorites ? JSON.parse(savedFavorites) : []
    })
   
    const dispatch = useDispatch()
    const isClicked = useSelector((state)=> state.click.isClicked)
    const toggleFavourite = () => {
        let updateFavourites 
        dispatch(toggleClick())
        

        if(favourites.some(fav => fav.id === podcast.id)){
            updateFavourites = favourites.filter(fav => fav.id !== podcast.id)
        }else{
            updateFavourites =[...favourites, {id: podcast.id, title: podcast.title, image: podcast.image}]
        }
        setFavourites(updateFavourites)
        localStorage.setItem('favourites', JSON.stringify(updateFavourites))
    }

    return (
        <div className="flex flex-col w-[250px] p-4 bg-blue-700 bg-opacity-80 backdrop-blur-sm animate rounded-lg cursor-pointer">
            <div className="relative w-full h-56 group">
                <Link to={`/podcast/${podcast.id}`}>
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
                <button onClick={toggleFavourite} className="mt-2 self-start">
                    <FaStar 
                    size={24} // Size of the icon
                    color={favourites.some(fav => fav.id === podcast.id) ? "gold" : "gray"} 
                    className="cursor-pointer" />
                </button>
            </div>
        </div>
    )
}