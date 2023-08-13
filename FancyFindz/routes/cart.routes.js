const express = require('express');

const cartController = require('../controllers/cart.controllers');

const router = express.Router();

router.get('/', cartController.getCart);

router.post('/items', cartController.addCartItem);

router.patch('/items', cartController.updateCartItems);

module.exports = router;