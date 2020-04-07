'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn('cartItems', 'cartId',{
        type: Sequelize.INTEGER,
        references: {
          model: "carts",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      });
    },
  
  down: async (queryInterface, Sequelize) => {
      await queryInterface.removeColumn('cartItems', 'cartId');
  }
};
