'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Membership extends Model {
    static associate(models) {
      this.hasMany(models.Payments,{
        foreignKey:"id_membership"
      })
    }
  };
  Membership.init({
    type_membership: DataTypes.STRING,
    price: DataTypes.NUMERIC,
    payment_periods: DataTypes.DATE,
    availability: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Membership',
  });
  return Membership;
};