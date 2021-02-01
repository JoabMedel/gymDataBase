'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lessons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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