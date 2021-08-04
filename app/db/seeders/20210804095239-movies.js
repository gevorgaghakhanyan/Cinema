'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('movies', [
      {
        name: 'Harry Potter',
        start_at: Sequelize.literal('"2021-08-04 14:00:00"'),
        end_at: Sequelize.literal('"2021-08-04 15:30:00"'),
        cinema_id: 1
      },
      {
        name: 'The Seven Samurai',
        start_at: Sequelize.literal('"2021-08-04 16:00:00"'),
        end_at: Sequelize.literal('"2021-08-04 17:30:00"'),
        cinema_id: 2
      },
      {
        name: 'Bonnie and Clyde',
        start_at: Sequelize.literal('"2021-08-04 18:00:00"'),
        end_at: Sequelize.literal('"2021-08-04 19:30:00"'),
        cinema_id: 3
      },
      {
        name: 'Reservoir Dogs',
        start_at: Sequelize.literal('"2021-08-04 20:00:00"'),
        end_at: Sequelize.literal('"2021-08-04 21:30:00"'),
        cinema_id: 1
      },
      {
        name: 'Airplane',
        start_at: Sequelize.literal('"2021-08-04 22:00:00"'),
        end_at: Sequelize.literal('"2021-08-04 23:30:00"'),
        cinema_id: 2
      },
      {
        name: 'Pan`s Labyrinth',
        start_at: Sequelize.literal('"2021-09-04 10:00:00"'),
        end_at: Sequelize.literal('"2021-09-04 11:30:00"'),
        cinema_id: 2
      },
      {
        name: 'Doctor Zhivago',
        start_at: Sequelize.literal('"2021-09-04 12:00:00"'),
        end_at: Sequelize.literal('"2021-09-04 13:30:00"'),
        cinema_id: 3
      },
      {
        name: 'The Deer Hunter',
        start_at: Sequelize.literal('"2021-09-04 14:00:00"'),
        end_at: Sequelize.literal('"2021-09-04 15:30:00"'),
        cinema_id: 2
      },
      {
        name: 'Close Encounters of the Third Kind',
        start_at: Sequelize.literal('"2021-09-04 16:00:00"'),
        end_at: Sequelize.literal('"2021-09-04 17:30:00"'),
        cinema_id: 1
      },
      {
        name: 'Up',
        start_at: Sequelize.literal('"2021-09-04 18:00:00"'),
        end_at: Sequelize.literal('"2021-09-04 19:30:00"'),
        cinema_id: 3
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('movies', null, {});
  }
};