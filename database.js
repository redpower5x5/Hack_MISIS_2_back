const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('test_db', 'root', 'root', {
    dialect: 'postgres',
    host: 'localhost',
    port: '5432'
})

module.exports = sequelize;