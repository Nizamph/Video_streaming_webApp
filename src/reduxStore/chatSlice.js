import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: { messages: [] },
  reducers: {
    addMessages: (state, action) => {
      state.messages.splice(12, 1);
      if (action.payload.message.length > 0)
        state.messages.unshift(action.payload);
    },
  },
});

export default chatSlice.reducer;

export const { addMessages } = chatSlice.actions;
