const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [
        ['lastName', 'ASC'],
        ['firstName', 'ASC']
      ],
    });
    //TODO: replace with data we want to show on our home page
    const users = userData.map((project) => project.get({ plain: true }));

    res.render('home', {
      layout: "main",
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;