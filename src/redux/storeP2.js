import { configureStore } from "@reduxjs/toolkit"

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
const store = configureStore({
    reducer: handleState,
})

export default store