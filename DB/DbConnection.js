// const mysql = require('mysql');

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

//connection to MySql
// const connection = mysql.createConnection({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE
// });

// module.exports = connection;


    // connection.destroy();

    // 2
    // const pool = mysql.createPool({
    //     connectionLimit: 10,
    //     host: process.env.HOST,
    //     user: process.env.USER,
    //     password: process.env.PASSWORD,
    //     database: process.env.DATABASE
    //     });