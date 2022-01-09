'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static getPagingData = (data,count, page, limit) => {
      const totalItems = count
      const users = data
      const currentPage = page ? +page : 1;
      const totalPages = Math.ceil(totalItems / limit);
      return { totalItems, users, totalPages, currentPage };
    };

    static getPagination = (page, size) => {
      page = (page > 0)? page : 1;
      const limit = size ? + size : 3;
      const offset = (page) ? (page * limit)-limit : 0;

      return { limit, offset };
    };

    static associate(models) {

    }
  };
  City.init({
    postalCode: DataTypes.STRING,
    name: DataTypes.STRING,
    departement: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};