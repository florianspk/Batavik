'use strict';
const faker = require('faker');
faker.locale = "fr";
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
          name: faker.commerce.productName(),
          price:faker.commerce.price(1, 10000, 2),
          description : faker.commerce.productDescription(),
          note:  Math.floor(Math.random() * 10),
          image: faker.image.abstract() + '?_r=' + Math.floor(((new Date()).getTime() * Math.random()) + i),
          CategorieProductID: faker.random.arrayElement(products_categ[0]).id,
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
        hauteur : parseFloat(Math.random() * 100).toFixed(2),
        profondeur : parseFloat(Math.random() * 100).toFixed(2),
        longueur : parseFloat(Math.random() * 100).toFixed(2),
        couleur : faker.commerce.color(),
        ProductID: faker.random.arrayElement(products_id[0]).id,
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
