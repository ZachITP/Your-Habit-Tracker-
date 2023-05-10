const router = require('express').Router();
const { User, Category, Habit } = require('../Models');
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

    res.render('homepage', {
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
 
router.get('/day', async (req, res) => {
  res.render('day', {
    layout:'home',
  });
})

router.get('/category', async (req, res) => {
  try{
    const dbCategoryData = Category.findAll({
      include: [
        {
          model: Habit,
          attributes: ['name','description'],
        },
      ],
    });

    const categories = (await dbCategoryData).map((category) =>
    category.get({ plain: true })
    );
    
    res.render('category', {
      categories,
      layout:'home',
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/category/:id', async (req, res) => {
  try{
    const dbCategoryData = await Category.findByPk(req.params.id,{
      include: [
        {
          model: Habit,
          attributes: ['name','description'],
        },
      ],
    });

    const categories =  dbCategoryData.get({ plain: true});

    res.render('Habit', {
      categories,
      layout:'home',
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;

