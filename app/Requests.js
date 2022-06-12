const { Model, DataTypes} = require('sequelize');
const sequelize = require('./database');
const User = require('./Users');
const Event = require('./Events');

class Request extends Model{}

Request.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
      },
      UserId: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: User.vk_id,
        }
      },
      EventId: {
        type: DataTypes.INTEGER,
        references: {
          model: Event,
          key: Event.id,
        }
      },
}, {
    sequelize,
    modelName: 'request'
})

module.exports = Request