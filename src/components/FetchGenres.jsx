

import FetchData from "./FetchData";

export default function FetchGenres(){
    const {data} = FetchData()
    //console.log(data)
    const genreContainer = []
    //const fetchGenrePromises =[]
    let i=1
    
    
    const fetchNextGenre =() =>{
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
            }
            return Promise.resolve()   
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
                }).filter( genre => genre !== null)

                acc.push({ title: podcast.title, genres: genres })
                return acc
            }, [])
            console.log(matchedItems)
        })
        .catch(error => {
            console.error('Error processing genres:', error)
        })


}

    

