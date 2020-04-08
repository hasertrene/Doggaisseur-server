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
    const feedback = await Comment.findAll();
    res.status(200).send({ feedback });
  } catch (e) {
    next(e);
  }
});

router.post("/", auth, async (req, res, next) => {
  try {
    if (req.user.id === null) {
      return res.status(400).send({ message: "Not logged in!" });
    }
    const { comment, serviceId } = req.body;
    // console.log("text route", comment);
    // console.log("radio route", serviceId);

    if (!comment) {
      return res.status(400).send({ message: "Invalid comment" });
    }
    if (!serviceId) {
      return res.status(400).send({ message: "Service not found" });
    }

    const feedback = await Comment.create({
      comment,
      serviceId,
      userId: req.user.id,
    });

    return res.status(201).send({ message: "Feedback added", feedback });
  } catch (e) {
    next(e);
  }
});

<<<<<<< HEAD
module.exports = router;
=======
router.delete('/:id', auth, async (req, res, next) => {
  try{
    if(req.user.id === null){
      return res.status(400).send({ message: 'Not logged in!' })
    }
    const { id } = req.params
    
    const comment = await Comment.findByPk(id)
    if(!comment){
      return res.status(404).send({message: 'Comment not found'})
    }
    const feedback = await comment.destroy();
    return res.status(201).send({ message: "Feedback deleted", feedback });
    
  } catch(e){
    next(e)
  }
})

module.exports = router;
>>>>>>> 5c7a02ca38ef3c44d69aabdaafeee29771eb8b34
