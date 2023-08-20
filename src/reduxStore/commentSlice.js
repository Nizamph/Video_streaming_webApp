import { createSlice } from '@reduxjs/toolkit';
import { commentData } from '../utils/constants';
const commentSlice = createSlice({
  name: 'comment',
  initialState: {
    commentsList: commentData,
    showCommentModal: false,
    deleteCommentId: '',
    commentText: '',
    editDetails: {},
  },
  reducers: {
    addComment: (state, action) => {
      state.commentsList = action.payload;
      console.log('commentList after unshift', state.commentsList);
    },
    setShowCommentModal: (state, action) => {
      state.showCommentModal = action.payload;
    },
    setDeleteCommentId: (state, action) => {
      state.deleteCommentId = action.payload;
    },
    setCommentText: (state, action) => {
      state.commentText = action.payload;
    },
    setEditDetails: (state, action) => {
      state.editDetails = action.payload;
    },
  },
});

export default commentSlice.reducer;
export const {
  addComment,
  setShowCommentModal,
  setDeleteCommentId,
  setCommentText,
  setEditDetails,
} = commentSlice.actions;
