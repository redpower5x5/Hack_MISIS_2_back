const express = require("express");
const cors = require("cors");
const sequelize = require('./database');
const Event = require('./Events');
const Tag = require('./Tags');
const Post = require('./Posts');
const User = require('./Users');
const Like = require('./Likes');
const { Op } = require("sequelize");

sequelize.sync().then(() => console.log('db isready'));

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

User.belongsToMany(Tag, {
  through: "user_tag",
  as: "tags",
  foreignKey: "user_id",
});
Tag.belongsToMany(User, {
  through: "user_tag",
  as: "users",
  foreignKey: "tag_id",
});

User.hasMany(Like);
Like.belongsTo(User);
Event.hasMany(Like);
Like.belongsTo(Event);
User.belongsToMany(Event, { through:  Like});
Event.belongsToMany(User, { through: Like});




exports.addEvent = (tagId, eventId) => {
  return Tag.findByPk(tagId)
    .then((tag) => {
      if (!tag) {
        console.log("Tag not found!");
        return null;
      }
      return Event.findByPk(eventId).then((event) => {
        if (!event) {
          console.log("Event not found!");
          return null;
        }
        tag.addEvent(event);
        console.log(`>> added Event id=${event.id} to Tag id=${tag.id}`);
        return tag;
      });
    })
    .catch((err) => {
      console.log(">> Error while adding Event to Tag: ", err);
    });
};

exports.addLike = (userId, eventId) => {
  return User.findByPk(tagId)
    .then((user) => {
      if (!user) {
        console.log("Tag not found!");
        return null;
      }
      return Event.findByPk(eventId).then((event) => {
        if (!event) {
          console.log("Event not found!");
          return null;
        }
        user.addEvent(event);
        console.log(`>> added Event id=${event.id} to Tag id=${tag.id}`);
        return tag;
      });
    })
    .catch((err) => {
      console.log(">> Error while adding Event to Tag: ", err);
    });
};

const app = express();

app.use(cors());

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



app.get('/events', async (req, res) => {
  let where = {};
  let where_tags = {}
  //query params
  const { tags, date_start, date_end, roles, age, query} = req.query;
  //filter by tag names
  if (tags) {
    const tags_array = tags.split("-");
    console.log(tags_array);
    if(tags_array) {
      where_tags.name  = { [Op.in]: tags_array};
    }
  }
  if(query && date_start && date_end) {
    
    where = {[Op.and]: [
      {
        [Op.or]: [
          {
            title: { [Op.like]: '%' + query + '%' }
          },
          {
            description: { [Op.like]: '%' + query + '%' }
          }
        ]
      },
      {
        [Op.or]: [
          {
            date_start: {
              [Op.gte]: date_start,
              [Op.lte]: date_end
            }
          },
          {
            date_end: {
              [Op.gte]: date_start,
              [Op.lte]: date_end
            }
          }
        ]
      }
    ]}
        
  }
  else if (query) {
    if(!where[Op.or]) where[Op.or] = []
      where[Op.or].push({
        title: { [Op.like]: '%' + query + '%' }
      },
      {
        description: { [Op.like]: '%' + query + '%' }
      })
  }
  // get all events in interval
  else if (date_start && date_end) {
    if(!where[Op.or]) where[Op.or] = []
      where[Op.or].push(
        {
          date_start: {
            [Op.gte]: date_start,
            [Op.lte]: date_end
          }
        },
        {
          date_end: {
            [Op.gte]: date_start,
            [Op.lte]: date_end
          }
        }
    )
  }
  //get all events below or above date
  else if (date_start) where.date_start = { [Op.gte]: date_start}
  else if (date_end) where.date_start = { [Op.lte]: date_end}
  const events = await Event.findAll({
    where: where,
    include: [
      {
        model: Tag,
        where: where_tags,
        as: "tags",
        attributes: ["id", "name"],
        through: {
          attributes: [],
        },
      },
    ],
  })

  res.send(events);

})

app.get('/posts', async (req, res) => {
  const posts = await Post.findAll()

  res.send(posts);

})

app.get('/tags', async (req, res) => {
  const tags = await Tag.findAll()

  res.send(tags);

})

app.post('/events', async (req, res) => {
  let event = await Event.create(req.body);
  if(req.body.tags) {
    const tags = await Tag.findAll({
      where: {
        name: req.body.tags
      }
    })
    event.setTags(tags);
  }

  event = await event.save();
  res.send(event);
})

app.post('/event/select', async (req, res) => {
  const arrayId = req.body.events;
  const events = await Event.findAll({
    where: {
      id: arrayId
    },
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

app.put('/event/:id', async (req, res) => {
  const requestId = req.params.id;
  let event = await Event.findOne({ where: { id: requestId}});
  event.set(req.body);
  if(req.body.tags) {
  const tags = await Tag.findAll({
    where: {
      name: req.body.tags
    }
  })
  event.setTags(tags);
}

  event = await event.save();
  res.send(event);

})

app.delete('/event/:id', async (req, res) => {
  const requestId = req.params.id;
  let event = await Event.findOne({ where: { id: requestId}});
  await event.destroy();
  res.send('item deleted!');
})

app.get('/event/:id', async (req, res) => {
  const requestId = req.params.id;
  let event = await Event.findOne({ 
    where: { id: requestId},
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
  });
 
  res.send(event);

})

app.post('/event/:id', async (req, res) => {
  const requestId = req.params.id;
  const { userId, offerName} = req.query;
  let event = await Event.findOne({ where: { id: requestId}});
  let offers_json_data =  event.offers_json;
  console.log(JSON.stringify(offers_json_data));
  for (let index = 0; index < offers_json_data.offers.length; index++) { 
    if(offers_json_data.offers[index]['applied'].includes(userId) || offers_json_data.offers[index]['accepted'].includes(userId)) {
      res.status(409);
      res.send('alredy exists!');
      return;
      
    }
  }
  offers_json_data.offers.find(it => it.title === offerName)['applied'].push(userId);
  event.set({
    offers_json: offers_json_data
  });
  await event.changed("offers_json",true)
  event = await event.save();
  res.send(event);
})

app.post('/event/:id/admin', async (req, res) => {
  const requestId = req.params.id;
  const { userId, offerName, action} = req.query;
  let event = await Event.findOne({ where: { id: requestId}});
  let offers_json_data =  event.offers_json;
  if (action === "accept") {
    if(!offers_json_data.offers.find(it => it.title === offerName)['accepted'].includes(userId)) {
      offers_json_data.offers.find(it => it.title === offerName)['applied'].pop(userId);
      offers_json_data.offers.find(it => it.title === offerName)['accepted'].push(userId);
    } else {
      res.status(409)
      res.send('alredy accepted!')
    }
  } else if (action === "reject") {
    if (offers_json_data.offers.find(it => it.title === offerName)['applied'].includes(userId))
      offers_json_data.offers.find(it => it.title === offerName)['applied'].pop(userId);
    if (offers_json_data.offers.find(it => it.title === offerName)['accepted'].includes(userId)) {
      offers_json_data.offers.find(it => it.title === offerName)['accepted'].pop(userId);
      offers_json_data.offers.find(it => it.title === offerName)['applied'].push(userId);
    }
    
    
  }
  event.set({
    offers_json: offers_json_data
  });
  await event.changed("offers_json",true)
  event = await event.save();
  res.send(event);
})




app.get('/users', async (req, res) => {
  const users = await User.findAll({
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
      {
        model: Like,
        include: Event
      }
    ],
  })

  res.send(users);

})

app.delete('/users', async (req, res) => {
  await User.drop();
  res.send("User table dropped!");
})

app.post('/users', async (req, res) => {
  let user =  await User.create(req.body);
  if(req.body.tags) {
  const tags = await Tag.findAll({
      where: {
        name: req.body.tags
      }
    })
    user.setTags(tags);
  }

  user = await user.save();
  res.send(user);
})

app.post('/user/:id/like', async (req, res) => {
  const userId = req.params.id;
  const eventId = req.query.event;

  let user = await User.findOne({ where: { id: userId}});
  let event = await Event.findOne({ where: { id: eventId}});
  user.addEvent(event);
  // event.addLike(user);
  user = await user.save();
  event = await event.save();
  res.send('data inserted!');

})

app.get('/user/:id', async (req, res) => {
  const requestId = req.params.id;
  const user = await User.findOne({
    where: { id: requestId},
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
      {
        model: Like,
        include: Event
      }
    ],
  })

  res.send(user);
})

app.post('/user/select', async (req,res) => {
  const arrayId = req.body.users;
  const users = await User.findAll({
    where: {
      id: arrayId
    },
    include: [
      {
        model: Tag,
        as: "tags",
        attributes: ["id", "name"],
        through: {
          attributes: [],
        },
      },
      {
        model: Like,
        include: Event
      }
    ],
  })
  res.send(users);
})

app.put('/user/:id', async (req, res) => {
  const requestId = req.params.id;
  let user = await User.findOne({ where: { id: requestId}});
  user.set(req.body);
  if(req.body.tags) {
    const tags = await Tag.findAll({
      where: {
        name: req.body.tags
      }
    })
  }
  user.setTags(tags);

  user = await user.save();
  res.send(user);

})

app.get('/user/:id/likes', async (req, res) => {
  const requestId = req.params.id;
  let user = await User.findAll({ 
    where: { 
      id: requestId
    },
    include:
    [{
      model: Like,
      include: Event,
    }
  ]
  });

  res.send(user)
})

app.get('/showLike', (req, res) => {
  const likes = Like.findAll();
  res.send(likes);
})

app.get('/drop', (req,res) => {
  sequelize.sync({force: true});
  res.send('all tables dropped!')
})


app.listen(3000, () => {
  console.log("app is running");
});