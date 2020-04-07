'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn('services', 'categoryId',{
        type: Sequelize.INTEGER,
        references: {
          model: "categories",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      });
    },
  
  down: async (queryInterface, Sequelize) => {
      await queryInterface.removeColumn('services', 'categoryId');
  }
};
