'use strict';
const casual = require('casual');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let users = []
    for (let i=0; i < 100; i++){
      users.push({
        lastname: casual.last_name,
        firstname: casual.first_name,
        email: casual.email,
        password: casual.password,
        image:  'http://placeimg.com/640/480/abstract?_r=' + Math.floor(((new Date()).getTime() * Math.random()) + i),
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
