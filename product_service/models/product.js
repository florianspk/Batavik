'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Product.hasMany(models.Info_product)
            Product.belongsTo(models.Categorie_product)
        }
    }
    Product.init({
        name: DataTypes.STRING,
        price: DataTypes.FLOAT,
        description: DataTypes.TEXT,
        image: DataTypes.STRING,
        note: DataTypes.FLOAT,
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
};