'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn('cartItems', 'serviceId',{
        type: Sequelize.INTEGER,
        references: {
          model: "services",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      });
    },
  
  down: async (queryInterface, Sequelize) => {
      await queryInterface.removeColumn('cartItems', 'serviceId');
  }
};
