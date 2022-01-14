'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Info_product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static getPagingData = (data, page, limit) => {
            const {count: totalItems, rows: infos} = data;
            const currentPage = page ? +page : 0;
            const totalPages = Math.ceil(totalItems / limit);

            return {totalItems, infos, totalPages, currentPage};
        };

        static getPagination = (page, size) => {
            const limit = size ? +size : 3;
            const offset = page ? page * limit : 0;

            return {limit, offset};
        };

        static associate(models) {
            Info_product.belongsTo(models.Product, {
                foreignKey: {
                    field: "productId",
                    allowNull: false
                },
                onDelete: "cascade"
            })
        }
    };
    Info_product.init({
        height: DataTypes.FLOAT,
        depth: DataTypes.FLOAT,
        width: DataTypes.FLOAT,
        color: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Info_product',
    });
    return Info_product;
};