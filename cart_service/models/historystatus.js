'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class historystatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  historystatus.init({
    id:{
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    sequelize,
    modelName: 'historystatus',
  });
  return historystatus;
};