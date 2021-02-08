'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer_lessons extends Model {
    static associate(models) {
      this.belongsTo(models.Customers,{
        foreignKey:"idCustomer"
      });
      this.belongsTo(models.Lessons,{
        foreignKey:"idlesson"
      }) 
    }
  };
  customer_lessons.init({
    idCustomer: DataTypes.INTEGER,
    idlesson: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'customer_lessons',
  });
  return customer_lessons;
};