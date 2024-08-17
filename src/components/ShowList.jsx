
//import useFetch from '../../../MAKHLO584_FTO2403_A2_Makabongwe-Hlongwane_DJS10/src/componets/customHooks/useFetch'
import useFetch from './CustomHooks/useFetch'
//Makes use of a customHook from DJS as a submodule
// Hook takes url from api and uses useState to set data and error state. Uses useEffect to render data and updates states if url changes 


export default function ShowList(){
   const {data, loading, error} = useFetch("https://podcast-api.netlify.app")
    //const { data: genreData, error: genreError } = useFetch("https://podcast-api.netlify.app/genre/<ID>")
    //const { data: showData, error:  showError } = useFetch("https://podcast-api.netlify.app/id/<ID>")
   console.log(data)
   if (loading) return <div><h1>Loading...</h1></div>
   if (error){
        return(<div className="error"><h1> Error: </h1>{error}</div>)
    }

   const showList = data.map(show =>{
                                        return(<div key={show.id}>
                                            <h1>{show.title}</h1>
                                            <p>{show.description}</p>
                                            <img src={show.image} alt="Show Poster" />
                                        </div>)})
    //have an if condition that tracks state of display prefernce
    return( <div className="listOfShows">{showList}</div>)
}