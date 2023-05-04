const User = require('./User');
const Category = require('./Category');
const Habit = require('./Habit');

Habit.belongsTo(Category);
Category.hasMany(Habit);

module.exports = { 
    User, 
    Category, 
    Habit,
};
