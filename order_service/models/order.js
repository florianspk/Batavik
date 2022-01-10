'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class order extends Model {
      static getPagingData = (data,count, page, limit) => {
        const totalItems = count
        const orders = data
        const currentPage = page ? +page : 1;
        const totalPages = Math.ceil(totalItems / limit);
        return { totalItems, products, totalPages, currentPage };
    };

    static getPagination = (page, size) => {
        page = (page > 0)? page : 1;
        const limit = size ? + size : 3;
        const offset = (page) ? (page * limit)-limit : 0;

        return { limit, offset };
    };
    
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