import { useSelector } from "react-redux";
import { EventData, EventsFilters } from "../../types/types";
import {
  addNewEvent,
  fetchEvents,
  selectAllEvents,
} from "../features/eventsSlice";
import { useAppDispatch } from "../store/store";

const useEvents = () => {
  const events = useSelector(selectAllEvents);
  const dispatch = useAppDispatch();

  return {
    events,
    addEvent: (newEvent: EventData) => dispatch(addNewEvent(newEvent)),
    loadEvents: (filters: EventsFilters) => dispatch(fetchEvents(filters)),
  };
};
export default useEvents;
