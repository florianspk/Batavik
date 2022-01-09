'use strict';
const db = require("../models");
const casual = require("casual")

module.exports = {
  up: async (queryInterface, Sequelize) => {

    let carts = [];

    for (let i=0; i < 30; i++){
      carts.push({
        validation: 0,
        cartPrice: casual.double(10, 250),
        idUser: i+1,
        createdAt:new Date(),
        updatedAt:new Date(),
      })
  }

    await queryInterface.bulkInsert('carts', carts, {});

    let productCarts = [];

    for (let i=0; i < 100; i++){
      productCarts.push({
        idproduct: casual.integer(1, 150),
        quantity: casual.integer(1, 5),
        id_cart: casual.integer(1, 30),
        createdAt:new Date(),
        updatedAt:new Date(),
      })
  }

    await queryInterface.bulkInsert('productCarts', productCarts, {});
    
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('carts', null, {});
    await queryInterface.bulkDelete('productCarts', null, {});
  }
};
