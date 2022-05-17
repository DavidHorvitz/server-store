const Sequelize = require('sequelize');
const sequelize = require('../DB/DbConnection');

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    productName: { type: Sequelize.STRING },
    department: { type: Sequelize.STRING },
    price: { type: Sequelize.REAL },
    productId: { type: Sequelize.INTEGER }


});

exports.Product = Product;