import { useSelector } from "react-redux";
import { fetchPosts, selectAllPosts } from "../features/postsSlice";
import { useAppDispatch } from "../store/store";

const usePosts = () => {
  const posts = useSelector(selectAllPosts);
  const dispatch = useAppDispatch();

  return {
    posts,
    loadPosts: () => dispatch(fetchPosts()),
  };
};
export default usePosts;
