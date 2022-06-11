const { Model, DataTypes} = require('sequelize');
const sequelize = require('./database');

class Event extends Model{}

Event.init({
    title: {
        type: DataTypes.TEXT
    },
    description: {
        type: DataTypes.TEXT
    },
    address: {
        type: DataTypes.TEXT
    },
    date_start: {
        allowNull: false,
        type: DataTypes.TEXT
    },
    date_end: {
        allowNull: false,
        type: DataTypes.TEXT
    },
    imgs: {
        type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    requirements: {
        type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    important: {
        type: DataTypes.TEXT
    },
    email: {
        type: DataTypes.TEXT
    },
    phone: {
        type: DataTypes.TEXT
    },
    orgName: {
        type: DataTypes.TEXT
    }
}, {
    sequelize,
    modelName: 'event'
})

module.exports = Event