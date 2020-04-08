const { Router } = require("express");
const auth = require("../auth/middleware");
const Service = require("../models").service;
const Category = require("../models").category;
const Comment = require('../models').comment
const Cart = require('../models').cart
const Items = require('../models').cartItem

const router = new Router();

router.get("/", auth, async (req, res, next) => {
  try {
    if(req.user.id === null){
      return res.status(400).send({ message: 'Not logged in!' })
    }
    const cart = await Cart.findOne({ 
    where: {userId: req.user.id}
    })
    
    if(cart === null){
      return res.status(400).send({ message: 'Cart does not exist!' })
    }
    
    const items = await Items.findAll({
    where: {cartId: cart.id}
    })
    
    if(items === null){
      return res.status(400).send({ message: 'Cart is empty!' })
    }
    
  res.status(200).send({cart, items})
  
  } catch(e){
    next(e)
  }
});

router.post('/', auth, async (req, res, next) => {
  try{
    if(req.user.id === null){
      return res.status(400).send({ message: 'Not logged in!' })
    }
    const cart = await Cart.findOne({ where: {userId: req.user.id }})
    if(cart === null){
      return res.status(400).send({ message: 'There is no shoppingcart'})
    }
    const { quantity, serviceId } = req.body
    
    if ( quantity <= 0 ) {
      return res.status(400).send({ message: "Invalid quantity" });
    }
    if (!serviceId){
      return res.status(400).send({ message: "Service not found" });
    }
  
    const item = await Items.create({
      quantity,
      serviceId,
      cartId: cart.id
    });
    return res.status(201).send({ message: "Item added to cart", item });
    
  } catch(e){
    next(e)
  }
})

module.exports = router;