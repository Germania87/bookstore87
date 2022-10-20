'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  stock.init(
    {
      id: {
        type: DataTypes.INTEGER,
      },
      producto: {
        type: DataTypes.STRING,
      },
      descripcion: {
        type: DataTypes.STRING,
      },
      stock_inicial: {
        type: DataTypes.NUMBER,
      },
      entradas: {
        type: DataTypes.NUMBER,
      },
      salidas: {
        type: DataTypes.NUMBER,
      },
      stock_total: {
        type: DataTypes.NUMBER,
      },
    },
  {
    sequelize,
    modelName: 'stock',
  });
  return stock;
};