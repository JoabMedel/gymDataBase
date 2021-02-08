'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class schedule_lessons extends Model {
    static associate(models) {
      this.belongsTo(models.schedule,{
        foreignKey:"id_schedule"
      });
      this.belongsTo(models.Lessons,{
        foreignKey:"id_lesson"
      });
      this.belongsTo(models.DaysWeek,{
        foreignKey:"day_week"
      });
    }
  };
  schedule_lessons.init({
    id_lesson: DataTypes.INTEGER,
    id_schedule: DataTypes.INTEGER,
    day_week: DataTypes.INTEGER,
    availability: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'schedule_lessons',
  });
  return schedule_lessons;
};