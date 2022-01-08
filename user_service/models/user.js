'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
      User.belongsToMany(models.Adress, {
        through: "LivesIn",
        as: "Adress",
        foreignKey: "userId",
      });

    }
  };
  User.init({
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    enabled: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING
    },
    lastLogin: {
      type: DataTypes.DATE
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};