
export default function EpisodeDetails(season){
    const dummyshow= []

    const EpisodeContainer = dummyshow.map(show=>(
        <div>
            <h3>{show.title}</h3>
            <p>{show.description}</p>
        </div>
    ))

    return(
     <EpisodeContainer/>
    )
}