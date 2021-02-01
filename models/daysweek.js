'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DaysWeek extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DaysWeek.init({
    dayWeek: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'DaysWeek',
  });
  return DaysWeek;
};