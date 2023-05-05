const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Habit extends Model {}
  
Habit.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category_ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references : {
                model: 'Category',
                key: 'id',
            },
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'Habit',
        },
    }
  );

  module.exports = Habit;