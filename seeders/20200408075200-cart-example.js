'use strict';
const User = require('../models').user
const Cart = require('../models').cart

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const [user1, user2] = await Promise.all([
      User.findOne({
        where: { id: 1}
      }),
      User.findOne({
        where: { id: 2}
      })
    ])

      return Cart.bulkCreate([
      {
        userId: user1.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: user2.id,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('carts', null, {});
  }
};
