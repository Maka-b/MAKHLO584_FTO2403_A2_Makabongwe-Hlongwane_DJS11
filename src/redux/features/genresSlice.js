import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    genreContainer : [],
    matchedItems : [],
    loading : false,
    error: null,
}

const genreSlice = createSlice({
    name: 'genres',
    initialState,
    reducers: {
        setGenres(state, action) {
            state.genreContainer = action.payload
        },
        setMatchedItems(state, action){
            state.matchedItems = action.payload
        },
        setLoading(state, action){
            state.loading = action.payload
        },
        setError(state, action){
            state.error = action.payload
        },
    },
})

export const { setGenres,setMatchedItems, setLoading, setError } = genreSlice.actions
export default genreSlice.reducer