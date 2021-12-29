'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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