'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Modelo',
      'marca_id',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Marca',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Modelo',
      'marca_id'
    );
  }
};
