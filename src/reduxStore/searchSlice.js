import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: { cache: {} },
  reducers: {
    addCache: (state, action) => {
      state.cache = { ...state.cache, ...action.payload };
    },
  },
});

export default searchSlice.reducer;

export const { addCache } = searchSlice.actions;
