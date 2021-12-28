'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categorie_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static getPagingData = (data, page, limit) => {
      const { count: totalItems, rows: categories} = data;
      const currentPage = page ? +page : 0;
      const totalPages = Math.ceil(totalItems / limit);

      return { totalItems, categories, totalPages, currentPage };
    };

    static getPagination = (page, size) => {
      const limit = size ? + size : 3;
      const offset = page ? page * limit : 0;

      return { limit, offset };
    };

    static associate(models) {
      // define association here
    }
  };
  Categorie_product.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categorie_product',
  });
  return Categorie_product;
};