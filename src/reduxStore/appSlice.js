import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: { isMenuOpen: true },
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
  },
});

export const { menuToggle, closeMenu, openMenu } = appSlice.actions;
console.log('reducers behind the scene', appSlice.reducer);
export default appSlice.reducer;
