'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_customer: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Customers',
          key: 'id'
        }
      },
      id_membership: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Memberships',
          key: 'id'
        }
      },
      amount: {
        type: Sequelize.DECIMAL
      },
      date_payment: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Payments');
  }
};