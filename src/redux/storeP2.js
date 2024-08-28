import { configureStore} from "@reduxjs/toolkit"
import { setGenres, setMatchedItems } from "./features/genresSlice";
import handleGenres from "./features/genresSlice";
import { PodCoreApi } from "./services/podcastsCore";
import { getDefaultNormalizer } from "@testing-library/react";

import handleClick from './features/isClickedSlice'




// Configure the store and pass the reducer as an object
export const store = configureStore({
    reducer: {
        [PodCoreApi.reducerPath]: PodCoreApi.reducer,
        genres: handleGenres ,
        click: handleClick,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(PodCoreApi.middleware)

})

