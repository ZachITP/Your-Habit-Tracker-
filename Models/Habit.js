const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Habit extends Model {}
  
Habit.init(
    {

    }
  );

  module.exports = Habit;