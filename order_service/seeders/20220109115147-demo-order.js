'use strict';
const casual = require("casual")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let status_order = ["in progress","finish","return","cancel"];
    let status = [];
    status_order.forEach((element, index) => {
      status.push({
        id: index+1,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: element
      })
    })
    await queryInterface.bulkDelete('statuses', {});
    await queryInterface.bulkInsert('statuses',status, {});

    let orders = [];

    for (let i=0; i < 100; i++){
      orders.push({
        id: i+1,
        orderToken: casual.sentence,
        orderPrice: casual.double(10, 250),
        tradeInformation: casual.sentence ,
        deadLineOrder: new Date(),
        idUser: casual.integer(1, 30),
        createdAt:new Date(),
        updatedAt:new Date(),
      })
    }
    await queryInterface.bulkDelete('orders', {});
    await queryInterface.bulkInsert('orders', orders, {});

    let historystatuses = [];

    for (let i=0; i < 100; i++){
      historystatuses.push({
        id_status: 1,
        id_order: i+1,
        createdAt:new Date(),
        updatedAt:new Date(),
      })
    }
    await queryInterface.bulkDelete('historystatuses', {});
    await queryInterface.bulkInsert('historystatuses', historystatuses, {});

    let productCarts = [];

    for (let i=0; i < 300; i++){
      productCarts.push({
        idproduct: casual.integer(1, 150),
        unitPrice: casual.double(10, 100),
        quantity: casual.integer(1, 5),
        id_order: casual.integer(1, 100),
        createdAt:new Date(),
        updatedAt:new Date(),
      })
    }
    await queryInterface.bulkDelete('productCarts', {});
    await queryInterface.bulkInsert('productCarts', productCarts, {});

    let productOrders = [];

    for (let i=0; i < 300; i++){
      productOrders.push({
        idproduct: casual.integer(1, 150),
        unitPrice: casual.double(10, 100),
        quantity: casual.integer(1, 5),
        id_order: casual.integer(1, 100),
        createdAt:new Date(),
        updatedAt:new Date(),
      })
    }

    await queryInterface.bulkDelete('productOrders', {});
    await queryInterface.bulkInsert('productOrders', productOrders, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('statuses', null, {});
    await queryInterface.bulkDelete('orders', null, {});
    await queryInterface.bulkDelete('historystatuses', null, {});
    await queryInterface.bulkDelete('productCarts', null, {});
    await queryInterface.bulkDelete('productOrders', null, {});
  }
};
