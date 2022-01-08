'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {

    static getPagingData = (data,count, page, limit) => {
      const totalItems = count
      const products = data
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
      // define association here
    }
  };
  comment.init({
    id:{
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true
    },
    
    text:{
        type: DataTypes.STRING(1000),
        allowNull:false
    },

    note:{
        type: DataTypes.INTEGER(10)
    },

    idProduct:{
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },

    idUser:{
        type: DataTypes.INTEGER(10),
        allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'comment',
  });
  return comment;
};