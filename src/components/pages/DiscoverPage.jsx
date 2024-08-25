import React from 'react'
import PodCard from '../Elements/PodCard'
//import ShowList from '../Elements/ShowList'
//import FetchData from '../Elements/FetchData'
import { useGetAllPodcastsQuery } from '../../redux/services/podcastsCore'

import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Elements/Loader'
import Error from '../Elements/Error'
import Searchbar from '../Elements/Searchbar'


// 

// have value of selected genre state render relavent podCards

export default function DiscoverPage(){
    
    
    const { data, error, isFetching } = useGetAllPodcastsQuery();
    const dispatch = useDispatch()
    const { activePod, isPlaying } = useSelector( state => state.player) 
    //console.log(data)
    

    const{ loading, genreContainer, matchedItems } =useSelector(state => state.genres)
    const [selectedGenre, setSelectedGenre] = React.useState('')
    const [sortOrder, setSortOrder] = React.useState('A-Z')
    const [searchTerm, setSearchTerm] = React.useState('')

    const handleChangeinGenre =(event)=>{
        setSelectedGenre(event.target.value)
    }

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };
    const handleSearch = (term) => {
        setSearchTerm(term)
    }

    const dummyGenreTitle = 'true crime'
    const dummyDataArray = [1,2,3,4,5,6,7]

    if (loading){
        return <Loader title = "Loading..."/>
    }
    if (isFetching) return <Loader title = "Loading Available Shows..."/>
    if (error) return <Error/>

    const filteredDataByGenre = selectedGenre === 'All' || !selectedGenre
    ? matchedItems
    : matchedItems.filter(podcast => podcast.genres.includes(selectedGenre));

    const filteredDataBySearch = filteredDataByGenre.filter(podcast=> podcast.title.toLowerCase().includes(searchTerm.toLowerCase()))

    const filteredTitles = filteredDataBySearch.map(podcast => podcast.title);

   
    const displayData = data.filter(podcast => filteredTitles.includes(podcast.title));

    // function immediatly invoked to set data when sorting option has not been chosen
    const sortedData = (() => {
        if (sortOrder === 'Normal') {
            return displayData;
        } else if (sortOrder === 'A-Z') {
            return [...displayData].sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortOrder === 'Z-A') {
            return [...displayData].sort((a, b) => b.title.localeCompare(a.title));
        }
        return displayData;
    })();

    

    console.log("data", data)
    console.log("matchedItems", filteredDataByGenre)

    

    return(
        //genre dropdown list
        <div className='flex flex-col w-full'>
            <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
                <h2 className='font-bold text-3xl'>Discover {selectedGenre==='All'?null:selectedGenre}</h2>
                
                <select
                        onChange={handleSortChange}
                        value={sortOrder}
                        className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none'
                    >
                        <option value='Latest'> Latest </option>
                        <option value="A-Z">Sort A-Z</option>
                        <option value="Z-A">Sort Z-A</option>
                </select>
                
                <select 
                onChange={ handleChangeinGenre }
                value={selectedGenre}
                className='bg-black text-gray-300  p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'>
                    <option>All</option>
                    {genreContainer.map(genre => <option key= {genre.id} value={genre.title}>{genre.title}</option>)}
                </select>

                <Searchbar onSearch={handleSearch} />

                

            </div>
        
        <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {sortedData.length > 0 ? (
                    sortedData.map((podcast, i) => (
                        <PodCard
                            key={podcast.id}
                            podcast={podcast}
                            index={i}
                            isPlaying={isPlaying}
                            activePod={activePod}
                        />
                    ))
                ) : (
                    <p className='text-gray-500'>No podcasts available for the selected genre.</p>
                )}
            
        </div>


        </div>
    )


}