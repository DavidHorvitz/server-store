var express = require('express');
var router = express.Router();
const ProductsDatabase = require('../../queries/products')

/* GET users listing. */
router.get('/get-products', function (req, res, next) {
  ProductsDatabase.getAllProducts()
  .then(result => {
    res.send(result);
  }).catch(err => {
    res.status(500).send(err);
  });
});
router.get('/create-product', function (req, res, next) {
  const obj = {
    productName: 'book',
    department: 'hndfjh',
    price: 23.5,
    productId: 564,
  }

  ProductsDatabase.createProduct(obj)
    .then(result => {
      res.send('aeccsidet!!!');
    }).catch(err => {
      res.status(500).send(err);
    });
});

module.exports = router;
