import { useSelector } from "react-redux";
//import FetchGenres from "../Elements/FetchGenres";

export default function DisplayGenres() {
    
    const genreContainer = useSelector(state => state.genres.genreContainer);
    const matchedItems = useSelector(state => state.genres.matchedItems);

    return (
        <div>
            <h1>Genres</h1>
            <ul>
                {genreContainer.map(genre => (
                    
                    <li key={genre.id}>{genre.title}</li>
                ))}
            </ul>
            <h1>Matched Items</h1>
            <ul>
                {matchedItems.map(item => (
                    <li key={item.title}>{item.title}: {item.genres.join(", ")}</li>
                ))}
            </ul>
        </div>
    );
}
