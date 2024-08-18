import React from 'react'
import PodCard from '../Elements/PodCard'
import ShowList from '../Elements/ShowList'
//import { genres } from ''
import { useSelector } from 'react-redux'



export default function DiscoverPage(){
    const{ loading, genreContainer, matchedItems } =useSelector(state => state.genres)
    const [selectedGenre, setSelectedGenre] = React.useState('')
    const handleChangeinGenre =(event)=>{
        setSelectedGenre(event.target.value)
    }

    const dummyGenreTitle = 'true crime'
    const dummyDataArray = [1,2,3,4,5,6,7]

    if (loading){
        return (<div>Loading...</div>)
    }

    return(
        //genre dropdown list
        <div className='flex flex-col'>
            <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
                <h2 className='font-bold text-3xl text-white'>Discover {dummyGenreTitle}</h2>
                <select 
                onChange={ handleChangeinGenre }
                value={selectedGenre}
                className='bg-black text-gray-300  p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'>
                    {genreContainer.map(genre => <option key= {genre.id} value={genre.title}>{genre.title}</option>)}
                </select>
            </div>
        
        <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
            {dummyDataArray.map((podcast,i)=> {
                return( <PodCard
                            key={podcast.id}
                            podcast={podcast}
                            index={i}/>
                            )

            })}

            
        </div>


        </div>
    )


}