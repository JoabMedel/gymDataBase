'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('schedule_lessons', {
      id_lesson: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references:{
          model:'Lessons',
          key:'id'
        }
      },
      id_schedule: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references:{
          model: 'schedules',
          key:'id'
        }
      },
      day_week: {
        type: Sequelize.INTEGER,
        references:{
          model:'DaysWeeks',
          key:'id'
        }
      },
      availability: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('schedule_lessons');
  }
};