import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../api/client";
import { RootState } from "../store/store";
// import { mockTags } from "../../data/data";

type TagsState = {
  status: "error" | "success" | "idle" | "pending";
  error: string | null;
  tags: { name: string }[];
};

const initialState: TagsState = {
  tags: [],
  status: "idle",
  error: null,
};

export const fetchTags = createAsyncThunk<{ name: string }[]>(
  "tags/fetchTags",
  async () => {
    try {
      const response = await client.get(`tags`);
      //   const response = await Promise.resolve({ data: mockTags });
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
);

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTags.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.status = "success";
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message ?? null;
      });
  },
});

// export const { tagAdded, tagUpdated, reactionAdded } = tagsSlice.actions;

export default tagsSlice.reducer;

export const selectAllTags = (state: RootState) => state.tags.tags;
