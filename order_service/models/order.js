'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      order.productCart = order.hasMany(models.cart)
    }
  };
  order.init({
    id:{
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true
    },

    orderToken:{
        type: DataTypes.STRING(150),
        allowNull:false
    },

    orderPrice:{
        type: DataTypes.DECIMAL(10,2),
        allowNull:false
    },

    tradeInformation:{
        type: DataTypes.STRING(150),
        allowNull:false
    },

    deadLineOrder:{
        type: DataTypes.DATE,
        allowNull:false
    },

    idUser:{
      type: DataTypes.INTEGER(10),
      allowNull:false
  }
  
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};