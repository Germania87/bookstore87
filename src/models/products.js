'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  products.init(
    {
      id: {
        type: DataTypes.INTEGER,
      },
      product_id: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      cantidad: {
        type: DataTypes.INTEGER,
      },
      precio: {
        type: DataTypes.NUMBER,
      },
      stock: {
        type: DataTypes.NUMBER,
      }
    },
    {
      sequelize,
      modelName: "products",
      tableName: "products",
    }
  );
  return products;
};