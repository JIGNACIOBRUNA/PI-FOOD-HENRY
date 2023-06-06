const { DataTypes } = require('sequelize');
const { v4: UUIDV4 } = require('uuid');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipes', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false, 
    },
    summary:{
      type: DataTypes.STRING,
      allowNull: false
    },
    healthScore:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stepByStep:{
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
};
