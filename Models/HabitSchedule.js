const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class HabitSchedule extends Model {}

HabitSchedule.init({
  day: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  timeOfDay: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    reference: {
      model: "Users",
      key: "Id",
    },
  },
  habitid: {
    type: DataTypes.INTEGER,
    reference: {
      model: "Users",
      key: "Id",
    },
  },
});

module.exports = HabitSchedule;
