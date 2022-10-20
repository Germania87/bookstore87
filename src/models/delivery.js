'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class delivery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  delivery.init(
    {
      nro_boleta:{
        type: DataTypes.STRING
      }, 
      name: {
        type: DataTypes.STRING,
      },
      last_name: {
        type: DataTypes.STRING, 
      },
      dni: {
        type: DataTypes.NUMBER, 
      },
      id: {
        type: DataTypes.STRING,
      },
      products: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      metodo_pago: {
        type: DataTypes.STRING,
      },
      monto_pagado: {
        type: DataTypes.NUMBER,
      },
      email: {
        type: DataTypes.STRING,
      },
      tienda_retiro: {
        type: DataTypes.STRING,
      },
      fecha_retiro: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "delivery",
      tableName: "delivery",
  });
  return delivery;
};