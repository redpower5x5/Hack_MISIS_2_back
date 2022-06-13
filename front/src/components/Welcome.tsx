import { Button, ButtonGroup, Div } from "@vkontakte/vkui";
import React from "react";
import type { FC } from "react";

type Props = {
  onLogin: (asAdmin: boolean, asBusines: boolean) => void;
};

const Welcome: FC<Props> = ({ onLogin }) => {
  return (
    <Div className="welcome">
      <ButtonGroup mode="vertical">
        <Button
          size="l"
          mode="primary"
          className="welcome_button"
          onClick={() => onLogin(false, false)}
        >
          Войти через ВКонтакте
        </Button>
        <Button
          size="l"
          mode="secondary"
          className="welcome_button"
          href="https://mosvolonter.ru/"
          target="_blank"
          onClick={() => onLogin(false, false)}
        >
          Войти через Мосволонтер
        </Button>
        <Button
          size="l"
          mode="secondary"
          className="welcome_button"
          onClick={() => onLogin(true, false)}
        >
          Я организатор
        </Button>
        <Button
          size="l"
          mode="secondary"
          className="welcome_button"
          onClick={() => onLogin(false, true)}
        >
         Благотворительность
        </Button>
      </ButtonGroup>
    </Div>
  );
};

export default Welcome;
