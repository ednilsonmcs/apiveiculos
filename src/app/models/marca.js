'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Marca extends Model {
    static associate(models) {
      Marca.hasMany(models.Modelo, {as: "modelo"})
    }
  };
  Marca.init({
    nome: DataTypes.STRING
  }, {
    freezeTableName: true,
    sequelize,
    modelName: 'Marca',
    underscored: true,
    tableName: "marca"
  });
  return Marca;
};