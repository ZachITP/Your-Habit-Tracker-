const User = require('./User');
const Category = require('./Category');
const Habit = require('./Habit');
const HabitSchedule = require('./HabitSchedule');

Habit.belongsTo(Category,{
    foreignKey: 'category_ID',
});

Category.hasMany(Habit,{
    foreignKey: 'category_ID',
});

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
