'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Modelo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Modelo.belongsTo(models.Marca, {foreignKey: "marca_id", as: "marca"});
    }
  };
  Modelo.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Modelo',
  });
  return Modelo;
};