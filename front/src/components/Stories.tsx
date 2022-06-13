import React from "react";
import type { FC } from "react";
import { ModalPage, ModalRoot } from "@vkontakte/vkui";
import { TStory } from "../types/types";
import StoriesGallery from "./StoriesGallery";

type Props = {
  stories: TStory[];
  activeStoryIndex: number | null;
  onNextStory: () => void;
  onPreviousStory: () => void;
  onStoriesClose: () => void;
};

const Stories: FC<Props> = ({
  stories,
  activeStoryIndex,
  onNextStory,
  onStoriesClose,
}) => {
  return (
    <ModalRoot
      activeModal={activeStoryIndex?.toString()}
      onClose={onStoriesClose}
    >
      {stories.map((story, index) => (
        <ModalPage key={story.id} id={`${index}`} onClose={onStoriesClose}>
          <StoriesGallery story={story} onNextStory={onNextStory} />
        </ModalPage>
      ))}
    </ModalRoot>
  );
};

export default Stories;
