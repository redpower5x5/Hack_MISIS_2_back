import React, { useEffect, useState } from "react";
import { Icon28UserOutline } from "@vkontakte/icons";
import type { FC } from "react";
import {
  Cell,
  Div,
  Group,
  List,
  Panel,
  PanelHeader,
  PanelHeaderBack,
} from "@vkontakte/vkui";

type Props = {
  id: string;
  applied: number[];
  accepted: number[];
  onReturn: () => void;
};

const Applications: FC<Props> = ({ id, applied, accepted, onReturn }) => {
  const [appliedUsers, setAppliedUsers] = useState<{ name: string }[]>([]);
  const [acceptedUsers, setAcceptedUsers] = useState<{ name: string }[]>([]);

  useEffect(() => {
    async function fetchApplied() {
      const response = await fetch("https://api.onixx.org/user/select", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ users: applied }),
      });
      const users = await response.json();

      setAppliedUsers(users);
    }
    async function fetchAccepted() {
      const response = await fetch("https://api.onixx.org/user/select", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ users: accepted }),
      });

      const users = await response.json();

      setAcceptedUsers(users);
    }
    fetchApplied();
    fetchAccepted();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!accepted || !applied) return <Div>Не найдено</Div>;

  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={onReturn} />}>
        Все заявки
      </PanelHeader>
      <Group header="Одобрено">
        <List>
          {acceptedUsers?.map((user, index) => (
            <Cell key={index} before={<Icon28UserOutline />}>
              {user.name}
            </Cell>
          ))}
        </List>
      </Group>
      <Group header="На рассмотрении">
        <List>
          {appliedUsers?.map((user, index) => (
            <Cell key={index} before={<Icon28UserOutline />}>
              {user.name}
            </Cell>
          ))}
        </List>
      </Group>
    </Panel>
  );
};

export default Applications;
