import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PostState {
  posts: any[];
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: PostState = {
  posts: [],
  status: 'idle',
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      console.log(action.payload);
      state.status = 'succeeded';
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.status = 'failed';
    });
  },
});

export const fetchPosts = createAsyncThunk('posts/fetch', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
});

export const {} = postSlice.actions;

export default postSlice.reducer;
