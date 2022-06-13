import { UserInfo } from "@vkontakte/vk-bridge";
import { EventData, UserCustomData, Volunteer } from "../types/types";

export const defaultUserCustomData: UserCustomData = {
  phone: "+7 916 123 45 67",
  email: "example@gmail.com",
  school: "МГУ",
};

export const defaultVolunteerData: Volunteer = {
  workedHours: 15,
  events: 4,
  rating: 3200,
  title: "Волонтерище",
  status: "Участник",
};

export const defaultUser = {
  first_name: "Иван",
  last_name: "Иванов",
} as UserInfo;

export const defaultEventData: EventData = {
  date_start: "",
  date_end: "",
  title: "",
  description: "",
  email: "",
  phone: "",
  tags: [],
  offers: [],
};
