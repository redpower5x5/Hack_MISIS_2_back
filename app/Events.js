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
    organization: {
        type: DataTypes.TEXT
    },
    offers_json: {
        type: DataTypes.JSONB
    },
    address: {
        type: DataTypes.TEXT
    },
    coordinates: {
        type: DataTypes.ARRAY(DataTypes.REAL)
    },
    date_start: {
        allowNull: false,
        type: DataTypes.DATE
    },
    date_end: {
        allowNull: false,
        type: DataTypes.DATE
    },
    imgs: {
        type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    requirements: {
        type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    services: { 
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