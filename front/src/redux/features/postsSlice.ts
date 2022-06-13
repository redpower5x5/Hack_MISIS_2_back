import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TPost } from "../../types/types";
import { client } from "../api/client";
import { RootState } from "../store/store";
// import { mockPosts } from "../../data/data";

type PostsState = {
  status: "error" | "success" | "idle" | "pending";
  error: string | null;
  posts: TPost[];
};

const initialState: PostsState = {
  posts: [],
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk<TPost[]>(
  "posts/fetchPosts",
  async () => {
    try {
      // const response = await Promise.resolve({ data: mockPosts });
      const response = await client.get(`posts`);
      return response.data;
    } catch (e) {
      console.error(e);
      return [];
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "success";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message ?? null;
      });
  },
});

export default postsSlice.reducer;

export const selectAllPosts = (state: RootState) => state.posts.posts;
