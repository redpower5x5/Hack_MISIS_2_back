import { useState } from "react";
import { mockStories } from "../data/data";

const useStories = () => {
  const stories = mockStories;
  const storiesLength = mockStories.length;

  const [activeStoryIndex, setActiveStoryIndex] = useState<number | null>(null);

  const handleStoryClick = (id: number) => {
    setActiveStoryIndex(stories.findIndex((story) => story.id === id));
  };

  const handleNextStory = () =>
    setActiveStoryIndex((activeStoryIndex) => {
      return activeStoryIndex !== null
        ? activeStoryIndex + 1 === storiesLength
          ? null
          : activeStoryIndex + 1
        : null;
    });

  const handlePreviousStory = () =>
    setActiveStoryIndex((activeStoryIndex) => {
      return activeStoryIndex !== null ? activeStoryIndex - 1 : null;
    });

  const handleStoriesClose = () => setActiveStoryIndex(null);

  return {
    stories,
    activeStoryIndex,
    onNextStory: handleNextStory,
    onPreviousStory: handlePreviousStory,
    onStoryClick: handleStoryClick,
    onStoriesClose: handleStoriesClose,
  };
};

export default useStories;
