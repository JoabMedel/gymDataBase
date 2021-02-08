'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lessons extends Model {
    static associate(models) {
      this.belongsToMany(models.Customers, {
        through:"customer_lessons",
        foreignKey:"idlesson"
      })
      this.belongsTo(models.Instructor,{
        foreignKey:"id_instructor"
      })
      this.belongsToMany(models.schedule, {
        through:"schedule_lessons",
        foreignKey:"id_lesson"
      })
    }
  };
  Lessons.init({
    type_lesson: DataTypes.STRING,
    id_instructor: DataTypes.INTEGER,
    availability: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Lessons',
  });
  return Lessons;
};