'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class schedule extends Model {
    static associate(models) {
      this.belongsToMany(models.Lessons, {
        through:"schedule_lessons",
        foreignKey:"id_schedule"
      })
      this.belongsToMany(models.DaysWeek,{
        through:"schedule_lessons",
        foreignKey:"id_schedule"
      })
    }
  };
  schedule.init({
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'schedule',
  });
  return schedule;
};