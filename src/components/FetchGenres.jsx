

import FetchData from "./FetchData";

export default function FetchGenres(){
    const {data} = FetchData()
    //console.log(data)
    const genreContainer = []
    const fetchGenrePromises =[]
    const matchedContainer =[]
    
    for (let i=1; i < 10; i++){
        fetchGenrePromises.push(
            fetch(`https://podcast-api.netlify.app/genre/${i}`)
            .then(res => {
                if(!res.ok) {
                    throw new Error ('problem fetching genre information')    
                }
                return res.json()
            .then(genre => genreContainer.push(genre))
            .catch(error=> console.log(error.message));
            }) 
        )
    }
    Promise.all(fetchGenrePromises)
    .then(() => {
        console.log(data)
        data.forEach(date =>{
            date.genres.forEach(da => console.log())
        })
        data.forEach(podcast => {
            podcast.genres.forEach(podId => {
                genreContainer.forEach(genre => {
                    if (genre.id === podId){
                        matchedContainer.push({title:podcast.title, genre: genre.title})
                    }
                })
            })            
        });
    })
    .catch(error => {
        console.error('Error fetching all genres:', error)
    })
   
    

  

   
   


    

        
    

   
}

    

