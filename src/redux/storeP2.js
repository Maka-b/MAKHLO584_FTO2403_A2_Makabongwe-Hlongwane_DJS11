import { configureStore} from "@reduxjs/toolkit"
import { setGenres, setMatchedItems } from "./features/genresSlice";
import handleGenres from "./features/genresSlice";
import { PodCoreApi } from "./services/podcastsCore";
import { getDefaultNormalizer } from "@testing-library/react";
import handlePlayer from './features/playerSlice'
import handleClick from './features/isClickedSlice'
// Define the initial state
const initialState = {
    user: undefined,
    isModal: false
};

// Define the reducer function
function handleState(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}

// Configure the store and pass the reducer as an object
export const store = configureStore({
    reducer: {
        [PodCoreApi.reducerPath]: PodCoreApi.reducer,
        user: handleState,
        genres: handleGenres ,
        player: handlePlayer,
        click: handleClick,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(PodCoreApi.middleware)

})

