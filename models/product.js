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
    // tabName: { type: Sequelize.STRING, unique: true },
    // activeStatus: { type: Sequelize.STRING },
    // titleForCustomer: { type: Sequelize.STRING },
    // tabLocation: { type: Sequelize.REAL },
    // color: { type: Sequelize.STRING },
    // parentId: { type: Sequelize.STRING },
    // firstChildsId: { type: Sequelize.STRING },
    // description: { type: Sequelize.TEXT },
    // imgUrl: { type: Sequelize.STRING },
    // textA: { type: Sequelize.STRING },
    // textB: { type: Sequelize.STRING },
    // textC: { type: Sequelize.STRING },
    // textD: { type: Sequelize.STRING },
    // textE: { type: Sequelize.STRING },
    // textF: { type: Sequelize.TEXT },
    // displayHomePage: { type: Sequelize.STRING },

});

exports.Product = Product;