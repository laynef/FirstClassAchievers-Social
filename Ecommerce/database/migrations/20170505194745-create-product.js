'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DOUBLE
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      sizes: {
        type: Sequelize.ARRAY
      },
      details: {
        type: Sequelize.TEXT
      },
      images: {
        type: Sequelize.ARRAY
      },
      colors: {
        type: Sequelize.ARRAY
      },
      categories: {
        type: Sequelize.ARRAY
      },
      gender: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.STRING
      },
      quality: {
        type: Sequelize.STRING
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Products');
  }
};