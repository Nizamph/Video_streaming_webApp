import { createSlice } from '@reduxjs/toolkit';
import {
  GET_MOST_POPULAR_VIDEO,
  GET_MOST_POPULAR_VIDEOS,
} from '../utils/constants';
const videoSlice = createSlice({
  name: 'video',
  initialState: {
    videoList: [],
    relatedVideos: [],
    videoTypeApi: GET_MOST_POPULAR_VIDEOS,
    imageUrlCache: {},
    pageCount: 0,
    clickCount: 0,
    pageToken: '',
  },
  reducers: {
    addVideos: (state, action) => {
      // state.videoList.splice(50, 1);
      console.log('actionPayload from videoSlice', action.payload);
      if (action.payload && state.videoList.length >= 100) {
        state.videoList.splice(0, 3);
      }
      if (action.payload) {
        state.videoList = [...state.videoList, ...action.payload];
      }
    },
    removeAllVideos: (state) => {
      state.videoList = [];
    },
    addRelatedVideos: (state, action) => {
      if (state.relatedVideos.length >= 50) {
        state.videoList.splice(0, 4);
      }
      if (action.payload) {
        state.relatedVideos = [...state.relatedVideos, ...action.payload];
      }
    },
    addVideoApi: (state, action) => {
      state.videoTypeApi = action.payload;
    },
    setImageUrlCache: (state, action) => {
      state.imageUrlCache = { ...state.imageUrlCache, ...action.payload };
    },
    setCurrentPage: (state, action) => {
      state.pageCount = action.payload;
    },
    setClickCount: (state, action) => {
      state.clickCount = action.payload.clickCount;
    },
    setPageToken: (state, action) => {
      state.pageToken = action.payload;
    },
  },
});

export default videoSlice.reducer;

export const {
  addVideos,
  addVideoApi,
  removeAllVideos,
  setImageUrlCache,
  setCurrentPage,
  setPageToken,
  setClickCount,
} = videoSlice.actions;
