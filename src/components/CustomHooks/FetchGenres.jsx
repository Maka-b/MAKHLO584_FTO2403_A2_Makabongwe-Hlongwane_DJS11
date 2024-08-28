
import { useDispatch } from "react-redux";
import { setGenres, setMatchedItems, setLoading, setError } from "../../redux/features/genresSlice";
import FetchData from "../Elements/FetchData";
import { useEffect } from "react";



export default function FetchGenres(){
    const dispatch = useDispatch()
    const{ data } = FetchData()
   
    useEffect( ()=> {
        const genreContainer = []
        //const fetchGenrePromises =[]
        let i=1
        let fetching = true

        dispatch(setLoading(true))
        
        //add fetch shows information and create
        const fetchNextGenre =() =>{
            if (!fetching) return Promise.resolve()

            return fetch(`https://podcast-api.netlify.app/genre/${i}`)
                .then(res => {
                    if(!res.ok) {
                        throw new Error ('No more genres')    
                    }
                    return res.json()
                })
                .then(genre =>{ 
                    genreContainer.push(genre)
                    i++
                    return fetchNextGenre()

                })
                .catch(error=> {
                    if (error.message !== 'No more genres'){
                        console.error('Error fetching genre:', error.message)
                        dispatch(setError(error.message))
                    }
                    fetching = false
                    dispatch(setGenres(genreContainer))                         
                });            
        }

        fetchNextGenre()
            .then( () => {
                if (!data || !Array.isArray(data)){
                    throw new Error('Invalid or missing podcast data')
                }

                const matchedItems = data.reduce((acc,podcast) => {
                    let genres = podcast.genres.map(podGenre => {
                        let genre = genreContainer.find(genreId => genreId.id === podGenre)
                        return genre ? genre.title : null
                    }).filter(Boolean)

                    acc.push({ title: podcast.title, genres: genres })
                    return acc
                }, [])
                dispatch(setMatchedItems(matchedItems))
               
            })
            .catch(error => {
                console.error('Error processing genres:', error)
                dispatch(setError(error.message))
                
            })
            .finally(()=>dispatch(setLoading(false)))
        },[data, dispatch])
    return null  
}

    

