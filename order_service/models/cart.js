'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      cart.productOrder = cart.hasMany(models.productOrder)
    }
  };
  cart.init({
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true
    },

    validation:{
        type: DataTypes.TINYINT(1),
        allowNull:false
    },

    cartPrice:{
        type: DataTypes.DECIMAL(10,2),
        allowNull:false
    },

    idUser:{
        type: DataTypes.INTEGER(10),
        allowNull:false
    }
  }, {
    sequelize,
    modelName: 'cart',
  });
  return cart;
};