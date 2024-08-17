import useFetch from '../../../MAKHLO584_FTO2403_A2_Makabongwe-Hlongwane_DJS10/src/componets/customHooks/useFetch'

//Makes use of a customHook from DJS as a submodule
// Hook takes url from api and uses useState to set data and error state. Uses useEffect to render data and updates states if url changes 
export function FetchData(){

    const { data, error } = useFetch("https://jsonplaceholder.typicode.com/posts")
    if (error){
        return(<div className="error"><h1> Error: </h1>{error}</div>)
    }

    return (data, error)
}