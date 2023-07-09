import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    cache: {},
    searchContent: '',
    showSuggestion: false,
    suggestionException: false,
  },
  reducers: {
    addCache: (state, action) => {
      state.cache = { ...state.cache, ...action.payload };
    },
    setSearchContent: (state, action) => {
      state.searchContent = action.payload;
    },
    setShowSuggestion: (state, action) => {
      state.showSuggestion = action.payload;
    },
    setShowSuggestionException: (state, action) => {
      state.suggestionException = action.payload;
    },
  },
});

export default searchSlice.reducer;

export const {
  addCache,
  setSearchContent,
  setShowSuggestion,
  setShowSuggestionException,
} = searchSlice.actions;
