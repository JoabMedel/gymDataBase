'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Instructor extends Model {
    static associate(models) {
     this.hasOne(models.Lessons,{
      foreignKey:"id_instructor"
     })
    }
  };
  Instructor.init({
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    availability: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Instructor',
  });
  return Instructor;
};