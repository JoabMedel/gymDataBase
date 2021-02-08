'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payments extends Model {
    static associate(models) {
      this.belongsTo(models.Customers,{
        foreignKey:"id_customer"
      });
      this.belongsTo(models.Membership,{
        foreignKey:"id_membership"
      })
    }
  };
  Payments.init({
    id_customer: DataTypes.INTEGER,
    id_membership: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL,
    date_payment: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Payments',
  });
  return Payments;
};