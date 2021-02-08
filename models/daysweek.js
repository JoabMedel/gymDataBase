'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DaysWeek extends Model {
    static associate(models) {
      this.belongsToMany(models.schedule,{
        through:"schedule_lessons",
        foreignKey:"day_week"
      })
    }
  };
  DaysWeek.init({
    dayWeek: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DaysWeek',
  });
  return DaysWeek;
};