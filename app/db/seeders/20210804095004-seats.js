'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('seats', [
      {
        movie_id: 1,
        cinema_id: 1,
      },
      {
        movie_id: 2,
        cinema_id: 2,
      },
      {
        movie_id: 3,
        cinema_id: 3,
      },
      {
        movie_id: 4,
        user_id: 4,
        cinema_id: 1,
      },
      {
        movie_id: 5,
        cinema_id: 2,
      },
      {
        movie_id: 6,
        cinema_id: 3,
      },
      {
        movie_id: 7,
        cinema_id: 1,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('seats', null, {});
  }
};
