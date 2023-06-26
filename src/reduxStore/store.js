import { configureStore } from '@reduxjs/toolkit';
import appSliceReducer from '../reduxStore/appSlice';
import searchReducer from './searchSlice';
const store = configureStore({
  reducer: { app: appSliceReducer, search: searchReducer },
});

export default store;
