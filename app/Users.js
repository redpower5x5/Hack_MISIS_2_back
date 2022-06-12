const { Model, DataTypes} = require('sequelize');
const sequelize = require('./database');

class User extends Model{}

User.init({
    name: {
        type: DataTypes.TEXT
    },
    work_hours: {
        type: DataTypes.INTEGER
    },
    role: {
        type: DataTypes.TEXT
    },
    age: {
        type: DataTypes.INTEGER
    },
    education: {
        type: DataTypes.TEXT
    },
    phone: {
        type: DataTypes.TEXT
    },
    email: {
        type: DataTypes.TEXT
    },
}, {
    sequelize,
    modelName: 'user'
})

module.exports = User