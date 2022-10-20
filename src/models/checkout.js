'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class checkout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  checkout.init(
    {
      name: {
        type: DataTypes.STRING,
      },
      last_name: {
        type: DataTypes.STRING,
      },
      dni: {
        type: DataTypes.NUMBER,
      },
      username: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      direccion: {
        type: DataTypes.STRING,
      },
      telephone: {
        type: DataTypes.INTEGER,
      },
      metodo_pago: {
        type: DataTypes.STRING,
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
      precio: {
        type: DataTypes.STRING,
      },
      unidad: {
        type: DataTypes.NUMBER,
      },
      fecha_entrega: {
        type: DataTypes.STRING,
      },
      entrega: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "checkout",
      tableName: "checkout",
    }
  );
  return checkout;
};