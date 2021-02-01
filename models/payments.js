'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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