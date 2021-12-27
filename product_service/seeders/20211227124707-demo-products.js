'use strict';
const faker = require('faker');
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
          price:faker.commerce.price(),
          description : faker.lorem.paragraph(),
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
        hauteur : Math.random() * 100,
        profondeur : Math.random() * 100,
        longueur : Math.random() * 100,
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
