
import { createSlice } from '@reduxjs/toolkit'

const clickSlice = createSlice({
  name: 'click',
  initialState: {
    isClicked: false,
  },
  reducers: {
    toggleClick: (state) => {
      state.isClicked = !state.isClicked
    },
    setClick: (state, action) => {
      state.isClicked = action.payload
    },
  },
})

export const { toggleClick, setClick } = clickSlice.actions
export default clickSlice.reducer
