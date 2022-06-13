import React, { useEffect, useState } from "react";
import {
  Group,
  FormLayout,
  FormItem,
  Input,
  Button,
  ButtonGroup,
  Textarea,
  DatePicker,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  FormLayoutGroup,
  Banner,
  IconButton,
} from "@vkontakte/vkui";
import type { FC } from "react";
import { EventData, TagOption, Offer } from "../types/types";
import { defaultEventData } from "../data/defaults";
import {
  Icon16Clear,
  Icon28AddOutline,
  Icon28WarningTriangleOutline,
} from "@vkontakte/icons";
import useTags from "../redux/hooks/useTags";
import { ChipsSelect } from "@vkontakte/vkui/dist/unstable";

type Props = {
  id: string;
  onReturn: () => void;
  onEventFormSave: (data: EventData) => void;
  onEventFormCancel: () => void;
};

type TDatePicker = {
  day: number;
  month: number;
  year: number;
};

const AddEvent: FC<Props> = ({
  id,
  onReturn,
  onEventFormSave,
  onEventFormCancel,
}) => {
  const { tags, loadTags } = useTags();
  const defaultTags = tags.map((tag) => ({ label: tag, value: tag }));

  const [formData, setFormData] = useState<EventData>(defaultEventData);
  const {
    email,
    phone,
    title,
    description,
    offers,
    tags: selectedTags,
  } = formData;

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleAddOffer = () => {
    const lastIndex = offers[offers.length - 1]?.id ?? -1;
    const newIndex = lastIndex + 1;

    const newOffer = {
      id: newIndex,
      title: "",
      capacity: 0,
    };

    setFormData((formData) => ({
      ...formData,
      offers: [...offers, newOffer],
    }));
  };

  const handleOfferNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    editOffer: Offer
  ) => {
    const offerIndex = offers.findIndex((offer) => offer.id === editOffer.id);
    editOffer.title = e.currentTarget.value;
    setFormData((formData) => ({
      ...formData,
      offers: Object.assign([], offers, { [offerIndex]: editOffer }),
    }));
  };

  const handleOfferCapacityChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    editOffer: Offer
  ) => {
    const offerIndex = offers.findIndex((offer) => offer.id === editOffer.id);
    editOffer.capacity = +e.currentTarget.value;
    setFormData((formData) => ({
      ...formData,
      offers: Object.assign([], offers, { [offerIndex]: editOffer }),
    }));
  };

  const handleDateStartChange = (date: TDatePicker) => {
    setFormData((formData) => ({
      ...formData,
      date_start: `${date.year}-${date.month
        .toString()
        .padStart(2, "0")}-${date.day.toString().padStart(2, "0")}`,
    }));
  };

  const handleDateEndChange = (date: TDatePicker) => {
    setFormData((formData) => ({
      ...formData,
      date_end: `${date.year}-${date.month
        .toString()
        .padStart(2, "0")}-${date.day.toString().padStart(2, "0")}`,
    }));
  };

  const handleTagsChange = (tags: TagOption[]) => {
    setFormData((formData) => ({
      ...formData,
      tags: [
        ...tags.reduce((acc, tag) => {
          acc.push(tag.value);
          return acc;
        }, [] as string[]),
      ],
    }));
  };

  const handleTagsClear = () => {
    setFormData((formData) => ({
      ...formData,
      tags: [],
    }));
  };

  const defaultTagsProps = {
    value: selectedTags.map((tag) => ({ label: tag, value: tag })),
    onChange: handleTagsChange,
    options: defaultTags,
    placeholder: "Не выбраны",
    creatable: true,
    creatableText: "",
  };

  useEffect(() => {
    loadTags();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={onReturn} />}>
        Создание события
      </PanelHeader>
      <Group>
        <Banner
          before={<Icon28WarningTriangleOutline />}
          text="Минимально необходимо заполнить поля дат начала и окончания события, а также тегов. Иначе будет ошибка. Валидация пока отсутствует"
        />
        <FormLayout>
          <FormItem top="Название">
            <Input type="text" name="title" value={title} onChange={onChange} />
          </FormItem>
          <FormItem top="Описание">
            <Textarea
              name="description"
              value={description}
              onChange={onChange}
            />
          </FormItem>
          <FormLayoutGroup mode="horizontal">
            <FormItem top="Дата начала">
              <DatePicker
                min={{
                  day: new Date().getDate(),
                  month: new Date().getMonth(),
                  year: new Date().getFullYear(),
                }}
                max={{ day: 1, month: 1, year: 2030 }}
                onDateChange={handleDateStartChange}
                dayPlaceholder="День"
                monthPlaceholder="Месяц"
                yearPlaceholder="Год"
              />
            </FormItem>
            <FormItem top="Дата окончания">
              <DatePicker
                min={{
                  day: new Date().getDate(),
                  month: new Date().getMonth(),
                  year: new Date().getFullYear(),
                }}
                max={{ day: 1, month: 1, year: 2030 }}
                onDateChange={handleDateEndChange}
                dayPlaceholder="День"
                monthPlaceholder="Месяц"
                yearPlaceholder="Год"
              />
            </FormItem>
          </FormLayoutGroup>
          <FormLayoutGroup mode="horizontal">
            <FormItem top="E-mail для контакта">
              <Input
                type="email"
                name="email"
                value={email}
                onChange={onChange}
              />
            </FormItem>
            <FormItem top="Телефон для контакта">
              <Input
                type="tel"
                name="phone"
                value={phone}
                onChange={onChange}
              />
            </FormItem>
          </FormLayoutGroup>
          {offers.map((offer) => (
            <FormLayoutGroup mode="horizontal" key={offer.id}>
              <FormItem top="Название вакансии">
                <Input
                  type="text"
                  name={`name_${offer.id}`}
                  value={offer.title}
                  onChange={(e) => handleOfferNameChange(e, offer)}
                />
              </FormItem>
              <FormItem top="Количество волонтеров">
                <Input
                  type="number"
                  name={`capacity_${offer.id}`}
                  value={offer.capacity}
                  onChange={(e) => handleOfferCapacityChange(e, offer)}
                />
              </FormItem>
            </FormLayoutGroup>
          ))}
          <FormItem top="Вакансии">
            <Button
              size="l"
              appearance="accent"
              mode="tertiary"
              stretched
              before={<Icon28AddOutline />}
              onClick={handleAddOffer}
            >
              Добавить вакансию
            </Button>
          </FormItem>
          <FormItem top="Теги">
            <ChipsSelect
              {...defaultTagsProps}
              after={
                <IconButton hoverMode="opacity" onClick={handleTagsClear}>
                  <Icon16Clear />
                </IconButton>
              }
            />
          </FormItem>
          <FormItem>
            <ButtonGroup mode="horizontal" stretched>
              <Button
                size="l"
                appearance="neutral"
                stretched
                onClick={onEventFormCancel}
              >
                Отмена
              </Button>
              <Button
                size="l"
                appearance="accent"
                stretched
                onClick={() => onEventFormSave({ ...formData })}
              >
                Сохранить
              </Button>
            </ButtonGroup>
          </FormItem>
        </FormLayout>
      </Group>
    </Panel>
  );
};

export default AddEvent;
