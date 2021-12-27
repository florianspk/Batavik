'use strict';
const faker = require('faker');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let products = await queryInterface.sequelize.query(
        `SELECT id from Products;`
    );
    let info_products = [];
    for (let i = 0; i < 100; i++){
      info_products.push({
        hauteur : Math.random() * 100,
        profondeur : Math.random() * 100,
        longueur : Math.random() * 100,
        couleur : faker.commerce.color(),
        fk_product: faker.random.arrayElement(products[0]).id,
        createdAt:new Date(),
        updatedAt:new Date(),
      })
    }
    await queryInterface.bulkInsert('Info_products',info_products, {});
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Info_products', null, {});
  }
};
