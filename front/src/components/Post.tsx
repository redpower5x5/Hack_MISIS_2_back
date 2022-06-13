import React from "react";
import type { FC } from "react";
import { TPost } from "../types/types";
import {
  Button,
  Card,
  Div,
  Gallery,
  Group,
  MiniInfoCell,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Placeholder,
  Text,
  Title,
} from "@vkontakte/vkui";
import {
  Icon20CalendarOutline,
  Icon56UserCircleOutline,
} from "@vkontakte/icons";

type Props = {
  id: string;
  post: TPost | null;
  onReturn: () => void;
};

const Post: FC<Props> = ({ id, post, onReturn }) => {
  if (!post)
    return (
      <Panel id={id}>
        <PanelHeader before={<PanelHeaderBack onClick={onReturn} />}>
          Новость
        </PanelHeader>
        <Group className="placeholder">
          <Placeholder
            icon={<Icon56UserCircleOutline />}
            action={
              <Button size="m" mode="tertiary" onClick={onReturn}>
                Назад
              </Button>
            }
            stretched
          >
            Новость
            <br />
            не найдена
          </Placeholder>
        </Group>
      </Panel>
    );

  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={onReturn} />}>
        Новость
      </PanelHeader>
      <Card>
        <Group>
          <Gallery bullets="dark" showArrows>
            <img src={post.img} alt="" />
          </Gallery>
          <Div>
            <MiniInfoCell
              className="event_dates"
              before={<Icon20CalendarOutline />}
            >
              {post.date}
            </MiniInfoCell>
            <Title className="event_title" level="1">
              {post.title}
            </Title>
            <Text className="event_text">{post.description}</Text>
          </Div>
        </Group>
      </Card>
    </Panel>
  );
};

export default Post;
