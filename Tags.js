const { Model, DataTypes} = require('sequelize');
const sequelize = require('./database');

class Tag extends Model{}

Tag.init({
    name: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'tag'
})

module.exports = Tag