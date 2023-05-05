const User = require('./User');
const Category = require('./Category');
const Habit = require('./Habit');
const HabitSchedule = require('./HabitSchedule');

Habit.belongsTo(Category);
Category.hasMany(Habit);

HabitSchedule.belongsTo(User);
User.hasMany(HabitSchedule);

HabitSchedule.belongsTo(Habit);
Habit.hasMany(HabitSchedule);

module.exports = { 
    User, 
    Category, 
    Habit,
    HabitSchedule,
};
