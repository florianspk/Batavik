'use strict';
const faker = require('faker');
faker.locale = "fr";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let users = []
    for (let i=0; i < 10; i++){
      users.push({
        lastname: faker.name.lastName(),
        firstname: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        enabled: 1,
        image: faker.internet.avatar(),
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
