import { configureStore } from '@reduxjs/toolkit';
import appSliceReducer from '../reduxStore/appSlice';
const store = configureStore({
  reducer: { app: appSliceReducer },
});

export default store;
