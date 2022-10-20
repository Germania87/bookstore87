'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class proveedores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  proveedores.init(
    {
      id: { 
        type: DataTypes.INTEGER,
      },
      name_empresa: {
        type: DataTypes.STRING,
      },
      ruc: {
        type: DataTypes.NUMBER,
      },
      email: {
        type: DataTypes.STRING,
      },
      persona_contacto: {
        type: DataTypes.STRING,
      },
      telephone: {
        type: DataTypes.STRING,
      },
      rol: {
        type: DataTypes.STRING,
      },
      descripcion: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "proveedores",
      tableName: "proveedores",
    }
  );
  return proveedores;
};