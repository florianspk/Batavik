'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class timeInformation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  timeInformation.init({
    earlyMorningSchedule: DataTypes.DATE,
    lateMorningSchedule: DataTypes.DATE,
    earlyAfternoonSchedule: DataTypes.DATE,
    lateAfternoonSchedule: DataTypes.DATE,
    holiday: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'timeInformation',
  });
  return timeInformation;
};