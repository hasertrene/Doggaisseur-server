const { Router } = require("express");
const auth = require("../auth/middleware");
const Service = require("../models").service;
const Category = require("../models").category;

const router = new Router();

router.get("/", async (req, res, next) => {
  const services = await Service.findAll({ include: [Category] });
  //console.log("services", services);
  res.status(200).send(services);
});

module.exports = router;
