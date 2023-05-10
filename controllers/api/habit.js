const router = require('express').Router();
const { Habit } = require('../../Models');

router.post('/habit/:id', async (req, res) => {
    try {
      // Async code goes here
      const habit = await Habit.findById(req.params.id);
      const data = { name: habit.name, description: habit.description };
      res.render('habit', { data });
    } catch (error) {
      // Handle error
      console.error(error);
      res.status(500).send('Internal server error');
    }
  });