'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static getPagingData = (data,count, page, limit) => {
      const totalItems = count
      const adresses = data
      const currentPage = page ? +page : 1;
      const totalPages = Math.ceil(totalItems / limit);
      return { totalItems, adresses, totalPages, currentPage };
    };

    static getPagination = (page, size) => {
      page = (page > 0)? page : 1;
      const limit = size ? + size : 3;
      const offset = (page) ? (page * limit)-limit : 0;
      return { limit, offset };
    };
    static associate(models) {
      Adress.belongsToMany(models.User, {
        through: "LivesIn",
        as: "User",
        foreignKey: "adressId",
        onDelete: "cascade"
      });
      Adress.belongsTo(models.City,{
        foreignKey: "id",
        as: "City"
      })
    }
  };
  Adress.init({
    name: DataTypes.STRING,
    number: DataTypes.INTEGER,
    additionalAdress: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Adress',
  });
  return Adress;
};