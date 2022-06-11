const express = require("express");
const sequelize = require('./database');
const Event = require('./Events');
const Tag = require('./Tags');
const Post = require('./Posts');

sequelize.sync({force: true}).then(() => console.log('db isready'));

Event.belongsToMany(Tag, {
  through: "event_tag",
  as: "tags",
  foreignKey: "event_id",
});
Tag.belongsToMany(Event, {
  through: "event_tag",
  as: "events",
  foreignKey: "tag_id",
});

exports.addEvent = (tagId, eventId) => {
  return Tag.findByPk(tagId)
    .then((tag) => {
      if (!tag) {
        console.log("Tag not found!");
        return null;
      }
      return Event.findByPk(eventId).then((event) => {
        if (!event) {
          console.log("Tutorial not found!");
          return null;
        }
        tag.addEvent(event);
        console.log(`>> added Tutorial id=${event.id} to Tag id=${tag.id}`);
        return tag;
      });
    })
    .catch((err) => {
      console.log(">> Error while adding Tutorial to Tag: ", err);
    });
};

const app = express();

app.use(express.json())

app.post('/init/tags', (req, res) => {
  Tag.bulkCreate([
    { name: 'Дети и молодежь'},
    { name: 'Культура и искусство'},
    { name: 'Здравоохранение и ЗОЖ'},
    { name: 'Старшее поколение'},
    { name: 'Образование'},
    { name: 'Спорт и события'},
    { name: 'Природа'},
    { name: 'Другое'},
    { name: 'Животные'},
    { name: 'Коронавирус'},
    { name: 'Интеллектуальная помощь'},
    { name: 'Урбанистика'},
    { name: 'Люди с ОВЗ'},
    { name: 'ЧС'},
    { name: 'Права человека'},
    { name: 'Поиск пропавших'},
    { name: 'Наука'}
  ]).then(() => {
    res.send('done!');
  })

  
})

app.post('/init/posts', (req, res) => {
  Post.bulkCreate([
    { 
      title: "Мэр Москвы учредил знак отличия «Волонтёр Москвы»",
      description:
        "Ежегодно им будут поощрять до 30 добровольцев. Памятный знак будут вручать волонтёрам, которые вносили особый вклад в развитие добровольчества столицы на протяжении последних двух лет. Знак отличия выполнен из металла золотистого цвета в форме круга. Лицевую сторону украшает рельефное изображение заглавного элемента герба столицы — святого Георгия Победоносца, а также красный контур сердца, стилизованный в виде лавровой ветви. Оборотная сторона содержит надпись: «Волонтёр Москвы». Спасибо добровольцам столицы, что своим примером из года в год доказываете, что в столице равнодушных нет!",
      date: "2022-06-05",
      img: 
        "https://images.unsplash.com/photo-1620764840976-a6752f359c46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2094&q=80"
    },
    { 
      title: "Открыт набор для участия в Премии #МыВместе",
      description:
        "Подать конкурсную заявку можно на сайте Премия.мывместе.рф или на платформе ДОБРО.РФ до 12 июня. При подаче заявки необходимо указать одну из категорий: «Волонтёры», «НКО» или «Бизнес», далее выбрать номинацию для проекта или программы. Следующий шаг — нажать на кнопку «Подать заявку» и войти в свой профиль на платформе ДОБРО.РФ. Для развития своих полезных инициатив лауреаты Премии получат гранты в размере от 600 тыс. руб. до 3,5 млн руб. В этом году категория волонтеры включает номинации: «Помощь людям», «Территория для жизни», «Медиапроект», «Страна возможностей», «Здоровье нации». Принять участие в Премии смогут и совсем юные добровольцы от 14 до 18 лет, для них учреждена номинация «Большая перемена». Подробности проведения и участия в Премии можно найти на официальном сайте.",
      date: "2022-06-04",
      img: 
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
    },
    { 
      title: "Доступен новый опрос в личном кабинете",
      description:
        "С 18 по 27 мая в Москве проходил проект «Время добра». Свыше двух тысяч добровольцев и неравнодушных москвичей поддержали более 40 полезных событий, благотворительных акций и мероприятий. Волонтёры создавали авторские картины, реставрировали книги, помогали животным в приютах, приводили в порядок парки, сажали деревья и участвовали в донорских акциях. В Личном кабинете доступен новый опрос про проект и ваше участие в нём. В течение недели можно поделиться своими впечатлениями и мнением.",
      date: "2022-06-02",
      img: 
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2376&q=80"
    }
  ]).then(() => {
    res.send('done!');
  })

  
})

app.post('/init/events', (req, res) => {
  var obj = {
    "req": []
  };
  Event.bulkCreate([
    {
      date_start: "2022-05-01",
      date_end: "2022-12-31",
      address: "Город Москва",
      title: "Станьте медиаволонтёром!",
      imgs: [
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
        "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
      ],
      requirements: [
        "креативность",
        "умение фотографировать, снимать и/или монтировать видео, писать посты",
        "готовность учиться новому",
        "умение находить компромиссы",
        "готовность помогать в развитии добровольчества в Москве",
      ],
      description: "Умеете фотографировать, писать посты для соцсетей или снимать видео? Готовы помогать? Приглашаем вас стать частью команды медиаволонтёров! Вы прокачаете свои навыки в фотографировании, познакомитесь с единомышленниками и будете частью масштабных событий Москвы, получите бесценный опыт в медиасфере и сможете попробовать себя в разных ролях: фотографа, видеографа или райтера. Заполняйте анкету, прикрепляйте ссылку на своё портфолио (ваши тексты, фото- или видеоматериалы), и мы с вами свяжемся по электронной почте в течение недели.",
      important: "Ваше портфолио должно быть загружено на любом облачном хранилище, доступ пользователям по ссылке должен быть разрешён.",
      organization: "ГБУ города Москвы «Мосволонтёр»",
      email: "ProkofevIA@mos.ru",
      phone: "8 (499) 722-69-94",
      orgName: "Прокофьев Игорь"
    }
  ])
  this.addEvent(1,1);
  this.addEvent(2,1).then(() => {
    res.send('done!');
  })
})

app.get('/events', async (req, res) => {
  const events = await Event.findAll({
    include: [
      {
        model: Tag,
        as: "tags",
        attributes: ["id", "name"],
        through: {
          attributes: [],
        },
        // through: {
        //   attributes: ["tag_id", "tutorial_id"],
        // },
      },
    ],
  })

  res.send(events);

})

app.get('/posts', async (req, res) => {
  const posts = await Post.findAll()

  res.send(posts);

})


app.listen(3000, () => {
  console.log("app is running");
});