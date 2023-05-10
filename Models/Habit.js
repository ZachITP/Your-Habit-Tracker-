const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Habit extends Model {}

Habit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      defaultValue: 0,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",

    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    category_ID: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
      references: {
        model: "Category",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Habit",
  }
);

module.exports = Habit;
