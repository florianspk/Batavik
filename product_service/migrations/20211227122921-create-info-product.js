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
            hauteur: {
                type: Sequelize.FLOAT
            }, profondeur: {
                type: Sequelize.FLOAT
            }, longueur: {
                type: Sequelize.FLOAT
            }, couleur: {
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