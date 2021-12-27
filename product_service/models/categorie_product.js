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