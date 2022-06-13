import { useSelector } from "react-redux";
import { fetchTags, selectAllTags } from "../features/tagsSlice";
import { useAppDispatch } from "../store/store";

const useTags = () => {
  const tags = useSelector(selectAllTags);
  const dispatch = useAppDispatch();

  const tagsArray = tags.reduce((acc, tag) => {
    acc.push(tag.name);
    return acc;
  }, [] as string[]);

  return {
    tags: tagsArray,
    loadTags: () => dispatch(fetchTags()),
  };
};
export default useTags;
