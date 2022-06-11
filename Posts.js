const { Model, DataTypes} = require('sequelize');
const sequelize = require('./database');

class Post extends Model{}

Post.init({
    title: {
        type: DataTypes.TEXT
    },
    description: {
        type: DataTypes.TEXT
    },
    img: {
        type: DataTypes.TEXT
    },
    date: {
        type: DataTypes.TEXT
    }
}, {
    sequelize,
    modelName: 'posts'
})

module.exports = Post