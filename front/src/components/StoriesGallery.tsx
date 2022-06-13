import React, { useState, useEffect } from "react";
import type { FC } from "react";
import { Gallery } from "@vkontakte/vkui";
import { TStory } from "../types/types";
import useLatestCallback from "../hooks/useLatestCallback";

type Props = {
  story: TStory;
  onNextStory: () => void;
};

const StoriesGallery: FC<Props> = ({ story, onNextStory }) => {
  const length = story.imgs.length;
  const [slideIndex, setSlideIndex] = useState(0);

  const handleNextSlide = useLatestCallback(() => {
    if (slideIndex < length) {
      setSlideIndex((slideIndex) => slideIndex + 1);
    } else {
      onNextStory();
    }
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleNextSlide();
    }, 2_000);

    return () => clearTimeout(timeout);
  }, [slideIndex, length, handleNextSlide]);

  return (
    <Gallery slideIndex={slideIndex}>
      {story.imgs.map((img, index) => (
        <img src={img} alt="" onClick={handleNextSlide} key={index} />
      ))}
    </Gallery>
  );
};

export default StoriesGallery;
