import React from "react";
import type { FC } from "react";
import { Tabbar, TabbarItem } from "@vkontakte/vkui";
import {
  Icon28ServicesOutline,
  Icon28NewsfeedOutline,
  Icon28UserCircleOutline,
} from "@vkontakte/icons";
import { Tab } from "../types/types";
import useAuth from "../hooks/useAuth";

type Props = {
  onTabChange: (e: React.MouseEvent<HTMLElement>) => void;
  activeTab: Tab;
};

const Navigation: FC<Props> = ({ onTabChange, activeTab }) => {
  const { isAdmin, isBusines } = useAuth();

  return (
    <Tabbar>
      {!isAdmin && !isBusines && (
        <TabbarItem
          onClick={onTabChange}
          selected={activeTab === "posts"}
          data-tab="posts"
          text="Новости"
        >
          <Icon28NewsfeedOutline />
        </TabbarItem>
      )}
      <TabbarItem
        onClick={onTabChange}
        selected={activeTab === "events"}
        data-tab="events"
        text="События"
      >
        <Icon28ServicesOutline />
      </TabbarItem>
      {!isBusines && (
        <TabbarItem
        onClick={onTabChange}
        selected={activeTab === "profile"}
        data-tab="profile"
        text="Профиль"
      >
        <Icon28UserCircleOutline />
      </TabbarItem>
      )}
      
    </Tabbar>
  );
};

export default Navigation;
