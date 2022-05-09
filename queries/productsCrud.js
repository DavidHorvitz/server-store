const { Product } = require('../models/product');

class ProductsDatabase {
    constructor() {
        this.Product = Product;
    }

    getAllProducts = () => {
        return new Promise((resolve, reject) => {
            this.Product.findAll().then(result => {
                resolve(result);
            }).catch(error => reject(error));
        })
    };
    createProduct = (obj) => {
        return new Promise((resolve, reject) => {
            this.Product.create(obj)
                .then(result => {
                    resolve(result);
                })
                .catch(error => {
                    reject(error);
                });
        })
    };
    // editProduct = (obj) => {
    //     return new Promise((resolve, reject) => {
    //         this.Product.update(obj, {
    //             where: { id: obj.id },
    //             returning: true,
    //             plain: true
    //         }).then((result) => {
    //             resolve(result._previousDataValues);
    //         })
    //             .catch(error => {
    //                 reject(error);
    //             });
    //     })
    // };
    // deleteCity = (obj) => {
    //     return new Promise((resolve, reject) => {
    //         this.DeliverieCity.destroy({
    //             where: { id: obj.id },
    //         }).then(() => {
    //             resolve();
    //         })
    //             .catch(error => {
    //                 console.log('error');
    //                 console.log(error);
    //                 reject(error);
    //             });
    //     })
    // };
};

module.exports = new ProductsDatabase();

//יצירת פעולות ה CRUD