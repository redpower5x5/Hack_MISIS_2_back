import React, { useEffect, useState } from "react";
import type { FC } from "react";
import {
  PanelHeader,
  Group,
  ContentCard,
  CardGrid,
  CardScroll,
  Spacing,
  Card,
  MiniInfoCell,
  Text,
  Link,
  Div,
  View,
  Panel,
} from "@vkontakte/vkui";
import { Icon20CalendarOutline } from "@vkontakte/icons";
import { mockStories } from "../data/data";
import { useAdaptivityIsDesktop } from "@vkontakte/vkui/dist/hooks/useAdaptivity";
import { TPost } from "../types/types";
import Post from "./Post";
import usePosts from "../redux/hooks/usePosts";

type Props = {
  id: string;
  onStoryClick: (id: number) => void;
};

type Panels = "posts" | "post";

const Posts: FC<Props> = ({ id, onStoryClick }) => {
  const isDesktop = useAdaptivityIsDesktop();

  const [panel, setPanel] = useState<Panels>("posts");

  const { posts, loadPosts } = usePosts();

  const handleReturn = () => setPanel("posts");

  const [currentPost, setCurrentPost] = useState<TPost | null>(null);

  const handleCardClick = (post: TPost) => {
    setCurrentPost(post);
    setPanel("post");
  };

  useEffect(() => {
    loadPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View id={id} activePanel={panel}>
      <Panel id="posts">
        <PanelHeader>Новости</PanelHeader>
        <Group>
          <CardScroll>
            {mockStories.map((story) => (
              <Card
                key={story.id}
                mode="outline"
                className="story_card"
                onClick={() => onStoryClick(story.id)}
              >
                <div className="story_cont">
                  <img
                    className="story_img"
                    src={story.cover}
                    alt=""
                    height={120}
                  />
                </div>
              </Card>
            ))}
          </CardScroll>
          <Spacing size={24} />
          <CardGrid size="l">
            {posts.map((post) => (
              <ContentCard
                key={post.id}
                subtitle={
                  <MiniInfoCell
                    className="post_date"
                    before={<Icon20CalendarOutline />}
                  >
                    {post.date}
                  </MiniInfoCell>
                }
                onClick={() => handleCardClick(post)}
                className={isDesktop ? "posts-element" : ""}
                src={post.img}
                maxHeight={240}
                header={
                  post.title.length > 50
                    ? post.title.slice(0, 48) + "..."
                    : post.title
                }
                text={
                  <>
                    <Text>
                      {post.description.length > 150
                        ? post.description.slice(0, 148) + "..."
                        : post.description}
                    </Text>
                    <Div className="post_link">
                      <Link>Подробнее</Link>
                    </Div>
                  </>
                }
              />
            ))}
          </CardGrid>
        </Group>
      </Panel>
      <Post id="post" onReturn={handleReturn} post={currentPost} />
    </View>
  );
};

export default Posts;
