'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  employees.init(
    {
      id: {
        type: Datatypes.INTERGER,
      },
      name: {
        type: Datatypes.STRING,
      },
      last_name: {
        type: DataTypes.STRING,
      },
      dni: {
        type: DataTypes.NUMBER,
      },
      fecha_nacimiento: {
        type: DataTypes.STRING,
      },
      genero: {
        type: DataTypes.STRING,
      },
      rol: {
        type: DataTypes.STRING,
      },
      salario_mensual: {
        type: DataTypes.NUMBER,
      },
      fecha_ingreso: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "employees",
      tableName: "employees",
    }
  );
  return employees;
};