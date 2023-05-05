const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class HabitSchedule extends Model {}
  
HabitSchedule.init(
    {

    }
  );

  module.exports = HabitSchedule;