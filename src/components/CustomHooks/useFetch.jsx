import { useEffect, useState } from "react"


export default function useFetch(url, fetchName = "information"){
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect( ()=>{
        fetch(url)
            .then(res => {
                if (!res.ok){
                    throw new Error (`Was unable to fetch ${fetchName} :( . Please try again later`)
                }
                return res.json()
            })
            .then(data => {
                setData(data)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
        },[url])
    
    return {error, data, loading}
}
