import { createSlice } from '@reduxjs/toolkit';

const videoSlice = createSlice({
  name: 'video',
  initialState: { videoList: [] },
  reducers: {
    addVideos: (state, action) => {
      // state.videoList.splice(50, 1);
      console.log('actionPayload from videoSlice', action.payload);
      if (state.videoList.length >= 50) {
        state.videoList.splice(0, 4);
      }
      if (action.payload) {
        state.videoList = [...state.videoList, ...action.payload];
      }
    },
  },
});

export default videoSlice.reducer;

export const { addVideos } = videoSlice.actions;
