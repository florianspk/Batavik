'use strict';
const casual = require('casual');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let users = []
    for (let i=0; i < 5; i++){
      users.push({
        lastname: casual.last_name,
        firstname: casual.first_name,
        email: casual.email,
        password: casual.password,
        enabled: 1,
        lastLogin: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    await queryInterface.bulkInsert('Users',users, {});

  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
