'use strict';
const passwordHash = require('password-hash');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'Jon',
        email: 'jon@gmail.com',
        password: passwordHash.generate('qweasdzxc12345')
      },
      {
        name: 'Doe',
        email: 'doe@gmail.com',
        password: passwordHash.generate('qweasdzxc12345')
      },
      {
        name: 'Jim',
        email: 'jim@gmail.com',
        password: passwordHash.generate('qweasdzxc12345')
      },
      {
        name: 'Carry',
        email: 'carry@gmail.com',
        password: passwordHash.generate('qweasdzxc12345')
      },
      {
        name: 'Tom',
        email: 'tom@gmail.com',
        password: passwordHash.generate('qweasdzxc12345')
      },
      {
        name: 'Jerry',
        email: 'jerry@gmail.com',
        password: passwordHash.generate('qweasdzxc12345')
      },
      {
        name: 'Vzgo',
        email: 'vzgo@gmail.com',
        password: passwordHash.generate('qweasdzxc12345')
      },
      {
        name: 'Mzgo',
        email: 'mzgo@gmail.com',
        password: passwordHash.generate('qweasdzxc12345')
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
