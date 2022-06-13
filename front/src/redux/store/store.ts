import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import eventsReducer from "../features/eventsSlice";
import tagsReducer from "../features/tagsSlice";
import postsReducer from "../features/postsSlice";

const store = configureStore({
  reducer: {
    events: eventsReducer,
    tags: tagsReducer,
    posts: postsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
