'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Modelo extends Model {
    static associate(models) {
      Modelo.belongsTo(models.Marca, {foreignKey: "marcaId", as: "marca"});
    }
  };
  Modelo.init({
    nome: DataTypes.STRING,
    tipo: DataTypes.INTEGER
  }, {
    freezeTableName: true,
    sequelize,
    modelName: 'Modelo',
    underscored: true,
    tableName: "modelo"
  });
  return Modelo;
};