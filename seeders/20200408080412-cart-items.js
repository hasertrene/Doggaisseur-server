'use strict';
const Cart = require('../models').cart
const Item = require('../models').cartItem
const Service = require('../models').service

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const cart1 = await Cart.findOne({
        where: { userId: 1 }
      })

    const [service1, service2] = await Promise.all([
        Service.findOne({
          where: { name: 'Deep tissue massage' }
        }),
        Service.findOne({
          where: { name: 'Lunch walk' }
        })
      ])
      
      return Item.bulkCreate([
      {
        serviceId: service2.id,
        cartId: cart1.id,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        serviceId: service1.id,
        cartId: cart1.id,
        quantity: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('cartItems', null, {});
  }
};
