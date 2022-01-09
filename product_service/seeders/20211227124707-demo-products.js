'use strict';
const casual = require('casual');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let categs = ["Pare douche","Cloison/Parois","Cheminée"];
    let categorie_products = [];
    categs.forEach(element => {
      categorie_products.push({
        createdAt: new Date(),
        updatedAt: new Date(),
        name: element
      })
    })
    await queryInterface.bulkInsert('Categorie_products',categorie_products, {});

    let products = [];
    let products_categ = await queryInterface.sequelize.query(
        `SELECT id from Categorie_products;`
    );
    for (let i=0; i < 100; i++){
        products.push({
          name: casual.title,
          price: casual.double(0,1000).toFixed(2),
          description : casual.short_description,
          rate:  Math.floor(Math.random() * 10),
          image:  'http://placeimg.com/640/480/abstract?_r=' + Math.floor(((new Date()).getTime() * Math.random()) + i),
          categId: casual.random_element(products_categ[0]).id,
          createdAt:new Date(),
          updatedAt:new Date(),
        })
    }
    await queryInterface.bulkInsert('Products',products, {});
    let products_id = await queryInterface.sequelize.query(
        `SELECT id from Products;`
    );
    let info_products = [];
    for (let i = 0; i < 100; i++){
      info_products.push({
        height : parseFloat(Math.random() * 100).toFixed(2),
        depth : parseFloat(Math.random() * 100).toFixed(2),
        width : parseFloat(Math.random() * 100).toFixed(2),
        color : casual.color_name,
        ProductID: casual.random_element(products_id[0]).id,
        createdAt:new Date(),
        updatedAt:new Date(),
      })
    }
    await queryInterface.bulkInsert('Info_products',info_products, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categorie_products', null, {});
    await queryInterface.bulkDelete('Info_products', null, {});
    await queryInterface.bulkDelete('Products', null, {});
  }
};
