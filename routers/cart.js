const { Router } = require("express");
const auth = require("../auth/middleware");
const Service = require("../models").service;
const Category = require("../models").category;
const Comment = require("../models").comment;
const Cart = require("../models").cart;
const Items = require("../models").cartItem;

const router = new Router();

router.get("/", auth, async (req, res, next) => {
  try {
    if (req.user.id === null) {
      return res.status(400).send({ message: "Not logged in!" });
    }
    const cart = await Cart.findOne({
      where: { userId: req.user.id },
    });

    if (cart === null) {
      return res.status(400).send({ message: "Cart does not exist!" });
    }

    const items = await Items.findAll({
      where: { cartId: cart.id },
      include: [Service],
      order: [[Service, "createdAt", "DESC"]],
    });

    if (items === null) {
      return res.status(400).send({ message: "Cart is empty!" });
    }

    res.status(200).send({ cart, items });
  } catch (e) {
    next(e);
  }
});

router.post("/", auth, async (req, res, next) => {
  try {
    if (req.user.id === null) {
      return res.status(400).send({ message: "Not logged in!" });
    }
    const cart = await Cart.findOne({ where: { userId: req.user.id } });
    if (cart === null) {
      return res.status(400).send({ message: "There is no shoppingcart" });
    }
    const { quantity, serviceId } = req.body;

    if (quantity <= 0) {
      return res.status(400).send({ message: "Invalid quantity" });
    }
    if (!serviceId) {
      return res.status(400).send({ message: "Service not found" });
    }
    const service = await Items.findOne({
      where: { serviceId: serviceId },
    });
    if (service && service.cartId === cart.id) {
      await service.update({ quantity: (service.quantity += 1) });
      return res.status(201).send({ message: "Item's quantity updated" });
    }

    const item = await Items.create({
      quantity,
      serviceId,
      cartId: cart.id,
    });

    return res.status(201).send({ message: "Item added to cart", item });
  } catch (e) {
    next(e);
  }
});

router.delete("/", auth, async (req, res, next) => {
  try {
    if (req.user.id === null) {
      return res.status(400).send({ message: "Not logged in!" });
    }
    const cart = await Cart.findOne({ where: { userId: req.user.id } });
    if (cart === null) {
      return res.status(400).send({ message: "There is no shoppingcart" });
    }
    const item = await Items.destroy({ where: { cartId: cart.dataValues.id } });
    return res.status(201).send({ message: "Card is cleared" });
  } catch (e) {
    next(e);
  }
});

router.patch("/:itemId", auth, async (req, res) => {
  const item = await Items.findByPk(req.params.itemId);
  if (!req.user) {
    return res.status(403).send({ message: "You are not authorized" });
  }

  const { quantity } = req.body;

  await item.update({ quantity });

  return res.status(200).send({ item });
});

module.exports = router;
  