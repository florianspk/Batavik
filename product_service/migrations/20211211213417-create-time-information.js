'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('timeInformations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      earlyMorningSchedule: {
        type: Sequelize.DATE
      },
      lateMorningSchedule: {
        type: Sequelize.DATE
      },
      earlyAfternoonSchedule: {
        type: Sequelize.DATE
      },
      lateAfternoonSchedule: {
        type: Sequelize.DATE
      },
      holiday: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('timeInformations');
  }
};