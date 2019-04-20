const express = require('express');
const router  = express.Router();

const Phone = require('../models/phone-model');

router.post('/phones', (req, res, next) => {
  const { brand, model, price, image, specs } = req.body;

  // if(brand == '' || model == '' || price == '', image == '', specs == ''){
  //   res.status(401).json({ message: "All fields must be filled!" })
  // }

  Phone.create({ brand, model, price, image, specs })
  .then(phoneDoc => res.json(phoneDoc))
  .catch( err => next(err) );
});


module.exports = router;
