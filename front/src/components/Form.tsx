import React, { useState } from "react";
import {
  Group,
  FormLayout,
  FormItem,
  Input,
  Button,
  ButtonGroup,
} from "@vkontakte/vkui";
import type { FC } from "react";
import { UserCustomData } from "../types/types";

type Props = {
  userCustomData: UserCustomData;
  onFormSave: (data: UserCustomData) => void;
  onFormCancel: () => void;
};

const Form: FC<Props> = ({ userCustomData, onFormSave, onFormCancel }) => {
  const [formData, setFormData] = useState(userCustomData);
  const { email, phone, school } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  return (
    <Group>
      <FormLayout>
        <FormItem top="E-mail">
          <Input type="email" name="email" value={email} onChange={onChange} />
        </FormItem>
        <FormItem top="Телефон">
          <Input type="tel" name="phone" value={phone} onChange={onChange} />
        </FormItem>
        <FormItem top="ВУЗ">
          <Input type="text" name="school" value={school} onChange={onChange} />
        </FormItem>
        <FormItem>
          <ButtonGroup mode="horizontal" stretched>
            <Button
              size="l"
              appearance="neutral"
              stretched
              onClick={onFormCancel}
            >
              Отмена
            </Button>
            <Button
              size="l"
              appearance="accent"
              stretched
              onClick={() => onFormSave({ ...formData })}
            >
              Сохранить
            </Button>
          </ButtonGroup>
        </FormItem>
      </FormLayout>
    </Group>
  );
};

export default Form;
