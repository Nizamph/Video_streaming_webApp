import { createSlice } from '@reduxjs/toolkit';

const videoSlice = createSlice({
  name: 'video',
  initialState: { videos: [] },
  reducers: {
    addVideos: (state, action) => {
      state.videos.splice(20, 1);
      state.videos = [...state.videos, action.payload];
    },
  },
});

export default videoSlice.reducer;

export const { addVideos } = videoSlice.actions;
