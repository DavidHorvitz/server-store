const dotenv = require('dotenv');
dotenv.config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'store',
    process.env.USER,
    process.env.PASSWORD,{
    dialect: 'mysql',
    host: process.env.HOST,
    logging: false,
});


module.exports = sequelize;

