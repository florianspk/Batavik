'use strict';
const db = require("../models");
const casual = require("casual")
const Comment = db.comment;

module.exports = {
  up: async (queryInterface, Sequelize) => {

    let comments = [];

    for (let i=0; i < 100; i++){
      comments.push({
        text: casual.description,
        rate: casual.integer( 0, 5),
        idProduct: casual.integer(1, 150),
        idUser: casual.integer(1, 30),
        createdAt:new Date(),
        updatedAt:new Date(),
      })
  }

    await queryInterface.bulkInsert('comments', comments, {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('comments', null, {});
  }
};
