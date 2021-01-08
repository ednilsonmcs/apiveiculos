'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Marca extends Model {
    static associate(models) {
      // define association here
    }
  };
  Marca.init({
    nome: DataTypes.STRING
  }, {
    freezeTableName: true,
    sequelize,
    modelName: 'Marca',
    underscored: false,
    tableName: "marca"
  });
  return Marca;
};