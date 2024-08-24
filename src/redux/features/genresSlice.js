import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    genreContainer : [],
    matchedItems : [],
    loading : false,
    error: null,
    data:[],
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
        setData(state,action){
            state.data =action.payload
        }
    },
})

export const { setGenres,setMatchedItems, setLoading, setError, setData } = genreSlice.actions
export default genreSlice.reducer