import type { TEvent, TPost, TStory } from "../types/types";

export const mockVolunteer = {
  hours: 16,
  events: 6,
  rating: 450,
  title: "Дед Мазай",
  status: "Участник",
};

export const mockTags: { name: string }[] = [
  {
    name: "Дети и молодежь",
  },
  {
    name: "Культура и искусство",
  },
  {
    name: "Здравоохранение и ЗОЖ",
  },
  {
    name: "Старшее поколение",
  },
];

export const mockEvents: TEvent[] = [
  {
    id: 1,
    date_start: "2022-05-01",
    date_end: "2022-12-31",
    address: "Город Москва",
    imgs: [
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    ],
    title: "Станьте медиаволонтёром!",
    description:
      "Умеете фотографировать, писать посты для соцсетей или снимать видео? Готовы помогать? Приглашаем вас стать частью команды медиаволонтёров! Вы прокачаете свои навыки в фотографировании, познакомитесь с единомышленниками и будете частью масштабных событий Москвы, получите бесценный опыт в медиасфере и сможете попробовать себя в разных ролях: фотографа, видеографа или райтера. Заполняйте анкету, прикрепляйте ссылку на своё портфолио (ваши тексты, фото- или видеоматериалы), и мы с вами свяжемся по электронной почте в течение недели.",
    requirements: [
      "креативность",
      "умение фотографировать, снимать и/или монтировать видео, писать посты",
      "готовность учиться новому",
      "умение находить компромиссы",
      "готовность помогать в развитии добровольчества в Москве",
    ],
    important:
      "Ваше портфолио должно быть загружено на любом облачном хранилище, доступ пользователям по ссылке должен быть разрешён.",
    organization: "ГБУ города Москвы «Мосволонтёр»",
    email: "ProkofevIA@mos.ru",
    phone: "8 (499) 722-69-94",
    orgName: "Прокофьев Игорь",
    tags: mockTags,
  },
  {
    id: 2,
    date_start: "2022-05-01",
    date_end: "2022-12-31",
    address: "Город Москва",
    imgs: [
      "https://images.unsplash.com/photo-1543333995-a78aea2eee50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      "https://images.unsplash.com/photo-1609131257008-a5436a6238da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2296&q=80",
    ],
    title: "Региональный волонтёрский центр «Молоды душой»",
    description:
      "В 2021 году Ресурсный центр «Мосволонтёр» стал региональным центром федеральной программы «Молоды душой». Если вам 55 лет и больше и вы хотите сделать жизнь в городе добрее и лучше, приглашаем вас стать частью команды «серебряных» волонтёров Регионального волонтёрского центра «Молоды душой». Сегодня в Москве насчитывается более 1000 волонтёров старше 55 лет. Они активно участвуют в социальных, спортивных, экологических, патриотических акциях и мероприятиях.",
    requirements: [
      "возраст от 55 лет",
      "достоверное заполнение запрашиваемых данных в анкете",
      "желание помогать другим людям и делать мир добрее вместе с нами",
    ],
    important:
      "Регистрация на данное событие не предполагает проведения очного мероприятия, после регистрации мы пригласим всех «серебряных» волонтёров в наш информационный чат, в котором вы найдёте только самые актуальные мероприятия и никакого спама!",
    organization: "ГБУ города Москвы «Мосволонтёр»",
    email: "otdelvc@mosvolonter.ru",
    phone: "+7 (499) 722-69-98",
    orgName: "Рашит или Светлана",
    tags: mockTags,
  },
  {
    id: 3,
    date_start: "2022-07-07",
    date_end: "2022-07-10",
    address:
      "г. Москва, ул. Проспект Мира, д. 119, стр. 2, павильон №2 «Робостанция»",
    imgs: [
      "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      "https://images.unsplash.com/photo-1563207153-f403bf289096?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80",
    ],
    title:
      "Федеральный этап Всероссийских робототехнических соревнований «Инженерные кадры России»",
    description:
      "С 7 по 10 июня 2022 года в Москве на ВДНХ в павильоне №2 состоится финал конкурса «Инженерные кадры России». «ИКаР» — это линейка российских соревнований, которые направлены на повышение интереса школьников к научно-техничесому творчеству. С помощью подобных мероприятий дети пробуют моделировать и конструировать, что позволяет активнее выбирать научно-технические профессии. Приглашаем принять участие в качестве волонтёра!",
    requirements: [
      "возраст от 14 лет",
      "возможность помогать не менее 2 дней",
      "стрессоустойчивость, коммуникабельность, доброжелательность и ответственность",
      "отсутствие симптомов ОРВИ/ОРЗ/Covid-19 в день мероприятия и за 14 дней до начала",
    ],
    services: [
      "экипировка (футболка, бейджи, блокнот с ручкой)",
      "питание",
      "благодарственные письма от организаторов",
    ],
    important:
      "Со всеми волонтёрами, подавшими заявку, организаторы свяжутся после 5 июня 2022 года.",
    organization: "ГБУ города Москвы «Мосволонтёр»",
    email: "event@mosvolonter.ru",
    phone: "8 (499) 722-69-94",
    tags: mockTags,
  },
];

export const mockPosts: TPost[] = [
  {
    id: 3,
    title: "Мэр Москвы учредил знак отличия «Волонтёр Москвы»",
    description:
      "Ежегодно им будут поощрять до 30 добровольцев. Памятный знак будут вручать волонтёрам, которые вносили особый вклад в развитие добровольчества столицы на протяжении последних двух лет. Знак отличия выполнен из металла золотистого цвета в форме круга. Лицевую сторону украшает рельефное изображение заглавного элемента герба столицы — святого Георгия Победоносца, а также красный контур сердца, стилизованный в виде лавровой ветви. Оборотная сторона содержит надпись: «Волонтёр Москвы». Спасибо добровольцам столицы, что своим примером из года в год доказываете, что в столице равнодушных нет!",
    date: "2022-06-05",
    img: "https://images.unsplash.com/photo-1620764840976-a6752f359c46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2094&q=80",
  },
  {
    id: 2,
    title: "Открыт набор для участия в Премии #МыВместе",
    description:
      "Подать конкурсную заявку можно на сайте Премия.мывместе.рф или на платформе ДОБРО.РФ до 12 июня. При подаче заявки необходимо указать одну из категорий: «Волонтёры», «НКО» или «Бизнес», далее выбрать номинацию для проекта или программы. Следующий шаг — нажать на кнопку «Подать заявку» и войти в свой профиль на платформе ДОБРО.РФ. Для развития своих полезных инициатив лауреаты Премии получат гранты в размере от 600 тыс. руб. до 3,5 млн руб. В этом году категория волонтеры включает номинации: «Помощь людям», «Территория для жизни», «Медиапроект», «Страна возможностей», «Здоровье нации». Принять участие в Премии смогут и совсем юные добровольцы от 14 до 18 лет, для них учреждена номинация «Большая перемена». Подробности проведения и участия в Премии можно найти на официальном сайте.",
    date: "2022-06-04",
    img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  },
  {
    id: 1,
    title: "Доступен новый опрос в личном кабинете",
    description:
      "С 18 по 27 мая в Москве проходил проект «Время добра». Свыше двух тысяч добровольцев и неравнодушных москвичей поддержали более 40 полезных событий, благотворительных акций и мероприятий. Волонтёры создавали авторские картины, реставрировали книги, помогали животным в приютах, приводили в порядок парки, сажали деревья и участвовали в донорских акциях. В Личном кабинете доступен новый опрос про проект и ваше участие в нём. В течение недели можно поделиться своими впечатлениями и мнением.",
    date: "2022-06-02",
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2376&q=80",
  },
];

export const mockStories: TStory[] = [
  {
    id: 1,
    imgs: [
      "https://images.unsplash.com/photo-1638913971873-bcef634bdcd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      "https://images.unsplash.com/photo-1643101809653-45c4121a3934?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      "https://images.unsplash.com/photo-1643101809754-43a91784ebec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      "https://images.unsplash.com/photo-1643101807256-494215639a2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80",
    ],
    cover:
      "https://images.unsplash.com/photo-1638913971873-bcef634bdcd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    watched: false,
  },
  {
    id: 2,
    imgs: [
      "https://images.unsplash.com/photo-1654796575923-320283f6b8c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
      "https://images.unsplash.com/photo-1654922811950-bce21eb830fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    ],
    cover:
      "https://images.unsplash.com/photo-1654796575923-320283f6b8c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
    watched: false,
  },
  {
    id: 3,
    imgs: [
      "https://images.unsplash.com/photo-1654894973229-5f2ec3e4201a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1498&q=80",
      "https://images.unsplash.com/photo-1654922462413-36d3e2c48abd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    ],
    cover:
      "https://images.unsplash.com/photo-1654894973229-5f2ec3e4201a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1498&q=80",
    watched: false,
  },
  {
    id: 4,
    imgs: [
      "https://images.unsplash.com/photo-1654896887944-691330f7dac7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
      "https://images.unsplash.com/photo-1654876374230-aa4e8c03b9c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    ],
    cover:
      "https://images.unsplash.com/photo-1654896887944-691330f7dac7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
    watched: false,
  },
];
