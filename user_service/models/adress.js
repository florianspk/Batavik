'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Adress.belongsToMany(models.User, {
        through: "LivesIn",
        as: "User",
        foreignKey: "adressId",
      });
    }
  };
  Adress.init({
    name: DataTypes.STRING,
    number: DataTypes.INTEGER,
    additionalAdress: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Adress',
  });
  return Adress;
};