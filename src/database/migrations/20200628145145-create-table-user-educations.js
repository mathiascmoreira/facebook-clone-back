'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_educations', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      type: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      school_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      course_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true
      },
      concentration1: {
        type: Sequelize.STRING,
        allowNull: true
      },
      concentration2: {
        type: Sequelize.STRING,
        allowNull: true
      },
      concentration3: {
        type: Sequelize.STRING,
        allowNull: true
      },
      graduated: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      attendedFor: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      date_start: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      date_end: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      visibility: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('user_educations');
  },
};
