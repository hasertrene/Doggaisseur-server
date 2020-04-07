const { Router } = require("express");
const auth = require("../auth/middleware");
const Service = require("../models").service;
const Category = require("../models").category;
const Comment = require('../models').comment

const router = new Router();

router.get("/", async (req, res, next) => {
  const services = await Service.findAll({ include: [Category] });
  //console.log("services", services);
  res.status(200).send(services);
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "Service id is not a number" });
  }

  const service = await Service.findByPk(id, {
    include: [Comment],
    order: [[Comment, "createdAt", "DESC"]]
  });

  if (service === null) {
    return res.status(404).send({ message: "Service not found" });
  }

  res.status(200).send({ message: "ok", service });
  } catch (e){
    next(e)
  }
})


module.exports = router;
