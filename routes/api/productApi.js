const express = require('express');
const router = express.Router();
const ProductsDatabase = require('../../queries/productsCrud')

/* GET users listing. */
router.get('/get-products', function (req, res, next) {
  ProductsDatabase.getAllProducts()
    .then(result => {
      res.send(result);
    }).catch(err => {
      res.status(500).send(err);
    });
});

router.post('/create-product', function (req, res, next) {
  ProductsDatabase.createProduct(req.body.data)
    .then(result => {
      res.send(result);
    }).catch(err => {
      res.status(500).send(err);
    });
});
router.post('/edit-product', function (req, res, next) {
  ProductsDatabase.editProduct(req.body.data)
    .then(result => {
      res.send(result);
    }).catch(err => {
      res.status(500).send(err);
    });
});
router.post('./delete-product', function (req, res, next) {
  ProductsDatabase.deleteProduct(req.body.data)
    .then(result => {
      res.send(result);
    }).catch(err => {
      res.status(500).send(err);
    });
});


module.exports = router;
//קריאה לפעולות הCRUD
