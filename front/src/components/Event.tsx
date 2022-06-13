import React from "react";
import type { FC } from "react";
import type { TEvent } from "../types/types";
import {
  Banner,
  Button,
  Card,
  Div,
  FormItem,
  Gallery,
  Group,
  Header,
  MiniInfoCell,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Placeholder,
  Progress,
  SimpleCell,
  Text,
  Title,
} from "@vkontakte/vkui";
import {
  Icon20CalendarOutline,
  Icon20Check,
  Icon20Favorite,
  Icon28AdvertisingCircleFillRed,
  Icon28MailOutline,
  Icon28PhoneOutline,
  Icon56UserCircleOutline,
} from "@vkontakte/icons";
import useAuth from "../hooks/useAuth";

type Props = {
  id: string;
  event: TEvent | null;
  onReturn: () => void;
  onLookApplications: (applied: number[], accepted: number[]) => void;
};

const Event: FC<Props> = ({ id, event, onReturn, onLookApplications }) => {
  const { isAdmin } = useAuth();

  if (!event)
    return (
      <Panel id={id}>
        <PanelHeader before={<PanelHeaderBack onClick={onReturn} />}>
          Событие
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
            Событие
            <br />
            не найдено
          </Placeholder>
        </Group>
      </Panel>
    );

  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={onReturn} />}>
        Событие
      </PanelHeader>
      <Card>
        <Group>
          <Gallery bullets="dark" showArrows>
            {event.imgs?.map((img, index) => (
              <img src={img} alt="" key={index} />
            ))}
          </Gallery>
          <Div>
            <MiniInfoCell
              className="event_dates"
              before={<Icon20CalendarOutline />}
            >
              {event.date_start?.slice(0, 10)} - {event.date_end?.slice(0, 10)}
            </MiniInfoCell>
            <Title className="event_title" level="1">
              {event.title}
            </Title>
            <Text className="event_text">{event.description}</Text>
          </Div>
        </Group>
        <Group header={<Header mode="primary">Требования</Header>}>
          {event.requirements?.map((req, index) => (
            <MiniInfoCell before={<Icon20Check />} key={index}>
              {req}
            </MiniInfoCell>
          ))}
        </Group>
        <Group>
          {event.important && (
            <Banner
              before={<Icon28AdvertisingCircleFillRed />}
              text={event.important}
            />
          )}
        </Group>
        <Group header={<Header mode="primary">Контакты</Header>}>
          <SimpleCell before={<Icon28MailOutline />}>{event.email}</SimpleCell>
          <SimpleCell before={<Icon28PhoneOutline />}>{event.phone}</SimpleCell>
        </Group>
        <Group header={<Header mode="primary">Теги</Header>}>
          {event.tags?.map((tag, index) => (
            <MiniInfoCell before={<Icon20Favorite />} key={index}>
              {tag.name}
            </MiniInfoCell>
          ))}
        </Group>
        <Group header={<Header mode="primary">Вакансии</Header>}>
          {event.offers_json?.offers.map((offer, index) => (
            <Group
              key={index}
              header={<Header mode="primary">{offer.title}</Header>}
            >
              <FormItem
                id="progresslabel"
                top={`${offer.accepted?.length ?? 0}/${offer.capacity}`}
              >
                <Progress
                  aria-labelledby="progresslabel"
                  value={
                    (+(offer.accepted?.length ?? 0) / offer.capacity) * 100
                  }
                />
              </FormItem>
              <FormItem style={{ display: "flex", justifyContent: "center" }}>
                {isAdmin ? (
                  <Button
                    size="l"
                    appearance="accent"
                    onClick={() =>
                      onLookApplications(
                        offer.applied ?? [],
                        offer.accepted ?? []
                      )
                    }
                  >
                    Посмотреть заявки
                  </Button>
                ) : (
                  <Button size="l" appearance="accent">
                    Записаться
                  </Button>
                )}
              </FormItem>
            </Group>
          ))}
        </Group>
      </Card>
    </Panel>
  );
};

export default Event;
