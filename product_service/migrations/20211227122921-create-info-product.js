'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Info_products', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            height: {
                type: Sequelize.FLOAT
            }, depth: {
                type: Sequelize.FLOAT
            }, length: {
                type: Sequelize.FLOAT
            }, color: {
                type: Sequelize.STRING
            }, createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            }, updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Info_products');
    }
};