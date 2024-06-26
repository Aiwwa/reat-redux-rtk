import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from '@features/posts/postslice.ts';
import { usersReducer } from '@features/users/usersSlice.ts';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
