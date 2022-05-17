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
  console.log(req.body.data);
  // const obj = {
  //   productName: 'book',
  //   department: 'hndfjh',
  //   price: 23.5,
  //   productId: 564,
  // }

  ProductsDatabase.createProduct(req.body.data)
    .then(result => {
      res.send(result);
    }).catch(err => {
      res.status(500).send(err);
      // console.log(err);
      // next();
    });
});


module.exports = router;
//קריאה לפעולות הCRUD
