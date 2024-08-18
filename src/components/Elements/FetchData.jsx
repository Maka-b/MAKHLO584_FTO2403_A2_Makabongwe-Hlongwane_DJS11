import useFetch from "../CustomHooks/useFetch";

export default function FetchData(){
    return useFetch("https://podcast-api.netlify.app")
    
}