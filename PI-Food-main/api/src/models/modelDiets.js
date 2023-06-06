const { DataTypes } = require('sequelize');
const { v4: UUIDV4 } = require('uuid');

module.exports = (sequelize) => {
    //defino el modelo
    sequelize.define('Diets', {
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
};