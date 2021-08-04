'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cinemas', [
      {
        name: 'Nairi',
        address: '50 Mesrop Mashtots Ave, Yerevan 0009',
        seats_count: 70
      },
      {
        name: 'Moscow',
        address: '18 Abovyan St, Yerevan 0001',
        seats_count: 120
      },
      {
        name: 'Star',
        address: '2nd floor, 3 Tsitsernakaberd Hwy, Yerevan 0082',
        seats_count: 200
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cinemas', null, {});
  }
};
