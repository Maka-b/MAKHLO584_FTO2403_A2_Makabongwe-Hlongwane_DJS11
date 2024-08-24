import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentEpisodes: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeEpisode: {},
  genreListId: '',
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveEpisode: (state, action) => {
      state.activeEpisode = action.payload.episode;

      if (action.payload?.data?.tracks?.hits) {
        state.currentEpisodes = action.payload.data.tracks.hits;
      } else if (action.payload?.data?.properties) {
        state.currentEpisodes = action.payload?.data?.tracks;
      } else {
        state.currentEpisodes = action.payload.data;
      }

      state.currentIndex = action.payload.i;
      state.isActive = true;
    },

    nextEpisode: (state, action) => {
      if (state.currentEpisodes[action.payload]?.track) {
        state.activeEpisode = state.currentEpisodes[action.payload]?.track;
      } else {
        state.activeEpisode = state.currentEpisodes[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    prevEpisode: (state, action) => {
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },

    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    },
  },
});

export const { setActiveEpisode, nextEpisode, prevEpisode, playPause, selectGenreListId } = playerSlice.actions;

export default playerSlice.reducer;
