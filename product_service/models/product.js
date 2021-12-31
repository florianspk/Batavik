'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {

        static getPagingData = (data,count, page, limit) => {
            const totalItems = count
            const products = data
            const currentPage = page ? +page : 0;
            const totalPages = Math.ceil(totalItems / limit)-1;
            return { totalItems, products, totalPages, currentPage };
        };

        static getPagination = (page, size) => {
            const limit = size ? + size : 3;
            const offset = page ? page * limit : 0;

            return { limit, offset };
        };

        static associate(models) {
           Product.Info_product =  Product.hasMany(models.Info_product, { as: "info"})
           Product.Categorie_product =  Product.belongsTo(models.Categorie_product, {
                foreignKey: {
                    field: "categId",
                    allowNull: false
                },
                onDelete: "cascade",
                as : "categ"
            })
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
        rate: DataTypes.FLOAT,
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
};