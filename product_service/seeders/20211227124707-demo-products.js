'use strict';
const faker = require('faker');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let products = [];
    for (let i=0; i < 100; i++){
        products.push({
          name: faker.commerce.productName(),
          price:faker.commerce.price(),
          description : faker.lorem.paragraph(),
          note:  Math.floor(Math.random() * 10),
          image: faker.image.abstract() + '?_r=' + Math.floor(((new Date()).getTime() * Math.random()) + i),
          createdAt:new Date(),
          updatedAt:new Date(),
        })
    }
    await queryInterface.bulkInsert('Products',products, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
