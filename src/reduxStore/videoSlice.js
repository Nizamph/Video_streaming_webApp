import { createSlice } from '@reduxjs/toolkit';

const videoSlice = createSlice({
  name: 'video',
  initialState: { videoList: [] },
  reducers: {
    addVideos: (state, action) => {
      // state.videoList.splice(50, 1);
      if (state.videoList.length >= 50) {
        state.videoList.splice(0, 4);
      }
      state.videoList = [...state.videoList, ...action.payload];
    },
  },
});

export default videoSlice.reducer;

export const { addVideos } = videoSlice.actions;
