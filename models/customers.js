'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customers extends Model {
    static associate(models) {
      this.hasMany(models.Payments,{
        foreignKey:"id_customer"
      });
      this.belongsToMany(models.Lessons, {
        through:"customer_lessons",
        foreignKey:"idCustomer"
      })
    }
  };
  Customers.init({
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.NUMERIC,
    availability: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Customers',
  });
  return Customers;
};