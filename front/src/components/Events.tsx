import React, { useEffect, useState } from "react";
import type { FC } from "react";
import {
  FormLayout,
  FormItem,
  Group,
  View,
  PanelHeader,
  PanelHeaderButton,
  Panel,
  PanelHeaderBack,
  CardGrid,
  Header,
  ContentCard,
  MiniInfoCell,
  Button,
  Placeholder,
} from "@vkontakte/vkui";
import {
  Icon20CalendarCircleFillRed,
  Icon20PlaceOutline,
  Icon28AddOutline,
  Icon28SlidersOutline,
} from "@vkontakte/icons";
import { useAdaptivityIsDesktop } from "@vkontakte/vkui/dist/hooks/useAdaptivity";
import type { EventData, TEvent } from "../types/types";
import Filters from "./Filters";
import { formatDate } from "../utils/utils";
import Event from "./Event";
import useEvents from "../redux/hooks/useEvents";
import { useFilters } from "../hooks/useFilters";
import useAuth from "../hooks/useAuth";
import AddEvent from "./AddEvent";
import Applications from "./Applications";

type Props = {
  id: string;
};

type Panels = "filters" | "events" | "event" | "addEvent" | "applications";

const Events: FC<Props> = ({ id }) => {
  const isDesktop = useAdaptivityIsDesktop();
  const [panel, setPanel] = useState<Panels>("events");

  const [currentEvent, setCurrentEvent] = useState<TEvent | null>(null);

  const { isAdmin } = useAuth();

  const handleCardClick = (event: TEvent) => {
    setCurrentEvent(event);
    setPanel("event");
  };

  const handleReturn = () => setPanel("events");

  const handleSubmitFilters = () => {
    setPanel("events");
  };

  const handleEventFormSave = (formData: EventData) => {
    addEvent(formData);
    setPanel("events");
  };

  const {
    defaultTags,
    datesFilter,
    tagsFilter,
    search,
    onDatesFilterChange,
    onTagsFilterChange,
    onClearFilters,
    onSearchChange,
  } = useFilters();

  const { events, loadEvents, addEvent } = useEvents();

  const [applied, setApplied] = useState<number[]>([]);
  const [accepted, setAccepted] = useState<number[]>([]);

  const handleLookApplications = (
    appliedUsers: number[],
    acceptedUsers: number[]
  ) => {
    setApplied(appliedUsers);
    setAccepted(acceptedUsers);
    setPanel("applications");
  };

  useEffect(() => {
    loadEvents({
      date_start: formatDate(datesFilter[0]) || "",
      date_end: formatDate(datesFilter[1]) || "",
      tags: tagsFilter.map((tag) => tag.value).join("-"),
      query: search,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [datesFilter[0], datesFilter[1], tagsFilter.length, search]);

  return (
    <View id={id} activePanel={panel}>
      <Panel id="events">
        <PanelHeader
          before={
            <PanelHeaderButton
              aria-label="Filters"
              onClick={() => setPanel("filters")}
            >
              <Icon28SlidersOutline />
            </PanelHeaderButton>
          }
        >
          События
        </PanelHeader>
        {isAdmin && (
          <Group>
            <FormLayout>
              <FormItem>
                <Button
                  before={<Icon28AddOutline />}
                  mode="primary"
                  size="l"
                  stretched
                  onClick={() => setPanel("addEvent")}
                >
                  Создать событие
                </Button>
              </FormItem>
            </FormLayout>
          </Group>
        )}
        <Group>
          <Header>Варианты</Header>
          {events.length ? (
            <CardGrid size={isDesktop ? "m" : "l"}>
              {events.map((event) => (
                <ContentCard
                  onClick={() => handleCardClick(event)}
                  key={event.id}
                  src={event.imgs?.[0]}
                  header={
                    event.title?.length > 50
                      ? event.title.slice(0, 48) + "..."
                      : event.title
                  }
                  text={
                    event.description?.length > 100
                      ? event.description.slice(0, 98) + "..."
                      : event.description
                  }
                  maxHeight={300}
                  caption={
                    <>
                      <MiniInfoCell
                        className="event_info"
                        before={<Icon20CalendarCircleFillRed />}
                      >
                        {event.date_start?.slice(0, 10)} -{" "}
                        {event.date_end?.slice(0, 10)}
                      </MiniInfoCell>
                      <MiniInfoCell
                        className="event_info"
                        before={<Icon20PlaceOutline />}
                      >
                        {event.address}
                      </MiniInfoCell>
                    </>
                  }
                />
              ))}
            </CardGrid>
          ) : (
            <Placeholder
              header="По вашему запросы событий не найдено"
              action={
                <Button mode="tertiary" onClick={() => setPanel("filters")}>
                  К фильтрам
                </Button>
              }
            />
          )}
        </Group>
      </Panel>
      <Panel id="filters">
        <PanelHeader
          before={<PanelHeaderBack onClick={() => setPanel("events")} />}
        >
          Фильтры
        </PanelHeader>
        <Filters
          datesFilter={datesFilter}
          onDatesFilterChange={onDatesFilterChange}
          eventsCount={events.length}
          defaultTags={defaultTags}
          selectedTags={tagsFilter}
          onSearchChange={onSearchChange}
          onTagsFilterChange={onTagsFilterChange}
          onClearFilters={onClearFilters}
          onSubmitFilters={handleSubmitFilters}
        />
      </Panel>
      <Event
        id="event"
        onReturn={handleReturn}
        onLookApplications={handleLookApplications}
        event={currentEvent}
      />
      <AddEvent
        id="addEvent"
        onReturn={handleReturn}
        onEventFormCancel={handleReturn}
        onEventFormSave={handleEventFormSave}
      />
      <Applications
        id="applications"
        applied={applied}
        accepted={accepted}
        onReturn={() => setPanel("event")}
      />
    </View>
  );
};

export default Events;
