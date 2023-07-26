const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const checks = require('../milddleware/checkUsers');

const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});

const orderSchema = Joi.object({
  totalPrice: Joi.number().required(),
  orderItems: Joi.array().length(1).required()
})




router.post('/api/orderAdd', checks.checkUser, validator.body(orderSchema), orderController.addOrder);



module.exports = router;