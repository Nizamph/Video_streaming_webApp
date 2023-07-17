import { configureStore } from '@reduxjs/toolkit';
import appSliceReducer from '../reduxStore/appSlice';
import searchReducer from './searchSlice';
import chatReducer from './chatSlice';
import videoReducer from './videoSlice';
const store = configureStore({
  reducer: {
    app: appSliceReducer,
    search: searchReducer,
    chat: chatReducer,
    video: videoReducer,
  },
});

export default store;
