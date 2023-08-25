import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isMenuOpen: true,
    showCommentReply: false,
    showInputClearer: false,
  },
  reducers: {
    menuToggle: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    openMenu: (state) => {
      state.isMenuOpen = true;
    },
    setShowCommentReply: (state, action) => {
      state.showCommentReply = action.payload;
    },
    setInputClearer: (state, action) => {
      state.showInputClearer = action.payload;
    },
  },
});

export const {
  menuToggle,
  closeMenu,
  openMenu,
  setShowCommentReply,
  setInputClearer,
} = appSlice.actions;
console.log('reducers behind the scene', appSlice.reducer);
export default appSlice.reducer;
