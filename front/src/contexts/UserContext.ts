import { UserInfo } from "@vkontakte/vk-bridge";
import React from "react";

export type UserContextProps = {
  user: UserInfo | null;
};

const UserContext = React.createContext<UserContextProps | null>(null);

export { UserContext };
