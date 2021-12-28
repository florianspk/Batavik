'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {

        static getPagingData = (data, page, limit) => {
            const { count: totalItems, rows: products } = data;
            const currentPage = page ? +page : 0;
            const totalPages = Math.ceil(totalItems / limit);

            return { totalItems, products, totalPages, currentPage };
        };

        static getPagination = (page, size) => {
            const limit = size ? + size : 3;
            const offset = page ? page * limit : 0;

            return { limit, offset };
        };

        static associate(models) {
            Product.hasMany(models.Info_product)
            Product.belongsTo(models.Categorie_product)
        }
    }
    Product.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        image: DataTypes.STRING,
        note: DataTypes.FLOAT,
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
};