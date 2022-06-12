const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.POSTGRES_DB ||'test_db', process.env.POSTGRES_USER || 'root', process.env.POSTGRES_PASSWORD || 'root', {
    dialect: 'postgres',
    host: process.env.DB_HOST || 'misis-hack-db',
    port: process.env.DB_PORT || '5432'
})

module.exports = sequelize;
