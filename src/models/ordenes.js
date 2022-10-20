'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ordenes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ordenes.init(
    {
      id: {
        type: DataTypes.INTEGER,
      },
      user_id: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      numero_orden: {
        type: DataTypes.STRING,
      },
      fecha_pedido: {
        type: DataTypes.STRING,
      },
      metodo_pago: {
        type: DataTypes.STRING,
      },
      cantidad: {
        type: DataTypes.NUMBER,
      },
      descripcion: {
        type: DataTypes.STRING,
      },
      precio_unidad: {
        type: DataTypes.NUMBER,
      },
    },
    {
      sequelize,
      modelName: "ordenes",
      tableName: "ordenes",
    }
  );
  return ordenes;
};