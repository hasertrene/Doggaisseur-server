'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('categories', [{
        name: 'Cleaning',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Exercise',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Special treatment',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('categories', null, {});

  }
};
