import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialState } from '@features/posts/initial-state.ts';

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: ({ title, content }) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

export const { addPost, prepare } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
