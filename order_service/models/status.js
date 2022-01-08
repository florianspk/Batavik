'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  status.init({
    id:{
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true
    },
    status:{
      type: DataTypes.STRING(50),
      allowNull:false
  },
  }, {
    sequelize,
    modelName: 'status',
  });
  return status;
};