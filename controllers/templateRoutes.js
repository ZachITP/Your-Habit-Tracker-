const router = require('express').Router();
const { User } = require('../Models');
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
    
    const users = userData.map((project) => project.get({ plain: true }));

    res.render('day', {
      layout: "home",
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

  res.render('login', {
    layout: "main",
  });
});

router.get('/habit', (req, res) => {
  
res.render('habit', {
  layout: "home",
  });
});
module.exports = router;