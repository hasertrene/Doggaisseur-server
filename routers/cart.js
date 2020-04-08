const { Router } = require("express");
const auth = require("../auth/middleware");
const Service = require("../models").service;
const Category = require("../models").category;
const Comment = require('../models').comment
const Cart = require('../models').cart
const Items = require('../models').cartItem

const router = new Router();

router.get("/", auth, async (req, res, next) => {
  const cart = await Cart.findOne({ 
    where: {userId: req.user.id}
    })
  const items = await Items.findAll({
    where: {cartId: cart.id}
  })
  res.status(200).send({cart, items})
  console.log({cart, items})
});

module.exports = router;