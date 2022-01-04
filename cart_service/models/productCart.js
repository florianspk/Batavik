'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      productCart.order = productCart.belongsTo(models.order, {
        foreignKey: {
            field: "id_order",
            allowNull: false
        }
        })
      productCart.cart = productCart.belongsTo(models.cart, {
        foreignKey: {
            field: "id_cart",
            allowNull: false
        }
        })
    }
  };
  productCart.init({
    id:{
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true
    },

    idProduct:{
        type: DataTypes.INTEGER(),
        allowNull:false
    },

    
    unitPrice:{
        type: DataTypes.DECIMAL(10,2),
        allowNull:true
    },

    quantity:{
        type: DataTypes.INTEGER(),
        allowNull:false
    }
  }, {
    sequelize,
    modelName: 'productCart',
  });
  return productCart;
};