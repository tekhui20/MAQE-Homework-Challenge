import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
  },
  reducers: {
    actionChangePosts: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { actionChangePosts } = postsSlice.actions;
export const postsData = (state) => state.posts.data;

export default postsSlice.reducer;
