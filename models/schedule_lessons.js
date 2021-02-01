'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class schedule_lessons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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