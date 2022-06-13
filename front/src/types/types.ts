export type Tab = "posts" | "events" | "profile" | "filters";

export type Volunteer = {
  workedHours: number;
  events: number;
  rating: number;
  title: string;
  status: string;
};

export type UserCustomData = {
  phone: string;
  email: string;
  school: string;
};

export type TEvent = {
  id: number;
  date_start: string;
  date_end: string;
  address: string;
  imgs: string[];
  title: string;
  description: string;
  requirements: string[];
  important?: string;
  organization: string;
  email: string;
  phone: string;
  orgName?: string;
  services?: string[];
  tags: { name: string }[];
  offers_json?: {
    offers: Offer[];
  };
};

export type TPost = {
  id: number;
  date: string;
  title: string;
  description: string;
  img: string;
};

export type DateRange = Array<Date>;

export type TagOption = {
  label?: string;
  value?: any;
};

export type TStory = {
  id: number;
  imgs: string[];
  cover: string;
  watched: boolean;
};

export type EventsFilters = {
  query?: string;
  date_start?: string;
  date_end?: string;
  tags?: string;
};

export type EventData = {
  date_start: string;
  date_end: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  tags: string[];
  offers: {
    id: number;
    title: string;
    capacity: number;
  }[];
};

export type Offer = {
  id: number;
  title: string;
  capacity: number;
  applied?: number[];
  accepted?: number[];
};
