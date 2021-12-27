'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Info_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Info_product.belongsTo(models.Product)
    }
  };
  Info_product.init({
    hauteur: DataTypes.FLOAT,
    profondeur: DataTypes.FLOAT,
    longueur: DataTypes.FLOAT,
    couleur: DataTypes.STRING,
    fk_product: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Info_product',
  });
  return Info_product;
};