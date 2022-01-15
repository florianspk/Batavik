'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      productOrder.order = productOrder.belongsTo(models.order, {
        foreignKey: {
            field: "id_order",
            allowNull: false
        }
        })
      productOrder.cart = productOrder.belongsTo(models.cart, {
        foreignKey: {
            field: "id_cart",
            allowNull: false
        }
        })
    }
  };
  productOrder.init({
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
    modelName: 'productOrder',
  });
  return productOrder;
};