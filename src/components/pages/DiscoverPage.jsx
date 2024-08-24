import React from 'react'
import PodCard from '../Elements/PodCard'
//import ShowList from '../Elements/ShowList'
//import FetchData from '../Elements/FetchData'
import { useGetAllPodcastsQuery } from '../../redux/services/podcastsCore'

import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Elements/Loader'
import Error from '../Elements/Error'


// 

// have value of selected genre state render relavent podCards

export default function DiscoverPage(){
    

    const { data, error, isFetching } = useGetAllPodcastsQuery();
    const dispatch = useDispatch()
    const { activePod, isPlaying } = useSelector( state => state.player) 
    console.log(data)
    

    const{ loading, genreContainer, matchedItems } =useSelector(state => state.genres)
    const [selectedGenre, setSelectedGenre] = React.useState('')
    const handleChangeinGenre =(event)=>{
        setSelectedGenre(event.target.value)
    }

    const dummyGenreTitle = 'true crime'
    const dummyDataArray = [1,2,3,4,5,6,7]

    if (loading){
        return <Loader title = "Loading..."/>
    }
    if (isFetching) return <Loader title = "Loading Available Shows..."/>
    if (error) return <Error/>

    return(
        //genre dropdown list
        <div className='flex flex-col w-full'>
            <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
                <h2 className='font-bold text-3xl'>Discover {selectedGenre==='All'?null:selectedGenre}</h2>
                <select 
                onChange={ handleChangeinGenre }
                value={selectedGenre}
                className='bg-black text-gray-300  p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'>
                    <option>All</option>
                    {genreContainer.map(genre => <option key= {genre.id} value={genre.title}>{genre.title}</option>)}
                </select>
            </div>
        
        <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
            {data?.map((podcast,i)=> {
                
                return( <PodCard
                            key={podcast.id}
                            podcast={podcast}
                            index={i}
                            isPlaying={isPlaying}
                            activePod={activePod}/>
                            )

            })}

            
        </div>


        </div>
    )


}