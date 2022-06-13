import React, { useState, useEffect } from "react";
import type { FC, ReactElement } from "react";
import bridge from "@vkontakte/vk-bridge";
import {
  ScreenSpinner,
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  SplitLayout,
  SplitCol,
  Epic,
} from "@vkontakte/vkui";
import type { UserInfo } from "@vkontakte/vk-bridge";
import { Provider } from "react-redux";
import { Tab, UserCustomData } from "./types/types";
import Profile from "./components/Profile";
import Navigation from "./components/Navigation";
import Posts from "./components/Posts";
import Events from "./components/Events";
import { defaultUserCustomData, defaultVolunteerData } from "./data/defaults";
import Stories from "./components/Stories";
import useStories from "./hooks/useStories";
import UserProvider from "./providers/UserProvider";
import store from "./redux/store/store";

import "@vkontakte/vkui/dist/vkui.css";
import "@vkontakte/vkui/dist/components.css";
import "./styles/customStyle.css";
import Welcome from "./components/Welcome";
import useAuth from "./hooks/useAuth";

const App: FC = () => {
  const [popout, setPopout] = useState<ReactElement | null>(
    <ScreenSpinner size="large" />
  );

  const { isLoggedIn, isAdmin, isBusines, onLogin, onLogout } = useAuth();

  const [activeTab, setActiveTab] = useState<Tab>("posts");

  const onTabChange = (e: React.MouseEvent<HTMLElement>) => {
    setActiveTab(e.currentTarget.dataset.tab as Tab);
  };

  const {
    stories,
    activeStoryIndex,
    onNextStory,
    onPreviousStory,
    onStoryClick,
    onStoriesClose,
  } = useStories();

  const volunteer = defaultVolunteerData;
  const [user, setUser] = useState<UserInfo | null>(null);
  const [userCustomData, setUserCustomData] = useState<UserCustomData>(
    defaultUserCustomData
  );

  const handleFormSave = (formData: UserCustomData) => {
    setUserCustomData(formData);
  };

  useEffect(() => {
    async function fetchUser() {
      try {
        const user = await bridge.send("VKWebAppGetUserInfo");
        setUser(user);
        setPopout(null);
      } catch (e) {
        console.error(e);
        setUser(null);
        setPopout(null);
      }
    }

    fetchUser();
  }, []);

  useEffect(() => {
    setActiveTab(isAdmin || isBusines ? "events" : "posts");
  }, [isAdmin, isBusines]);

  return (
    <Provider store={store}>
      <UserProvider user={user}>
        <ConfigProvider>
          <AdaptivityProvider>
            <AppRoot>
              <SplitLayout
                popout={popout}
                modal={
                  <Stories
                    stories={stories}
                    activeStoryIndex={activeStoryIndex}
                    onNextStory={onNextStory}
                    onPreviousStory={onPreviousStory}
                    onStoriesClose={onStoriesClose}
                  />
                }
              >
                <SplitCol>
                  {!isLoggedIn ? (
                    <Welcome onLogin={onLogin} />
                  ) : (
                    <Epic
                      activeStory={activeTab}
                      tabbar={
                        <Navigation
                          onTabChange={onTabChange}
                          activeTab={activeTab}
                        />
                      }
                    >
                      {isAdmin ? null : (
                        <Posts id="posts" onStoryClick={onStoryClick} />
                      )}
                      <Events id="events" />
                      <Profile
                        id="profile"
                        userCustomData={userCustomData}
                        volunteer={volunteer}
                        onFormSave={handleFormSave}
                        onLogout={onLogout}
                      />
                    </Epic>
                  )}
                </SplitCol>
              </SplitLayout>
            </AppRoot>
          </AdaptivityProvider>
        </ConfigProvider>
      </UserProvider>
    </Provider>
  );
};

export default App;
