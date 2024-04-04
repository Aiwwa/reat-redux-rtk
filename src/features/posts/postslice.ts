import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '@features/posts/initial-state.ts';

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addPost } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
